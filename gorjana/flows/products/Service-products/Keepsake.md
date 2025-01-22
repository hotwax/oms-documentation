# Keepsake Box 

## Process
A complimentary **Keepsake Box** (SKU: **PKG245**) is included with the purchase of selected high-value products. Although it doesn't appear in the Shopify order, it is added during order processing in **HotWax Commerce OMS**.

### 1. Eligibility Check
Gorjana provides a list of SKUs eligible for the Keepsake Box.

### 2. Order Processing
During the order import process, a Groovy script in the NiFi workflow “Custom Order Import” checks the SKUs of the imported product. If the order contains an eligible SKU, the Keepsake Box is added to the order as a line item with a price of "0.00"

### 3. Shipping and Fulfillment
- **Grouping:**  
  Eligible items and the Keepsake Box are grouped together under the `OrderItemGroup` entity, with the group type set to "brokering group." This ensures both items are fulfilled together, preventing partial allocation or splitting.

- **Fulfillment:**  
  Both the product and the Keepsake Box are picked and shipped from the same facility as a single group.
### 4. Post-Fulfillment
After fulfillment, a completed order feed is sent to NetSuite via NiFi. In the "Fulfilled Order Item Feed NetSuite to HotWax" workflow, if the SKU is "PKG245," JOLT assigns the external ID "PKG2451234567" to the item.

## Eligible SKU for Keepsake Box

<details>
<summary>Click to view eligible products</summary>

| **Product SKU**       | **Product Name**                                   |
|------------------------|---------------------------------------------------|
| 228-104-185-G         | Floating Diamond Flutter Necklace                 |
| 2210-106-185-G        | Floating Diamond Statement Necklace               |
| 228-101-185-G         | Diamond Solitaire 4 mm Necklace                  |
| 244-104-185-G         | Classic Diamond Emerald Necklace                  |
| 244-105-185-G         | Classic Diamond Pear Necklace                     |
| 244-106-185-G         | Elle Diamond Row Necklace                         |
| 223-100-G             | 14k Gold Parker Necklace                          |
| 2212-200-185-G        | Classic Diamond Tennis Bracelet 6 in.            |
| 2212-201-185-G        | Classic Diamond Tennis Bracelet 6.5 in.          |
| 2212-202-185-G        | Classic Diamond Tennis Bracelet 7 in.            |
| 2212-200-185-WG       | Classic Diamond Tennis Bracelet 6 in. (white gold)|
| 2212-201-185-WG       | Classic Diamond Tennis Bracelet 6.5 in. (white gold)|
| 2212-202-185-WG       | Classic Diamond Tennis Bracelet 7 in. (white gold)|
| 227-206-185-G         | Melbourne Diamond Tennis Bracelet 6 in.          |
| 227-205-185-G         | Melbourne Diamond Tennis Bracelet 6.5 in.        |
| 227-204-185-G         | Melbourne Diamond Tennis Bracelet 7 in.          |
| 227-206-185-WG        | Melbourne Diamond Tennis Bracelet 6 in. (white gold)|
| 227-205-185-WG        | Melbourne Diamond Tennis Bracelet 6.5 in. (white gold)|
| 227-204-185-WG        | Melbourne Diamond Tennis Bracelet 7 in. (white gold)|
| 228-202-185-G         | Classic Diamond Row Bracelet                     |
| 2310-202-185-G        | Floating Diamond Stationary Trio Bracelet        |
| 228-011-185-G         | Diamond Solitaire Stud 4mm                       |
| 228-012-185-G         | Diamond Solitaire Studs 4mm                      |
| 2310-3005-185-G       | Classic Diamond Eternity Ring (size 5)           |
| 2310-3006-185-G       | Classic Diamond Eternity Ring (size 6)           |
| 2310-3007-185-G       | Classic Diamond Eternity Ring (size 7)           |
| 2310-3008-185-G       | Classic Diamond Eternity Ring (size 8)           |
| 2310-3009-185-G       | Classic Diamond Eternity Ring (size 9)           |

</details>
All of these items receive the same Keepsake Box (SKU: PKG245).

## Mapping for Keepsake Box in Shopify
```xml
<ShopifyShopTypeMapping 
    mappedKey="id" 
    mappedTypeId="SHOPIFY_OI_ASSOC" 
    mappedValue="LINKED_PRODUCT" 
    shopId="SHOP" />

