# Shipping Boxes

Retailers employ specific packing boxes tailored to their unique product packaging needs. HotWax Commerce provides users with the ability to define their customized packing boxes. This feature empowers store associates during order fulfillment, allowing them to pack products according to these predefined boxes. These packing boxes are readily accessible for store associates to specify during fulfillment, ensuring accurate specifications that directly impact shipping cost calculations and label generation by the shipping carriers.

This guide outlines a step-by-step process for retailers to establish and manage boxes within HotWax Commerce. Creating customized box configurations ensures precise shipping cost calculations and accurate label generation, aligning with the retailer's specific packaging standards.

Retailers can create and manage the boxes through following ways:

## 1. Creating Boxes in HotWax Commerce

Configuring boxes in the general settings ensures packaging consistency and accuracy throughout the application, aiding store associates in selecting appropriate box during order fulfillment. Incorrect box selection may result in extra shipping charges for retailers. Users can create shipping boxes through following steps:

- Navigate to `HotWax Commerce` > `Hamburger Menu` > `Settings` > `General Settings` Page.
- Scroll down to find the 'Shipment Box' section.
- Click 'Add' to open the box creation form and add details such as:

**Shipment Box ID:** Shipment BOX ID with which the boxes will be recognized in HotWax Commerce
**Description:** Small description of the box, e.g., "Standard Box Square"
**Dimension Unit of Measurement:** Specify the measurement unit for box dimensions e.g. Inches, Centimetres, etc.
**Box Dimensions:** Input width, height, and length in the chosen unit. Example: If using inches, entering "10" for box height implies the height of the box is 10 inches.

- Click 'Add' to save the box, the box will now appear in the shipment box section.
- Use the pencil icon to edit box dimensions if needed.

The added box sizes can now be mapped from in the shipment carrier setup page.

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/B_-s6FOtlok" frameborder="0" allowfullscreen></iframe>
  <figcaption>Add Shipping Box</figcaption>
</figure>

## 2. Adding Shipment Box for Specific Carriers

Associating boxes with specific carriers ensures accurate shipping calculations and smooth logistics for each shipping carrier used. User can associate the shipment boxes for shipment carriers through following steps:

- In the HotWax Commerce interface, navigate to `Settings` > `Carrier Setup` page.
- Scroll to the bottom of the Carrier Setup page to find the "Carrier Shipment Box" section.
- Click "Add" within the Carrier Shipment Box section to initiate box configuration.
- Within the newly opened form, select the preferred shipping boxes from the dropdown menu. The dropdown menu displays boxes created in the general settings.
- Select the appropriate carrier from the available options in the Shipment Box dropdown menu. This links the selected box with the carrier for shipping purposes.
- Add packaging codes, if provided by shipping carriers, as it helps in their system's identification of box types. This maps carrier-specific box sizes with the boxes in Hotwax Commerce for easy identification by the carrier.
- After adding box details and packaging codes (if applicable), save the carrier shipment box configurations by clicking the `Add` button within the form.

These configured boxes are now ready for selection by packers during the order fulfillment process, ensuring accurate packaging aligned with specific carriers for efficient shipping.

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/dFkeW5U1F3I" frameborder="0" allowfullscreen></iframe>
  <figcaption>Associate Shipping Boxes with carriers</figcaption>
</figure>

## Adding Shipment Box to Order During Fulfillment

Selecting suitable boxes during order fulfillment is crucial for accurate shipping labels and cost-effective packaging. Store associates play a pivotal role in this process to ensure optimal packaging efficiency and reduced shipping costs. Store associates can select appropriate boxes through following steps:

- Navigate to the specific order details within the `In Progress` tab of the `Fulfillment` App
- Within the order details section, locate and click on the `Add Boxes` option which helps store associates in:
- Add the required number of boxes corresponding to the order items, ensuring adequate packaging space without excess boxes
- Store associates can choose to pack multiple order items into one box, reducing shipping costs and environmental impact.
- Upon adding boxes, store associates can further specify box types for individual order items. Click on `select box` optioon against the order item and navigate through the dropdown menu to select appropriate option corresponding to each item's size and packaging requirements.
- After appropriately packing all items and selecting box types click 'Pack' to update the shipping carrier for shipping label generation with the least shipping charges for the selected boxes.

By diligently specifying both the total box quantity for the entire order and the appropriate box types for individual order items, store associates ensure accurate shipping labels, cost-effective packaging, and efficient utilization of available space, ultimately reducing shipping expenses for retailers.

<figure>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/385HSXa8Pdc" frameborder="0" allowfullscreen></iframe>
  <figcaption>Add Shipment Box during Fulfillment</figcaption>
</figure>






