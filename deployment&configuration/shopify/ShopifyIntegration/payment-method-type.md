# Payment Methods

Before initiating order synchronization from Shopify to HotWax Commerce, it is essential to configure payment methods in HotWax Commerce. This step is crucial for seamless integration with Shopify. The HotWax integration layer facilitates the mapping of payment methods in Shopify to their corresponding counterparts in HotWax Commerce. This mapping is vital for creating customer payments and optimizing order fulfillment. 

Mapping payment methods becomes particularly important for Cash-On-Delivery (COD) orders. Aligning payment methods allows fulfillment teams to identify orders with pending payments, enabling swift payment collection during order fulfillment. HotWax is relied upon for reporting, and accurate data aggregation of orders and payment methods provides insights into payment trends and customer behavior.

As orders move from Shopify to HotWax Commerce, the integration layer checks saved mappings. The defined payment method is applied in the order feed, ensuring consistency and accuracy. This systematic approach expedites order fulfillment and minimizes errors in payment processing.

## Steps to Map Shopify Shop Payment Methods

Retailers can follow these steps:

1. Go to the `Shopify Shop` Page and locate the `Shopify Payment Method Type` section. If the section is not present, navigate to the `Shopify Shop Type` section and click the `Add` button to create any new Shopify Shop Type, including the Payment Method Type.

2. In the `Shopify Shop Payment Method Type` section, click on `Add payment method type` to create new payment methods in HotWax Commerce.

3. A pop-up box will appear. Here, add the Payment Method Type, starting with EXT_SHOP, and provide a brief description of the payment method type.

4. After creating the payment method, click on the `Add` button in the `Shopify Payment Method Type` section to map the payment method with the Shopify Shop.

5. In the pop-up box, input the `key`, which is the mapping ID present in Shopify, and add the corresponding `value` available in HotWax Commerce.

6. Click on the `Add` button to save the Payment Method Type mapping.

7. To remove existing payment methods, click on the `delete` icon in the respective payment method row.

## Mandatory Shopify Shop Payment Method Types:

| Mapped Key                | Mapped Value         |
|---------------------------|----------------------|
| afterpay                  | EXT_SHOP_AFTRPAY     |
| afterpay_north_america    | EXT_SHOP_AFTRPAY_NA  |
| American Express          | EXT_SHOP_AMEX        |
| Cash on Delivery (COD)    | EXT_SHOP_CASH_ON_DEL |
| Discover                  | EXT_SHOP_DISCOVER    |
| Klarna                    | EXT_SHOP_KLARNA      |
| Mastercard                | EXT_SHOP_MASTERCARD  |
| OFFLINE                   | EXT_OFFLINE          |
| paypal                    | EXT_SHOP_PAYPAL      |
| shopify_installments      | EXT_SHOP_PAY_INSTALL |
| VISA                      | EXT_SHOP_VISA        |

{% hint style='info' %} After incorporating these mandatory mappings, please add any custom mappings as needed. 
{% endhint %}
