# Multi-Currency Sales Orders and Returns

Retailers operating globally often receive payments in the customer's local currency, which differs from the retailer's base currency (Shopify shop currency). The Multi-Currency Order and Return Management feature by HotWax Commerce significantly enhances operational efficiency and financial clarity for retailers dealing with international transactions. By automating currency conversion and reconciliation, retailers can manage global sales more effectively, ensuring accurate financial reporting and simplified accounting processes. This feature not only improves the day-to-day operations of retailers but also enhances the overall customer experience, making it a valuable addition to the HotWax Commerce platform.

### Here’s how this feature works in HotWax Commerce:

1. **Accurate Currency Representation:**

In HotWax Commerce, the `createUpdateOrder` is used to import orders from Shopify. When an order is imported, the `presentmentCurrencyUom` field in the `OrderHeader` entity is populated with the currency in which the customer made the payment (e.g., MXN for Mexico). This ensures that all transaction details accurately reflect the customer's local currency, enhancing transparency.

2. **Detailed Payment Preferences:**

During the order creation process, `OrderPaymentPreference` saves the payment preference currency and conversion rate. For example, if the payment preference currency is USD, the converted amount is stored in the `currentPaymentAmount` field, while the original amount paid in the local currency (e.g., MXN) is saved in the `presentmentAmount` field. This detailed record helps in maintaining clear financial records and simplifies financial reconciliation.

3. **Fallback Mechanism for Exchange Rates:**

If the exchange rate is missing during order import, the system uses the `UomConversion` to check for conversion details in the Order Management System (OMS). This ensures that even in the absence of an immediate exchange rate, the order can still be processed correctly, minimizing disruptions in workflow.

4. **ERP Sync:**

During ERP synchronization, the system retrieves the converted order amount from the `OrderPaymentPreference` entity, where it was stored during the order creation process. This converted amount, already in the retailer’s base currency, is synchronized with the ERP system. Additionally, the exchange rate used for the conversion is stored in the `OrderPaymentPreference` entity, ensuring accurate financial records.

5. **Order Header Currency Maintenance:**

The order header is updated and uses the customer's currency (e.g., MXN) instead of the product store currency. This maintains the integrity of the original transaction details and provides accurate data for both the customer and the retailer.

6. **Enhanced Financial Reporting:**
For financial reporting and accounting, the feature provides a dual view capability, showing both the original payment currency and the base currency equivalent. The order detail page in HotWax Commerce displays the converted amount, local amount, and conversion rate in the order payment preference section. This dual reporting capability aids in better financial analysis and reporting, crucial for businesses with international transactions.

The automation of currency conversion and detailed recording of payment preferences simplify accounting processes. Retailers can easily reconcile their accounts and generate accurate financial reports.
