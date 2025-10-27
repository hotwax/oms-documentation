# Omnichannel Orders

This section explains how **New Era Caps** manages sales orders within **HotWax Commerce** to ensure smooth, real-time order flow between Shopify and the OMS. It covers real-time order imports via webhooks and Amazon SQS, order validation through HOLD and APPROVED tagging, and customizations such as payment method mapping, handling of customer notes, and digital item processing.

Together, these processes provide a reliable, automated foundation for omnichannel fulfillment — ensuring every customer order moves swiftly and accurately from Shopify into HotWax Commerce for processing.


## Sales Order Import via Webhook and SQS

>Phase 2

To achieve **real-time order visibility**, HotWax Commerce has implemented  Shopify’s webhook integration with **Amazon SQS**, which provides the capability to receive and process orders the moment they are placed in Shopify. This ensures that orders appear instantly in the OMS with complete and accurate details, allowing fulfillment operations to begin without delay.

### How the Process Works

#### **1\. Webhook Subscription**

HotWax Commerce subscribes to the **Shopify order/create webhook** via **Amazon SQS**. Each time a new order is created in Shopify, the order data is immediately transmitted to SQS, ensuring instant and secure capture.

#### **2\. Sending Orders to SQS**

The order information is stored in **Amazon SQS**, which acts as a secure and reliable message queue. This guarantees that no orders are lost, and each is processed in the correct order — even if there’s a temporary delay or interruption in processing.

#### **3\. Processing and Validation**

Once received, each order undergoes validation within HotWax:

* The OMS determines the **order type** (e.g., standard shipping or Buy Online, Pick Up In Store – BOPIS).  
* Orders missing shipping addresses are automatically categorized as **BOPIS**.  
* Each order is checked for completeness and consistency before being imported into the OMS.



## **Customizations by HotWax for New Era Caps**

Before import, HotWax applies specific business customizations tailored to New Era Caps’ operational and financial requirements:

### **Cash on Delivery (COD) Fee Handling**

For financial accuracy, the **COD fee** is split into two components:

* **COD Fee Tax:** 10%

* **Actual COD Fee:** 90%

This ensures precise tax reporting and consistency with financial reconciliation processes.

### **Delivery Scheduling**

Requested **delivery dates and time slots** entered by customers in Shopify are automatically mapped to the corresponding fields in the OMS, enabling efficient scheduling and coordination with logistics.

### **Customer Notes and Attributes**

Customer-specific details such as **membership type, delivery preferences, or special instructions** are imported from Shopify’s order notes and mapped directly into the OMS, ensuring full visibility for fulfillment teams.

**Example Scenario**

A customer in **Tokyo** places an order for home delivery with a **Cash on Delivery (COD)** payment of **¥770** and requests delivery on **October 1st between 6 PM and 8 PM**.

1. The order is instantly captured through the **Shopify webhook** and securely stored in **Amazon SQS**.

2. The COD fee is split into **¥70 (tax)** and **¥700 (actual fee)**.

3. The delivery date, time slot, and customer notes are mapped into the OMS.

4. The order is imported into HotWax Commerce, validated, and marked **ready for fulfillment** — all without any manual intervention.


This real-time order import process ensures accurate, dependable, and immediate synchronization between Shopify and the OMS — forming the backbone of New Era Caps’ omnichannel fulfillment experience.

## Real-Time Order Review and Tag Synchronization

>Phase 2

To balance fraud control and operational speed, **New Era Caps** uses an automated review process to determine whether an order should move straight to fulfillment or be reviewed by the Customer Service (CS) team.

When a customer places an order in Shopify, the system instantly evaluates it against business rules—such as order value, risk level, or specific product types—and tags it as either **HOLD** or **APPROVED**.

* **APPROVED** orders move directly to fulfillment.

* `HOLD` orders are paused for manual review by the Customer Service (CS) team.

These tags sync between Shopify and HotWax Commerce in near real time, ensuring that orders requiring attention are identified instantly while all other orders continue smoothly through the fulfillment process.

For example, if a customer places a high-value order of ¥80,000, it is automatically tagged as **HOLD** and appears in the OMS for review. Once verified by the CS team, the tag is switched to **APPROVED**, and the order proceeds to allocation and shipment in the next cycle.

This process allows New Era Caps to manage risk efficiently without delaying fulfillment for standard orders, maintaining both customer trust and operational agility.



## **Buy Online, Pick Up In Store (BOPIS)**

>Phase 2

New Era Caps provides a seamless **Buy Online, Pick Up In Store (BOPIS)** experience, allowing customers to place orders online and collect them from their preferred store.

On the product page, customers can view nearby stores with stock availability and select their desired pickup location. Once the order is placed, HotWax Commerce automatically identifies it as a pickup order and routes it to the correct store for fulfillment. Store associates receive the order through the **BOPIS App**, ensuring quick and accurate preparation for pickup.

If any information is missing or incorrect, the operations team is notified so that no customer order is overlooked.


## **Payment Capture for BOPIS Orders**

>Phase 2

To prevent potential revenue loss from uncollected store pickup orders, HotWax Commerce introduced a new payment capture workflow for Buy Online, Pick Up In Store (BOPIS) orders.

With this enhancement, payments are now captured as soon as store staff mark an order as “Ready for Pickup.” At that point, Shopify automatically updates the order status to “Paid,” ensuring funds are secured before customer collection.

This feature safeguards revenue, enhances financial accuracy, and ensures that every prepared order is fully accounted for — providing New Era Caps with greater financial control and operational reliability.

## **Ship From Store (SFS)**

>Phase 2

New Era Caps offers **Ship From Store (SFS)** as an additional fulfillment option, giving customers greater flexibility and access to products not available in the warehouse.  
When browsing online, customers can see store-level availability and choose between:

* **Ship from Store:** Receive the item directly from a retail store for an additional shipping fee.

* **Pickup in Store:** Collect the item at no cost.

This functionality is powered by HotWax Commerce’s intelligent inventory system, which reserves stock at the selected store the moment the customer chooses SFS. This ensures the order can be fulfilled reliably while maintaining accurate inventory visibility across all channels.

Although shipping from stores incurs higher logistics costs, offering this option enhances product accessibility and strengthens the brand’s omnichannel promise.


## **Mixed Cart Support**

>Phase 2

HotWax Commerce enables **mixed-cart checkout**, allowing customers to purchase products fulfilled from both the warehouse and stores in a single order.

For example, if one product is available in the warehouse and another is only in a retail store, the customer can complete checkout seamlessly. The warehouse item will ship directly, while the store item can either be picked up or shipped from the selected store.

This unified experience ensures customers never face stock-related barriers and can purchase everything in one smooth transaction, while HotWax automatically manages the most efficient fulfillment route behind the scenes.

This holistic order management flow ensures New Era Caps delivers a fast, flexible, and reliable shopping experience—whether customers choose home delivery, store pickup, or a mix of both—while maintaining operational efficiency and financial control.




<!-- # Omnichannel Orders 

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
-->
