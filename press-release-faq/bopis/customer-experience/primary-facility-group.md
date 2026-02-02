# Primary facility brand

## Merchants that sell multiple brands want to explicitly display on eCommerce which brand runs a pick-up location. 

Multi-brand merchants usually stock items from smaller brands at their primary brand’s location to avoid the substantial capital investments tied with operating brick-and-mortar locations exclusively for their smaller brands. Storing a store’s primary operating brand allows merchants to correctly reflect when a smaller brand’s item is offered for pick-up at its primary brand location on their PDP.

If an eCommerce PDP does not accurately display which brand operates the pick-up location it leads to a misleading BOPIS experience. When customers arrive at the pick-up location to collect BOPIS orders and find a different brand name store, they may become confused and wonder if they are at the wrong pick-up location.

Clearly indicating which brand operates the pick-up location on the PDP allows merchants to provide a transparent BOPIS frontend experience. These explicit details help customers to easily associate why the pick-up location of a product is different from its actual brand store. Additionally, by holding multiple brands in one location, merchants can also leverage cross-brand upselling when customers arrive at the pick-up location.

To display featured stores on PDP, merchants will need to get their Shopify pick-up app upgraded to support featuring store fields. Merchants will also need to input the primary brand for each location if it holds inventory for sibling brands as well.

### Testimony

*Internal quote*: Reflecting these details will definitely help customers to stay updated on which brand operates a pick-up location.

*Customers quote*: Perry Ellis locations at Cubavera.com should read e.g. "Naples Perry Ellis featuring Cubavera" . We only have one main Cubavera store, so most will be PE.

### FAQs

**Question 1: Is the PDP experience to display the primary brand customizable?**

Answer: Yes, BOPIS PDP experience is configurable. Merchants can propose their preferred frontend experience to their Shopify agency.

### Internal FAQs

**Question 1: If a primary brand is holding inventory for multiple brands, how will we store the inventory information in our system?**

Answer: When calculating online ATP for an item HotWax Commerce does not check its associated brand. Inventory count is recorded and updated at a facility level. Therefore, HotWax Commerce will directly sync the inventory changes at the primary brand facility that is holding inventory for other brands as well.

**Question 2: Which API’s will be used to display the operating brand details on PDP?**

Answer: The storeLookup API will return the brand operating a pick-up location.

**Question 3: How will we associate the brand name with the facility?**

Answer: HotWax Commerce will create facility groups for each brand. Users can define the brand operating a facility by associating it with a brand group. 
