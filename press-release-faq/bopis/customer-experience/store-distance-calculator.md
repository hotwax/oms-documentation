
# Store distance computation

## Shoppers on B2C Shopify stores want to be able to see how far pick up locations are from them.

Store distance computation will allow customers to enter their location on a product detail page to find stores near them that offer store pick up. Results will include a distance to pick up location so that customers can make purchasing descisions based on actual travel times. Pick up locations that are markedly close to a shopper may encourage them to make a purchase that would otherwise be postponed or dropped all together.

When distance is not computed in the BOPIS PDP experience customers are required to look up store addresses on Google Maps to determine travel distance before committing to a purchase. Distance computation becomes even more important for customers when they are cross evaluating multiple pickup locations. Forcing customers to research commute factors before placing BOPIS orders had a direct negative impact on online conversion.

By building store distance computation directly into HotWax Commerce, distance from a customers location to a pickup location is calculated automatically. Merchants would otherwise have to find a third party solution and find a way to integrate it into the HotWax BOPIS PDP experience which has a much higher overhead and leaves room for inconsistent user experience quality.

Merchants already store their facility address information in HotWax Commerce, by additionally storing lattitude and longitude information, they can instantly start offering distance computation to their customers anywhere in the Shopify shopping experince as long as they have the shopper's zipcode. Most merchants that offer a PDP BOPIS experience already request customers to submit their zipcode to identify nearby facilities so they will not have to implement any changes in their user experience. Minor developer intervention will be required on their front end to add new HTML elements to show computed distance.

### Testimony

*Internal quote*: Customers will be able to frame more informed purchasing decisions based on store distance, which will help HotWax's clients in delivering a positive customer experience.

*Customer quote*: If a customer loads a page for the first time, can stores appear in proximity on the basis of the longitude and latitude of the customer?

To start using this feature, merchants can get in touch with an account manager at HotWax to help them add the required additional information.

### FAQs

**Question 1: How accurate is the computed distance?**

Answer: When the location of the user is provided as a zipcode, the distance is computed by using the official LatLong of that zipcode which may not be exactly the location of the customer. It would be fair to say that the computed distance should be consumed as *+/- 1 mile*


**Question 2: Does this support browser location by prompting the user to use thier current location when the PDP loads?**

Answer: Yes, the PDP app will ask the user for the browser location which means that they will not have to enter their zipcode manually. Instead they'll see stores near them automatically and more accurately than a simple zipcode.


**Question 3: Will "My Store" still be the first store in the list of pickup locations?**

Answer: Yes, if the customer has a saved pick up location, they will always expect to have it available in a predictable manner. They'll see nearby stores below their saved store.


### Internal FAQs

**Question 1: Do any APIs need to be extended for this feature?**

Answer: Yes. As of today two APIs are used to power the PDP BOPIS experience. Store details are fetched from the facility SOLR doc today and stores with available inventory are fetched using the checkInventory API. Fetching computed distance may have to be an additional API call that is made after valid stores and their store details are fetched. I don't think the existing APIs should support this dynamic calculation because it goes beyond their responsbilites.
