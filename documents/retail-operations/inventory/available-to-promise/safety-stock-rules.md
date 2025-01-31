# Safety Stock Rules

Safety stock allows retailers to reserve inventory for walk-in customers while controlling how much product inventory is committed to online channels. It also helps mitigate the risk of order rejection caused by discrepancies between the system’s inventory and the actual stock available in stores. By maintaining safety stock, retailers can reduce the chances of receiving orders they cannot fulfill. A robust omnichannel order management system makes it easy to track and manage safety stock across all locations. For example, if a retailer has 100 units of a medium-sized Blue shirt from the NotNaked brand at their Times Square store and wants to reserve 10 units for in-store customers, the Available-to-Promise (ATP) inventory for that store would be reduced to 90 units.

## Step-by-Step Instructions to Set Up Safety Stock Rule

### Create Rule

To create a new safety stock rule, click the `Add` button on the `Safety Stock` page, located at the bottom right corner. This will open the rule configuration page where you can define the safety stock levels.

### Rule Name

Enter a descriptive and unique name for the rule, such as “Safety Stock- Retail Stores.” This name will help you quickly identify and manage the rule later.

### Rule Configuration

Set the product's safety stock level. In this case, the safety stock level will be 10 units per store, meaning you are reserving 10 units of the product at each store location to ensure sufficient stock for walk-in customers.

### Selecting Facility

Safety stock rules apply to facility groups. When creating these groups for the first time, it’s recommended to create a group that includes only your retail stores. If a similar group already exists, use the `Include` card to add that group, enforcing the 10-unit safety stock rule. You can also create custom groups as needed from the `Facility Group` page. If necessary, use the `Exclude` card to exclude specific facility groups. Alternatively, you can toggle an option to apply the rule to all stores if the same rule applies across all locations.

### Selecting Products

If you want to create a blanket rule to add safety stock on all products, you don’t have to select any products. However, if you want to add safety stock for specific products, you can select the products either by `Product Tag` or `Product Feature`.

#### Selecting Products by Tags

Use the `Include` or `Exclude` options by clicking the add button in the relevant card and selecting product tags synced from your product catalog. For example, to apply the rule specifically to the Blue Shirt, you would select the “Blue Shirt” tag.

#### Selecting Products by Features

You can also filter products based on specific attributes such as color, size, or category by using the add button. For instance, to target the Blue Shirt of Medium size for your safety stock rule, select “Color: Blue” and “Size: M.”

### Saving Configuration

Once you’ve set the safety stock level, selected the facilities, and applied the product tags or features, click the `Save` button at the bottom right corner to apply the rule. The system will now reserve 10 units of the selected products at each selected store location for walk-in customers.

{% embed url="https://youtu.be/s3jwK7BiW3A" %}
Safety Stock Rule
{% endembed %}



## Schedule Safety Stock Rule

Retailers can manage the scheduling of the ATP computation job responsible for the safety stock rule from the safety stock page. By default, ATP computation jobs are scheduled to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day.

However, if you have created a new rule and want to compute ATP immediately, you can run a job once by selecting the relevant option from the job's overflow menu.

Once the safety stock rules are created, they will be visible as rule cards on the safety stock page as per the created rule. Each rule card provides an overview of configurations and product facility selections. Retailers can click the "Edit rule" button to modify rule configurations. The rule configuration can be adjusted by clicking on the chip of the safety stock rule and updating the number.



{% embed url="https://youtu.be/lBCfzeTJqbo" %}
Scheduling Safety Stock Rule
{% endembed %}
