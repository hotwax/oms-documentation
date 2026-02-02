# Manually trigger PO ATP allocation

## When retailers upload a PO after receiving pre-orders, they want to automatically associate those pre-orders with the corresponding PO.

Sometimes retailers accept pre-orders on a product before actually uploading its PO into the system. After uploading a PO, the functionality to manually trigger PO ATP allocation allows retailers to associate all the captured pre-orders received against that PO and accordingly adjust the PO ATP. The ability to associate all the unallocated pre-orders with their upcoming PO also lets retailers accept new pre-orders on the uncommitted PO ATP without overselling. Once the associations are made, automatically linking promise dates with existing pre-orders and also reflecting it on the PDP, lets retailers communicate accurate fulfillment timelines with customers.

PO ATP is currently only reduced when a pre-order is imported into pre-order parking. If a merchant uploads a PO after receiving its pre-orders, manual intervention is required to update the PO ATP count and sync promise dates for already captured pre-orders. Manually clicking into each pre-order and verifying its corresponding PO is tedious and often increases the chances of errors. Failing to associate a pre-order results in incorrect computation of PO ATP, retailers may then overpromise PO ATP that should have been committed. Inability to automatically map pre-orders with their PO also leads to increased dependency on the HotWax support team. 

The OMS will search for all pre-orders in the pre-order parking that have a missing promise date and the corresponding PO. For all the identified pre-orders, accurate PO ATP count and promise dates will be automatically updated, without any manual effort. If there is any additional PO ATP left, retailers can readily accept pre-orders on it and also display promise dates for them on PDP.

Retailers using HotWax Commerce for pre-orders will receive the functionality to “Allocate Sales Orders”. Retailers will need to go to the purchase order find page, select the purchase order and click on the link to manually trigger PO ATP allocation. 

### Testimony

*Internal quote*: The feature “Manually trigger PO ATP allocation” will be a great add on for clients who accept pre-orders before uploading a PO.

### FAQs

**Question 1: What if a PO’s arrival dates are changed after associating it with the sales orders?**

Answer: In case there are any changes in the arrival dates of a purchase order, HotWax will read the new dates, email customers about the dates changes.

### Internal FAQs

**Question 1: How would we communicate the promise dates for the sales orders received?**

Answer: HotWax will fetch the arrival date from the PO and then email the promise date details to customers who have placed their orders for that item.

**Question 2: What would happen if the sales orders received on PO is more than the PO ATP?**

Answer: All the sales orders will be associated with their respective PO sequentially. If orders received for an item are more than the actual PO’s ATP then all surplus orders will wait for the upcoming PO. In case a retailer has no PO lined-up, then those additional orders can be canceled or kept on hold.

**Question 3: What if a merchant is using a draft POs for accepting pre-orders?**

Answer: Merchants may accept pre-orders using their draft POs and then later update those with their actual purchase orders. HotWax will read changes in the purchase orders and will accordingly make adjustments to corresponding sales orders.

