# Managing Jobs for Inventory Rules

As discussed in every individual rule, all jobs for safety stock, threshold, store pickup, and shipping are available on individual pages. These jobs are scheduled by default to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day. However, if you have created a new rule for any of the configurations and want to compute ATP immediately for that, you need to go to the relevant page and click on the 'Run Now' from the overflow menu of the job.

Retailers can view the history of job runs and disable the job from the overflow menu.

Each rule card provides an overview of configurations and product facility selections. Retailers can click the `Edit rule` button to modify rule configurations. The rule configuration can be adjusted by toggling the store pickup and shipping options on or off, or by setting values for threshold and safety stock by clicking on the number of chips.

The ATP computation job is different for all the types of rules, such as all the threshold rules will have one job, safety stock rules have one job, and so on. The Job computes atp on the basis of all the created rules on that page based on the sequence of the rules.

## Understanding the Cascade of Inventory Rule

Each omnichannel configuration, safety stock, threshold, BOPIS, and shipping can have multiple rules to target specific product and facility selections. Since there are multiple rules for each configuration type, products and facilities may overlap among rules. When this occurs, the last rule in the sequence of rules overrides previous rules for a unique combination of products and facilities.

### Example: Setting Thresholds for Shirts and Blue Shirts

Consider a retailer who wants to set different inventory thresholds for general shirts and blue shirts. The retailer sets a threshold of 5 for all shirts, allowing a minimum of 5 shirts to be available for ATP. However, for blue shirts, the retailer wants to increase the threshold to 10 to ensure there are enough available for demand.

To achieve this, the retailer would create two rules:

1. **General Shirt Rule** (Threshold set to 5 shirts)  
   - Applies to all shirts, allowing a minimum of 5 shirts to be available as network-level buffer stock.

2. **Blue Shirt Rule** (Threshold set to 10 shirts)  
   - Applies only to blue shirts, requiring a minimum of 10 blue shirts to be available as network-level buffer stock.

These rules should be listed in the correct sequence to ensure that the specific blue shirt rule overrides the general shirt rule for blue shirts while maintaining the broader threshold for all other shirts.

A balloon icon in the bottom right corner allows retailers to collapse or expand the inventory rules. Retailers can collapse the inventory rules to rearrange the sequencing of the inventory rules according to the cascade.
