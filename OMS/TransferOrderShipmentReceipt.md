## Requirement

Prepare the Shipments Receipt Feed from HotWax.

The HotWax JSON will be shipment-wise, each shipment will contain information about its shipment items and its receipt details.

The generated feed will be in JSON format

1. This feed file will be used to get details about the Shipments Receipt.
2. To generate the feed, in Moqui, a service job has been configured that will run as per the scheduled time, generate the feed, and keep the feed on the SFTP.
3. The below parameters have been configured for the service job
    1. **NOTE:** Added the values of parameters here that have been used to fetch and generate the feed for eligible transfer order shipment receipt feed

       <table>
       <tr>
       <th>

       <div>Parameter Name</div></th>
       <th>

       <div>Description</div></th>
       <th>

       <div>Example Value</div></th>
       </tr>
       <tr>
       <td>shipmentId</td>
       <td>

       <div>To generate the Shipment Receipt Feed for a specific shipment ID</div></td>
       <td>

       <div>

       </div></td>
       </tr>
       <tr>
       <td>

       <div>productStoreIds</div></td>
       <td>

       <div>To generate the Shipment Receipt Feed for a specific brand or multiple brands</div></td>
       <td>

       <div>

       </div></td>
       </tr>
       <tr>
       <td>

       <div>shipmentTypeId</div></td>
       <td>

       <div>To fetch Shipment Receipt details for a specific shipment type ID</div></td>
       <td>

       <div>

       IN_TRANSFER,

       PURCHASE_SHIPMENT

       </div></td>
       </tr>
       <tr>
       <td>

       <div>shipmentStatusId</div></td>
       <td>

       <div>To fetch Shipment Receipt details for a specific shipment status ID</div></td>
       <td>

       <div>

       PURCH_SHIP_RECEIVED,

       <span dir="">PURCH_SHIP_CREATED</span>

       </div></td>
       </tr>
       <tr>
       <td>

       <div>sinceReceivedDate</div></td>
       <td>

       <div>To fetch the Shipment Receipt details received after a specific date</div></td>
       <td>

       <div>

       </div></td>
       </tr>
       <tr>
       <td>

       <div>

       <span dir="">systemMessageTypeId</span>

       </div></td>
       <td>

       <div>

       The System Message Type ID for generating the Shipment Receipt Feed

       \
       **NOTE:** This is the required parameter to generate the feed.

       </div></td>
       <td>

       TransferOrdersReceiptFeed

       **NOTE:**
        1. As of now, the service job has been scheduled to fetch the eligible Transfer Order Receipts to send to NetSuite.
        2. Here is the example value of systemMessageType is taken from the service job of Transfer Order Receipt Feed
       </td>
       </tr>
       <tr>
       <td>

       <span dir="">systemMessageRemoteId</span>
       </td>
       <td>

       <div>

       <span dir="">The System Message Remote ID for generating the</span>

       Shipment Receipt Feed

       \
       **NOTE:** This is the required parameter to generate the feed.

       </div></td>
       <td>

       <div>

       </div>
       <div>RemoteSFTP</div></td>
       </tr>
       </table>


### Feed Generation

1. As per the below scenarios, the service will generate the Transfer Order Receipts Feed
    1. <span dir="">If the shipment has multiple items and all are received before the next feed generation, the feed file will contain the shipment and all its item shipment receipt details</span>.
    2. <span dir="">If a Shipment has 3 items and only 1 is received before the next feed generation, the feed file will still contain the order and all its items, but the 1 item received will have its shipment receipt details, and the other 2 items will contain empty shipment details.</span>
    3. <span dir="">The history records will be created in the ShipmentItemHistory entity for the Shipment Receipts are already included in the feed.</span>
        1. **<span dir="">NOTE:</span>**<span dir=""> If a Shipment Item has multiple receipts, the feed will create records for all receipts but in the feed will include totalReceivedQuantity in shipmentItems list the individual receipt details will also be included in shipmentReceipts inside shipmentItems list.</span>
    4. <span dir="">Eg.</span>
        1. <span dir="">If a Shipment with 4 items, we receive 2 items today then we will include all 4 items with the first 2 items having their receipt details and the last two items with empty receipt details.</span>
        2. <span dir="">Now, we receive only the 3rd item by the next day, we will then include the 3rd item with the receipt details and the 4th item with empty receipt details. Here we will not include the first two items again as we have already sent in the earlier feed.</span>
        3. <span dir="">If we receive the 4th Item now, we will include only 4th item with its received details.</span>
