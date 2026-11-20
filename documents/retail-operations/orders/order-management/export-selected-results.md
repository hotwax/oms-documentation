---
description: Download the selected orders, returns, or customers from a list in Order Manager.
---

# Export selected results

{% hint style="info" %}
CSV export is currently available in [Order Manager Dev](https://order-manager-dev.hotwax.io/).
{% endhint %}

Download a comma-separated values (CSV) file when you need to review a set of orders, returns, or customers outside Order Manager.

## Download a CSV

1. Open the list you want to export and apply any search terms or filters you need.
2. Scroll until the records you want appear in the list.
3. Choose `Select` in the list header.
4. Choose individual rows, or use the header checkbox to select all currently loaded rows. If you scroll to load more rows after using the header checkbox, select the new rows as well.
5. Check the selected count at the bottom of the screen.
6. Choose `Export selected CSV`. On a narrow screen, such as a phone, open `More actions` and choose `Export selected CSV`.
7. Open the downloaded file and check that it contains the records you selected. Choose `Done` when you want to clear the selection and leave select mode.

The selection stays in place when the download starts. If you change your search or filters, check the selected count again before downloading.

## What's in the file

| Where you started | CSV contents |
| --- | --- |
| [Find orders](find-sales-orders.md), [Unfillable](unfillable-orders.md), [Brokering queue](brokering-queue.md), [Open](open-orders.md), [In flight](inflight-orders.md), or [Packed](packed-orders.md) | One row per selected order ID. Columns include the order ID, order name, customer, status, sales channel, order date, carrier, shipping method, and estimated delivery. |
| `Find returns` | One row per selected return ID. Columns include the return ID, entry date, linked order ID and name, customer, return type ID, return channel ID, destination facility ID, and status ID. |
| [Find customers](find-customers.md) | One row per selected party ID. Columns include the party ID, name, email address, and phone number. |

Some values may be blank when the list has no data for that field. The order queues may export identifiers for fields such as status or shipping method. For `Find orders`, `Unfillable`, and `Brokering queue`, the estimated delivery column can also contain a promised date or shipping deadline when that is the available date.
