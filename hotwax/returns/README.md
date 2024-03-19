---
description: >-
  Discover how returns are generated Return Header wise, with each return
  containing the list of returned items.
---

# Returns

## Returns feed

The feed will be generated Return Header wise, with each return containing the list of items returned.

Parameters which can be variable for the Returns Financial Feed Feed are

1. orderId - Parameter to fetch Return details for a specific orderId.
2. returnId - Parameter to fetch Return details for a specific returnId.
3. systemMessageTypeId - The System Message Type ID for generating Returns Financial Feed.
4. systemMessageRemoteId - The System Message Remote ID to send Returns Financial Feed.
5. sinceReturnDate - Parameter to fetch Returns after a specific Return Date. This date corresponds to the ReturnHeader.returnDate in HC.
6. sinceReturnCompletedDate - Parameter to fetch Returns which are completed in HC after a specific Date. This date corresponds to the ReturnStatus.completedDatetime for Return Items in HC.
7. sinceEntryDate - Parameter to fetch Returns created after a specific Date in HC. This date corresponds to the ReturnHeader.entryDate in HC.
8. productStoreIds - to set the product store ids to generate brand specific feeds. eg. WSC\_STORE
9. returnChannelEnumId - Identify the Returns being made from different channels like Ecom Returns, In-Store etc.
10. customParamatersMap - This map defines custom conditions, allowing flexibility in defining new conditions. Eg. {"returnReasonId\_op": "empty", "returnReasonId\_not": "Y"}

### Feed Generation

1. **Views used**
   1. FinancialReturnItemsSyncQueue
   2. ReturnItemView
2. In the first entity, find on the FinancialReturnItemsSyncQueue view fetches the eligible records for the feed.
3. The conditions on the FinancialReturnItemsSyncQueue are:
   1. productStoreId - Support for productStoreId was added to generate brand specific feeds.
4. If productStoreId comes from the in-parameter productStoreIds which is a list then the productStoreId field is prepared based on the following cases:
   1. If only one value comes in the productStoreIds list then the productStoreId field will be set from that value in the list.
   2. If nothing is passed in the productStoreIds list or there are more than one value in the list then the productStoreId field will be a default prefix that will be set from the property added in the Moqui conf file. In this case, the default prefix will be 'HOTWAX'.
5. **NOTE:** If the view does not return any records, the Feed file of HotWax will not generate, and logs the message, `"No eligible returns to prepare Returns Financial Feed at ${nowDate}, not generating the HotWax Feed file."`
6. If FinancialReturnItemsSyncQueue has eligible returns to prepare the feed then prepare the Return level details in the service:
   * billTo
   * returnAdjustments
   * customerPartyIdentifications
   * payments
7. Prepared the returnItems list i.e. fetched the returns items through eligible returns:
   * shipTo
   * productIdentifications
   * returnItemAdjustments
8. Prepare the **isShippingChargesSent** field and fetch Return level adjustments with return adjustment type 'RET\_SHIPPING\_ADJ', 'RET\_SALES\_TAX\_ADJ' to create **ReturnAdjustmentHistory** records:
   * **ReturnAdjustmentAndHistory** View is created for the purpose to maintain the Return level Adjustments history which are sent as part of Feed to external systems.
   * The condition on the view is such that it will fetch Return level adjustments which are not sent to external systems.
   * The ReturnAdjustmentHistory record will be created for the Shipping Charges and Shipping Sales Tax.
   * If for a Return some items that are completed later and are eligible to appear in the next feed, then the isShippingChargesSent value will be sent as 'Y'.
   * Based on the value of isShippingChargesSent, the custom transformations can be prepared.
   * This is done so that financials can be done in the right way and order level adjustments are not computed multiple times which may cause discrepancies in the order totals when reconciliations are done.
   * **NOTE:** For now only Shipping Charges and Shipping Sales Tax are considered as the Order level Adjustments for which we are maintaining the history.
9. If FinancialReturnItemsSyncQueue has eligible returns to prepare feed then to prepare values of other fields as per the Chain Drive format, for each return item fetched from the first view, entity find is done on the second view, ReturnItemView.
10. The **Return Level Adjustments list** (shipping charges, shipping sales tax, etc) for the feed is prepared in the service.
11. The **Return Item Level Adjustments list** (return item sales tax, return item discount, etc) for the feed is prepared in the service.
    * **NOTE:** The specific amount for returnAdjustmentTypeIds from the Return Header Level Adjustments list and Return Item Level Adjustments list will be prepared in the Jolt Transform.
