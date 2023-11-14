# Account Source

## What is Account Source?
Account source is a custom field that Krewe has added in their custom Customer Import form. The account source of a customer helps track where a customer bought a Krewe product from for the firs time. For example, if a customer first placed an order on Instagram, that will become their account source. 

Within NetSuite, the account soucre field maps the customer to a correspondig marketing campaign. Reports are then run on those marketing campaigns to analyze new customer attribution by sales channel.

## How they're setup in HotWax Commerce
We've created Party Classification Groups in HotWax Commerce that have the same internal ID as the Sales Channel Enumeration so that during synchronization with NetSuite their source can be easiliy identified. At the time of customer creation in HotWax, it's linked Sales Order's sales channel ID is used to identify which Party Classification Group to add it to.

When HotWax generates a feed of new customers to be synced with NetSuite, it identifies all customers that do not have a NetSuite Identification and the party classification that they're linked to.

