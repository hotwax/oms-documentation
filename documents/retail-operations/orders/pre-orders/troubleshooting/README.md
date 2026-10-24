# Troubleshoot pre-orders

Identify the affected product, Product Store, Shopify shop, and purchase order. Compare the purchase order's status, promise date, and inventory with the product's pre-order or backorder status.

| Problem | What to check |
| --- | --- |
| A product is missing from the pre-order or backorder catalog | Review purchase order eligibility and catalog membership in [Product Sync Issues](preorder-backorder-product-sync-issues.md). |
| A product exists in OMS but is not linked to the Shopify variant | Follow [Missing Product Linking](missing-product-linking.md) for the affected Shopify shop. |
| The inventory calculation differs between OMS and Shopify | Review the location quantities in [Inaccurate Inventory Computation](inaccurate-inventory-computation.md). |
| The product's pre-order status or promise date is not reflected on Shopify | Follow [Product Sync Issues](preorder-backorder-product-sync-issues.md) and inspect the relevant [Pre-Order Jobs](../pre-order-jobs.md). |
| You need to confirm whether a sales order is recorded as a pre-order | Follow [Audit Pre-Orders](../audit-pre-order.md). |

After correcting the cause, verify the affected product or order in OMS and Shopify. Check the job's run result before repeating it.
