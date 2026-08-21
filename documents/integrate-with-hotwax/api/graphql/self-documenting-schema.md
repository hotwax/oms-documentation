---
description: >-
  How the GraphQL schema reference is generated from the running OMS instead of
  maintained by hand, and why GraphQL is not documented with an OpenAPI spec.
---

# Keeping the reference current

The [schema reference](schema-reference.md) is generated, not written. This page explains the pipeline for anyone maintaining these docs, and why the GraphQL API is documented differently from the REST APIs in this space.

## Why not OpenAPI

The REST components in this space, such as [Fulfillment](../../components/fulfillment/README.md) and [Order Routing](../../components/order-routing/README.md), are documented from OpenAPI specifications that Moqui generates from its own REST resource definitions. GitBook renders those specs natively, so those pages grow whenever a service is added.

That approach does not transfer to GraphQL, for a structural reason rather than a tooling one. A GraphQL API is **one** HTTP endpoint. An OpenAPI description of it can only say:

```yaml
paths:
  /rest/s1/graphql:
    post:
      requestBody:
        content:
          application/json:
            schema:
              properties:
                query: { type: string }
                variables: { type: object }
```

Everything a reader actually needs — which objects exist, which fields each object has, which edges connect them, which keys are filterable — lives inside that opaque `query` string. OpenAPI has no vocabulary for a type graph, so publishing a GraphQL API as an OpenAPI spec produces a single endpoint page and no catalogue at all.

GraphQL solves the same problem its own way, and arguably better: the schema is a first-class, machine-readable artifact that the server publishes itself.

## The self-describing source

Two mechanisms expose the schema. Only one of them is usable here.

### The SDL endpoint (use this)

```bash
curl 'https://<instance>.hotwax.io/rest/s1/graphql/sdl'
```

`GET /rest/s1/graphql/sdl` returns the schema definition language for the schema **that instance is actually running**. It requires no authentication, which makes it usable from a CI job with no secrets. It is the direct analogue of Moqui's `/rest/service.swagger/<root>` endpoint: the server describing itself.

Because the search keys and sort keys are written into each collection root's field description, and the sort keys are real GraphQL enums, the filterable surface rides along in the SDL rather than needing separate upkeep.

### Introspection (do not rely on it)

GraphQL's standard introspection query is enabled, but the cost governor applies to it like any other query. A full introspection query nests deeply through the `ofType` chain and expands across every type and field, which puts it past both the depth limit of 6 and the cost limit of 1000. Expect a GraphQL IDE that loads a schema by introspection to be refused.

{% hint style="info" %}
Use the SDL endpoint to load the schema into tooling. Most GraphQL clients accept an SDL file as a schema source, and unlike introspection it is a single cheap request that no governor rule applies to.
{% endhint %}

## The generation pipeline

```
GET /rest/s1/graphql/sdl        (the running schema, no auth)
        |
        v
src/graphql/generate-schema-reference.mjs
        |
        v
documents/integrate-with-hotwax/api/graphql/schema-reference.md
        |
        v
GitBook Git Sync                (renders the committed Markdown)
```

Regenerate locally against any instance:

```bash
cd src/graphql && npm install && cd ../..
node src/graphql/generate-schema-reference.mjs --instance https://<instance>.hotwax.io
```

Or from a local SDL file, for example one saved from an instance you can reach but CI cannot:

```bash
node src/graphql/generate-schema-reference.mjs --sdl ./schema.graphql --source "uat @ 2026-08-21"
```

The generator reads the SDL, walks the type map, and writes the whole reference page: single-record roots and their arguments, collection roots with their search keys and sort keys, every object with its fields typed and classified as scalar, object, collection, or list, plus the sort enums, custom scalars, and the pagination envelope. Nothing in the reference is transcribed by hand, so a schema addition shows up as a diff rather than as a documentation task.

### Automation

`.github/workflows/graphql-schema-sync.yml` runs the generator on a weekly schedule and on demand. When the regenerated page differs from the committed one, it opens a pull request against the docs branch. The catalogue therefore grows with the schema, and every change still passes through review before it publishes.

Trigger it by hand from the **Actions** tab, optionally pointing it at a different instance:

```
workflow_dispatch
  instance: https://<instance>.hotwax.io
```

{% hint style="info" %}
**Current state.** The committed reference was generated from the schema artifact in the
`moqui-gql` repository, because the endpoint is not yet loaded on a shared instance. The first
successful workflow run against a live instance will replace it, and the probe step above skips
regeneration rather than failing while the endpoint returns 404.
{% endhint %}

{% hint style="warning" %}
**Generate only from a running instance.** The moqui-gql repository also contains a design contract SDL that describes planned surface alongside what is built. Generating from that file would document objects and roots the API does not serve. The workflow reads the SDL endpoint for exactly this reason.
{% endhint %}

## What still needs a human

The generated reference covers structure. Three things it cannot infer, and where they live instead:

| Not in the SDL | Where it is documented |
| -------------- | ---------------------- |
| Which comparators each search key accepts | The filtering table in [query examples](queries.md) |
| Query cost and rate-limit behaviour | [GraphQL API overview](README.md) |
| What an object means to the business | The prose pages in this section |

The comparator gap is the one worth closing upstream. Each search key already declares its accepted comparators in the schema artifact, for example `statusId:eq,in` and `orderDate:gt,gte,lt,lte`, but only the key names reach the SDL description. Adding the comparators to that description would carry them into this page automatically.
