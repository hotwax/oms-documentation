---
description: Inspect approved Maarg resources with Resource Finder while keeping content access, downloads, and file changes within authorized boundaries.
---

# Resource Inspection

Use **System → Resource Finder** to inspect a known, approved resource location. The screen uses **elFinder**, which combines directory browsing with file-management controls. It is not a read-only log viewer or a reason to explore unrelated application files.

## Version And Access

This guide is source-verified against the **Maarg v6.4.0** assembly, including **runtime v4.1.0** and **framework v4.2.0**. No live resource location was browsed, file content opened, or file downloaded or changed for this guide.

The runtime registers **Resource Finder** under **System** and opens its **ElFinder** subscreen by default. The route is **system/Resource/ElFinder**. Screen access, command authorization, available resource providers, and storage permissions can differ by deployment. The command transition requires broader authorization than merely viewing the screen, so a visible page does not guarantee that listing or opening a resource will succeed.

{% hint style="warning" %}
Agree the exact root, folder or file, purpose, and permitted actions with the resource owner before opening the finder. The page automatically requests a directory listing when the file manager loads. Root names, filenames, and previews can themselves disclose confidential information. If the configured default root is not approved for inspection, use a narrower purpose-specific screen or ask the owner for a safe route.
{% endhint %}

## Choose The Appropriate Tool

- Use [Log Files](log-files.md) for a bounded runtime-log investigation.
- Use the content links in [Data Manager Imports](data-manager-imports.md) for a known import's file and result evidence.
- Use **Resource Finder** when the owner has identified an exact resource location and the narrower screens do not answer the question.

Do not browse configuration directories, signing keys, credential stores, environment files, database dumps, or unrelated customer data. If the investigation needs a configuration fact, request a redacted value or an owner-prepared excerpt instead of opening the underlying file.

## Understand Resource Roots

**Select Root** changes the file manager's starting location. The reviewed screen supplies the following options; their presence is not permission to inspect their contents.

| Root Option | Interpretation |
| --- | --- |
| Configured content root | Defaults to `dbresource://mantle/content` when the `mantle.content.root` preference is not set |
| Database-resource root | `dbresource://` exposes the database-backed resource hierarchy available to the application |
| Webroot component | `component://webroot` resolves resources in the installed webroot component |
| Runtime files | `file:runtime` represents runtime file resources; it is not unrestricted access to the host filesystem |
| Configured large-content root | Added when `mantle.content.large.root` differs from the ordinary content root |

Resource locations use the application's resource providers. A database-backed location is not an operating-system directory, and a component location is not a public website URL. Do not invent alternate roots or modify request parameters to reach a location that the owner has not approved.

In the reviewed production configuration, `instance_purpose` is **production**. The connector refuses file-changing commands on file and component roots in that mode. Database-resource and content-repository roots can remain writable. Actual access also depends on authorization and provider capabilities. A disabled write button is not proof that reading the selected content is safe.

## Inspect A Known Resource

1. Confirm the environment and the approved root and path before opening **Resource Finder**. Agree whether the task permits metadata only, content viewing, or a download.
2. Select only the approved option and choose **Select Root** when needed. Stay within the agreed folder; do not expand other branches to look for interesting files.
3. Use **Back**, **Forward**, **Home**, or **Up** only within that boundary. **Reload** requests the directory information again; it is not a live stream.
4. Select the expected item and inspect **Info** or the list metadata first. Verify the name and location before opening it.
5. Use **Open** only when viewing that file's contents is authorized. File responses may be displayed inline, while **Download** creates a local copy. Do not open untrusted active content merely to preview it.
6. Stop if the location differs from the agreed scope, the contents are unexpectedly sensitive, or a prompt proposes a change or transfer that was not approved.

The file manager starts in **list** view and does not remember the last directory. Use **View** and sorting controls to change presentation, not to expand the investigation. The screen's source notes that **Quick Look** is unreliable; it should not be the basis for claiming that a file is empty or unreadable.

## Interpret The Result

| Observation | What It Means |
| --- | --- |
| Name and location | Identify the resource being inspected; redact internal paths and business identifiers before sharing |
| Type or MIME information | Describes the provider's reported resource type, not a guarantee that the content is safe to execute or open |
| Size and modified time | Available when the provider supports them. A missing value is not proof of zero bytes or no changes; modification time is not necessarily the business-event time |
| Empty directory or absent file | Could reflect the selected root, provider, runtime node, missing content, or access failure. Do not create a replacement as a diagnostic shortcut |
| Writable or locked appearance | Reflects connector/provider metadata and production restrictions; it does not replace owner approval |

The connector disables search, archive/extract, duplicate/paste, resizing, and network-mount commands in this baseline. Do not promise those workflows because a generic elFinder manual describes them.

## Separate Reading From Changes

The toolbar includes controls to create folders/files, upload, delete, rename, and edit when supported. These act on real resources. Edit/save writes content; upload can write to an existing filename; deleting a directory can recursively remove its children. Do not assume a recycle bin, undo operation, automatic backup, or safe overwrite protection.

The source marks the shared command transition `read-only` to accommodate some requests arriving as GET requests. That label does **not** make every file-manager operation read-only: the service dispatches both browse and mutation commands. Opening the finder also reads directory/provider information and produces command logs. It should not be treated as an inert page.

For a file change, obtain explicit owner approval for the exact target and operation, confirm backup or recovery arrangements, and use the deployment's normal change process. Do not test write access by creating a file, uploading a sample, renaming an item, or saving unchanged content.

## Download And Share Safely

A download transfers content from the application into the operator's environment. Confirm the file, destination, approved device or storage, and retention expectations before downloading. Do not download a whole folder when a reviewed excerpt will answer the question.

Permission to view or download does not authorize forwarding, public upload, or changing sharing permissions. Before sharing, review a separate copy for credentials, personal information, internal URLs, and confidential business data; redact as needed and use the approved recipient and channel. Do not edit the original resource to prepare redacted evidence.

For a support record, retain the environment, investigation time and timezone, approved resource identifier, relevant metadata, sanitized error, and a minimal approved excerpt. Prefer synthetic content for screenshots. Never publish a full resource-tree screenshot without checking every visible name and path.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Screen opens but the file list is denied | Viewing the screen and running the connector command use different authorization checks. Ask the administrator to review access; do not broaden permissions as a test |
| “Write not allowed for this resource root” | Production restrictions can keep file/component roots browse-only. Use the approved deployment process rather than trying another root |
| “Resource does not support write” | The provider does not support that operation. Do not infer a permissions fix is appropriate |
| Expected resource is missing | Confirm the exact approved root, environment, node, and the process expected to create it. Use the related import or job record instead of searching arbitrary locations |
| Preview is blank or unavailable | Check the reported type and permitted viewing method. Quick Look limitations do not establish that the source file is empty |
| File manager does not load | Check the browser's reported error and whether the instance can load the required elFinder/jQuery assets. Do not weaken browser or network security settings |

## Related Guides

- [Log Files](log-files.md)
- [Data Manager Imports](data-manager-imports.md)
- [Maarg Overview](README.md)
