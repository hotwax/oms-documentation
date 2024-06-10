# Manual Data Import

In case of errors during the import of data from Shopify, users may need to re-import the data for effective order management. If the error is resolved within the scheduled job run interval, such as every 15 minutes, the data will be automatically re-imported. However, if the automatic job has already passed, users must manually import the data. To perform manual import/export tasks, users can select the relevant Shopify shop and input the product/order ID on the corresponding page.

The following jobs are available for manual data import:

| Job enumID         | Job Name                         | Description                             |
|------------------- |--------------------------------- |---------------------------------------- |
| SOP_CRT_UPDATE_PRODS | Create or Update Shopify Products | Import products from Shopify by specifying the product ID. |
| SOP_IMPORT_ORDER     | Import Shopify Orders             | Import orders from Shopify by specifying the order ID. |
| SOP_CANCL_ODR_ITMS   | Cancel Shopify Order Items        | Import cancelled order items from Shopify by providing the Shopify order ID. |
| SOP_COM_ORD_IMPORT   | Sync Shopify Fulfilled Orders     | Import orders marked as fulfilled on Shopify, ensuring completion in HotWax Commerce. |
| SOP_IMPORT_RETURNS   | Import Shopify Returns           | Import returned orders from Shopify to HotWax Commerce for accurate order management. |

These manual import options provide users with flexibility and control to manage Shopify data effectively.