2. **View used**
    1. <span dir="">ShipmentAndItemAndReceipt</span>
       1. <span dir="">In the service, the first entity-find has been done on the **<span dir="">ShipmentAndItemAndReceipt</span>** view to fetch the eligible **Shipment** using the below conditions that have been used in the service
          1. shipmentId: if the shipment ID has passed in the service, then from the view, shipment receipts will be fetched only for that shipment ID
          2. shipmentTypeId: if the shipment type ID has passed in the service, then the shipment receipts will be fetched from the view as per that shipment type ID.
          3. shipmentStatusId: if the shipment status ID has passed in the service, then the shipment receipts will be fetched from the view as per that shipment status ID.
          4. sinceReceivedDate: if the sinceReceivedDate has passed in the service, then the eligible shipment receipts will be fetched from the view after the sinceReceivedDate.
              1. **NOTE:** sinceReceivedDate corresponds to the field datetimeReceived of the ShipmentReceipt entity.
          5. productStoreIds: The service will generate the feed as per the below scenario
              1. If only one value has passed in the parameter productStoreIds, then the feed will be generated as per that product Store ID, which means the generated feed will be for a specific brand.
              2. If nothing has passed in the parameter productStoreIds or if there will be more than one value in the list, then the default prefix 'HOTWAX' will be set from the property added in the MoquiConf file.
          6. **NOTE:** This entity-find will fetch details of shipment level for eligible Shipment Receipt Feed since the select-field includes only the shipment level fields.
       2. <span dir="">The second entity find has been done on the **<span dir="">ShipmentAndItemAndReceipt</span>** view to fetch the eligible **shipment items** using the below conditions that have been used in the service.
           1. shipmentId: to fetch the details of that order ID that is existing in the list of first entity-find.
           2. **NOTE:** This entity-find will fetch the details of shipment items since the select-field includes only the shipment item-level fields.
       3. <span dir="">Third-time entity find has been done on the **<span dir="">ShipmentAndItemAndReceipt</span>** view to fetch the eligible **Shipment Receipts** using the below conditions that have been used in the service. Since the select-field includes the receipt level fields.
           1. **NOTE:**
               1. The conditions on shipmentId and shipmentItemsSeqId are included here to fetch the shipment item receipt for only those shipment IDs and shipment Item Seq IDs
               2. Here, <span dir="">for each shipment item, will fetch the valid Shipment Receipts so that the correct quantity i.e. sum(qtyAccepted) can be evaluated in the next entity-find using these receipt IDs.</span>
               3. **NOTE:** <span dir="">It is important to fetch the valid Shipment Receipts so that the quantity already sent as part of earlier feeds should not be sent again</span>.
       4. <span dir="">Fourth-time entity-find has been done on the **ShipmentAndItemAndReceipt** view to fetch the total quantity, i.e., sum (qtyAccepted), of the eligible shipment receipts.
3. Prepare the attribute list of at shipment level.
4. Prepare the product identification list at shipment item level.

#### Mapping of the fields

<table>
<tr>
<th>

<div>Fields</div></th>
<th>

<div>Type</div></th>
<th>

<div>Description</div></th>
<th>

<div>HC Entity Mapping</div></th>
<th>

</th>
</tr>

<tr>
<td>

<div>shipmentId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is a unique ID assigned to the shipment.</div></td>
<td>

<div>ShipmentReceipt.shipmentId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentTypeId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the type ID of the Shipment</div></td>
<td>

<div>Shipment.shipmentTypeId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>statusId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the status ID of the Shipment</div></td>
<td>

<div>Shipment.statusId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>externalId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the external ID assigned to an order.</div></td>
<td>

<div>Shipment.externalId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentAttributes</div></td>
<td>

<div>list</div></td>
<td>

<div>List of Shipment attributes.</div></td>
<td>

<div></div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentAttributes.attrValue</div></td>
<td>

<div>string</div></td>
<td>

<div>The value of a Shipment attribute</div></td>
<td>

<div>ShipmentAttribute.attrValue</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentAttributes.attrDescription</div></td>
<td>

<div>string</div></td>
<td>

<div>The description of a Shipment attribute</div></td>
<td>

<div>ShipmentAttribute.attrDescription</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentAttributes.shipmentId</div></td>
<td>

<div>string</div></td>
<td>

<div>The shipment id of a Shipment attribute</div></td>
<td>

<div>ShipmentAttribute.shipmentId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentAttributes.attrName</div></td>
<td>

<div>string</div></td>
<td>

<div>The name of a Shipment attribute</div></td>
<td>

<div>ShipmentAttribute.attrName</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentItems</div></td>
<td>

<div>list</div></td>
<td>

<div>The list of Shipment items</div></td>
<td>

<div></div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the product ID of a  shipment Item</div></td>
<td>

<div>ShipmentItem.productId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications</div></td>
<td>

<div>list</div></td>
<td>

<div>This is the list of product identifications</div></td>
<td>

<div></div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications.goodIdentificationTypeId</div></td>
<td>

<div>string</div></td>
<td>

<div>The type of good identification</div></td>
<td>

<div>GoodIdentification.goodIdentificationTypeId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications.fromDate</div></td>
<td>

<div>string</div></td>
<td>

<div>The from date of a good identification</div></td>
<td>

<div>GoodIdentification.fromDate</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications.idValue</div></td>
<td>

