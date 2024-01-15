# Customer Deposit Feed HotWax to NetSuite

This integration flow is responsible to send the Customer Deposit Feed from OMS to NetSuite. This feed contains the information about order, its total amount and the payment method.

The data for the feed should be fetched incrementally i.e. an order once sent to NetSuite should not be sent in the subsequent feeds.

This feed is not applicable for Cash Sale i.e. orders with shipment method type id as POS_COMPLETED as they are already completed in stores. This feed will be sent to NetSuite for Online and Send Sale type orders.

## Technical Implementation

This feed is generated in the integration layer using Apache NiFi. 

In NiFi, the required order data is fetched by connecting to the OMS transactional database, and this data is prepared in the format required by NetSuite.

To ensure that same orders are not sent nultiple times in the feed, the fromDate column of OrderIdentification for the type NETSUITE_ORDER_ID is used to fetch the orders incrementally in NiFi. The generated feed file is put on SFTP.

<details>
  <summary>SQL to fetch customer data from OMS</summary>

``` SQL
select
  distinct oi.id_value as order_id,
  oh.grand_total as total_amount,
  oi.from_date,
  IFNULL(
    itm.mapping_value,
    (
      select
        mapping_value
      from
        integration_type_mapping
      where
        mapping_key = 'DEFAULT'
    )
  ) as payment_method,
  SUBSTRING_INDEX(
    shopify_oi.id_value,
    '-',
    -1
  ) as shopify_order_no
from
  order_header oh
  join order_identification oi on oi.order_id = oh.order_id and oi.order_identification_type_id = 'NETSUITE_ORDER_ID' and (oi.thru_date is null or oi.thru_date > now())
  and oh.status_id <> 'ORDER_CANCELLED' and oh.order_type_id = 'SALES_ORDER'
  join order_payment_preference opp on opp.order_id = oi.order_id and opp.status_id <> 'PAYMENT_REFUNDED'
  left join integration_type_mapping itm on itm.mapping_key = opp.payment_method_type_id and itm.integration_type_id = 'NETSUITE_PMT_MTHD'
  join order_item_ship_group oisg on oisg.order_id = oh.order_id and oisg.shipment_method_type_id <> 'POS_COMPLETED' 
  join order_identification shopify_oi on shopify_oi.order_id = oh.order_id and shopify_oi.order_identification_type_id = 'SHOPIFY_ORD_NAME'
```
</details>

### NiFi Flow
The below processors are used to prepare the NiFi Flow

1. **QueryDatabaseTableRecord**
    1. The QueryDatabaseTableRecord processor is used to execute the SQL on HC database and incrementally fetch the data based on a table column. Here it is fromDate column of OrderIdentification table for the order identification type ID as NETSUITE_ORDER_ID.

2. **UpdateAttribute**
    1. Here the file name is prepared for the feed by appending the current time as per the timezone configured in OMS. This helps in identifying the time at which feed is being kept for NetSuite.

3. **PutSFTP**
    1. Two PutSFTP processors are used here: the first for eligible records for NetSuite, the second for logging this feed file for OMS.

### NetSuite Customer Deposit Feed File details

#### FTP locations

Path for NetSuite to consume the Customer Deposit Feed
```text
/home/${sftp-username}/netsuite/salesorder/customerdeposit
```

Path for OMS where the Customer Deposit Feed is kept for logging purpose
```text
/home/${sftp-username}/nifi-feed-logs/netsuite/customerdeposit
```

#### Sample Feed File Name Format
```text
${clientName}_CustomerDepositFeed_2024-01-07-22_22_00_087.json
```

#### Sample Feed File

```json
[ {
  "order_id" : "10567845",
  "total_amount" : "693.00",
  "payment_method" : "8",
  "shopify_order_no" : "361675"
}, {
  "order_id" : "10568645",
  "total_amount" : "290.00",
  "payment_method" : "8",
  "shopify_order_no" : "361676"
}]
```

### Data model mapping

Following fields are prepared in the feed.

| Fields           | Data Type | Description                            | HC Field Mapping                                                                                                        |
|------------------|-----------|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| order_id         | String    | The NetSuite Order ID | OrderIdentification.id_value where order_identification_type_id = 'NETSUITE_ORDER_ID'                                   |
| total_amount     | String    | The total amount of the order          | OrderHeader.grand_total                                                                                                 |
| payment_method   | String    | The payment method for the order       | OrderPaymentPreference.payment_method_id mapped with IntegrationTypeMapping.mapping_value where integration_type_id = 'NETSUITE_PMT_MTHD'                                    |
| shopify_order_no | String    | The shopify order name of the order    | OrderIdentification.id_value where order_identification_type_id = 'SHOPIFY_ORDER_NAME'|
