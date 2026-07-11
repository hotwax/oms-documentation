---
description: >-
 Dive into New Era Caps's innovative fulfillment strategies, leveraging warehouse location to fulfill online shipping orders

---

# Fulfillment

While the current WMS that New Era Caps uses will be utilized for fulfillment from the warehouse, the OMS’s native fulfillment and store pickup apps will be used for fulfillment from stores.

## Store Fulfillment Carrier

New Era Caps uses Sagawa as its store fulfillment carrier. The OMS integrates with Sagawa through API-based integration, where the OMS sends shipment details via an API call and receives shipping labels in return. This direct integration streamlines the process and makes fulfillment faster and more efficient.

## **Partial and Collateral Rejection Management**

### **Partial Rejection**

Partial rejection in HotWax Commerce allows store teams to reject only specific items from an order — for example, those that are **out of stock** or **damaged** — while continuing to fulfill the remaining items.  
 This ensures smooth operations by preventing unnecessary cancellations and allowing customers to still receive part of their order on time.

### **Collateral Rejection**

Collateral rejection helps maintain consistency across multiple pending orders.  
If a particular product is rejected in one order because it’s unavailable, HotWax automatically rejects that same product from all other open orders.

This proactive approach speeds up reallocation to other stores or warehouses, minimizes fulfillment delays, and ensures accurate inventory visibility across all channels.
[Learn more](https://docs.hotwax.co/documents/store-operations/orders/fulfillment/rejection#partial-rejection)


### **Partial Cancellations**

A **partial cancellation** occurs when either a customer or the Customer Service Representative (CSR) cancels certain items from an order instead of the entire order.  
Canceled items are immediately removed from the fulfillment process, while the remaining items continue toward shipment — ensuring flexibility for both customers and operations teams without disrupting the entire order.


<!-- # Fulfillment

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
-->
