# Use Cases

## Threshold Rules

### Scenario 1: Setting Different Thresholds for Different Channels

Retail brands often sell products across multiple channels, such as offline stores, marketplaces, social media, and their own website. Each channel comes with its own set of rules and challenges, particularly regarding inventory management. For instance, marketplaces like Amazon may impose penalties for delayed fulfillment or rejected orders, making it crucial to maintain a higher inventory threshold for such channels to avoid overselling.

**Steps to Implement:**

1. **Create Separate Threshold Rules:**
   * **Threshold Rule for Shopify Channel:**
     * Navigate to the ATP app and create a new threshold rule.
     * Include the relevant products using tags.
     * Select the Shopify sales channel for this rule.
     * Set the desired threshold value to manage inventory availability for Shopify orders.
   * **Threshold Rule for Amazon Channel:**
     * Similarly, create a new threshold rule for the Amazon sales channel.
     * Include the products using appropriate tags.
     * Select the Amazon channel, considering its specific requirements and penalties.
     * Set a higher threshold value to ensure sufficient inventory is allocated for Amazon orders, reducing the risk of overselling and avoiding penalties.
2. **Save and Activate Rules:**
   * After setting the threshold values for each channel, save the rules.

{% embed url="https://youtu.be/-akXZbSUrHU" %}



### Scenario 2: Setting Thresholds for Overlapping Categories

Merchandisers often need to set product inventory thresholds to avoid overselling, particularly when managing inventory across platforms like Shopify. This task becomes more complex when dealing with overlapping product categories. For instance, a merchandiser might need to set a threshold for "Kids Shoes" and a separate, more specific threshold for "Kids Shoes on Sale." Managing these overlapping categories effectively is crucial to ensure accurate inventory availability across different segments.

**Steps to Implement:**

1. **Create Separate Threshold Rules for Each Category:**
   * **Threshold Rule for "Kids Shoes":**
     * Navigate to the ATP app and create a new threshold rule.
     * Include all "Kids Shoes" in this rule, using appropriate tags (Kids, Shoes) to capture the entire category.
     * Set the desired threshold value to manage inventory for all "Kids Shoes."
   * **Threshold Rule for "Kids Shoes on Sale":**
     * Create a separate threshold rule specifically for "Kids Shoes on Sale."
     * Include the products with previous tags as well as "Sales" tag.
     * Set a different threshold value that reflects the specific inventory needs for sale items.
2. **Arrange the Sequence of Threshold Rules:**
   * After creating the threshold rules, it is critical to arrange them in the correct order to ensure that the wider-reaching rule ("Kids Shoes") does not inadvertently override the more specific rule ("Kids Shoes on Sale").
   * Click on the balloon icon (located on the right side of the threshold rules list).
   * Drag and drop the rules to arrange them in the desired sequence. Ensure that the wide-reaching rule for "Kids Shoes" is positioned before the rule for "Kids Shoes on Sale."
   * This sequence ensures that the broader rule is applied first, with the more specific rule refining the inventory allocation for items on sale.

{% embed url="https://youtu.be/fCMNfYO6ZMs" %}



## Shipping Rules

### Scenario 3: Not Fulfilling Newly Released Products from Store

Retailers often prioritize keeping newly released products available for walk-in customers, opting to fulfill online orders for these products solely from their warehouse. For example, suppose a retailer launches a new line of limited-edition sneakers. In that case, they may want to reserve this inventory for in-store shoppers and only fulfill online orders from their central warehouse.

#### Steps to Implement

1. **Tagging New Products:**
   * Assign a unique tag to all newly released products, such as "NewRelease" or "LimitedEdition" on Shopify.
2. **Create an ATP Rule:**
   * Navigate to the `ATP App` from the launchpad and go to the `shipping` section
   * Create a new rule in the `Product and facility` tab specifically for store fulfillment restrictions.
3. **Include the Tag:**
   * In the rule setup, include the tag assigned to the newly released products to ensure this rule covers them.
4. **Select Facility Group:**
   * Choose the facility group that includes all stores.
5. **Turn Off Fulfillment:**
   * Disable fulfillment from the selected facility group, ensuring that the newly released products are not available for online order fulfillment from any store.
6. **Save the Rule:**
   * Save and activate the rule to apply these settings across all relevant facilities.

{% embed url="https://youtu.be/m0Iv4mgv8pw" %}

### Scenario 4: Restricting Product Availability to Websites Only

Retailers may choose to keep certain products exclusive to their own websites, avoiding sales on marketplaces like Amazon or eBay. This decision could be driven by several factors, such as newly released products that the retailer wants to promote through their own channels, or underperforming products on marketplaces that do not meet the desired sales expectations.

**Steps to Implement:**

1. **Tag the Products:**
   * Assign a unique tag to the products you want to restrict to your website. For example, you might use a tag like `Shopify_only` to identify these items.
