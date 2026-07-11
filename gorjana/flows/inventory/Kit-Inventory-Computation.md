# <a name="_jutxa6xlcmdg"></a>**Kit inventory Computation**
HotWax calculates bundle inventory by integrating with Shopify for parent product details and NetSuite for component data and inventory levels. It then updates Shopify with the available bundle inventory.
## <a name="_j0ftm2y1mqd0"></a>**Key Processes in Inventory Management**
### <a name="_soogoxbajth7"></a>**1. Daily Inventory Sync from NetSuite**
NetSuite provides a daily inventory feed that includes details about kits (bundle products). This information is pulled from a saved search query called "customsearch\_export\_inventory\_item," which generates a CSV file listing products and their inventory.
### <a name="_ibak2ws84yns"></a>**2. Inventory Calculation** 
The "Bulk Recent Kit Product Inventory Setup" job sets kit inventory to the lowest stock level of its components at a given location. For example at the Williamsburg store:

- Necklace: Inventory = 7
- Earring: Inventory = 10

Kit ATP = 7. After fulfillment, ATP and QOH for the kit and components are reduced.
### <a name="_shqnydc5lp10"></a>**3. Shopify Inventory Push**
Set the product store setting in Shopify to "N" to enable HotWax Commerce to manage inventory updates to Shopify. The **hard\_sync** service pushes updates, ensuring accurate inventory synchronization between HotWax Commerce and Shopify.




