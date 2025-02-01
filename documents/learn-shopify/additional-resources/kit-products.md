---
Description: Learn how to manage kit products seamlessly in HotWax Commerce.
---

# Kit Products

{% hint style="info" %}
To seamlessly import Kit products into OMS, ensure that the Shopify Config Access Scope is set to grant both read and write access to the Shopify shop.
{% endhint %}

The Bundles app checks inventory levels at 10-minute intervals, reducing inventory for kit products if individual item inventory decreases. Kit products have no physical inventory of their own, like NetSuite, the inventory calculations are based on the lowest common denominator between all individual components.

For multi-location inventory calculations, a kit products availability is determined by the lowest common denominator of the kit component inventory available by facility. The computed inventory of a kit product at each facility is then summed to produce the final sellable inventory number.

During allocation, brokering is run on the kit components directly which actually have physical inventory at facilities. By default splitting is disabled for kit products in an order.

{% hint style="warning" %}
HotWax does not push kit product inventory to Shopify. Kit product inventory on Shopify is computed entirely by the Bundles app.
{% endhint %}

### Install Bundles app reader in OMS

Out of the box HotWax Commerce does not come with a pre-loaded kit product integration with the Bundles app on Shopify. Before configuring Kit product data in OMS, it's crucial to install the Bundles app reader in OMS. Failure to do so may lead to missing jobs for the Bundles app. Follow the steps below for a seamless installation:

{% hint style="danger" %}
The Kit Component Metafields feature in the Bundles app on Shopify must be enabled for this functionality to work.
{% endhint %}

#### Step 1: Access WebTools

Go to the WebTools for your OMS instance using the provided sample link:

```
https://{instanceName}.hotwax.io/webtools/control/EntityImportReaders
```

#### Step 2: Add Kit Product Reader

In the `Enter readers` section, add the Bundles reader extension by typing `ext-bundles`.

#### Step 3: Import Configuration

Click on the "Import" button to initiate the installation process.

By following these steps, you ensure that the Bundles Reader is properly integrated into OMS, allowing for accurate and efficient data communication during import configurations.

### Map Shopify 'Kit' product types

For HotWax to recognize your products as true kit products, their product type in Shopify must be mapped to 'Marketing Package' in HotWax. usually this is some variation of the word "Kit": `KIT`,`kit`,`Kit`.

{% hint style="danger" %}
The Shopify product type value is **case sensitive**
{% endhint %}

```
<ShopifyShopTypeMapping mappedKey="{Shopify Kit Type}" mappedTypeId="SHOPIFY_PRODUCT_TYPE" mappedValue="MARKETING_PKG_PICK" shopId="SHOP"/>
```

### Jobs to sync Kit Products from Shopify

Import kit components from Shopify

```
Import kit product components
```

Enable this job for kit product associations

```
Add or Update kit product associations
```

### Limitations of using Bundles App

Bundles simplify kit products and their component management, but it has drawbacks when it comes to determining inventory for multi-location fulfillment. The app aggregates the lowest inventory of each component accessible across every location to determine kit inventory. Because it ignores the need for every element of a kit to be accessible at the same place to fulfill the order, this method may lead to inaccurate inventory counts.

**Example**

For example, suppose a kit product consists of a belt and a wallet, with the inventory distributed between two stores:

* **Brooklyn Store**: 3 belts, 2 wallets
* **Broadway Store**: 1 belt, 5 wallets

In this case, the Bundles app calculates the total kit inventory as 4 by adding the total number of belts and wallets across both locations (belts: 3 + 1 = 4, wallets: 2 + 5 = 7). However, this calculation is incorrect because the actual number of kits that can be fulfilled is only 3. Brooklyn can fulfill 2 kits (with 3 belts and 2 wallets), and Broadway can fulfill 1 kit (with 1 belt and 1 wallet). The remaining items are insufficient to complete any additional kits.

Learn more about how HotWax Commerce helps retailers [manage kit products](https://docs.hotwax.co/documents/learn-netsuite/integration-flows/kitproducts) and their components in Shopify and NetSuite if the retailer is not using the Bundles App.
