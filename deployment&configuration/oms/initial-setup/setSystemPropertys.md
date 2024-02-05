# Configure System Properties

{% hint style="info" %}
For non-US retailers, it is crucial to customize system property data. The default settings are tailored for US retailers, so adjustments are needed to align with your business location.
{% endhint %}

The System Property data encompasses a range of configurations that influence the fundamental settings governing how your instance operates. Ensuring accuracy in these configurations is essential.

To modify System Properties, navigate to the General page within the Settings section of the OMS. Follow these steps:

1. **Access General Settings:**
   - Go to the Hamburger Menu.
   - Select the Settings Section.
   - Click on General to open the General settings page.

2. **Update Currency Configuration:**
   - Locate `systemPropertyId="currency.uom.id.default"`.
   - Set the `systemPropertyValue` to your preferred currency.

3. **Update Country Configuration:**
   - Find `systemPropertyId="country.geo.id.default"`.
   - Set the `systemPropertyValue` to the country where your business operates.

4. **Set Shipment Weight Unit:**
   - Find `systemPropertyId="shipment.default.weight.uom"`.
   - Set the `systemPropertyValue` to either "WT_kg" or "WT_lb," depending on your preference.
