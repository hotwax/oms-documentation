---
description: >-
  Discover how to configure payment methods in HotWax Commerce for a seamless
  integration with Shopify.
---

# Payment Method

Before initiating order synchronization from Shopify to HotWax Commerce, it is essential to configure payment methods in HotWax Commerce. This step is crucial for seamless integration with Shopify. The HotWax integration layer facilitates the mapping of payment methods in Shopify to their corresponding counterparts in HotWax Commerce. This mapping is vital for creating customer payments and optimizing order fulfillment. Retailers can find the existing Shopify Payment methods from their Shopify Admin Panel. Follow these steps to identify which payment methods exist for your Shopify Shop and need to be mapped

1. Log in to your `Shopify` storefront
2. Navigate to `Settings` > `Payments`
3. Here, you can view all the existing payment methods, and click on `manage` to add or remove any payment method.

Mapping payment methods becomes particularly important for Cash-On-Delivery (COD) orders. Aligning payment methods allows fulfillment teams to identify orders with pending payments, enabling swift payment collection during order fulfillment. HotWax is relied upon for reporting, and accurate data aggregation of orders and payment methods provides insights into payment trends and customer behavior.

As orders move from Shopify to HotWax Commerce, the integration layer checks saved mappings. The defined payment method is applied in the order feed, ensuring consistency and accuracy. This systematic approach expedites order fulfillment and minimizes errors in payment processing.

## Steps to Map Shopify Shop Payment Methods

Retailers can follow these steps:

1. Go to the `Shopify Shop` Page and locate the `Shopify Payment Method Type` section. If the section is not present, navigate to the `Shopify Shop Type` section and click the `Add` button to create any new Shopify Shop Type, including the Payment Method Type.
2. In the `Shopify Shop Payment Method Type` section, click on `Add payment method type` to create new payment methods in HotWax Commerce.
3. A pop-up box will appear. Here, add the Payment Method Type as per your naming preferences, starting with EXT\_SHOP, and provide a brief description of the payment method type.
4. After creating the payment method, click on the `Add` button in the `Shopify Payment Method Type` section to map the payment method with the Shopify Shop.
5. In the pop-up box, input the `key`, which is the mapping ID present in Shopify, and add the corresponding `value` available in HotWax Commerce.
6. Click on the `Add` button to save the Payment Method Type mapping.
7. To remove existing payment methods, click on the `delete` icon in the respective payment method row.

## Mandatory Shopify Shop Payment Method Types:

| Mapped Key               | Mapped Value             |
| ------------------------ | ------------------------ |
| afterpay                 | EXT\_SHOP\_AFTRPAY       |
| afterpay\_north\_america | EXT\_SHOP\_AFTRPAY\_NA   |
| American Express         | EXT\_SHOP\_AMEX          |
| Cash on Delivery (COD)   | EXT\_SHOP\_CASH\_ON\_DEL |
| Discover                 | EXT\_SHOP\_DISCOVER      |
| Klarna                   | EXT\_SHOP\_KLARNA        |
| Mastercard               | EXT\_SHOP\_MASTERCARD    |
| OFFLINE                  | EXT\_OFFLINE             |
| paypal                   | EXT\_SHOP\_PAYPAL        |
| shopify\_installments    | EXT\_SHOP\_PAY\_INSTALL  |
| VISA                     | EXT\_SHOP\_VISA          |

{% hint style="info" %}
After incorporating these mandatory mappings, please add any custom mappings as needed.
{% endhint %}

{% hint style="info" %}
In HotWax Commerce, retailers can map both payment gateways and payment methods. However, due to the hierarchical structure of mapping, if payment gateways are mapped, payment methods won't be stored within HotWax Commerce. Instead, users will only see the gateway name alongside order details, regardless of the payment method used. If the intention is to retain payment method data, it's necessary to remove the mapping of the payment gateway from HotWax Commerce.
{% endhint %}
