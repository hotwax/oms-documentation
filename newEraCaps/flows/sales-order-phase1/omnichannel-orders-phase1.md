# Omnichannel Orders 

## Custom Order Import

The Custom Order Import in HotWax Commerce is designed to bring Shopify orders into the system while accommodating client-specific requirements.
This flow:
- Handles Cash on Delivery (COD) fee calculations, splitting them into tax and fee components.
- Maps requested delivery dates and times to the correct fields in the `order_item` entity.
- Leverages transformation flows along with a custom import job for processing.
- Ensures all order details are imported accurately in line with client-specific needs



***
## **Step 1: Import Orders Job**

* **Job Name**: Import Orders
* **Enum Id**: `JOB_IMP_ORD`
* **Enum Name**: Import Orders
* **Config Id**: `DNLD_ORDR`

When the job runs, it downloads new order JSON files from Shopify.

***

## **Step 2: Transformation**

Transformation flow picks up the downloaded JSON files from the SFTP path and processes the following attributes from the payload:

### **Attributes in the JSON Payload**

```json
[
  {"name": "代引き手数料", "value": "770円"},
  {"name": "配送日", "value": "2023/10/01"},
  {"name": "配送時間帯", "value": "18:00-20:00"}
]
```


### **1. COD Fee**

* The field **"代引き手数料"** represents the COD Fee.
* The COD Fee is split into:
  * **COD Fee VAT (10%)** → Mapped to `COD_FEE_TAX`
  * **COD Fee (90%)** → Mapped to `COD_FEE`

**Example Calculation** (COD Fee = 770):

* COD Fee Tax (10%): **70**
* COD Fee (90%): **700**

**Order Adjustment Mapping**:

| Order Adjustment Id | Order Adjustment Type Id | Order Id | Amount |
| ------------------- | ------------------------ | -------- | ------ |
| 100094              | COD\_FEE\_TAX            | NEC45433 | 70     |
| 100095              | COD\_FEE                 | NEC45433 | 700    |

### **2. Requested Delivery Date**

* The field **"配送日"** is mapped to the `requestedDeliveryDate` of the `order_item` entity.

### **3. Requested Delivery Time**

* The field **"配送時間帯"** is mapped to the `requestedDeliveryTime` of the `order_item` entity.

***

## **Step 3: Place Transformed JSON Back to SFTP**

* Transformation flows places the transformed JSON file on the dedicated SFTP path

***

## **Step 4: Custom Order Import Job**

* **Job Name**: Custom Order Import
* **Enum Id**: `JOB_CSTM_IMP_ORD`
* **Enum Name**: Custom Order Import
* **Config Id**: `CSTM_ORDR_IMP`
* **Property Resource**: `FTP_CONFIG`

This job calls the **`importJsonListData`** service, which retrieves the transformed JSON from the SFTP path and imports it into HotWax Commerce.

### **Services Called**

1. **`createShopifyOrder`**
   * **Parameters**:
     * `UserLogin`
     * `Locale`
     * `timeZone`
     * `payload`
     * `shopifyConfigId`
2. **`createUpdateOrderAdjustment`**
   * **Parameters**:
     * `orderAdjustmentTypeId`
     * `amount`
     * `orderItemSeqId`
     * `shipGroupSeqId`
3. **`updateAllOrderItems`**
   * **Parameters**:
     * `requestedDeliveryDate`
     * `requestedDeliveryTime`

***
