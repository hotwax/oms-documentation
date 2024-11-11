---
description: >-
  Learn how challenges in inventory sync between HotWax Commerce and Retail Pro
  Prism POS could overcome for accurate inventory management.
---

# Challenges

While developing this integration, several challenges surfaced, necessitating additional logic that is uncommon in typical inventory reset syncs. Here are the challenges and their solutions:

### Unfiledtered inventory file

In a usual setup, ERP systems share a file comprising all active products for inventory synchronization with HotWax Commerce. However, the client's Retail Pro version was able to share a file containing all products ever created in Retail Pro, not just the active ones. This led to an inflated file size, causing prolonged processing times in HotWax Commerce.

To address this, we implemented additional logic to filter the file against products created in HotWax from the eCommerce platform. The refined file now only contains inventory by facility for online-published products, significantly reducing file size from 300MB to 70-80KB. HotWax Commerce reads this new file and updates the inventory records, ensuring they match RetailPro's data accurately.

### Incorrect inventory counts due to partially shipped orders in HotWax Commerce

HotWax Commerce sends orders to Retail Pro for invoicing, but only fully fulfilled orders are pushed. We will discuss in the Order section on why partially fulfilled orders are excluded. Because partially fulfilled orders are excluded, when Retail Pro sends the morning inventory reset file, it does not account for these scenarios.This discrepancy inflates the inventory count in HotWax Commerce, requiring a meticulous solution.

To address this, the HotWax Commerce integration platform identifies partially fulfilled orders, calculates the inventory deductions not communicated to Retail Pro, and generates an inventory variance file. This file is loaded in HotWax Commerce after the main reset inventory file, correcting inventory numbers without compromising accuracy. Timing is critical, ensuring that the variance file is processed after the main reset inventory file to avoid inaccuracies.

#### Example showing intricacies of the "Partially Shipped Orders"

1.  Inventory snapshot in Retail Pro Prism POS and HotWax Commerce at 8:00 AM, showing initial counts for SKUs A, B, and C in New York and Nashville.

    **Inventory snapshot at Retail Pro:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |

    **Inventory snapshot at HotWax Commerce:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |
2.  Customer Order imported in HotWax Commerce from eCommerce at 8:30 AM. Representation of the customer order captured in HotWax Commerce at 8:30 AM, specifying quantities for SKUs A, B, and C.

    **Customer Order:**

    | SKU | Quantity |
    | --- | -------- |
    | A   | 2        |
    | B   | 2        |
    | C   | 2        |
3.  Order is fulfilled for SKU A and B in Hotwax Commerce from NY at 9:00 AM. Inventory snapshot after order fulfillment in Retail Pro and HotWax Commerce:

    **Inventory snapshot at Retail Pro:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |

    **Inventorty snapshot at HotWax Commerce:**

    Updated inventory snapshot in HotWax Commerce after the fulfillment of the customer order, reflecting adjusted counts for SKUs A, B, and C.

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 8        | 10        |
    | B            | 8        | 10        |
    | C            | 0        | 0         |
4.  Retail Pro is unaware of the partial fulfillment in HC, sends an Inventory Reset file the next morning at 7:00 AM. The file includes counts of 10 for SKU A and SKU B across both New York and Nashville, not accounting for the partial fulfillment. This table represents the inventory file including new inventory for SKU C at each location.

    **Inventory Reset file from Retail Pro:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 5        | 5         |
5.  When this file is read by HotWax Commerce, inventory counts of SKU A and B and C are reset. Reset for SKU C is correct; however, SKU of A & B to 10 at NY is incorrect. Ideally SKU of A and B at NY should be 8.

    **Inventory snapshot at HotWax Commerce:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 5        | 5         |
6.  Now as per the discussed solution, Inventory variance file is generated by HotWax Commerce integration platform, this table represents the inventory variance file:

    **Inventory Variance file from HotWax Commerce:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | -2       | 0         |
    | B            | -2       | 0         |
    | C            | 0        | 0         |
7.  Finalized and accurate inventory counts in HotWax Commerce after processing both the main reset inventory file and the inventory variance file.

    **Inventory snapshot at HotWax Commerce:**

    | SKU/Location | New York | Nashville |
    | ------------ | -------- | --------- |
    | A            | 8        | 10        |
    | B            | 8        | 10        |
    | C            | 5        | 5         |

This detailed example provides a step-by-step explanation of the inventory synchronization process and the corrective measures taken to ensure accuracy.
