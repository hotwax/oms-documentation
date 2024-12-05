# Scheduling Inventory Rules

Retailers can manage the scheduling of the job responsible for ATP (Available to Promise) rules from the top of the page. By default, ATP rule jobs are scheduled to run at midnight to ensure ATP calculations occur when store traffic is minimal, making the inventory ATP ready before the start of the day.

Retailers can view the history of job runs, disable a job, or run a job once by selecting the relevant option from the job's overflow menu.

Each rule card provides an overview of configurations and product facility selections. Retailers can click the "Edit rule" button to modify rule configurations.  
The rule configuration can be adjusted by toggling the store pickup and shipping options on or off, or by setting values for threshold and safety stock by clicking on the number chips.

## Understanding the Cascade of Inventory Rule

Each omnichannel configuration, safety stock, threshold, BOPIS, and shipping can have multiple rules to target specific product and facility selections. Since there are multiple rules for each configuration type, products and facilities may overlap among rules. When this occurs, the last rule in the sequence of rules overrides previous rules for a unique combination of products and facilities.


Consider a retailer who wants to set different inventory thresholds for general shirts and blue shirts. The retailer sets a threshold of 5 for all shirts, allowing a minimum of 5 shirts to be available as network-level buffer stock. However, for blue shirts, the retailer wants to increase the threshold to 10 to ensure enough is available for demand.

To achieve this, the retailer would create two rules:

1. **General Shirt Rule** (Threshold set to 5 shirts)  
   - Applies to all shirts, allowing a minimum of 5 shirts to be available as network-level buffer stock.

2. **Blue Shirt Rule** (Threshold set to 10 shirts)  
   - Applies only to blue shirts, requiring a minimum of 10 blue shirts to be available as network-level buffer stock.

These rules should be listed in the correct sequence to ensure that the specific blue shirt rule overrides the general shirt rule for blue shirts while maintaining the broader threshold for all other shirts.

A balloon icon in the bottom right corner allows retailers to collapse or expand the inventory rules. Retailers can collapse the inventory rules to rearrange the sequencing of the inventory rules according to the cascade.

{% embed url ="https://youtu.be/EYvFXLzoe88" %} Change Rule Sequence {% endembed %}







