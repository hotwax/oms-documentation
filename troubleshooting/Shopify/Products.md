## 1. Product Auditing

### Scenario: Products Not Available in HotWax OMS

#### Steps:
1. **Verification on Shopify:**
   - Go to Shopify and verify if the products are available. If not, create the missing products.

2. **Run Product Import Job:**
   - In the Job Manager app, execute the "Product Import" job. This action ensures the products are imported into HotWax OMS.

### Scenario: Product Available in Shopify and Not Available in OMS

#### Steps:
1. **Check Shopify Jobs Section:**
   - Navigate to the HotWax Commerce platform.
   - Access the EXIM section in the hamburger menu.
   - Go to the "Shopify Jobs" subsection.

2. **Review MDM Jobs:**
   - Under MDM (Master Data Management), look for the "Create Update Shopify Products" job.

3. **Inspect Logs:**
   - Check the logs for this job to identify any failed errors.
   - If errors are found, open the associated file containing the JSON data.

4. **Identify Error Messages:**
   - Examine the event message in the JSON file for specific error details.
   - If the error is related to Shopify, address it accordingly.
   - For technical errors, contact HotWax support for assistance.

These steps ensure a systematic approach to addressing product availability issues, whether it's a Shopify or technical-related concern.
