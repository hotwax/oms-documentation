# Inventory Synchronization

In the daily operations of Retail Pro, numerous transactions occur, ranging from receiving purchase orders and processing returns to completing physical store sales. 
Each of these transactions directly impacts the inventory numbers in Retail Pro. To address this dynamic environment, we've implemented two approaches to synchronize 
inventory data from Retail Pro to HotWax Commerce.

The first approach involves real-time adjustments for immediate accuracy. Whenever a sale happens in physical stores, 
inventory numbers are dynamically adjusted in HotWax Commerce specifically for the location where the sale occurred. This real-time adjustment not only ensures the accuracy 
of inventory records in HotWax Commerce but also facilitates the precise transfer of inventory information downstream, particularly to eCommerce platforms.

The second approach introduces a daily early morning synchronization process. Scheduled to occur daily, this synchronization process resets inventory numbers 
in HotWax Commerce, aligning them with the current state in Retail Pro. This comprehensive synchronization covers the entire inventory and accommodates transactions such as 
receiving purchase orders, transfer orders, and returns.


The combination of these two approaches is crucial for maintaining consistency. While real-time adjustments handle immediate 
changes in inventory occurring due to in-store sales, the daily synchronization addresses a broader scope, ensuring that inventory numbers in both Retail Pro and HotWax Commerce 
remain in sync. This comprehensive strategy prevents discrepancies and provides a robust solution for managing inventory synchronization effectively

## Sync inventory of in-store sales

When a sale takes place in Retail POS, the smooth integration between HotWax Commerce and Retail Pro Prism POS comes into action. This integration is streamlined through the real-time 
triggering of the "UpdateInventory" API in HotWax Commerce by Retail Pro Prism POS. This swift mechanism promptly reduces the inventory in HotWax Commerce for the specific product and 
location where the sale occurred. This instantaneous adjustment ensures that HotWax Commerce keeps its inventory records accurate and current, providing a fast and precise overview of 
in-store sales. The real-time nature of this adjustment guarantees that HotWax Commerce maintains up-to-the-moment inventory records, delivering a responsive and precise reflection of 
in-store sales.

## Daily reset inventory

To address a wider array of inventory transactions, such as purchase orders, transfers, and returns, this approach employs the "Daily Reset Inventory" method. Executed each morning, 
this scheduled synchronization comprehensively updates the entire inventory in HotWax Commerce. Acting as a corrective measure, it aligns inventory numbers in both Retail Pro Prism POS 
and HotWax Commerce for consistency. 

In a usual setup, ERP systems share a file at frequent time intervals comprising all active products with their inventory numbers on SFTP location and a job in HotWax Commerce reads the 
file and updates inventory in HotWax Commerce.

While developing this integration, several challenges surfaced, necessitating additional logic that is uncommon in typical inventory reset syncs. We will deep dive into the challenges 
and solutions in further sections. 

1. Unfiledtered inventory file

In a usual setup, ERP systems share a file comprising all active products for inventory synchronization with HotWax Commerce. However, the client's Retail Pro version was able to share a file 
containing all products ever created in Retail Pro, not just the active ones. This led to an inflated file size, causing prolonged processing times in HotWax Commerce. 

To address this, we implemented additional logic to filter the file against products created in HotWax from the eCommerce platform. The refined file now only contains inventory by facility 
for online-published products, significantly reducing file size from 300MB to 70-80KB. HotWax Commerce reads this new file and updates the inventory records, ensuring they match RetailPro's 
data accurately. 


2. Incorrect inventory counts due to partially shipped orders in HC


HotWax Commerce sends orders to Retail Pro for invoicing, but only fully fulfilled orders are pushed. We will discuss in the Order section on why partially fulfilled orders are excluded. Because 
partially fulfilled orders are excluded, when Retail Pro sends the morning inventory reset file, it does not account for these scenarios.This discrepancy inflates the inventory count in HotWax Commerce, 
requiring a meticulous solution. 


To address this, the HotWax Commerce integration platform identifies partially fulfilled orders, calculates the inventory deductions not communicated to Retail Pro, and generates an inventory variance file.
This file is loaded in HotWax Commerce after the main reset inventory file, correcting inventory numbers without compromising accuracy. Timing is critical, ensuring that the variance file is processed after
the main reset inventory file to avoid inaccuracies.

Let's delve into the intricacies of the "Partially Shipped Orders" challenge through an example:

- Inventory snapshot in Retail Pro Prism POS and HotWax Commerce at 8:00 AM, showing initial counts for SKUs A, B, and C in New York and Nashville.

    Retail Pro:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |

    HotWax Commerce:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |

- Customer Order imported in HotWax Commerce from eCommerce at 8:30 AM:

    Representation of the customer order captured in HotWax Commerce at 8:30 AM, specifying quantities for SKUs A, B, and C.

    | SKU      | Quantity |
    |----------|----------|
    | A        | 2        |
    | B        | 2        |
    | C        | 2        |

- Order is fulfilled for SKU A and B in Hotwax Commerce from NY at 9:00 AM. Inventory Snapshot after order fulfillment in Retail Pro and HotWax Commerce:

    Retail Pro:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 0        | 0         |

    HotWax Commerce:

    Updated inventory snapshot in HotWax Commerce after the fulfillment of the customer order, reflecting adjusted counts for SKUs A, B, and C.

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 8        | 10        |
    | B            | 8        | 10        |
    | C            | 0        | 0         |

- Retail Pro is unaware of the partial fulfillment in HC, sends an Inventory Reset file the next morning at 7:00 AM. The file includes counts of 10 for SKU A and SKU B across both New York and Nashville, not accounting for the partial fulfillment. This file also represents the new inventory for SKU C at each location.

Inventory Reset File:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 5        | 5         |

    - When this file is read by HotWax Commerce, inventory counts of SKU A and B and C are reset. Reset for SKU C is correct; however, SKU of A & B to 10 at NY is incorrect. Ideally SKU of A and B at NY should be 8.

    HotWax Commerce:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 10       | 10        |
    | B            | 10       | 10        |
    | C            | 5        | 5         |

- Now as per the discussed solution, Inventory variance file is generated by HotWax Commerce integration platform, this table represents the inventory variance file:

    Inventory Variance file:

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | -2       | 0         |
    | B            | -2       | 0         |
    | C            | 0        | 0         |

- Finalized and accurate inventory counts in HotWax Commerce after processing both the main reset inventory file and the inventory variance file.

    HotWax Commerce

    | SKU/Location | New York | Nashville |
    |--------------|----------|-----------|
    | A            | 8        | 10        |
    | B            | 8        | 10        |
    | C            | 5        | 5         |


This detailed example provides a step-by-step explanation of the inventory synchronization process and the corrective measures taken to ensure accuracy.




