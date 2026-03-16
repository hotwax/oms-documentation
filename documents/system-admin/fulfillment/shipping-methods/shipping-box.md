---
description: >-
  Learn how to create customized packing boxes in HotWax Commerce, ensuring
  precise shipping cost calculations and accurate label generation.
---

# Create Shipping Boxes

HotWax Commerce lets users define these boxes for accurate shipping calculations and label generation, ensuring alignment with retailer packaging standards.

This guide outlines a step-by-step process for retailers to establish and manage boxes within HotWax Commerce.

{% hint style="warning" %}
Incorrect box selection may result in extra shipping charges for retailers.
{% endhint %}

## Creating Boxes

Users can create shipping boxes through the following steps in HotWax OMS:

1. Navigate to **HotWax OMS** > **Settings** > **General Settings**.
2. Scroll to the **Shipment Box** section.
3. Click **Add** to open the box creation form and enter the details:

| Field                         | Description                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Shipment Box ID**           | Unique identifier for the box in HotWax Commerce.                                                                                                      |
| **Description**               | Descriptive name, e.g., "Standard Medium Box".                                                                                                         |
| **Dimension Unit of Measurement** | Unit for dimensions (e.g., Inches, Centimeters).                                                                                                      |
| **Box Dimensions**            | Input width, height, and length.                                                                                                                      |

4. Click **Add** to save the box.
5. Use the **Edit** (pencil) icon to update box dimensions if needed.

The added box sizes can now be mapped in the shipment carrier setup page.

{% embed url="https://youtu.be/B_-s6FOtlok" %}
Add Shipping Box
{% endembed %}

## Adding Shipment Boxes for Specific Carriers

Retailers often integrate with multiple shipping carriers. When sending box details to a carrier, associating them helps the carrier identify the box size and calculate shipping costs accurately. Users can associate shipment boxes for carriers through the following steps in HotWax OMS:

1. Navigate to **HotWax OMS** > **Carriers**.
2. Select the carrier you want to configure.
3. Find the **Carrier Shipment Box** section.
4. Click **Add** to associate a shipment box with this carrier.
5. Select the **Shipment Box** from the dropdown (created in the previous step).
6. Enter the **Packaging Code** provided by the shipping carrier. This is essential for carrier systems to identify the box type.
7. Click **Add** to save the configuration.

These configured boxes are now ready for selection by packers during the order fulfillment process, ensuring accurate packaging aligned with specific carriers for efficient shipping.

{% embed url="https://youtu.be/dFkeW5U1F3I" %}
Add Shipping Box to Carrier
{% endembed %}
