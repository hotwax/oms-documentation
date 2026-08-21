#!/usr/bin/env node
/**
 * Generate the GraphQL schema reference page from a live instance's published SDL.
 *
 * The OMS GraphQL endpoint publishes the schema it is actually running at
 * `GET /rest/s1/graphql/sdl`, with no authentication. This script turns that SDL into the
 * Markdown page GitBook renders, so the object/edge catalogue grows on its own as the
 * schema grows.
 *
 * Usage:
 *   node src/graphql/generate-schema-reference.mjs --instance https://dev-maarg.hotwax.io
 *   node src/graphql/generate-schema-reference.mjs --sdl ./schema.graphql
 *   node src/graphql/generate-schema-reference.mjs --sdl ./schema.graphql --out ./page.md
 *
 * Options:
 *   --instance <url>  Base URL of an OMS instance; the script appends /rest/s1/graphql/sdl
 *   --sdl <path>      Read SDL from a local file instead of an instance
 *   --out <path>      Output file (default: the schema reference page in this repo)
 *   --source <label>  Provenance label written into the page header
 *
 * Never point this at the design contract SDL in the moqui-gql repository. That file is a
 * superset that also describes planned surface, so generating from it would document
 * objects and roots the API does not serve.
 */

import { writeFileSync, readFileSync } from 'node:fs';
import { argv, exit } from 'node:process';
import {
  buildSchema,
  GraphQLObjectType,
  GraphQLEnumType,
  GraphQLScalarType,
  isListType,
  isNonNullType,
} from 'graphql';

const DEFAULT_OUT = 'documents/integrate-with-hotwax/api/graphql/schema-reference.md';
const SDL_PATH = '/rest/s1/graphql/sdl';

function parseArgs(args) {
  const out = {};
  for (let i = 0; i < args.length; i += 1) {
    const flag = args[i];
    if (!flag.startsWith('--')) continue;
    out[flag.slice(2)] = args[i + 1];
    i += 1;
  }
  return out;
}

async function loadSdl(opts) {
  if (opts.sdl) {
    return { sdl: readFileSync(opts.sdl, 'utf8'), source: opts.source || opts.sdl };
  }
  if (!opts.instance) {
    console.error('Provide --instance <url> or --sdl <path>. See the header of this file.');
    exit(2);
  }
  const url = `${opts.instance.replace(/\/+$/, '')}${SDL_PATH}`;
  const resp = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!resp.ok) {
    console.error(`GET ${url} returned ${resp.status}. ` +
      'A 404 means the moqui-gql component is not loaded on that instance.');
    exit(1);
  }
  const body = await resp.text();
  // The Moqui REST layer returns the service out-parameter as JSON: { "sdl": "..." }.
  // A future plain-text response is handled by falling through to the raw body.
  let sdl = body;
  try {
    const parsed = JSON.parse(body);
    if (typeof parsed?.sdl === 'string') sdl = parsed.sdl;
  } catch {
    /* raw SDL */
  }
  return { sdl, source: opts.source || url };
}

/** Render a GraphQL type as SDL-ish text, e.g. `[OrderItem!]!`. */
function typeName(type) {
  if (isNonNullType(type)) return `${typeName(type.ofType)}!`;
  if (isListType(type)) return `[${typeName(type.ofType)}]`;
  return type.name;
}

/** Strip wrappers down to the named type. */
function namedType(type) {
  let t = type;
  while (isNonNullType(t) || isListType(t)) t = t.ofType;
  return t;
}

/**
 * The schema builder writes the allowed `query:` keys into each collection root's
 * description: "Filter via `query:` search string. Allowed keys: a, b, c".
 */
function searchKeysFrom(description) {
  const match = /Allowed keys:\s*(.+?)\s*$/s.exec(description || '');
  if (!match) return [];
  return match[1].split(',').map((k) => k.trim()).filter(Boolean);
}

/**
 * A collection root returns a `<Type>Connection` and takes the search arguments the schema
 * builder only adds at root level. Everything else on Query reads a single record.
 */
