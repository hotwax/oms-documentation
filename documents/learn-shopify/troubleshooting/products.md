---
description: >-
  Learn how to troubleshoot product synchronization issues between HotWax
  Commerce and Shopify for seamless inventory management.
---

# Product sync

## Scenario 1: Products Not Available in HotWax Commerce

### Steps:

1. **Verification on Shopify:**
   * Go to Shopify and verify if the products are available. If not, create the missing products.
2. **Run Product Import Job:**
   * In the Job Manager app, execute the `Product Import` job. This action ensures the products are imported into HotWax Commerce.

## Scenario 2: Product Available in Shopify and Not Available in OMS

### Steps:

1. **Check Shopify Jobs Section:**
   * Navigate to the HotWax Commerce platform.
   * Access the `EXIM` section in the hamburger menu.
   * Go to the `Shopify Jobs` subsection.
2. **Review MDM Jobs:**
   * Under `MDM` (Master Data Management), look for the `Create Update Shopify Products` job.
3. **Inspect Logs:**
   * Check the logs for this job to identify any failed errors.
   * If errors are found, open the associated file containing the JSON data.
4. **Identify Error Messages:**
   * Examine the event message in the JSON file for specific error details.
   * If the error is related to Shopify, address it accordingly.
5. **Import Orders:**
   * Orders can be manually imported by selecting the Shopify config and adding the order ID in the

For technical errors, contact HotWax support for assistance. These steps ensure a systematic approach to addressing product availability issues, whether it's a Shopify or technical-related concern.

## Scenario 3: Creating a Product and its Variants in Multiple Steps

### When Does This Issue Occur?

This issue typically happens when a product and its variants are not created simultaneously in Shopify. Here’s a detailed explanation:

1. **Initial Product Creation**:\
   When the merchandising team creates a new product in Shopify without adding any variants, Shopify automatically generates a default variant.
2. **Syncing with HotWax Commerce**:\
   HotWax Commerce has a scheduled job that syncs this new product from Shopify, including the default variant, into the HotWax Commerce system.
3. **Adding Variants Later**:\
   If the merchandising team later updates the product in Shopify to add variants (e.g., sizes XS, S, M, L), new variants are created for sizes S, M, and L. However, the XS variant is updated rather than created as a new variant because Shopify considers it the original, default variant.
4. **Syncing Variants with HotWax Commerce**:\
   Another scheduled job in HotWax Commerce handles syncing these product updates, including the newly added variants. The job successfully syncs new variants like S, M, and L.
5. **The Issue with the Default Variant**:\
   The issue arises with the XS variant. Since Shopify treats it as the original default variant (and only updates it instead of creating a new one), HotWax Commerce does not recognize it as a new variant. As a result, the default variant (XS) is not properly updated in HotWax Commerce.
6. **Current Limitation**:\
   The existing job in HotWax Commerce that syncs product updates does not handle this specific case, where a previously default variant has been updated instead of created as a new variant.

### How to Avoid This Issue

To prevent this scenario from happening in the future, the merchandising team can follow these steps:

1. **Create All Product Variants at Once**:\
   The simplest way to avoid this issue is to ensure that all product variants are created in Shopify at the same time as the main product. This prevents the system from creating a default variant and ensures all variants sync correctly with HotWax Commerce.
2. **Disable Product Sync Job Temporarily**:\
   If creating all variants in one go is not possible, the merchandising team can temporarily disable the job that synchronizes products from Shopify to HotWax Commerce while they are creating products. This will prevent incomplete or default variants from syncing prematurely.
   * Navigate to the `Job Manager App` in HotWax Commerce.
   * Locate the product sync job and temporarily disable it.
3. **Re-enable the Sync Job After Product Creation**:\
   Once all product variants have been created and finalized in Shopify, the team should re-enable the product sync job. This ensures that all products, including their variants, are correctly synchronized into HotWax Commerce without any issues.
   * Return to the `Job Manager App` and re-enable the `product sync` job.

By following these steps, the team can avoid encountering this synchronization issue.

### How to Sync Products That Are Not Synced in HotWax Commerce

If certain products have not been synced from Shopify to HotWax Commerce, you can manually sync them using the HotWax Commerce admin panel. Follow these steps:

1. **Access the EXIM Menu**:\
   In HotWax Commerce, go to the `EXIM (Export/Import)` menu and select the option labeled Create Update Shopify Products\`.
2. **Choose Shopify Config and Enter Product IDs**:
   * On the next screen, you will see an option to choose a `Shopify Config`. Select the appropriate config for your Shopify store.
   * Below this, you’ll find a text box where you can enter a single Shopify Product ID or a list of Shopify Product IDs, separated by commas.
3. **Run the Sync**:\
   After selecting the config and entering the product IDs, click the `Run` button. This will immediately start the synchronization process, pulling the selected products from Shopify into HotWax Commerce.

<figure><img src="../.gitbook/assets/product sync.png" alt=""><figcaption></figcaption></figure>

## Scenario 4: Cloning Product in Shopify

This issue arises when a new product is created in Shopify by cloning an existing product. Here’s a detailed explanation of how this can lead to synchronization problems:

1. **Cloning Details**:\
   When a product is cloned in Shopify, it copies all details of the original product, including metafields. This process results in a new metafield ID for the cloned product.
2. **Product Sync**:\
   When HotWax Commerce syncs the new product, it does not recognize or sync the metafields or the new metafield IDs created for the cloned product.
3. **Product Update Issue**:\
   A problem occurs when HotWax Commerce attempts to create a metafield for the cloned product in Shopify, but the metafield already exists. HotWax Commerce sends a request to `CREATE` a metafield in Shopify, as it does not detect any existing metafields for that product. This leads to an error, as the metafield already exists.

### How to Synchronize Metafields of a Cloned Product from Shopify to HotWax Commerce

To ensure that the metafields of a cloned product are correctly synchronized in HotWax Commerce, the merchandising team can follow these steps:

1. **Access the Job Manager App**:\
   Navigate to the `Job Manager App` in HotWax Commerce.
2. **Find the Import Metafields Job**:\
   In the `More Jobs` section, locate the job labeled `Import Variant Metafields from Shopify`.
3. **Run the Job**:\
   Click the `Run Now` button to import the metafields from Shopify. This action will ensure that any metafields associated with the newly cloned product are properly synchronized.

By following these steps, you can manually sync metafields for cloned products that were not synced during the initial product import.
