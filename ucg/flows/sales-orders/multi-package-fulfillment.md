# Multi Package Fulfillment

Frank and Oak sells a catalog of outerwear for colder climates. Though most of the time a B2C sales order is shipped in one package, sometimes a single item fulfillment in NetSuite may contain multiple packages, each with its unique tracking code. When importing these fulfilments into the OMS its important to ensure that we import both trackign codes against the fulfillment in HotWax to ensure that customers on Shopify get all of their tracking info.

When posting tracking details to Shopify with multiple tracking codes, the OMS will also need to verify that they are being posted correctly instead of just posting the first one found on the Ship Group.