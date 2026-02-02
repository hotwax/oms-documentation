# Generic webhook support 
 
## Parameterized webhook endpoint URLs allow users to connect their OMS to webhook topics with clear actions and integration definitions.

Generic webhook support allows setting parameterized and logically built naming conventions across all webhook integrated systems. Standardized webhook URLs ensure accurate mappings for multiple systems and also help developers easily run a transformation or scale operations without any unpredictable URL variation.

Systems, like Shopify, broadcasts order or inventory updates to OMS at hardcoded webhook URLs. Developers end-up creating URLs based on their preferences when integrating new systems with OMS. Inconsistent naming often results in difficulty to manage integrations across multiple systems.

Clearly defining URL naming conventions will ensure uniform webhook URLs for all the systems connected with OMS. System generated webhook URLs will allow developers to work around multiple systems systematically and independently extend operations. Deriving consistent URL parameters for the integrated systems will also help in deploying new transformations without restructuring the existing URL framework.

To start using standardized naming conventions users will need to re-subscribe their existing webhooks to the new URLs. For initial set-up, developers will need to feed the operation/action, configuration and transformation ID. When establishing a new integration with OMS, only the configuration ID will be swapped, keeping the standard format unchanged.

### Testimony

*Internal quote*: Standardization has made managing webhook URLs easy. Decoupling configs and transformations now allows developers to deploy a new integration without editing the existing code.

### FAQs

**Question 1: Is it possible to edit the parameters once they are defined in the system?**

Answer: Yes, HotWax may edit existing parameters to define new standardized naming conventions.

### Internal FAQs

**Question 1: Where would we save URL naming conventions?**

Answer: URL naming conventions will be saved in a data configuration table.

**Question 2: How would we decouple integration and end points?**

Answer: All the URLs are saved and mapped in a data configuration table. Instead of managing hardcoded URLs, we are mapping the action and config with the transformation ID. The abstraction in the table allows updating the current action and config without changing the URL.

**Question 3: How would we add a new location when integrating a new system with OMS?** 

Answer: Data management configuration in HotWax allows editing of the existing URL framework. A new URL/location will be supported by defining the required action and attaching a transformation.