12. **To Prepare total amount (TENDER\_AMOUNT)**
    1. Logic used -> **ReturnPrice \* quantity + sum of the Item Level Adjustments**
    2. For TENDER\_AMOUNT, there is the scenario: If the Return has three items and two of them are completed today and eligible for today's feed then in the feed TENDER\_AMOUNT will be the sum(of amounts) of only these two items + shipping charges and shipping sales tax.
    3. Next day if the third item will be completed and eligible for the feed then in the feed TENDER\_AMOUNT will be the sum(of amounts) of only this item + shipping charges and shipping sales tax.
    4. **Note** - This is part of special handling used the ReturnItemAndAdjustment view to prepare the TENDER\_AMOUNT using the formula ReturnPrice \* quantity + sum of the Item Level Adjustments(sum function used on the amounts in the view).
13. For preparing ShipToAddress, PostalAddressView is used with the condition on shipToContactMechId from ReturnItemView.
14. For preparing BillToAddress, first OrderContactMech is used to get contactMechId for the contactMechPurposeTypeId = 'BILLING\_LOCATION'. Then PostalAddressView is used with a condition on contactMechId from OrderContactMech.
15. For **maintaining the history of records** sent as part of the Financial feed, the entity record for **FinancialReturnHistory is created in the service itself.**

## Sample generated for the HotWax Financial Feed JSON

<details>

<summary>Sample JSON</summary>

