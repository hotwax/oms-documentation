---
description: >-
  Learn how to create customized packing boxes in HotWax Commerce, ensuring
  precise shipping cost calculations and accurate label generation.
---

# Create Shipping Boxes

HotWax Commerce lets users define these boxes for accurate shipping calculations and label generation, ensuring alignment with retailer packaging standards.

This guide outlines a step-by-step process for retailers to establish and manage boxes within HotWax Commerce.

Note:\
Incorrect box selection may result in extra shipping charges for retailers.

## Creating Boxes

Users can create shipping boxes through the following steps:

* Navigate to `HotWax Commerce` > `Hamburger Menu` > `Settings` > `General Settings`
* Scroll down to find the `Shipment Box` section
* Click `Add` to open the box creation form and add details such as:

| Field                         | Description                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Shipment Box ID               | Shipment BOX ID with which the boxes will be recognized in HotWax Commerce                                                                             |
| Description                   | Small description of the box, e.g., "Standard Box Square"                                                                                              |
| Dimension Unit of Measurement | Specify the measurement unit for box dimensions, e.g., Inches, Centimeters, etc.                                                                       |
| Box Dimensions                | Input width, height, and length in the chosen unit. Example: If using inches, entering "10" for box height implies the height of the box is 10 inches. |

* Click `Add` to save the box, the box will now appear in the shipment box section.
* Use the `pencil` icon to edit box dimensions if needed.

The added box sizes can now be mapped from in the shipment carrier setup page.

{% embed url="https://youtu.be/B_-s6FOtlok" %}
Add Shipping Box
{% endembed %}

## Adding Shipment Boxes for Specific Carriers

Retailers often integrate with multiple shipping carriers. When sending box details to a carrier using just the box name, this association helps the carrier identify the box size and calculate shipping costs accordingly. Users can associate the shipment boxes for shipment carriers through the following steps:

* In the HotWax Commerce interface, navigate to the `Settings` > `Carrier Setup` page.
* Scroll to the bottom of the `Carrier Setup` page to find the `Carrier Shipment Box` section.
* Click `Add` within the `Carrier Shipment Box` section to initiate box configuration.
* Within the newly opened form, select the preferred shipping boxes from the dropdown menu. The dropdown menu displays boxes created in the general settings.
* Select the appropriate carrier from the available options in the Shipment Box dropdown menu. This links the selected box with the carrier for shipping purposes.
* Add packaging codes, if provided by shipping carriers, as it helps in their system's identification of box types. This maps carrier-specific box sizes with the boxes in Hotwax Commerce for easy identification by the carrier.
* After adding box details and packaging codes (if applicable), save the carrier shipment box configurations by clicking the `Add` button within the form.

These configured boxes are now ready for selection by packers during the order fulfillment process, ensuring accurate packaging aligned with specific carriers for efficient shipping.

{% embed url="https://youtu.be/dFkeW5U1F3I" %}
Add SHipping Box to Carrier
{% endembed %}
