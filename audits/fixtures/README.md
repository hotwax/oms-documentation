# HotWax documentation demo data

`hotwax-manual-demo.sql` creates an isolated documentation store in an existing
local OMS database. It inserts synthetic customers, two sales orders, four
products, three facilities, stock, attributes, lifecycle dates, and matching
allocation history. It does not copy customer orders or integration credentials.

## Reproduce the Order Manager examples

1. Use a local, non-production OMS with the current entity schema and seed data.
2. Confirm that no `HW_DOC_*` records already exist. The fixture uses plain
   inserts and stops on duplicate keys; it must not overwrite another fixture.
3. Apply the SQL to the verified local database using your normal database
   authentication. Never run it against a customer or production database.
4. Use the native OMS `POST /rest/s1/oms/search/index/product` endpoint for each
   of the four `HW_DOC_*` product IDs, with a `productId` payload.
5. Use `POST /rest/s1/oms/search/index/order` with an `orderId` payload for
   `HW_DOC_1001` and `HW_DOC_1002`.
6. Refresh Order Manager reference data and select `HotWax Demo Store`.
7. Open `HW-DEMO-1001`, select its two-unit tee line, and request stock from
   `HotWax Distribution Center`. The Downtown store starts at ATP 0/QOH 1;
   the distribution center starts at ATP 12/QOH 15.
8. Review and save the request in the real UI. Inspect its transfer chip and
   saved `Requested` record. Saving a request does not execute the stock move.
9. Add `giftMessage` with value `Thank you for shopping with HotWax Demo.` and
   description `Print on the packing slip`, then save the staged attribute.

The fixture is not a migration or a validation test. Demo orders are not sent
to Shopify. Do not use the generated order or stock totals as production evidence.

## Capture boundaries

Order Manager screenshots use this store. Company screenshots use the existing
HotWax-owned `hc-sandbox` connection. No Company job was changed or run for the
captures. Lifecycle-date rows are included for future local calendar captures,
but the inspected local and registered test APIs currently return HTTP 404 for
`oms/productStoreProductCalendar`; no calendar screenshot is included.
