# Returns

In omnichannel retailing, retailers provide customers with the options for online returns as well as in-store returns.

## Online Returns

For customers who favor the convenience of online shopping, initiating returns from the retailer's eCommerce website or app proves most suitable. This approach is particularly beneficial for those residing far from physical store locations or looking for the ease of requesting returns from their homes.

#### Scenarios where Online returns are accepted:

* **Buy Online Return Online (BORO):** Buy Online Return Online lets customers initiate online returns for their eCommerce orders.
* **Endless Aisle Return Online (EARO):** Endless Aisle Return Online lets customers initiate online returns for their in-store ordered items which they received home delivery for.

Retailers we work with, use Shopify as their eCommerce platform, NetSuite as their ERP system, Loop as their RMS, and HotWax Commerce as their OMS. When synchronizing online returns to NetSuite, some opt to use Loop as middleware, while others leverage HotWax Commerce for this. Let's explore how these two distinct approaches work:

### Synchronizing Returns to NetSuite using HotWax Commerce as middleware:

Loop lets customers directly initiate returns against their online orders. Once the return is initiated by the customer, Loop creates returns in Shopify and when the return is received by the retailer, Loop issues a refund to the customer.

Once returns are completed in Shopify, HotWax Commerce downloads them and marks the order item as returned, and payment as refunded. If the restocking flag is enabled, HotWax also restocks the inventory received against the online returns. This helps make sure that returned items that are made available to sell online can be brokered by HotWax Commerce in case any new orders are received against the restocked inventory.

Once the returns are downloaded into HotWax Commerce, they need to be synced to NetSuite. There are two ways to push online returns to NetSuite:

1. **Returns Feed from HotWax Commerce:** HotWax Commerce gives a feed of returns that the dev team of retailers can use and transform as per the specification and file format expected by NetSuite or any third-party ERP system.
2. **HotWax Commerce Integration Platform:** Alternatively, HotWax Commerce Integration Platform offers integration with NetSuite where online returns can be synced to NetSuite.

When the online returns are synchronized in NetSuite, a return is generated in NetSuite, the order item is marked as returned and the payment is marked as refunded. Subsequently, the inventory is restocked against the created item receipt.

<figure><img src="../../.gitbook/assets/online returns with hotwax.png" alt=""><figcaption><p>Sync online returns to NetSuite using HotWax Commerce</p></figcaption></figure>

### Synchronizing Returns to NetSuite using Loop as middleware

The only difference in this approach is that instead of HotWax Commerce, retailers use Novamodule to synchronize returns from Loop to NetSuite.

Once the return process is completed by the customer, Loop creates returns in Shopify and issues a refund to the customer.

Loop also directly generates a return in NetSuite, marks the order item as returned, and marks the payment as refunded. Subsequently, the inventory is restocked against the created item receipt.

HotWax Commerce downloads returns from Shopify and marks the order item as returned, and payment as refunded. If the restocking flag is enabled, HotWax also restocks the inventory received against the online returns. These returns are not synchronized from HotWax Commerce to NetSuite as they are already synced from Loop to NetSuite using the Novamodule Integration App.

<figure><img src="../../.gitbook/assets/online return with loop.png" alt=""><figcaption><p>Sync online returns to NetSuite using Loop</p></figcaption></figure>

## POS Returns

Customers who live near a brick-and-mortar store or those who prefer to get instant refunds opt for returning their purchases directly in-store.

#### Scenarios where POS returns are accepted:

* **Buy In-Store Return In-Store (BISRIS):** Buy In-Store Return In-Store lets customers return their in-store purchases to a nearby store location.
* **Buy Online Return In-Store (BORIS):** Buy Online Return In-Store lets customers directly return their online purchases to a nearby store location.
* **Endless Aisle Return In-Store (EARIS):** Endless Aisle Return In-Store lets customers return orders made through an endless aisle feature, such as items ordered in-store for home delivery, to a nearby store location.

Retailers we work with, use Shopify POS as their POS system, NetSuite as their ERP system, Loop as their RMS, and HotWax Commerce as their OMS. Some retailers initiate in-store returns using their Shopify POS system, while others opt to use the Loop Returns POS App. Let's explore how these two distinct approaches work:

### Synchronizing POS Returns to NetSuite using HotWax Commerce as middleware:

Leveraging Shopify POS for in-store returns ensures that store associates are not required to navigate through a separate interface to handle them.

When POS returns are accepted within the store and completed, HotWax Commerce downloads them and marks the order item as returned, and payment as refunded. If the restocking flag is enabled, HotWax also restocks the inventory received against the POS returns.

Similar to online returns, retailers have the option to use HotWax Commerce's returns feed or leverage HotWax Commerce Integration Platform to sync POS returns to NetSuite.

When the POS returns are synchronized with NetSuite, a Cash Sale return is generated in NetSuite, the order item is marked as returned and the payment is marked as refunded. Subsequently, the inventory is restocked against the created item receipt.

<figure><img src="../../.gitbook/assets/in-store return with hotwax.png" alt=""><figcaption><p>Sync POS returns to NetSuite using HotWax Commerce</p></figcaption></figure>

### Synchronizing POS Returns to NetSuite using Loop as middleware

Loop Returns POS App provides an intuitive interface to create POS returns. Once these returns are completed in Loop, it syncs them with both Shopify POS and NetSuite.

Loop directly generates a Cash Sale return in NetSuite, marks the order item as returned, and marks the payment as refunded. Subsequently, the inventory is restocked against the created item receipt.

HotWax Commerce downloads returns from Shopify POS and marks the order item as returned, and payment as refunded. If the restocking flag is enabled, HotWax also restocks the inventory received against the POS returns. As POS returns are already synced to NetSuite, they are not synced again by HotWax Commerce.

<figure><img src="../../.gitbook/assets/in-store return with loop.png" alt=""><figcaption><p>Sync POS returns to NetSuite using Loop</p></figcaption></figure>
