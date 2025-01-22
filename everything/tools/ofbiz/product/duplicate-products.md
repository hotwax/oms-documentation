# Duplicate Products on View Sales Order Page

## Problem:
Duplicate products may appear on the `View Sales Order` page due to the same variant product ID being associated with two different parent product IDs. This issue causes confusion in the sales order management process.

As it may result in an item being shipped twice because it appears multiple times on the `View Sales Order` page. Additionally, the support team encountered difficulties canceling the item, as it does not exist in the database.

### Error Identification
The merchandising team and support team have identified the issue.

## Cause Analysis

**Product Identifier Change:**  
Recently, the product identifier was transitioned from using the original Product ID to a Barcode-based identifier. This change caused issues when the parent product handles or URL endpoints were updated. Specifically, a new parent product was created, and the existing variants were incorrectly linked to both the old and new parent products.

## Process Explanation:
- For barcode and SKU identifiers, the system prepends the handle name with a "V_" prefix and uses this value as the internal name for the parent product.
- When the parent product's URL endpoint is updated, it no longer matches the internal name stored in the system.
- Consequently, when the updated parent product JSON is processed, the system checks for an existing handle of the same name. If no match is found, a new parent product is created, leading to the duplication issue.

This mismatch between the updated handle and the stored internal name causes the system to treat the updated product as a new entity, resulting in multiple associations for the same variants. As a result, products appear multiple times on the **View Sales Order** page.

### Solution:

#### 1. Identify Duplicate Products:
- Navigate to the `View Sales Order` page and identify the duplicate products.
- Note down the `hcProductId` associated with the variant product showing duplicates.

#### 2. Query Product Associations:
Run the following SQL query to return the multiple parent product associations linked to the same variant product ID:

```sql
SELECT * FROM PRODUCT_ASSOC 
WHERE PRODUCT_ID_TO = '${productId}';
```
From this query, identify the duplicate parent product associations for the same variant product ID.

#### 3. Delete Old Parent Product Associations:
It is recommended to delete the association with the parent product that was created first, as the latest parent product will have the revised name and updated details.
Run a MySQL delete query using the `PRODUCT_ID` and `PRODUCT_ID_TO` values retrieved from the previous step. This ensures that only one parent product association is removed.

```sql
DELETE FROM PRODUCT_ASSOC 
WHERE PRODUCT_ID = 'your_parent_product_id' 
AND PRODUCT_ID_TO = 'your_variant_product_id';
```

#### 4. Verify Changes:
After performing the deletions, check the `View Sales Order` page to ensure that the duplicate products no longer appear.