2. **Create a New Shipping Rule:**
   * Navigate to the `ATP` app and create a new shipping rule.
3. **Configure the Rule:**
   * Go to the `Product and Channel` tab within the rule setup.
   * Include the relevant product tag (`Shopify_only`).
   * Select the specific marketplace channels (e.g., Amazon, eBay) where you do not want the products to be available.
4. **Disable Shipping:**
   * Turn off the shipping toggle for the selected marketplace channels. This will prevent these tagged products from being available for fulfillment on those platforms.
5. **Save and Activate:**
   * Save the rule and select `run now` option, so the restriction is applied immediately.

{% embed url="https://youtu.be/BOseH0pfBJs" %}



### Scenario 5: Restricting Shipping/BOPIS for Customized Products to Specific Facilities

Retailers may offer customized products that can only be processed at certain facilities due to the specialized equipment or expertise required. As a result, shipping these products from all facilities is not feasible. To manage this, retailers need to ensure that orders for customized products are only fulfilled from the facilities equipped to handle customization.

**Steps to Implement:**

1. **Create a Facility Group with Customization Capabilities**

* Identify the facilities that can handle customized products due to the necessary equipment or expertise.
* Create a facility group for these locations, grouping only the facilities capable of handling customization.

2. **Tag Customized Products**

* Assign the unique product tag (e.g., "Customizable") to all products that require customization services. This tag will help in applying specific rules only to these products.

3. **Create a New ATP Shipping Rule for Customization-Enabled Facilities**

* In the ATP app, navigate to the shipping section and create a rule in the "Product and Facility" tab.
* Exclude the facility group where customization is allowed (facilities with the required equipment).
* Include the product tag ("Customizable") to apply the rule to all products requiring customization.

4. **Disable Shipping for Facilities without Customization**

* Configure the rule to disable shipping for all facilities except the ones that are included in the customization-enabled facility group.
* This ensures that customized products will only be shipped from facilities that can handle customization.

5. **Repeat for BOPIS**

* Similarly, create a rule in the ATP app for BOPIS orders.
* Exclude the facilities capable of customization and disable BOPIS in the rule.
This ensures that customers selecting BOPIS will only be able to pick up customized products from facilities equipped to process them.

### Scenario 6: Managing Seasonal Demand by Region

Retailers often face varying product demands across different regions during seasonal periods. For instance, during winter, coastal regions may have a lower demand for jackets compared to high-altitude areas. To manage this effectively, retailers may want to prioritize shipping jackets from stores in coastal regions while restricting fulfillment from stores in high-demand, high-altitude areas to preserve inventory for in-store customers.

#### Steps to Implement

1. **Tagging Products**
   * Identify all products that are subject to seasonal demand variations, such as jackets, and assign them a specific tag (e.g., "Winter\_Jackets").
2. **Creating Facility Groups**
   * Identify the facilities in high-demand regions, such as those in high-altitude areas, and create a facility group for these stores.
3. **Creating ATP Rule**
   * Navigate to the Shipping page in the ATP app.
   * Create a new ATP rule for the tagged products.
4. **Applying Facility Group and Product Tag**
   * In the ATP rule, select the facility group that includes the high-demand region stores.
   * Apply the product tag to include all relevant items (e.g., "Winter\_Jackets").
5. **Saving the Rule**
   * Disable store fulfillment for the selected facility group to prevent shipment from those locations.
   * Save the ATP rule to enforce this restriction during the seasonal period.

{% embed url="https://youtu.be/0nIEN15IoHM" %}

## Pickup Rules

### Scenario 7: Disabling Pickup for Heavy Items

Retailers often carry heavy or bulky items in their catalogs, such as furniture, that are not practical for customers to pick up from stores. In such cases, retailers may want to disable the pickup option for these items, ensuring that customers are only offered delivery options.

#### Steps to Implement

1. **Tagging Heavy Items**
   * Identify all heavy or bulky items in the catalog, such as furniture, and assign them a specific tag (e.g., "Heavy\_Items").
2. **Navigating to Pickup Settings**
   * Go to the Pickup page in the ATP app where you manage pickup options.
3. **Creating an ATP Rule**
   * Create a new ATP rule to manage pickup settings for heavy items.
4. **Applying Product Tag and Facility Selection**
   * Select all facilities where the items are stored.
   * Include the product tag (e.g., "Heavy\_Items") to apply the rule to these items. If the items are limited, you can also include them by specific features.
5. **Disabling Pickup**
   * Turn off the pickup option for these items within the rule to ensure customers cannot select in-store pickup.
6. **Saving the Rule**
   * Save the ATP rule to enforce the restriction across all selected facilities.

{% embed url="https://youtu.be/7HPG18cIWiI" %}

