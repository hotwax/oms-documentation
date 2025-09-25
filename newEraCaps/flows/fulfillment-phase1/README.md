---
description: >-
 Dive into New Era Caps's innovative fulfillment strategies, leveraging warehouse location to fulfill online shipping orders

---
# Fulfillment

## Completed Feed

At the end of each day, the WMS sends shipment files with tracking details to HotWax via shared SFTP locations. Using the facility ID and order ID, HotWax identifies the specific ship group within the order that has been fulfilled by the WMS.


## CSV Schema

| DO#        | 日付       | 個数 | 問い合せNo       | 便名   |
| ---------- | -------- | -- | ------------ | ---- |
| 1000879842 | 20230420 | 1  | 361054809931 | 佐川急便 |
| 1000879889 | 20230420 | 1  | 361054812300 | 佐川急便 |
| 1000880002 | 20230420 | 1  | 361054813895 | 佐川急便 |
| 1000880008 | 20230420 | 1  | 361054809721 | 佐川急便 |

Due to the language of the headers in the CSV, it may be a good idea to consider mapping header indexes for easier auditing.

1. **DO# (Delivery Order Number):**
   * **Data Type:** Numeric
   * **Example:** 1000879842
2. **日付 (Date):**
   * **Data Type:** Date (YYYYMMDD format)
   * **Example:** 20230420
3. **個数 (Quantity):**
   * **Data Type:** Numeric
   * **Example:** 1
4. **問い合せNo (Tracking Number):**
   * **Data Type:** Numeric or Alphanumeric
   * **Example:** 361054809931
5. **便名 (Delivery Carrier):**
   * **Data Type:** String
   * **Example:** 佐川急便

## Import Job

To sync the fulfillment back into the OMS from the warehouse, a batch job is used to import the transformed fulfilled order feed provided by the WMS system through a shared SFTP location.

**Job Name**

```
Order Item Fulfillment
```
