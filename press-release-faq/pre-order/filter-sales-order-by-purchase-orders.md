# Filter sales orders by purchase orders

## Merchants want to be able to quickly identify all the sales orders received against a purchase order’s inventory when reconciling their pre-orders.

Merchants usually use purchase orders for accepting pre-orders. The link attached on the purchase order view page will allow merchants to readily audit consumed PO inventory and its associated sales orders. The ability to audit helps merchants to easily trace when the expected pre-order allocations vary from the actual sales orders received.

Tracking sales orders received for a particular PO item gets extremely challenging when merchants want to ensure that PO allocations have been accurately made. Merchants need to map sales orders using the arrival date of a PO and then click into each sales order to validate its corresponding purchase order. If the arrival date of the on-order inventory is changed, it adds up further complexities in identifying the associated sales orders.

Merchants can easily review if the on-order inventory allocations have been correctly made by checking the list of all sales orders received for a particular PO item. Easily filtering out the associated sales orders will also allow merchants to quickly pinpoint if there is a mismatch in inventory ATP and recorded sales orders.

Merchants using HotWax Commerce will already receive the feature to filter sales orders by purchase orders. Merchants will need to go to the purchase order find page, select the purchase order for which they want to check the received sales orders and click on the link to view all associated sales orders.

### Testimony

*Internal Quote*: Filtering sales orders by purchase orders will certainly assist clients in quickly determining which orders have consumed their purchase order inventory.

### FAQs

**Question 1: Would the list of orders also include canceled orders?**

Answer: Yes, all sales orders associated with a PO, including canceled orders, will be displayed.

**Question 2: If a customer has placed a mixed cart order, would the results only reflect the pre-order item or would it also include the regular item?**

Answer: Only the order item associated with the PO is visible in the search results, however, on clicking into an order, all of the items in the order are displayed.

**Question 3: Is it still possible to view all the sales orders received against a PO, even after the on-order inventory has been received?**

Answer: Yes, PO allocations can be viewed even after the on-order inventory has been physically received because the PO association is saved as a corresponding PO on the sales order item.

**Question 4: Would it be possible to search PO allocations directly from the find order page?**

Answer: No, users must go to the purchase order find page, select the purchase order for which they want to check the received sales orders, and then click on the link to view all PO allocations.

### Internal FAQs

**Question 1: How would we identify sales orders based on the associated POs?**

Answer: To uniquely identify and filter sales orders based on the associated POs, we link orders with the corresponding PO ID.
