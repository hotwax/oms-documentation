# Service Products

This document contains all the special conditions when and how service products will be added to orders.
##﻿# <a name="_ka6ztba2rcbt"></a>**First Time Customers**
The Gorjana Introduction Flyer is a welcome gift for first-time customers, included with their first order.
## <a name="_chturox2usve"></a>**Process Flow**
### <a name="_rx4oek5ge7zq"></a>**1. Determining Order Type**
- **Store Orders**: Store managers identify first-time buyers and include the flyer with their order.
- **Web Orders**: Shopify identifies first-time customers by checking if their order count is 1. If true, the **shipBooklet** tag is added to the order.

**2. NiFi Processing**
Orders imported from Shopify in JSON format are processed through NiFi. A Groovy script in “Custom Order Import Flow” scans the orders for the **shipBooklet** tag. If the tag is found, the script:

- Creates an **orderAttribute** in the OMS, marking the order with **isShipBooklet = true**.

**3. Integration with NetSuite**
When the order is sent to NetSuite:

- The **shipBooklet** = true, indicates that a flyer should be included.
- The packing slip includes a note: “**Booklet = Yes**”.

## Gift wrapping
Customers can select particular items in their cart to be gift wrapped. This choice is saved in Shopify using line item properties of that order item. Line item properites are saved in HotWax as order item attributes which can then be used to process this automation.

## Keepsake box
A special Keepsake box is included with the purchase of special products of higher value. This is not part of the order in Shopify and will instead need to be added to the order after it is created in HotWax. The products that trigger this automation are not yet shared.

**Here are the special products eligible for Keepsake box**

| Product SKU            | Product Name                                           |
|------------------------|--------------------------------------------------------|
| 228-104-185-G          | Floating Diamond Flutter Necklace                      |
| 2210-106-185-G         | Floating Diamond Statement Necklace                    |
| 228-101-185-G          | Diamond Solitaire 4 mm Necklace                        |
| 244-104-185-G          | Classic Diamond Emerald Necklace                       |
| 244-105-185-G          | Classic Diamond Pear Necklace                          |
| 244-106-185-G          | Elle Diamond Row Necklace                              |
| 223-100-G              | 14k Gold Parker Necklace                               |
| 2212-200-185-G         | Classic Diamond Tennis Bracelet 6 in.                  |
| 2212-201-185-G         | Classic Diamond Tennis Bracelet 6.5 in.                |
| 2212-202-185-G         | Classic Diamond Tennis Bracelet 7 in.                  |
| 2212-200-185-WG        | Classic Diamond Tennis Bracelet 6 in. (white gold)     |
| 2212-201-185-WG        | Classic Diamond Tennis Bracelet 6.5 in. (white gold)   |
| 2212-202-185-WG        | Classic Diamond Tennis Bracelet 7 in. (white gold)     |
| 227-206-185-G          | Melbourne Diamond Tennis Bracelet 6 in.                |
| 227-205-185-G          | Melbourne Diamond Tennis Bracelet 6.5 in.              |
| 227-204-185-G          | Melbourne Diamond Tennis Bracelet 7 in.                |
| 227-206-185-WG         | Melbourne Diamond Tennis Bracelet 6 in. (white gold)   |
| 227-205-185-WG         | Melbourne Diamond Tennis Bracelet 6.5 in. (white gold) |
| 227-204-185-WG         | Melbourne Diamond Tennis Bracelet 7 in. (white gold)   |
| 228-202-185-G          | Classic Diamond Row Bracelet                           |
| 2310-202-185-G         | Floating Diamond Stationary Trio Bracelet              |
| 228-011-185-G          | Diamond Solitaire Stud 4mm                             |
| 228-012-185-G          | Diamond Solitaire Studs 4mm                            |
| 2310-3005-185-G        | Classic Diamond Eternity Ring (size 5)                 |
| 2310-3006-185-G        | Classic Diamond Eternity Ring (size 6)                 |
| 2310-3007-185-G        | Classic Diamond Eternity Ring (size 7)                 |
| 2310-3008-185-G        | Classic Diamond Eternity Ring (size 8)                 |
| 2310-3009-185-G        | Classic Diamond Eternity Ring (size 9)                 |

All of these items receive the same keepsake box - Keepsake box SKU is `PKG245`

**Mapping for the Keepsake box is mandatory**

```
<ShopifyShopTypeMapping mappedKey="id" mappedTypeId="SHOPIFY_OI_ASSOC" mappedValue="LINKED_PRODUCT" shopId="SHOP"/>
```

## Packaging
Packaing used by stores when completing a sale in store is tracked in NetSuite to allow replenishment. There are a total of 15 kinds of packaging and the logic of when certain types of packaging is used has not been shared yet.

[Packaging Logic Spreadsheet](https://docs.google.com/spreadsheets/d/1H7VT5kbkKNLWFBMLp8yihUoY6oCRq7UacTnvr-3T92M/edit#gid=0)