```json
[
    {
      "returnId": "13031",
      "returnItemSeqId": null,
      "entryDate": null,
      "returnDate": "2022-02-03T10:41:39-05:00",
      "orderSalesChannelEnumId": "POS_SALES_CHANNEL",
      "orderSalesChannel": "POS Channel",
      "returnChannelEnumId" : "ECOM_RTN_CHANNEL",
      "orderId": "29211",
      "orderItemSeqId": null,
      "returnItemAmountTotal": null,
      "statusId": null,
      "completedDatetime": "2022-02-01T10:41:39-05:00",
      "productStoreId": "WSC_STORE",
      "orderName": "WSC#8586",
      "productStoreExternalId": "1",
      "customerPartyId": "37301",
      "billTo": {
        "houseNumberExt": null,
        "address2": null,
        "postalCode": "10005",
        "city": "New York",
        "stateProvinceGeoId": "NY",
        "postalCodeGeoId": null,
        "houseNumber": null,
        "encodedAddressKey": null,
        "contactMechId": "108812",
        "address1": "588 Abia Martin Drive",
        "geoPointId": "26753",
        "postalCodeExt": null,
        "countryGeoId": "USA",
        "countryGeoCode": "US",
        "attnName": null,
        "directions": null,
        "countyGeoId": null,
        "cityGeoId": null,
        "toName": "Petter William",
        "municipalityGeoId": null,
        "stateProvinceGeoCode": "NY"
      },
      "isShippingChargesSent": "N",
      "returnAdjustments": [
        {
          "customerReferenceId": null,
          "correspondingProductId": null,
          "amount": 16.95,
          "includeInShipping": null,
          "returnTypeId": null,
          "exemptAmount": null,
          "productPromoId": null,
          "taxAuthPartyId": null,
          "lastModifiedByUserLogin": null,
          "primaryGeoId": null,
          "lastUpdatedStamp": "2022-03-18T14:18:19-04:00",
          "taxAuthGeoId": null,
          "secondaryGeoId": null,
          "createdByUserLogin": null,
          "orderAdjustmentId": null,
          "description": "restock",
          "returnAdjustmentId": "11735",
          "returnId": "13031",
          "lastModifiedDate": null,
          "sourceReferenceId": null,
          "productPromoRuleId": null,
          "productFeatureId": null,
          "taxAuthorityRateSeqId": null,
          "overrideGlAccountId": null,
          "returnAdjustmentTypeId": "RET_SHIPPING_ADJ",
          "shipGroupSeqId": null,
          "includeInTax": null,
          "createdDate": null,
          "comments": "restock",
          "productPromoActionSeqId": null,
          "orderId": "30129",
          "sourcePercentage": null,
          "returnItemSeqId": "_NA_"
        },
        {
          "customerReferenceId": null,
          "correspondingProductId": null,
          "amount": 26.95,
          "includeInShipping": null,
          "returnTypeId": null,
          "exemptAmount": null,
          "productPromoId": null,
          "taxAuthPartyId": null,
          "lastModifiedByUserLogin": null,
          "primaryGeoId": null,
          "lastUpdatedStamp": "2022-03-18T14:18:19-04:00",
          "taxAuthGeoId": null,
          "secondaryGeoId": null,
          "createdByUserLogin": null,
          "orderAdjustmentId": null,
          "description": "restock",
          "returnAdjustmentId": "11735",
          "returnId": "13031",
          "lastModifiedDate": null,
          "sourceReferenceId": null,
          "productPromoRuleId": null,
          "productFeatureId": null,
          "taxAuthorityRateSeqId": null,
          "overrideGlAccountId": null,
          "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
          "shipGroupSeqId": null,
          "includeInTax": null,
          "createdDate": null,
          "comments": "restock",
          "productPromoActionSeqId": null,
          "orderId": "30129",
          "sourcePercentage": null,
          "returnItemSeqId": "_NA_"
        }
      ],
      "customerPartyIdentifications": [
        {
          "partyId": "37301",
          "idValue": "3327480496199",
          "partyIdentificationTypeId": "SHOPIFY_CUST_ID",
          "lastUpdatedStamp": "2022-01-28T02:36:41-05:00"
        }
      ],
      "tenderAmount": 131.68,
      "payments": [
        {
          "paymentMethodTypeId": "EXT_SHOP_VISA",
          "paymentMethodDescription": "Ext VISA",
          "statusId": "PAYMENT_REFUNDED",
          "paymentMethodCode": "VISA",
          "returnId": "13031",
          "amount": 131.68,
          "orderId": "29211",
          "createdDate": "2022-05-31T03:48:18-04:00"
        }
      ],
      "returnItems": [
        {
          "returnId": "13031",
          "returnItemSeqId": "00001",
          "orderId": "29211",
          "orderItemSeqId": "00001",
          "returnItemPrice": 120.95,
          "returnQuantity": 1,
          "returnReasonId": "RTN_NOT_WANT",
          "returnReasonNote": "",
          "orderItemRequestedShipMethTypeId": "STANDARD",
          "productId": "20965",
          "orderName": "WSC#8586",
          "facilityExternalId": "1",
          "facilityId": "1",
          "productStoreExternalId": "1",
          "currencyUom": "USD",
          "customerPartyId": "37301",
          "shipToContactMechId": null,
          "shipTo": {
            "houseNumberExt": null,
            "contactMechId": "67597",
            "postalCode": "91911",
            "address2": null,
            "postalCodeGeoId": null,
            "houseNumber": null,
            "encodedAddressKey": null,
            "address1": "830 Bay Boulevard",
            "postalCodeExt": null,
            "countryGeoId": "USA",
            "countryGeoCode": "US",
            "stateProvinceGeoCode": "CA",
            "geoPointId": "17142",
            "attnName": null,
            "directions": null,
            "city": "Chula Vista",
            "countyGeoId": null,
            "cityGeoId": null,
            "municipalityGeoId": null,
            "stateProvinceGeoId": "CA",
            "toName": "cata lion"
          },
          "productIdentifications": [
            {
              "productId": "20965",
              "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "13778606719047",
              "fromDate": "2023-02-22T07:04:36-05:00",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "AGENT",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "fromDate": "2022-04-25T09:00:18-04:00",
              "goodIdentificationTypeId": "SKU",
              "idValue": "AGENT",
              "thruDate": null
            },
            {
              "productId": "20965",
              "idValue": "824386706307",
              "lastUpdatedStamp": "2022-03-16T03:00:32-04:00",
              "goodIdentificationTypeId": "UPCA",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "thruDate": null
            }
          ],
          "returnItemAdjustments": [
            {
              "customerReferenceId": null,
              "correspondingProductId": null,
              "orderId": null,
              "includeInShipping": null,
              "comments": "Return Sales Tax",
              "exemptAmount": null,
              "productPromoId": null,
              "taxAuthPartyId": null,
              "lastModifiedByUserLogin": null,
              "lastUpdatedStamp": "2022-02-01T10:41:39-05:00",
              "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
              "description": "Return Sales Tax",
              "returnAdjustmentId": "11580",
              "primaryGeoId": null,
              "taxAuthGeoId": null,
              "secondaryGeoId": null,
              "createdByUserLogin": null,
              "orderAdjustmentId": null,
              "returnItemSeqId": "00001",
              "lastModifiedDate": null,
              "sourceReferenceId": null,
              "productPromoRuleId": null,
              "productFeatureId": null,
              "taxAuthorityRateSeqId": null,
              "returnId": "13031",
              "overrideGlAccountId": null,
              "shipGroupSeqId": null,
              "includeInTax": null,
              "amount": 10.73,
              "createdDate": null,
              "productPromoActionSeqId": null,
              "sourcePercentage": null,
              "returnTypeId": "RTN_REFUND"
            }
          ]
        },
        {
          "returnId": "13031",
          "returnItemSeqId": "00002",
          "orderId": "29211",
          "orderItemSeqId": "00002",
          "returnItemPrice": 120.95,
          "returnQuantity": 1,
          "returnReasonId": "OTHER",
          "returnReasonNote": "Did not meet my requirements",
          "orderItemRequestedShipMethTypeId": "STANDARD",
          "productId": "20965",
          "orderName": "WSC#8586",
          "facilityExternalId": "1",
          "facilityId": "1",
          "productStoreExternalId": "1",
          "currencyUom": "USD",
          "customerPartyId": "37301",
          "shipToContactMechId": null,
          "shipTo": {
            "houseNumberExt": null,
            "contactMechId": "67597",
            "postalCode": "91911",
            "address2": null,
            "postalCodeGeoId": null,
            "houseNumber": null,
            "encodedAddressKey": null,
            "address1": "830 Bay Boulevard",
            "postalCodeExt": null,
            "countryGeoId": "USA",
            "countryGeoCode": "US",
            "stateProvinceGeoCode": "CA",
            "geoPointId": "17142",
            "attnName": null,
            "directions": null,
            "city": "Chula Vista",
            "countyGeoId": null,
            "cityGeoId": null,
            "municipalityGeoId": null,
            "stateProvinceGeoId": "CA",
            "toName": "cata lion"
          },
          "productIdentifications": [
            {
              "productId": "20965",
              "goodIdentificationTypeId": "SHOPIFY_PROD_ID",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "13778606719047",
              "fromDate": "2023-02-22T07:04:36-05:00",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "idValue": "AGENT",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "goodIdentificationTypeId": "SHOPIFY_PROD_SKU",
              "thruDate": null
            },
            {
              "productId": "20965",
              "lastUpdatedStamp": "2023-03-14T13:13:32-04:00",
              "fromDate": "2022-04-25T09:00:18-04:00",
              "goodIdentificationTypeId": "SKU",
              "idValue": "AGENT",
              "thruDate": null
            },
            {
              "productId": "20965",
              "idValue": "824386706307",
              "lastUpdatedStamp": "2022-03-16T03:00:32-04:00",
              "goodIdentificationTypeId": "UPCA",
              "fromDate": "2020-06-11T13:13:16-04:00",
              "thruDate": null
            }
          ],
          "returnItemAdjustments": [
            {
              "customerReferenceId": null,
              "correspondingProductId": null,
              "orderId": null,
              "includeInShipping": null,
              "comments": "Return Sales Tax",
              "exemptAmount": null,
              "productPromoId": null,
              "taxAuthPartyId": null,
              "lastModifiedByUserLogin": null,
              "lastUpdatedStamp": "2022-02-01T10:41:39-05:00",
              "returnAdjustmentTypeId": "RET_SALES_TAX_ADJ",
              "description": "Return Sales Tax",
              "returnAdjustmentId": "11580",
              "primaryGeoId": null,
              "taxAuthGeoId": null,
              "secondaryGeoId": null,
              "createdByUserLogin": null,
              "orderAdjustmentId": null,
              "returnItemSeqId": "00002",
              "lastModifiedDate": null,
              "sourceReferenceId": null,
              "productPromoRuleId": null,
              "productFeatureId": null,
              "taxAuthorityRateSeqId": null,
              "returnId": "13031",
              "overrideGlAccountId": null,
              "shipGroupSeqId": null,
              "includeInTax": null,
              "amount": 10.73,
              "createdDate": null,
              "productPromoActionSeqId": null,
              "sourcePercentage": null,
              "returnTypeId": "RTN_REFUND"
            }
          ]
        }
      ]
    }
  ]
```

