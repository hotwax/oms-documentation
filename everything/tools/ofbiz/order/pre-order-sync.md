# Pre-orders sync 
HotWax Commerce automates pre-order and back-order management by leveraging purchase orders (POs), aiding in the automatic listing and de-listing of products, which is beneficial for retailers with extensive catalogs. POs provide crucial details about item specifics and upcoming inventory arrivals. Retailers can integrate their ERP systems with HotWax Commerce for automatic PO synchronization or use the Import App to manually import PO CSV files.

To know more about how the pre-order process is automated in HotWax refer to this [user guide](https://docs.hotwax.co/user-guides/orders/pre-orders).

In HotWax, we have two relevant entities:

**Product Category:** Defines different types of product categories (e.g., shop-tops, shop-outerwear, shop-bottoms). The `PREORDER_CAT` category is used to manage pre-order products.

**Product Category Member:** Tracks the members or products in a category. When a new product is added to the `PREORDER_CAT` category, a record is created in this entity.  
The presell catalog synchronization job synchronizes pre-order products to Shopify whenever a product is added to the PREORDER_CAT category. Here's an overview of the process and some key points to understand:

### Downloading Products from Shopify to Hotwax Commerce
- Hotwax Commerce downloads products from the parent Shopify store.
- These downloaded products are initially not associated with any child shops within Hotwax Commerce.

### Associating Products with Child Shops
- A separate job, known as the `Associate products with sub-catalog` job, is responsible for associating these downloaded products with various child shops. This step is crucial for ensuring that the products are associated with the child shops.

### Importing Purchase Orders
- There are instances where purchase orders for these downloaded products are imported into Hotwax Commerce before the products get associated with the child shops.
- This means that the products exist in Hotwax Commerce, but their association with the child shops is pending.

### Adding Products to PREORDER_CAT Category
- Auto Refresh Pre-sell Catalog job automatically manages adding or removing pre-sell products from the HotWax Pre-order/Backorder category.

### Presell Synchronization Job Execution

- The presell synchronization job is triggered to sync these pre-order products back to Shopify. When there is a new product added in the pre-order category then a record will be created in the product category member entity.
- This job successfully synchronizes the products to the parent Shopify store. However, it fails to synchronize these products to the child shops because they have not yet been associated with the child shops in Hotwax Commerce.

### Product Category Member Entity 
- If a product record is created in the Product Category Member entity, the presell synchronization job will not reconsider the product unless there is an update to the record.
- This means that even if the product is later associated with the child shops, the synchronization job won't attempt to sync it again unless a change is made to the Product Category Member record.

## Troubleshooting Steps

1. **Login to Webtools** - Access the HotWax Commerce webtools.
2. **Search for the Product Category Member Entity** - Go to the Entity Engine and search for the `Product Category Member` entity.
3. **Enter the Product ID** - Input the product ID of the pre-order product that failed to sync to the Shopify child shop.
4. **Update the Record** - Click on the view icon next to the record and edit the entry by updating any small detail in the comments field (e.g., adding a full stop).

Updating the record will make the product eligible for the sync job again, ensuring it gets picked up and synchronized with Shopify. By following these steps, we can troubleshoot and resolve issues where pre-order products fail to sync to Shopify due to missing child shop associations.
