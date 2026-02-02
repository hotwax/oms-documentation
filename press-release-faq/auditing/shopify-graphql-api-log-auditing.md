# Shopify GraphQL API log auditing 
 
## When bulk operations are pushed to Shopify, the ability to examine GraphQL API audit logs and failed scenarios to quickly fix the key problem areas greatly expedites troubleshooting.

When executing bulk operations to Shopify,  mutations may fail for various reasons, like exceeding rate limits, or requesting mutation on an object that no longer exists. Shopify GraphQL API log auditing lets users troubleshoot failed or partially failed mutations. Complete transparency into API logs helps to easily debug the problem without any external support.

Auditing integrations are usually not user accessible, so every time when an operation fails, developer intervention is required. Manually auditing communication between systems is also a resource and time intensive process, often taking upwards of 6 hours. When multiple systems are mutating the same object in Shopify pinpointing exact error pathways becomes an added challenge for developers.

Shopify GraphQL API log auditing will allow users to gain full visibility into why certain operations may be failing and even search through extensive logs by keywords and specific IDs. Users can view API audit logs and instantly identify failed records without the need to contact HotWax support. User accessible audit logs will also ensure quick corrective actions. 

Merchants using HotWax Commerce will already receive the feature to audit GraphQL API logs. Merchants will need to go to the MDM page and select Shopify GraphQL Job from the Shopify jobs section.

### Testimony

*Internal quote*: Auditing and troubleshooting unexpected system behavior has become easy and fast.

### FAQs

**Question 1: How would API logs account for partially failed mutations?**

Answer: Developers can check the files pushed by HotWax and can also verify how the file has been processed by Shopify. API logs display “error” as the response message in a specific row pinpointing which particular operation has been failed.

### Internal FAQs

**Question 1: Is it possible to look up an operation for a product?**

Answer: Yes, users can go to the find look up screen and search API logs by Product ID and other keywords.

**Question 2: Would API logs also show jobs with the running status?**

Answer: Yes, jobs that are currently being processed will be displayed with a running status.