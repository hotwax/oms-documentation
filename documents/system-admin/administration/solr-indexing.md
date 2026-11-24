---
description: Confirm search readiness and coordinate OMS indexing with HotWax Commerce.
---

# Confirm search readiness

Search indexes support product, order, inventory, and other OMS search results. Ask the HotWax Commerce technical team to prepare or repair the search service when a new instance is launched or results are missing.

## Report a search problem

1. Confirm the OMS environment and the application where the problem occurs.
2. Record the search filters and a sample product, order, or inventory identifier that should appear.
3. Confirm that the source record exists and that your user has the required access.
4. Provide the technical team with the identifiers, time and time zone, expected result, and observed result.
5. After the team confirms indexing is complete, repeat the same search and verify the expected records.

A completed indexing job alone does not prove that every expected record is searchable. Check representative records in the application before accepting the result.

Configsets, collections, schemas, and index-service execution are backend administration tasks. The technical procedure is maintained in [Everything: Solr indexing setup](https://github.com/hotwax/oms-documentation/blob/everything-bagel-pub/everything/operations/oms-administration/solr-indexing.md).
