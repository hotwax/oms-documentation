# Custom date format in PO upload

## Configurable date formats let users upload their POs without worrying about syntax compatibility.

Adding dates in a custom format while uploading purchase orders lets merchandisers load PO dates based on the formats adopted in the originating system or operating country. Merchandisers can view and select their preferred date format directly from the Import App’s settings page. The ability to use custom date formats allows uploading POs quickly and accurately.

Date representations vary from country to country. Merchandisers creating POs usually follow date formats based on region-specific vendors. Static date formats force merchandisers to convert PO dates in a spreadsheet to match HotWax’s format. Unaware merchandisers upload POs in their default formats and map all the PO CSV fields, only to later learn about the specific format to be followed. Merchandisers then have to manually edit and re-upload the POs after the app displays an invalid date output. Reloading POs gets extremely tedious and also increases the chances of errors.

The Import App will let merchandisers configure the date format before uploading POs, allowing them to upload their POs without matching their dates to the predefined format. The ability to access all the date formats before uploading POs will also ensure correct date formats are followed.

Date formats can be configured and mapped before uploading in the settings page and also corrected if there is a discrepancy after uploading and reviewing the PO.

### Testimony

*Internal quote*: HotWax has clients based in multiple countries, custom date format in PO upload will help them set their dates as per their preferred formats.

*Customer quote*: While importing PO from the Import App, it only accepts mm/dd/yyyy format. Tried uploading a PO with dd/mm/yyyy format or mm/dd/yy format but it did not accept.

### FAQs

**Question 1: Do we need to select the date format every time before uploading a PO?**

Answer: No, the selected date formats will be saved at the company level. If users want to switch to some other date format, they may also update their existing date format and save the new format.

**Question 2: Is it possible to change the date format after uploading a PO?**

Answer: Yes, date formats can be updated after uploading and while reviewing. Users can also access the list of all the available date formats directly from the Import App.

### Internal FAQs

**Question 1: Where will HotWax Commerce store merchant-specific custom date formats?**

Answer: HotWax will create a product store setting to save the custom date format data selected at the company level.

**Question 2: Which tool will provide the data on date formats supported by HotWax?**

Answer: Import App users can check the [Luxon date time format](https://moment.github.io/luxon/#/formatting?id=table-of-tokens) to view the list of all available date formats right from the settings page.