<div>string</div></td>
<td>

<div>The external ID of a good identification</div></td>
<td>

<div>GoodIdentification.idValue</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications.thruDate</div></td>
<td>

<div>string</div></td>
<td>

<div>The thru date of a good identification</div></td>
<td>

<div>GoodIdentification.thruDate</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>productIdentifications.quantity</div></td>
<td>

<div>number</div></td>
<td>

<div>This is the quantity of an order Item</div></td>
<td>

<div>shipmentItem.quantity</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentItemSeqId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the Seq ID assigned to the shipment Item</div></td>
<td>

<div>ShipmentReceipt.shipmentItemSeqId</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentReceipts</div></td>
<td>

<div>list</div></td>
<td>

<div>List of shipment receipts of a product in shipment.</div></td>
<td>

<div></div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentReceipts.totalQuantityAccepted</div></td>
<td>

<div>number</div></td>
<td>

<div>This is the total quantity accepted of the shipment receipt</div></td>
<td>

<div>ShipmentReceipt.quantityAccepted</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>shipmentReceipts.receivedDate</div></td>
<td>

<div>date-time</div></td>
<td>

<div>This is the date when the shipment receipt received</div></td>
<td>

<div>ShipmentReceipt.datetimeReceived</div></td>
<td>

</td>
</tr>

<tr>
<td>

<div>receiptId</div></td>
<td>

<div>string</div></td>
<td>

<div>This is the unique ID assigned to the receipt of the shipment Item.</div></td>
<td>

<div>ShipmentReceipt.receiptId</div></td>
<td>

</td>
</tr>



</table>

#### HC generated JSON

```json
[
  {
    "shipmentId": "10604",
    "shipmentTypeId": "IN_TRANSFER",
    "statusId": "PURCH_SHIP_RECEIVED",
    "externalId": "38018270-1",
    "createdDate": "2024-02-17T07:20:19-05:00",
    "shipmentAttributes": [
      {
        "attrValue": "38018270",
        "attrDescription": null,
        "lastUpdatedStamp": "2024-02-17T07:20:19-05:00",
        "shipmentId": "10604",
        "attrName": "EXTERNAL_FULFILLMENT_ID"
      },
      {
        "attrValue": "37989920",
        "attrDescription": null,
        "lastUpdatedStamp": "2024-02-17T07:20:19-05:00",
        "shipmentId": "10604",
        "attrName": "EXTERNAL_ORDER_ID"
      },
      {
        "attrValue": "FO-6ADE7F32",
        "attrDescription": null,
        "lastUpdatedStamp": "2024-02-17T07:20:19-05:00",
        "shipmentId": "10604",
        "attrName": "EXTERNAL_ORDER_NAME"
      }
    ],
    "shipmentItems": [
      {
        "productId": "10243",
        "productIdentifications": [
          {
            "goodIdentificationTypeId": "NETSUITE_PRODUCT_ID",
            "fromDate": "2024-01-08T11:18:14-05:00",
            "idValue": "153173",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-17T01:35:24-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "47478698541340",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SKU",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "UPCA",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-01-08T06:53:13-05:00",
            "thruDate": null
          }
        ],
        "quantity": 1,
        "shipmentId": "10604",
        "shipmentItemSeqId": "00001",
        "shipmentReceipts": [
          {
            "totalQuantityAccepted": 2,
            "_entity": "org.apache.ofbiz.shipment.shipment.ShipmentAndItemAndReceipt",
            "receivedDate": "2024-02-17T07:33:10-05:00",
            "receiptId": "10065"
          },
          {
            "totalQuantityAccepted": 2,
            "_entity": "org.apache.ofbiz.shipment.shipment.ShipmentAndItemAndReceipt",
            "receivedDate": "2024-02-17T07:34:04-05:00",
            "receiptId": "10066"
          }
        ]
      },
      {
        "productId": "10243",
        "productIdentifications": [
          {
            "goodIdentificationTypeId": "NETSUITE_PRODUCT_ID",
            "fromDate": "2024-01-08T11:18:14-05:00",
            "idValue": "153173",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-17T01:35:24-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "47478698541340",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "SKU",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-02-09T06:34:21-05:00",
            "thruDate": null
          },
          {
            "goodIdentificationTypeId": "UPCA",
            "fromDate": "2024-01-08T06:53:13-05:00",
            "idValue": "1110352-7AY-M",
            "productId": "10243",
            "lastUpdatedStamp": "2024-01-08T06:53:13-05:00",
            "thruDate": null
          }
        ],
        "quantity": 1,
        "shipmentId": "10604",
        "shipmentItemSeqId": "00002",
        "shipmentReceipts": [
          {
            "totalQuantityAccepted": 2,
            "_entity": "org.apache.ofbiz.shipment.shipment.ShipmentAndItemAndReceipt",
            "receivedDate": "2024-02-17T07:34:04-05:00",
            "receiptId": "10067"
          }
        ]
      }
    ]
  }
]
```