# Sales Channel

Retailers receive orders through diverse channels, including eCommerce websites, social media platforms, online marketplaces, and point-of-sale (POS) systems. To enhance operational efficiency and evaluate performance across these channels, retailers must accurately identify the sales channel associated with each order.

Shopify is seamlessly integrated with various social media sales channels such as Facebook and Instagram, as well as online marketplaces like Amazon. All orders, regardless of the channel, are consolidated within Shopify. For orders originating from alternative channels, Shopify assigns a key to uniquely identify the source of each order. Retailers must map these keys with corresponding values in HotWax Commerce to effectively identify the order sources.

## Mapping Process:

1. Navigate to the `Shopify Shop` Page and locate the `Shopify Order Sales Channel` section. If the section is not present, proceed to the `Shopify Shop Type` section and click the `Add` button to create a new Shopify Shop Type, which includes the Shopify Order Sales Channel.

2. In the `Shopify Order Sales Channel` section, click on `Add Sales Channel Enum` to create a new sales channel within HotWax Commerce.

3. A pop-up box will appear. In this box, add the `Enum ID` to provide a unique identifier for the integration type. Additionally, provide a brief description of the sales channel. Click on the `Add` button to save the sales channel.

4. After creating the sales channel, click on the `Add` button in the `Shopify Orders Sales Channel` section to map the sales channel in HotWax Commerce to the order source in Shopify.

5. In the pop-up box, input the `key`, which represents the mapping ID present in Shopify. From the dropdown menu, select the corresponding `value` available in HotWax Commerce.

6. Click on the `Add` button to save the `Shopify Sales Channel` mapping.

7. To remove existing sales channels, click on the `delete` icon in the respective sales channel row.

## Mandatory Mapping for Sales Channel

| Mapped Key            | Mapped Value         |
|-----------------------|----------------------|
| android               | PHONE_SALES_CHANNEL  |
| exchange              | EXCHG_SALES_CHANNEL  |
| iphone                | PHONE_SALES_CHANNEL  |
| pos                   | POS_SALES_CHANNEL    |
| shopify_draft_order   | CSR_SALES_CHANNEL    |

{% hint style='info' %} After incorporating these mandatory mappings, please add any custom mappings as needed. 
{% endhint %}
