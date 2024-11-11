# Tax Code

Before orders can be synced with NetSuite, HotWax needs to have a NetSuite tax code configured. Currently the integration only supports a single tax code which will trigger a tax engine in NetSuite apon creation.

Tax plugins like Avatax often have a tax code ID which, if included on an order, allows Avalara to compute taxes automatically when the order is imported by HotWax.

This tax code is saved in the integration layer so it needs to be shared with the integration deployment team.