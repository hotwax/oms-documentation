---
description: >-
  Learn how to configure integrations between HotWax Commerce and Shopify Shops
  with ease.
---

# Integrations

The HotWax Commerce integration layer maintains a structured repository of integration mappings between Shopify and HotWax Commerce, covering locations, payment methods, shipping methods, product types, and price levels.

## Configuring Mappings between HotWax Commerce and Shopify Shop

Retailers can have multiple Shopify Shops based on their business scope. Therefore, it is imperative to map the integrations available in HotWax Commerce with different Shopify shops according to business requirements. Users need to periodically amend mappings to ensure alignment with the current operational landscape. Due to these semi-frequent adjustments, users require access to update these mappings themselves.

The dedicated Shopify Shop page within the OMS allows you to manage integration mappings between HotWax Commerce and Shopify Shop directly from the UI without relying on external support.

Here’s how you can configure these mappings between HotWax Commerce and Shopify Shops. Before creating the integration mapping, create the corresponding Shopify shop. Read our extensive user manual to learn how to create a Shopify shop in HotWax Commerce.

1. Navigate to the `Shopify Shop Page` from the menu.
2. Locate the specific mapping you want to configure.
3.  Click on the `Add` button and fill in the mandatory details mentioned in the input fields.

    | Field                     | Description                                |
    | ------------------------- | ------------------------------------------ |
    | Integration Mapping Key   | The mapping ID present in Shopify. |
    | Integration Mapping Value | Corresponding value present in HotWax Commerce.   |
    | Description               | Briefly describe the method.               |
4. Confirm establishing the new mapping by clicking on the `Add` button.

The integration layer maps entities in Shopify to their corresponding representations in HotWax Commerce. This mapping is established through a key-value pair, where the key denotes the original entity, and the value signifies its counterpart in HotWax Commerce.

## Creating Custom Integration Mappings

If you want to set up a custom integration mapping, navigate to the section `Shopify Shop Type Mapping` and click on `Add Type`. Add the following details to create the corresponding Integration type mapping.

| Field                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| Integration Type Enum ID   | Provide the unique identifier for the integration type.       |
| Integration Type Enum Code | Provide the shorthand code representing the integration type. |
| Integration Type Enum Name | Provide the human-readable label for the integration type.    |
| Description                | Write brief information about the integration type.           |

Confirm establishing the new custom mapping by clicking on the `Add` button. Now, you're ready to utilize out-of-the-box mappings and also create custom integration mappings.

## Creating Default Integration Mapping data for Shopify Shop Types

Some default mapping data needs to be added when connecting a Shopify store to ensure that data flows smoothly between both systems with correct mappings.

If you're only using the default SHOP Shopify Shop ID, this data needs to be created only once. However, for multiple Shopify stores, input the data individually for each store. The Shopify Shop ID will change and be obtainable from the header of the View Shopify Shop page in OMS.

{% hint style="info" %}
After incorporating the default mapping, please add any custom mappings as needed. You can find steps to map the integration for each Shopify Shop type on their respective page
{% endhint %}
