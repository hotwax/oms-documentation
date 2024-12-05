# Threshold Rules

Retail brands sell products across various channels such as offline stores, marketplaces, social media, and their own websites. Managing inventory across these platforms can be challenging, as each channel may have different rules and penalties for order fulfillment delays or rejections. For example, platforms like Amazon impose penalties for delayed fulfillment or rejected orders, which makes managing inventory crucial.

To address this, retailers can create threshold rules to maintain a buffer stock for specific channels, reducing the risk of overselling due to inventory inaccuracies. This buffer stock is known as the **Inventory Threshold** and is applied across the network level rather than individual stores, helping ensure there’s a reserve of stock available before committing to online sales channels.

For instance, if the brand **NotNaked** sets an Inventory Threshold of 10 units for Blue Shirts across their stores, the Available-to-Promise (ATP) inventory will be adjusted to ensure enough buffer stock is reserved.

#### Example:

* Times Square Inventory: 100 Units
  * Safety Stock: 10 Units
  * Available Inventory: 100 - 10 = 90 Units
* Brooklyn Inventory: 100 Units
  * Safety Stock: 10 Units
  * Available Inventory: 100 - 10 = 90 Units
* Broadway Inventory: 50 Units
  * Safety Stock: 10 Units
  * Available Inventory: 50 - 10 = 40 Units

**Total ATP**:\
90 (Times Square) + 90 (Brooklyn) + 40 (Broadway) = 220 Units

Then, subtract the Inventory Threshold from the Total ATP to get the total inventory available for online orders:\
**Total Inventory for Online Orders** = Total ATP - Threshold\
\= 220 Units - 10 Units = 210 Units available for online orders.

Now, let’s walk through how to set up a threshold rule for one inventory channel, such as Shopify, for a Blue Medium-Sized Shirt from the brand NotNaked.

## Step-by-Step Instructions to Set Up a Threshold Rule for One Inventory Channel

### Create Rule

To create a new threshold rule, click the `Add` button located on the `Threshold` page at the bottom right corner. This will open the **Rule Configuration** page, allowing you to set a new inventory threshold.

### Rule Name

Enter a descriptive and unique name for your threshold rule. For example, you could name it “Shopify Blue Shirt Threshold.” This name will help you easily identify and manage the rule across your sales channels.

### Rule Configuration

Set the threshold value in this section. This value defines the amount of inventory buffer you want to maintain for the selected channel. For this example, set a threshold of 10 units, ensuring that the product maintains 10 network-level safety stock units to mitigate the risk of overselling.

### Selecting Channel

As we discussed previously, network-level inventory configurations on products are done through the `Channel Configuration` facility. Therefore, you will see the list of all the channel configuration facilities here. You can choose the relevant configuration facility to ensure the rules are applied network-wide on that channel.

### Selecting Products

If you want to create a blanket rule to apply the threshold on all products, no product selection is required. However, if you want to apply the threshold rule to specific products, you can select them either by `Product Tag` or `Product Feature`.

#### Selecting Products by Tags

Use the `Include` or `Exclude` options by clicking the add button in the relevant card and selecting product tags synced from your product catalog. For instance, to apply the rule specifically to the Blue Shirt, you would select the “Blue Shirt” tag.

#### Selecting Products by Features

You can also filter products based on specific attributes such as color, size, or category by using the add button. For example, to target the **Blue Shirt** in size **Medium**, select “Color: Blue” and “Size: M” for your threshold rule.

### Saving Configuration

Once you’ve configured the threshold value, selected the channels, and chosen the products, click the `Save` button at the bottom right corner to finalize and save the rule. The system will now apply the threshold, ensuring that the selected product has a 10-unit buffer stock reserved across your chosen channel.



{% embed url="https://youtu.be/KhiHlfEJb9A" %}
Threshold Rule Setup
{% endembed %}

## Setting Threshold Rules for Multiple Channels

If you want to create a threshold rule for multiple inventory channels, you will need to create separate channels and select channel config facility as per the requirement. To learn how to create new channels and manage threshold configurations, refer to our **Detailed User Manual** for further instructions.

## Schedule Threshold Rule

Retailers can manage the scheduling of the ATP computation job responsible for the threshold rule from the threshold page. By default, ATP computation jobs are scheduled to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day.

However, if you have created a new rule and want to compute ATP immediately, you can run a job once by selecting the relevant option from the job's overflow menu.

Once the threshold rules are created, they will be visible as rule cards on the threshold page as per the created rule. Each rule card provides an overview of configurations and product facility selections. Retailers can click the "Edit rule" button to modify rule configurations. The rule configuration can be adjusted by clicking on the threshold chip and updating the number.

{% embed url="https://youtu.be/UekJap0j5dQ" %}
Scheduling Threshold Rule
{% endembed %}





