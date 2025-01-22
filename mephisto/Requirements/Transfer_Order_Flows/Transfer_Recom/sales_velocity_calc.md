# Calculating and Updating the Sales Velocity of Products

## Objective
Mephisto has requested a BI report to help them make intelligent product transfer decisions. This report aims to assist store managers in making data-driven choices by providing actionable insights into product sales velocity.

## Proposed Solution
Develop a new screen/report inspired by the existing ProductSalesVelocity screen and scripts, adopting a more holistic approach that encompasses all products and all facilities. 

## Implementation Details

### 1. Create a New Holistic Screen
Located in `customerServiceScreens.xml`, the existing screen is defined as:

```xml
<screen name="ProductSalesVelocity">
   <section>
       <actions>
           <script location="component://hwmapps/groovyScripts/commerce/inventory/ProductSalesVelocity.groovy"/>
       </actions>
       <widgets>
           <platform-specific>
               <html>
                   <html-template location="component://hwmapps/template/commerce/catalog/ProductSalesVelocity.ftl"/>
               </html>
           </platform-specific>
       </widgets>
   </section>
</screen>
```

This current screen invokes the `ProductSalesVelocity.groovy` script, which calculates the sales velocity of a given product at a specific facility over a designated date range (defaulting to the 30 days prior to the current date).

**New Holistic Functionality**: Analyze sales velocity for all products across all facilities over a specified date range (defaulting to the last 30 days).

### 2. Calculate Product Sales Velocity
The new script will compute how quickly products are selling at each store, providing insights into inventory turnover rates. The following SQL query can be used to calculate product sales velocity:

```sql
SELECT
    oisg.facility_id,
    oi.product_id,
    COUNT(*) / 30 AS sales_velocity
FROM
    Order_Item oi
JOIN
    Order_Item_Ship_Group oisg
    ON oi.order_id = oisg.order_id AND oi.ship_group_seq_id = oisg.ship_group_seq_id
JOIN
    Order_Status os
    ON oi.order_id = os.order_id AND oi.order_item_seq_id = os.order_item_seq_id
WHERE
    os.status_id = 'ITEM_COMPLETED'
    AND os.status_datetime >= NOW() - INTERVAL 30 DAY
GROUP BY
    oisg.facility_id,
    oi.product_id;
```

### 3. Display Data
The new template will format and present the calculated data in an accessible manner for store managers. This will allow store managers to easily identify products with high or low sales velocity across different facilities.