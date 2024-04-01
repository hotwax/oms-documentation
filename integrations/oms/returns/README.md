---
description: >-
  Explore the structured process of handling returns in OMS, from creating
  return items to managing refunds.
---

# Returns

Returns in the OMS are structured to work as the inverse of a sales order, so every element of a sales order has an effective inverse allowing retailers to accept return details against an order in the way that works best for their business.

Before a return can be created for an order item, the sales order item being returned must be completed, the entire order does not have to be completed for a return to be initiated.

If a sales order is being returned in multiple phases, then the OMS will create multiple returns against that sales order instead of appending to a single return.

Returns in the OMS can be broken down into 3 primary sections, return items, returned inventory and refund to the customer.

## Return Header

The return header contains details about a return that are relevant regardless of the return items like the created date and return channel. The return header intentionally does not store a direct reference to the original sales order ID. This deliberate design choice, allowing a return to encompass items from multiple sales orders if the need arises.

1. **External System Integration:**
   * For returns initiated from an external system, integration remains a critical aspect.
   * It is essential to include the internal ID of the return in the OMS's return external ID for effective tracking and seamless integration across systems.
2. **Return Level Adjustments:**
   * Return header level adjustments help manage overarching adjustments that are not directly tied to specific items.
   * Common use cases include refunding order-level charges such as shipping fees or taxes. Additionally, return level adjustments can be strategically employed to modify the refund tender amount, accommodating scenarios like restocking fees.

| Field Name              | Description                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Return Id               | A unique identifier for each return header. System generate.                                                             |
| External Id             | The internal ID of the return in cases where returns are posted to the OMS from an external system.                      |
| Return Header Type Id   | Identifies the type of return. Possible values: CUSTOMER\_RETURN or VENDOR\_RETURN                                       |
| Status Id               | Indicates the current status of the return. See table below for all statuses                                             |
| Created By              | The user or system entity responsible for creating the return.                                                           |
| From Party Id           | Represents the party initiating the return, typically associated with the customer.                                      |
| To Party Id             | Specifies the recipient party or entity for the return, often the business or organization receiving the returned items. |
| Payment Method Id       | Identifies the payment method associated with the return.                                                                |
| Fin Account Id          | Refers to the financial account linked to the return.                                                                    |
| Billing Account Id      | Specifies the billing account related to the return.                                                                     |
| Entry Date              | Records the date when the return was entred into the OMS.                                                                |
| Origin Contact Mech Id  | Identifies the contact mechanism associated with the origin of the return.                                               |
| Destination Facility Id | Represents the facility or location where the returned items are intended to be processed or received.                   |
| Needs Inventory Receive | A boolean field indicating whether the return requires inventory receiving.                                              |
| Currency Uom Id         | Specifies the currency unit of measure associated with the return.                                                       |
| Supplier Rma Id         | Refers to the Return Merchandise Authorization (RMA) ID associated with the supplier.                                    |
| Return Channel Enum Id  | Enumerates the return channel, categorizing the channel through which the return is initiated.                           |
| Last Updated Stamp      | Timestamp of the last update to the return header.                                                                       |
| Last Updated Tx Stamp   | The transaction timestamp of the last update to the return header.                                                       |
| Created Stamp           | The timestamp when the return header was initially created.                                                              |
| Created Tx Stamp        | The transaction timestamp when the return header was initially created.                                                  |
| Transaction Id          | The transaction ID associated with the return header.                                                                    |
| Return Date             | The date when the return was processed or completed.                                                                     |
| Employee Id             | The employee associated with the return, providing insights into the personnel involved in the return process.           |

### Return Statuses

| Status Id           | Status Code    | Description            |
| ------------------- | -------------- | ---------------------- |
| RETURN\_ACCEPTED    | ACCEPTED       | Authorized             |
| RETURN\_CANCELLED   | CANCELLED      | Cancelled              |
| RETURN\_COMPLETED   | COMPLETED      | Completed              |
| RETURN\_MAN\_REFUND | MANUAL\_REFUND | Manual Refund Required |
| RETURN\_RECEIVED    | RECEIVED       | Received               |
| RETURN\_REJECTED    | REJECTED       | Rejected               |
| RETURN\_REQUESTED   | REQUESTED      | Requested              |

### Return Adjustments

| Return Adjustment Type Id | Description                          |
| ------------------------- | ------------------------------------ |
| RET\_ADD\_FEATURE\_ADJ    | Return Additional Feature            |
| RET\_DEPOSIT\_ADJ         | Return Deposit Adjustment            |
| RET\_DISCOUNT\_ADJ        | Return Discount                      |
| RET\_DUTY\_ADJ            | RMA Duty                             |
| RET\_EXT\_PRM\_ADJ        | Return External Promotion Adjustment |
| RET\_FEE\_ADJ             | Return Fee                           |
| RET\_MAN\_ADJ             | Return Manual Adjustment             |
| RET\_MISC\_ADJ            | Return Miscellaneous Charges         |
| RET\_MKTG\_PKG\_ADJ       | Return Marketing Package Adjustment  |
| RET\_PROMOTION\_ADJ       | Return Promotion                     |
| RET\_REPLACE\_ADJ         | Return Replacement                   |
| RET\_RMA\_ADJ             | RMA Fee Adjustment                   |
| RET\_SALES\_TAX\_ADJ      | Return Sales Tax                     |
| RET\_SHIPPING\_ADJ        | Return S\&H                          |
| RET\_SURCHARGE\_ADJ       | Return Surcharge                     |
| RET\_VAT\_PC\_ADJ         | Return VAT Price Correction          |
| RET\_VAT\_TAX\_ADJ        | Return VAT Tax                       |
| RET\_WARRANTY\_ADJ        | Return Warranty                      |

## Return items

Most of the return details that retailers want to analyze about their returns, such as return type, reason and amounts are stored at the item level. Every return item is required to be linked to the original sales order line ID that it is being issued against using the item sequence id of the original order item.

### Return item type

The type of a return item often defines the handing of the returned item for the business. Some of the most commonly used types of return items include:

| Return Type Id | Description        | Parent Type Id |
| -------------- | ------------------ | -------------- |
| HC\_RETURN     | HC allowed returns |                |
| RTN\_CREDIT    | Store Credit       | HC\_RETURN     |
| RTN\_EXCHANGE  | Exchange           | HC\_RETURN     |
| RTN\_REFUND    | Refund             | HC\_RETURN     |
| RTN\_REPLACE   | Replacement        | HC\_RETURN     |

How the return was issued is stored at an item level in the form of types to allow retailers to create mixed returns where each item can be returned as different methods. For example, a store rep can issue a refund for some items of an order while offering an exchange for other items in the same transaction instead of being forced to create separate transactions.

## Issuing refunds

The type of a return item helps the OMS select the refund method. To issue refunds to customers, a new payment preference is created in the original sales order with the type “refund” and the method corresponding to the type of the return item. Payment type and method are used in combination to identify how the customer received their refund, for example if a customer received store credit in the form of a gift card, it will be presented as a refund type payment with the method of “gift card” or “store credit” depending on what the retailer chooses to configure.

The amount that needs to be refunded to the customer is computed based on the sum of the refund item totals and the return adjustments. This computed sum is not actually stored in the OMS and is instead a computed value when return details are fetched. The final tender amount is then applied to the refund payment preference created on the order the returned order item was placed in.
