---
description: Troubleshoot missing or unexpected files in Shopify Solr Search.
---

# Troubleshoot Shopify Solr Search

Shopify Solr Search lists bulk-operation files, including preorder-tag and catalog JSON files that are prepared for Shopify updates. Use it to confirm that the expected file was created and to narrow the result set before investigating the related Shopify job.

## Before you begin

You need the `SHOPIFY_VIEW` permission to open `Shopify Solr Search`. The page searches the Shopify Solr core and filters results by source, operation, and created date.

## Find the expected file

1. Open `Shopify Solr Search` from the Shopify menu.
2. Set a created-date range that includes the expected file-generation time.
3. Use the `Source` filter to select the process that created the file.
4. Use the `Operation` filter to narrow the results to the expected Shopify update.
5. Review the matching file name, operation, source, and timestamp.

## Resolve common issues

### No file is listed

First, remove the filters and expand the date range. If the file is still missing, confirm that the job or bulk operation that creates the preorder-tag or catalog JSON file completed successfully. Correct the job failure before expecting a file to appear in `Shopify Solr Search`.

### The file is older than expected

Compare the file timestamp with the latest job run. HotWax Commerce only regenerates the file when the related bulk operation runs again. Run or schedule the appropriate job, then return to `Shopify Solr Search` and filter by the new timestamp.

### The file content does not match the expected update

Confirm that you selected the correct source and operation. Then review the source data and job configuration that produced the file. Do not manually edit the Solr result; correct the source data or configuration and regenerate the file through the related job.

### You cannot open the page

Ask an administrator to grant the `SHOPIFY_VIEW` permission. `Shopify Solr Search` does not display results without `SHOPIFY_VIEW` access.
