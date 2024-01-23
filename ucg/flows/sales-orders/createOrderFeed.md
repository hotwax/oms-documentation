# Create Order Feed

Frank and Oak uses a custom create order file from HotWax that is slightly different than the out of the box used with the native NetSuite integration. Frank and Oak has their own trasnformation middleware in a platform called Boomi that has the business logic for how the order needs to be entered into NetSuite.

## Handling Discounts

An order can have two types of discounts, order level discounts and item level discounts.

### Order Level Discounts

Order level discounts are saved as order adjustments in the OMS. In the create order feeds to NetSuite the header level discount is added in the `Rate` column as an absolute value. This value indicates the exact amount reduced from the order total, **not the percentage**.

### Order Line Level Discounts

Line level discounts are saved in the OMS as order line item adjustments. In the NetSuite create order feeds, line level discounts are added as new line items directly below the item being discounted. The value of this field will be the internal ID of the discount item configured in NetSuite. The amount being discounted from the corresponding order item is stored in the `Amount` column.

## Order Feed Mapping

| Header              | Description                                                     |
|---------------------|-----------------------------------------------------------------|
| Order Id            | Shopify Order Name                                              |
| Order Line Id       | HotWax Line ID                                                  |
| External Id         | HotWax Order ID                                                 |
| Sales Channel       | Channel through which the sale was made (e.g., web, POS, etc.)  |
| NetSuite ID         | NetSuite system generated                                       |
| Item                | NetSuite ID of the product being ordered                         |
| External Item ID    | **Shopify ID of the product being ordered / Name of discount from Shopify**|
| Currency            | Currency in which the order is placed                            |
| Price               | **Always include Order Item price**                              |
| Amount              | Amount adjusted by discount line item                            |
| Quantity            | Quantity of the item ordered. Always 1 since explode items is enabled |
| Shipping Method     | NetSuite Method ID                                              |
| Shipping Cost       | Cost associated with shipping                                   |
| Tax Code            | Code for tax calculation purposes. Vertex for FaO                |
| Shipping Tax Code   | **Will include the actual shipping tax amount from the order**   |
| Date                | Date and time when the order was placed                          |
| Customer            | NetSuite Customer ID                                             |
| Addressee           | Customer's name for shipping purposes                            |
| Address 1           | Address line 1 for shipping                                      |
| Address 2           | Address line 2 for shipping                                      |
| City                | City for the shipping address                                    |
| State               | State for the shipping address                                   |
| Country             | Country for the shipping address                                 |
| Zip                 | ZIP or postal code for the shipping address                      |
| Email               | Customer's email address from the order                          |
| Phone               | Customer's phone number from the order                          |
| Tag                 | Not used                                                         |
| Closed              | Indicates whether the order is closed or not. Will be empty in the created feed |
| Discount Item       | Name of the order level discount                                 |
| Rate                | Discount rate applied to the order                               |
| Demand Location     | **NetSuite Store ID for POS Order. Web is set to warehouse** |
| Price Level         | **Always set to 'Custom' / set to `payment_preference` when payment item** |
| Billing Addressee   | Customer's name for billing purposes                              |
| Billing Address1    | Billing address line 1                                          |
| Billing Address 2   | Billing address line 2                                          |
| Billing City        | City for the billing address                                     |
| Billing State       | State for the billing address                                    |
| Billing Country     | Country for the billing address                                  |
| Billing Zip         | ZIP or postal code for the billing address                       |
| Billing Phone       | Phone number for billing contact                                  |
| Billing Email       | Email address for billing contact                                 |


## Payment Item Sample
Because an order can have multiple payment preferences, each preference will be appended as a line item of the order. Here is a sample of what that will look like:

| Payment Detail        | Corresponding Heading in the Order Table                |
|-----------------------|---------------------------------------------------------|
| Order Id              | #37383                                                  |
| Order Line Id         |                                                         |
| External Id           | KR10342                                                 |
| Sales Channel         | web                                                     |
| NetSuite ID           |                                                         |
| Item                  | credit_card                                             |
| Currency              | USD                                                     |
| Price                 |                                                         |
| Amount                | 100                                                     |
| Quantity              | 1                                                       |
| Shipping Method       |                                                         |
| Shipping Cost         |                                                         |
| Tax Code              |                                                         |
| Shipping Tax Code     |                                                         |
| Date                  | 2023-07-08T12:08:34.000Z                                |
| Customer              | 5314749                                                 |
| Addressee             | Sumiti Joshi                                            |
| Address 1             | 175, S Main St Suite 1310                               |
| Address 2             |                                                         |
| City                  | Salt Lake City                                          |
| State                 | UT                                                      |
| Country               | US                                                      |
| Zip                   | 84111                                                   |
| Email                 | sumiti.joshi@hotwax.co                                  |
| Phone                 | 555 555 5555                                            |
| Tag                   |                                                         |
| Closed                |                                                         |
| Discount Item         |                                                         |
| Rate                  |                                                         |
| Demand Location       | BDC                                                     |
| Price Level           | Payment_Prefrence                                       |
| Billing Addressee     |                                                         |
| Billing Address1      |                                                         |
| Billing Address 2     |                                                         |
| Billing City          |                                                         |
| Billing State         |                                                         |
| Billing Country       |                                                         |
| Billing Zip           |                                                         |
| Billing Phone         |                                                         |
| Billing Email         |                                                         |