function isCollectionRoot(field) {
  return namedType(field.type).name.endsWith('Connection')
    && field.args.some((a) => a.name === 'query');
}

function mdEscape(value) {
  return String(value).replace(/\|/g, '\\|');
}

function fieldKind(field, schema) {
  const named = namedType(field.type);
  const rendered = typeName(field.type);
  if (named.name.endsWith('Connection')) {
    const edge = schema.getType(named.name.replace(/Connection$/, 'Edge'));
    const node = edge instanceof GraphQLObjectType ? namedType(edge.getFields().node.type).name : '?';
    return { kind: 'connection', target: node, rendered };
  }
  if (isListType(field.type) || (isNonNullType(field.type) && isListType(field.type.ofType))) {
    return { kind: 'list', target: named.name, rendered };
  }
  if (named instanceof GraphQLObjectType) return { kind: 'object', target: named.name, rendered };
  return { kind: 'scalar', target: named.name, rendered };
}

function buildPage(schema, source, fromEndpoint) {
  const query = schema.getQueryType();
  const roots = Object.values(query.getFields());

  const lines = [];
  const push = (line = '') => lines.push(line);

  push('---');
  push('description: >-');
  push('  Every object, field, edge, search key, and sort key the HotWax Commerce OMS');
  push('  GraphQL API currently serves.');
  push('---');
  push();
  push('# Schema reference');
  push();
  push('<!-- markdownlint-disable MD024 -->');
  push('<!--');
  push('  GENERATED FILE - do not edit by hand.');
  push('  Regenerate with: node src/graphql/generate-schema-reference.mjs --instance <url>');
  push(`  Source: ${source}`);
  push('-->');
  push();
  push(fromEndpoint
    ? `Generated from the SDL published at \`${SDL_PATH}\` by \`${source}\`.`
    : `Generated from the schema definition in \`${source}\`.`);
  push('This page is produced by a script from the schema itself, so it lists what the API serves');
  push('today rather than what was planned. For how to read and page these objects, start with the');
  push('[GraphQL API overview](README.md) and [query examples](queries.md).');
  push();

  // ---- roots -------------------------------------------------------------
  const collections = roots.filter(isCollectionRoot);
  const singles = roots.filter((f) => !isCollectionRoot(f));

  push('## Query roots');
  push();
  push('### Single-record roots');
  push();
  push('| Root | Returns | Arguments |');
  push('| ---- | ------- | --------- |');
  for (const field of singles) {
    const args = field.args.map((a) => `\`${a.name}: ${typeName(a.type)}\``).join(', ') || '—';
    push(`| \`${field.name}\` | [${namedType(field.type).name}](#${anchor(namedType(field.type).name)}) | ${args} |`);
  }
  push();
  push('Where a root accepts both an ID and an `externalId`, pass exactly one of them.');
  push();

  push('### Collection roots');
  push();
  push('Every collection root accepts `first`/`after` for forward paging, `last`/`before` for');
  push('backward paging, a `query:` filter string, and `sortKey` with `reverse`. A page size is');
  push('required and is capped at 100.');
  push();
  for (const field of collections) {
    const node = fieldKind(field, schema).target;
    const keys = searchKeysFrom(field.description);
    const sortArg = field.args.find((a) => a.name === 'sortKey');
    const sortType = sortArg ? namedType(sortArg.type) : null;
    const sortValues = sortType instanceof GraphQLEnumType
      ? sortType.getValues().map((v) => `\`${v.name}\``).join(', ')
      : '—';

    push(`#### \`${field.name}\``);
    push();
    push(`Returns a paged collection of [${node}](#${anchor(node)}).`);
    push();
    push('| | |');
    push('| --- | --- |');
    push(`| Search keys | ${keys.length ? keys.map((k) => `\`${k}\``).join(', ') : '—'} |`);
    push(`| Sort keys | ${sortValues} |`);
    push(`| Sort enum | ${sortType ? `\`${sortType.name}\`` : '—'} |`);
    push();
  }

  // ---- objects -----------------------------------------------------------
  const objectTypes = Object.values(schema.getTypeMap())
    .filter((t) => t instanceof GraphQLObjectType)
    .filter((t) => !t.name.startsWith('__'))
    .filter((t) => t.name !== 'Query')
    .filter((t) => !t.name.endsWith('Connection') && !t.name.endsWith('Edge'))
    .filter((t) => t.name !== 'PageInfo')
    .sort((a, b) => a.name.localeCompare(b.name));

  push('## Objects');
  push();
  push('Scalar fields are plain values. An **object** field returns one related record. A');
  push('**collection** field is a paged connection and needs its own `first:`. A **list** field');
  push('returns a bounded array with no cursors.');
  push();

  for (const type of objectTypes) {
    push(`### ${type.name}`);
    push();
    if (type.description) {
      push(type.description);
      push();
    }
    push('| Field | Type | Kind | Notes |');
    push('| ----- | ---- | ---- | ----- |');
    for (const field of Object.values(type.getFields())) {
      const info = fieldKind(field, schema);
      let kind = 'scalar';
      let notes = field.description ? mdEscape(field.description) : '';
      if (info.kind === 'connection') {
        kind = 'collection';
        notes = notes || `Paged; requires \`first:\`. Nodes are [${info.target}](#${anchor(info.target)}).`;
      } else if (info.kind === 'list') {
        kind = 'list';
        notes = notes || `Bounded list of [${info.target}](#${anchor(info.target)}); optional \`first:\`.`;
      } else if (info.kind === 'object') {
        kind = 'object';
        notes = notes || `One [${info.target}](#${anchor(info.target)}).`;
      }
      const rendered = info.kind === 'connection' ? `${info.target} connection` : info.rendered;
      // An empty trailing cell leaves a double space before the pipe, which markdownlint's
      // table-column-style rule flags; a dash is both lint-clean and easier to scan.
      push(`| \`${field.name}\` | \`${mdEscape(rendered)}\` | ${kind} | ${notes || '—'} |`);
    }
    push();
  }

  // ---- enums + scalars ---------------------------------------------------
  const enums = Object.values(schema.getTypeMap())
    .filter((t) => t instanceof GraphQLEnumType && !t.name.startsWith('__'))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (enums.length) {
    push('## Sort key enums');
    push();
    push('| Enum | Values |');
    push('| ---- | ------ |');
    for (const e of enums) {
      push(`| \`${e.name}\` | ${e.getValues().map((v) => `\`${v.name}\``).join(', ')} |`);
    }
    push();
  }

  const scalars = Object.values(schema.getTypeMap())
    .filter((t) => t instanceof GraphQLScalarType && !t.name.startsWith('__'))
    .filter((t) => !['String', 'Int', 'Float', 'Boolean', 'ID'].includes(t.name))
    .sort((a, b) => a.name.localeCompare(b.name));

  if (scalars.length) {
    push('## Custom scalars');
    push();
    push('| Scalar | Serialized as |');
    push('| ------ | ------------- |');
    for (const s of scalars) {
      push(`| \`${s.name}\` | ${s.description ? mdEscape(s.description) : 'string'} |`);
    }
    push();
  }

  push('## Pagination envelope');
  push();
  push('Every collection returns the same wrapper.');
  push();
  push('```graphql');
  push('<Type>Connection {');
  push('  edges { cursor node { ... } }');
  push('  pageInfo { hasNextPage hasPreviousPage startCursor endCursor }');
  push('}');
  push('```');
  push();

  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

function anchor(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

const opts = parseArgs(argv.slice(2));
const { sdl, source } = await loadSdl(opts);

let schema;
try {
  schema = buildSchema(sdl);
} catch (err) {
  console.error(`Could not parse the SDL from ${source}: ${err.message}`);
  exit(1);
}

const page = buildPage(schema, source, Boolean(opts.instance));
const out = opts.out || DEFAULT_OUT;
writeFileSync(out, page, 'utf8');
console.error(`Wrote ${out} from ${source}`);
