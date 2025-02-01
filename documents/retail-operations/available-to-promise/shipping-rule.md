# Shipping Rules

As discussed previously, all facilities included in the `CHANNEL_FAC_GRP` type will have their inventory available for online sales. With the new shipping feature, retailers can configure inventory availability on a per-product, per-facility basis, allowing them to control which product’s inventory will be suppressed for online sales from specific facilities and for specific channels.

For example, retailers can suppress the availability of a blue shirt for shipping from the US Shopify Store. Similarly, they can suppress a product, such as the blue shirt, to restrict shipping from specific locations, such as retail stores, while keeping all other products available for shipping from these retail stores.

In HotWax Commerce, retailers can create different types of shipping rules:

* Configure the capacity of online orders from a store.
* Configure which products will be suppressed to sell from which sales channel.
* Configure which product will be suppressed for which facility so that the inventory of these facilities for that product is not computed.

In this user manual, we will set up different types of configurations. For the remainder of the setup, we will use the example of a Canadian retailer that has five retail locations, including three retail stores and two warehouses, and sell their inventory across Canada and US. They want to configure shipping rules for a specific product: a Blue Medium-sized shirt from the NotNaked brand. Let’s see how retailers can configure shipping rules for such scenarios.

## Setting Maximum Order Capacity of a Facility

Retailers often face operational constraints in their stores, as they must balance serving walk-in customers while fulfilling online orders. To prevent overwhelming the store's capacity, HotWax Commerce allows retailers to set a maximum order capacity for each store. Once this limit is reached, the brokering engine automatically routes additional orders to alternative facilities with available capacity.

The maximum order limit does not impact the `ATP (Available-to-Promise)` of the facility. This configuration is purely for controlling the number of orders that can be shipped from the store and helps users manage shipping rules without having to navigate multiple apps.

Let’s suppose a retailer wants to limit the capacity of their retail stores to handle only 10 orders per day while keeping the warehouse order capacity unlimited. Here’s how they can set up the maximum order capacity:

**Navigate to the Shipping Page:** Go to the `Shipping` section in the `ATP App`.

**Access the Facilities Tab:** Click on the `Facility` tab to view the complete list of all facilities (stores and warehouses).

**Set Maximum Order Capacity:** For each store, click on the `capacity chip` next to the store’s card. You will see three options: - `Unlimited Capacity` - `No Capacity` - `Custom Capacity`

**Configure Custom Capacity:** Select `Custom Capacity` and set the maximum limit to 10 orders per day for each store.

**Unlimited Capacity for Warehouses:** For the warehouses, leave the setting as `Unlimited Capacity`, ensuring they can fulfill as many orders as needed.

Once this setup is complete, the system will automatically redirect any additional orders beyond the store's daily capacity to other facilities with available capacity.

{% embed url="https://youtu.be/MHBO-2kVauQ" %}
\
Setting Maximum Order Capacity of a Facility
{% endembed %}



## Suppressing Shipping for Channel/ Configuration Facility

In this scenario, the retailer wants to suppress shipping for the Blue Shirt (Size M) across the `Shopify` channel, making it available exclusively for walk-in customers. This could be due to high demand in-store or a strategic decision to drive in-store traffic.

Here’s how to set up the rule to suppress shipping for this specific product on the Shopify channel:

**Create Rule** Navigate to the `Shipping` page within the `ATP App` and select the `Product and Channel` tab. Click the `Add` button to create a new rule.

**Rule Name** Enter a descriptive name for the rule, such as “Suppress Shipping on Shopify.” This name should clearly reflect the rule’s purpose.

**Rule Configuration** After naming the rule, configure it by turning off the toggle for `Shipping`. This action ensures that the Blue Shirt (Size M) will be suppressed from the selected channel.

**Selecting Channel / configuration facility** Choose the relevant channel configuration facility, as all network rules for the products are governed by these configuration facilities. Since we are suppressing shipping of the Blue Shirt from all the channels, turn on the toggle to select `all channels`. If you want to suppress shipping for specific channels, such as the US Shopify store, select the relevant `US Config Facility` from the list of all available config facilities.

