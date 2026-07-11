---
description: >-
  Discover the seamless process of transferring orders shipped from the WMS to
  HotWax, including tracking details and identification methods.
---

# Completed Feed

At the end of each day, orders shipped from the WMS are sent to HotWax with tracking details. HotWax uses the facility ID and order ID to identify which shipgroup of the order has been fulfilled by the WMS.

## CSV Schema

**SFTP Path**

UAT
```
/home/newera-uat-sftp/hotwax/Testing_Hotwax/tracking_info
```
PROD
```
newera_prod_hw/tracking_info
```

| DO#        | 日付       | 個数 | 問い合せNo       | 便名   |
| ---------- | -------- | -- | ------------ | ---- |
| 1000879842 | 20230420 | 1  | 361054809931 | 佐川急便 |
| 1000879889 | 20230420 | 1  | 361054812300 | 佐川急便 |
| 1000880002 | 20230420 | 1  | 361054813895 | 佐川急便 |
| 1000880008 | 20230420 | 1  | 361054809721 | 佐川急便 |

Due to the lanuage of the headers in the CSV, it may be a good idea to consider mapping header indexes for easier auditing.

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

To sync the fulfillment back into the OMS from the warehouse, a job will be used to import the tranformed fulfilled order feed.

**SFTP Path**

```
/home/newera-uat-sftp/hotwax/oms/fulfilled_orders
```

**Job Name**

```
Order Item Fulfillment
```
