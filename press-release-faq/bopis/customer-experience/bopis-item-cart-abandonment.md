# BOPIS item cart abandonment

## BOPIS items in a shopping cart will have a valid till time attached to validate inventory availability at the time of checkout.

Customers with BOPIS items in their shopping carts may not place their orders right after adding items to their cart. If checkout is delayed for an extended period of time, in-store inventory may no longer be available. Computing an inventory validity time based on when a BOPIS item was added to the cart lets customers know that the store pick-up will be voided after a specified duration. Displaying how many units are left when stock drops below a certain level also encourages customers to make decisive purchasing decisions. The ability to re-check an item’s in-store availability status ensures customers stay aligned with the latest delivery options.

Customers may leave their shopping carts unattended for indefinite periods. The longer a customer abandons their cart with BOPIS items, the more likely it is that walk-in customers will buy that inventory. A BOPIS item may also become ineligible for pick-up if the postponed checkout time contradicts with the day specific store’s operating hours or defined lead time. Customers may then proceed to place an order only to find that the BOPIS item in their shopping cart is no longer in stock, or the pickup window has shifted. Inability to express the quantity available in-store and cart’s valid time results in an inconsistent BOPIS experience.

Explicitly displaying a timer on a cart’s BOPIS items will let customers know that inventory availability will need to be re-calculated after the valid time has expired. Clearly indicating stock levels for items with limited availability helps customers make informed decisions. Stating valid till time and latest in-store availability for items in a cart will also ensure a transparent BOPIS experience.

Merchants will need to communicate their preferred ‘valid till’ time for BOPIS items in the shopping cart. Once an item expires, customers will be required to update their cart before proceeding to checkout. If an item is no longer available for pick-up from the selected store, HotWax will add a line item property that the item is no longer available for pick-up at the selected store. Regular shipping methods will be displayed on the checkout page for items that are expired, letting customers who still wish to continue with the purchase get items shipped to their home. Minor developer intervention will be required to create a customized frontend experience for the shopping cart and checkout page. 

### Testimony

*Internal quote*: HotWax developed the BOPIS item cart abandonment feature because in-store product availability frequently changes. This shopping cart customization will ensure that customers know if a product is still available in-store after they revisit their shopping cart.

*Customer quote*: Customer adds item as store pickup when available at store location X, abandons cart. When a customer comes back to the website the item is no longer available at that specific store. 

### FAQs

**Question 1: Is it possible to calculate the valid till time based on the available inventory quantity?**

Answer: Validity duration for a shopping cart will be set based on the stock availability of items in the cart. If an item in the cart is in low stock, the cart's valid till time can be set accordingly. Additionally, merchants may configure different validity durations for stock levels as per their preferences.

**Question 2: Will HotWax inform customers directly on the checkout page if an item is no longer available for pick-up from the selected store?**

Answer: Since store pick-up voids after a specified duration, customers need to update their shopping cart to revalidate their BOPIS items’ validity. Once the cart has been updated, HotWax will display the pick-up eligibility on the cart page itself. Customers may then choose to remove BOPIS items that are no longer available for store pick-up.

### Internal FAQs

**Question 1: Which APIs will be used to display the number of units left for BOPIS items in the shopping cart?** 

Answer: checkInventory API is called to fetch the available stock quantity by facility. If a facility ID is provided, it’ll return the inventory count at that particular facility.

**Question 2: How will we set the shopping cart item’s validity time based on the inventory levels?**

Answer: We have saved the map of validity time at different stock levels in the frontend. Valid time will be displayed on cart items based on which stock level tier it falls into. 

<table>
  <tr>
    <th>In-stock units  </th>
    <th>Valid till time</th>
  </tr>
  <tr>
    <td>50</td>
    <td>4 Hours</td>
  </tr>
  <tr>
    <td>20</td>
    <td>2 Hours</td>
  </tr>
  <tr>
    <td>10</td>
    <td>1 Hour</td>
  </tr>
    
</table>
</body>
</html>

If a BOPIS item in the cart has 24 units available at the selected store then the item’s valid time will be 2 hours. Merchants may configure this mapping based on their order velocity and in-store footfall. 