**Selecting Products** To apply this rule to the Blue Shirt (Size M), you can use the `Tag` or `Feature` filters:

* **Tags**: Add the “Blue Shirt” tag from your product catalog using the `Include` card.
* **Features**: Alternatively, use the product feature filters to select “Color: Blue” and “Size: M,” ensuring the rule applies only to this specific variant of the Blue Shirt. You can also use the `Exclude` card to exclude specific products before suppressing shipping. If you want to configure this setting for all the products, you don't have to include/exclude any of the products either by the tag or the feature.

**Saving Configuration** Once you have selected the relevant product and configured the rule, click the `Save` button to apply the settings. This will finalize the rule, ensuring that the Blue Shirt (Size M) is suppressed for shipping on the Shopify channel, making it exclusive to walk-in customers at physical stores.

{% embed url="https://youtu.be/2VSxp6AJ3_U" %}
\
Suppressing Shipping for Channel/ Configuration Facility
{% endembed %}



## Suppressing Shipping from Facility

In this scenario, the retailer wants to suppress shipping for the Blue Shirt (Size M) from their retail stores due to higher demand from walk-in customers. Shipping for this product will remain available at other locations, ensuring that online orders can still be fulfilled from other facilities.

Here’s how to set up this rule:

**Create Rule** Navigate to the `Shipping` page within the `ATP App` and select the `Product and Facility` tab. Click the `Add` button to create a new rule. This rule will allow the retailer to suppress shipping for specific products at certain facilities.

**Rule Name** Enter a descriptive name for the rule, such as “Suppress Shipping for Blue Shirt (Size M) from stores” to easily identify it later.

**Rule Configuration** To suppress shipping for this product at the specific facilities, turn off the toggle for `Shipping`. This ensures that the Blue Shirt (Size M) will be suppressed from selected stores.

**Selecting Facilities** Shipping rules apply to `facility groups` since retailers can have numerous facilities, and managing shipping for all the facilities can be a time-consuming process. To make this easier, it is recommended to create a facility group for the stores when setting up HotWax Commerce. If such a facility group does not exist, you can create a custom facility group through the `Facility App`. Once the facility group is created, navigate to the `ATP rule configuration` page. Click the `Add` button in the `Include` section of the facilities and add the relevant facility group. You can also use the `Exclude` feature to exclude specific facilities or select `All Facilities` if you want to suppress fulfillment of the product from all locations.

5. **Selecting Products** To specify the Blue Shirt (Size M), you can either use `Tags` or `Features`:
   * **Tags**: Add the “Blue Shirt” tag to include this product in the rule.
   * **Features**: Filter products by selecting “Color: Blue” and “Size: M” to target only this specific variant of the product.
6. **Saving Configuration** After configuring the rule, selecting the facilities, and choosing the product, click the `Save` button at the bottom right of the page. This finalizes the rule, ensuring that the Blue Shirt (Size M) is suppressed for shipping from the stores while keeping shipping available for other products from these stores.

{% embed url="https://youtu.be/Zy57dEzX_FY" %}
\
Suppressing Shipping from Facility
{% endembed %}



## Schedule Shipping Rule

Retailers can manage the scheduling of the ATP computation job responsible for the shipping rule from the shipping page. By default, ATP computation jobs are scheduled to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day.

However, if you have created a new rule and want to compute ATP immediately, you can run a job once by selecting the relevant option from the job's overflow menu.

Once the shipping rules are created, they will be visible as rule cards on the Product and Channel or Product and Facility page as per the created rule. Each rule card provides an overview of configurations and product facility selections. Retailers can click the "Edit rule" button to modify rule configurations. The rule configuration can be adjusted by toggling the store pickup on or off.

{% embed url="https://youtu.be/Tk7natfXjPo" %}
\
Schedule Shipping Rule
{% endembed %}