</details>

| Attribute                                              | Mapping from HC                                                                                                                                                |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| returnId                                               | ReturnItem.returnId                                                                                                                                            |
| returnItemSeqId                                        | ReturnItem.returnItemSeqId                                                                                                                                     |
| entryDate                                              | ReturnHeader.entryDate                                                                                                                                         |
| returnDate                                             | ReturnItem.returnId -> ReturnHeader.returnDate                                                                                                                 |
| returnChannelEnumId                                    | ReturnHeader.returnChannelEnumId                                                                                                                               |
| orderSalesChannelEnumId                                | OrderHeader.salesChannelEnumId                                                                                                                                 |
| orderSalesChannel                                      | OrderHeader.salesChannelEnumId -> Enumeration.enumCode                                                                                                         |
| orderId                                                | ReturnItem.orderId                                                                                                                                             |
| orderItemSeqId                                         | ReturnItem.orderItemSeqId                                                                                                                                      |
| returnItemAmountTotal                                  | ReturnItem.returnItemPrice                                                                                                                                     |
| statusId                                               | ReturnItem.returnId, ReturnItem.returnItemSeqId -> ReturnStatus.statusId                                                                                       |
| completedDatetime                                      | ReturnItem.returnId, ReturnItem.returnItemSeqId -> ReturnStatus.completedDatetime                                                                              |
| productStoreId                                         | ReturnItem.orderId -> OrderHeader.orderId                                                                                                                      |
| orderName                                              | ReturnItem.orderId -> OrderHeader.orderName                                                                                                                    |
| productStoreExternalId                                 | ReturnItem.orderId -> OrderHeader.productStoreId -> ProductStore.productStoreId                                                                                |
| customerPartyId                                        | ReturnItem.returnId -> ReturnHeader.fromPartyId                                                                                                                |
| billTo                                                 | ReturnItem.orderId -> orderContactMech.contactMechId -> PostalAddress                                                                                          |
| billTo.countryGeoCode                                  | orderContactMech.contactMechId -> PostalAddress.countryGeoId -> Geo.geoId                                                                                      |
| billTo.stateProvinceGeoCode                            | orderContactMech.contactMechId -> PostalAddress.stateGeoId -> Geo.geoId                                                                                        |
| billTo.contactMechId                                   | orderContactMech.contactMechId -> PostalAddress.contactMechId                                                                                                  |
| billTo.toName                                          | orderContactMech.contactMechId -> PostalAddress.toName                                                                                                         |
| billTo.attnName                                        | orderContactMech.contactMechId -> PostalAddress.attnName                                                                                                       |
| billTo.address1                                        | orderContactMech.contactMechId -> PostalAddress.address1                                                                                                       |
| billTo.address2                                        | orderContactMech.contactMechId -> PostalAddress.address2                                                                                                       |
| billTo.houseNumber                                     | orderContactMech.contactMechId -> PostalAddress.houseNumber                                                                                                    |
| billTo.houseNumberExt                                  | orderContactMech.contactMechId -> PostalAddress.houseNumberExt                                                                                                 |
| billTo.city                                            | orderContactMech.contactMechId -> PostalAddress.city                                                                                                           |
| billTo.cityGeoId                                       | orderContactMech.contactMechId -> PostalAddress.cityGeoId                                                                                                      |
| billTo.postalCode                                      | orderContactMech.contactMechId -> PostalAddress.postalCode                                                                                                     |
| billTo.postalCodeExt                                   | orderContactMech.contactMechId -> PostalAddress.postalCodeExt                                                                                                  |
| billTo.countryGeoId                                    | orderContactMech.contactMechId -> PostalAddress.countryGeoId                                                                                                   |
| billTo.stateProvinceGeoId                              | orderContactMech.contactMechId -> PostalAddress.stateProvinceGeoId                                                                                             |
| billTo.countyGeoId                                     | orderContactMech.contactMechId -> PostalAddress.countyGeoId                                                                                                    |
| billTo.municipalityGeoId                               | orderContactMech.contactMechId -> PostalAddress.municipalityGeoId                                                                                              |
| billTo.postalCodeGeoId                                 | orderContactMech.contactMechId -> PostalAddress.postalCodeGeoId                                                                                                |
| billTo.geoPointId                                      | orderContactMech.contactMechId -> PostalAddress.geoPointId                                                                                                     |
| billTo.encodedAddressKey                               | orderContactMech.contactMechId -> PostalAddress.encodedAddressKey                                                                                              |
| isShippingChargesSent                                  | Define the custom variable to identify shipping charges, shipping sales tax, and whether shipping adjustments were sent or not.                                |
| returnAdjustments                                      | List of Return Level Adjustments                                                                                                                               |
| returnAdjustments.returnAdjustmentId                   | ReturnItem.returnId -> ReturnAdjustment.returnAdjustmentId                                                                                                     |
| returnAdjustments.returnId                             | ReturnItem.returnId -> ReturnAdjustment.returnId                                                                                                               |
| returnAdjustments.returnItemSeqId                      | ReturnItem.returnId -> ReturnAdjustment.returnItemSeqId                                                                                                        |
| returnAdjustments.returnAdjustmentTypeId               | ReturnItem.returnId -> ReturnAdjustment.returnAdjustmentTypeId                                                                                                 |
| returnAdjustments.amount                               | ReturnItem.returnId -> ReturnAdjustment.amount                                                                                                                 |
| customerPartyIdentifications                           | List of the partyIdentifications                                                                                                                               |
| customerPartyIdentifications.partyId                   | ReturnItem.returnId -> ReturnHeader.fromPartyId -> PartyIdentification.partyId                                                                                 |
| customerPartyIdentifications.partyIdentificationTypeId | ReturnItem.returnId -> ReturnHeader.fromPartyId -> PartyIdentification.partyIdentificationTypeId                                                               |
| customerPartyIdentifications.idValue                   | ReturnItem.returnId -> ReturnHeader.fromPartyId -> PartyIdentification.idValue                                                                                 |
| customerPartyIdentifications.lastUpdatedStamp          | ReturnItem.returnId -> ReturnHeader.fromPartyId -> PartyIdentification.lastUpdatedStamp                                                                        |
| payments                                               | List of the Payment related                                                                                                                                    |
| payments.paymentMethodCode                             | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodCode        |
| payments.createdDate                                   | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.createdDate                                                       |
| payments.paymentMethodTypeId                           | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodTypeId      |
| payments.paymentMethodDescription                      | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.paymentMethodTypeId -> PaymentMethodType.paymentMethodDescription |
| payments.statusId                                      | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.statusId                                                          |
| payments.amount                                        | ReturnItem.returnId -> ReturnItemResponse.orderPaymentPreferenceId -> OrderPaymentPreference.amount                                                            |
| payments.orderId                                       | ReturnItem.returnId -> OrderPaymentPreference.orderId                                                                                                          |
| tenderAmount                                           | ReturnItem.returnId -> ReturnAdjustment.amount (Return Price \* Quantity + Return Item Adjustments)                                                            |
| returnItems                                            | List of the return items.                                                                                                                                      |
| returnItems.returnId                                   | ReturnItem.returnId                                                                                                                                            |
| returnItems.returnItemSeqId                            | ReturnItem.returnItemSeqId                                                                                                                                     |
| returnItems.orderId                                    | ReturnItem.orderId                                                                                                                                             |
| returnItems.orderItemSeqId                             | ReturnItem.orderItemSeqId                                                                                                                                      |
| returnItems.returnItemPrice                            | ReturnItem.returnItemPrice                                                                                                                                     |
| returnItems.returnQuantity                             | ReturnItem.returnQuantity                                                                                                                                      |
| returnItems.returnReasonId                             | ReturnItem.returnReasonId                                                                                                                                      |
| returnItems.returnReasonNote                           | ReturnItem.reason                                                                                                                                              |
| returnItems.orderItemRequestedShipMethTypeId           | OrderItem.returnReasonId                                                                                                                                       |
| returnItems.productId                                  | ReturnItem.productId                                                                                                                                           |
| returnItems.orderName                                  | ReturnItem.orderId -> OrderHeader.orderName                                                                                                                    |
| returnItems.facilityExternalId                         | ReturnItem.returnId -> ReturnHeader.destinationFacilityId -> Facility.externalId                                                                               |
| returnItems.facilityId                                 | ReturnItem.returnId -> ReturnHeader.destinationFacilityId -> Facility.facilityId                                                                               |
| returnItems.productStoreExternalId                     | ReturnItem.orderId -> OrderHeader.productStoreId -> ProductStore.externalId                                                                                    |
| returnItems.currencyUom                                | ReturnItem.returnId -> ReturnHeader.currencyUomId -> Uom.abbreviation                                                                                          |
| returnItems.customerPartyId                            | ReturnItem.returnId -> ReturnHeader.fromPartyId                                                                                                                |
| returnItems.shipToContactMechId                        | ReturnItem.returnId -> ReturnHeader.originContactMechId                                                                                                        |
| returnItems.shipTo                                     | ReturnItem.orderId -> orderContactMech.contactMechId -> PostalAddress                                                                                          |
| returnItems.billToContactMechId                        | ReturnItem.orderId -> orderContactMech.contactMechId -> PostalAddress.contactMechId                                                                            |
| returnItems.billTo                                     | ReturnItem.orderId -> orderContactMech.contactMechId -> PostalAddress                                                                                          |
