# Configure Product Store

A Product Store in HotWax Commerce is like the a company, or a brand if a retailer has multipe brands.

Here are the settings that can be configured in a Product Store:

**Currency:** Fetch it from the organization’s google form. Generally, it is USD.

**Weight:** Its value can be fetched from Shopify. Usually, it is WT_lb in USA else in other countries it is WT_Kg.

**Auto Approve Order:** By default, its value is N. Based on the business rules whether auto-approval of orders needs to be enabled or disabled its value can be set from the dropdown as Y or N.

**Auto Cancel Days:** By default, its value is 0. That indicates no auto cancel days should be applied. If need to pass the value enter the total no. of days for auto-cancellation. Based on that value the order will be auto-canceled.

**Sales Order and Purchase Order ID Prefix:** Usually we don’t use it but in case we need to pass prefixes of project name such as ODB and PO for sales order and purchase order respectively followed by a system-generated sequence number we can pass the value here.

**Allow Split:** By default allow split is set to Y. If we need not allow the order split its value can be set from the dropdown as Y or N. Based on this the orders will be split and multiple shipments will be created.

**Product Identifier Enum ID:** This setting changes which Identification of a product to use as its primary internalName.

**Company Name:** Name of the parent company of the retailer.