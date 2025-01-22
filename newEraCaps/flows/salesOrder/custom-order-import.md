# Custom Order Import

The custom order import in HotWax Commerce is designed to integrate Shopify orders into the system based on each client’s specific requirements. This flow involves transforming the order JSON using Apache NiFi and making client-specific adjustments for seamless import into HotWax Commerce.

---

## **Step 1: Import Orders Job**
- **Job Name**: Import Orders  
- **Enum Id**: `JOB_IMP_ORD`  
- **Enum Name**: Import Orders  
- **Config Id**: `DNLD_ORDR`  

When the job runs, it downloads new order JSON files from Shopify.  
- **SFTP Path**: `./home/newera-uat-sftp/sync_contents/datamanager/imported/DNLD_ORDR`

---

## **Step 2: NiFi Transformation**
NiFi picks up the downloaded JSON files from the SFTP path and processes the following attributes from the payload:

### **Attributes in the JSON Payload**
```json
[
  {"name": "代引き手数料", "value": "770円"},
  {"name": "配送日", "value": "2023/10/01"},
  {"name": "配送時間帯", "value": "18:00-20:00"}
]
```

### **1. COD Fee**
- The field **"代引き手数料"** represents the COD Fee.
- The COD Fee is split into:
  - **COD Fee VAT (10%)** → Mapped to `COD_FEE_TAX`
  - **COD Fee (90%)** → Mapped to `COD_FEE`

**Example Calculation** (COD Fee = 770):  
- COD Fee Tax (10%): **70**  
- COD Fee (90%): **700**

**Order Adjustment Mapping**:
| Order Adjustment Id | Order Adjustment Type Id | Order Id  | Amount |
|----------------------|--------------------------|-----------|--------|
| 100094              | COD_FEE_TAX             | NEC45433  | 70     |
| 100095              | COD_FEE                 | NEC45433  | 700    |

### **2. Requested Delivery Date**
- The field **"配送日"** is mapped to the `requestedDeliveryDate` of the `order_item` entity.

### **3. Requested Delivery Time**
- The field **"配送時間帯"** is mapped to the `requestedDeliveryTime` of the `order_item` entity.

---

## **Step 3: Place Transformed JSON Back to SFTP**
- NiFi places the transformed JSON file on the SFTP path:  
  **`/home/newera-uat-sftp/hotwax/oms/CustomOrderImport`**

---

## **Step 4: Custom Order Import Job**
- **Job Name**: Custom Order Import  
- **Enum Id**: `JOB_CSTM_IMP_ORD`  
- **Enum Name**: Custom Order Import  
- **Config Id**: `CSTM_ORDR_IMP`  
- **Property Resource**: `FTP_CONFIG`  

This job calls the **`importJsonListData`** service, which retrieves the transformed JSON from the SFTP path and imports it into HotWax Commerce.

### **Services Called**
1. **`createShopifyOrder`**  
   - **Parameters**:  
     - `UserLogin`  
     - `Locale`  
     - `timeZone`  
     - `payload`  
     - `shopifyConfigId`

2. **`createUpdateOrderAdjustment`**  
   - **Parameters**:  
     - `orderAdjustmentTypeId`  
     - `amount`  
     - `orderItemSeqId`  
     - `shipGroupSeqId`

3. **`updateAllOrderItems`**  
   - **Parameters**:  
     - `requestedDeliveryDate`  
     - `requestedDeliveryTime`

---

## **Summary**
The Custom Order Import Flow in HotWax Commerce:

- Handles COD Fee calculations, splitting them into tax and actual fee components.
- Maps requested delivery dates and times to the appropriate fields in the `order_item` entity.
- Uses Apache NiFi for transformation and a custom order import job for processing.
- Ensures accurate and client-specific order details are imported into the system.