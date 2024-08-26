# ATP Use Cases

## Threshold Rules

### Scenario 1: Setting Different Thresholds for Different Channels

Retail brands often sell products across multiple channels, such as offline stores, marketplaces, social media, and their own website. Each channel comes with its own set of rules and challenges, particularly regarding inventory management. For instance, marketplaces like Amazon may impose penalties for delayed fulfillment or rejected orders, making it crucial to maintain a higher inventory threshold for such channels to avoid overselling.

**Steps to Implement:**

1. **Create Separate Threshold Rules:**
   - **Threshold Rule for Shopify Channel:**
     - Navigate to the ATP app and create a new threshold rule.
     - Include the relevant products using tags.
     - Select the Shopify sales channel for this rule.
     - Set the desired threshold value to manage inventory availability for Shopify orders.

   - **Threshold Rule for Amazon Channel:**
     - Similarly, create a new threshold rule for the Amazon sales channel.
     - Include the products using appropriate tags.
     - Select the Amazon channel, considering its specific requirements and penalties.
     - Set a higher threshold value to ensure sufficient inventory is allocated for Amazon orders, reducing the risk of overselling and avoiding penalties.

2. **Save and Activate Rules:**
   - After setting the threshold values for each channel, save the rules.

### Scenario 2: Setting Thresholds for Overlapping Categories

Merchandisers often need to set product inventory thresholds to avoid overselling, particularly when managing inventory across platforms like Shopify. This task becomes more complex when dealing with overlapping product categories. For instance, a merchandiser might need to set a threshold for "Kids Shoes" and a separate, more specific threshold for "Kids Shoes on Sale." Managing these overlapping categories effectively is crucial to ensure accurate inventory availability across different segments.

**Steps to Implement:**

1. **Create Separate Threshold Rules for Each Category:**
   - **Threshold Rule for "Kids Shoes":**
     - Navigate to the ATP app and create a new threshold rule.
     - Include all "Kids Shoes" in this rule, using appropriate tags to capture the entire category.
     - Set the desired threshold value to manage inventory for all "Kids Shoes."

   - **Threshold Rule for "Kids Shoes on Sale":**
     - Create a separate threshold rule specifically for "Kids Shoes on Sale."
     - Tag the products that fall under the "Sale" category.
     - Set a different threshold value that reflects the specific inventory needs for sale items.

2. **Arrange the Sequence of Threshold Rules:**
   - After creating the threshold rules, it is critical to arrange them in the correct order to ensure that the wider-reaching rule ("Kids Shoes") does not inadvertently override the more specific rule ("Kids Shoes on Sale").
   - Click on the balloon icon (located on the right side of the threshold rules list).
   - Drag and drop the rules to arrange them in the desired sequence. Ensure that the wide-reaching rule for "Kids Shoes" is positioned before the rule for "Kids Shoes on Sale."
   - This sequence ensures that the broader rule is applied first, with the more specific rule refining the inventory allocation for items on sale.

## Store Fulfillment Rules

### Scenario 3: Not Fulfilling Newly Released Products from Store

Retailers often prioritize keeping newly released products available for walk-in customers, opting to fulfill online orders for these products solely from their warehouse. For example, suppose a retailer launches a new line of limited-edition sneakers. In that case, they may want to reserve this inventory for in-store shoppers and only fulfill online orders from their central warehouse.

### Steps to Implement

1. **Tagging New Products:**
   - Assign a unique tag to all newly released products, such as "NewRelease" or "LimitedEdition" on Shopify.
  
2. **Create an ATP Rule:**
   - Navigate to the ATP App from the launchpad and go to the shipping section
   - Create a new rule specifically for store fulfillment restrictions.

3. **Include the Tag:**
   - In the rule setup, include the tag assigned to the newly released products to ensure this rule covers them.

4. **Select Facility Group:**
   - Choose the facility group that includes all stores.

5. **Turn Off Fulfillment:**
   - Disable fulfillment from the selected facility group, ensuring that the newly released products are not available for online order fulfillment from any store.

6. **Save the Rule:**
   - Save and activate the rule to apply these settings across all relevant facilities.

### Scenario 4: Restricting Product Availability to Webstores Only

Retailers may choose to keep certain products exclusive to their own webstores, avoiding sales on marketplaces like Amazon or eBay. This decision could be driven by several factors, such as newly released products that the retailer wants to promote through their own channels, or underperforming products on marketplaces that do not meet the desired sales expectations.

**Steps to Implement:**

1. **Tag the Products:**
   - Assign a unique tag to the products you want to restrict to your webstore. For example, you might use a tag like `Shopify_only` to identify these items.

2. **Create a New Shipping Rule:**
   - Navigate to the ATP app and create a new shipping rule.

3. **Configure the Rule:**
   - Go to the **Product and Channel** tab within the rule setup.
   - Include the relevant product tag (`Shopify_only`).
   - Select the specific marketplace channels (e.g., Amazon, eBay) where you do not want the products to be available.

4. **Disable Shipping:**
   - Turn off the shipping toggle for the selected marketplace channels. This will prevent these tagged products from being available for fulfillment on those platforms.

5. **Save and Activate:**
   - Save the rule and select run now option, so the restriction is applied immediately. 

