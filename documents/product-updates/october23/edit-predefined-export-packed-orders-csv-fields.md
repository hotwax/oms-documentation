---
description: >-
  Merchandisers now have the option to modify and reorganize pre-set fields in
  the Export Packed Orders CSV file directly within the Export Packed Orders
  page.
---

# Edit predefined Export Packed Orders CSV fields

<figure><img src="https://www.hotwax.co/hubfs/Export%20Packed%20Orders.png" alt=""><figcaption><p>Edit and Rearrange CSV Fiels</p></figcaption></figure>

Efficient integration and the seamless flow of information between different systems in the retail tech stack are essential in e-commerce order management. When integrating with legacy systems, data exchange relies heavily on CSV files, but retailers often face data inconsistency when exporting or importing files since each system interprets data differently.

For Instance, one of our clients uses the eHidden3 logistic system to ship the orders. All the packed orders need to be exported and shared in CSV format with eHidden3 so that it can generate shipping labels and ship the products from the facility to the customer’s location. However, the Order ID field in Hotwax Commerce is called Order Value in eHidden3, and the sequencing of fields in eHidden3 is also different from the sequencing of the fields in HotWax Commerce.

| Fields in HotWax Commerce | Fields in eHidden3 |
| ------------------------- | ------------------ |
| Order ID                  | Order Value        |
| Shipment ID               | Shipment ID        |
| To Name                   | To Name            |
| Full Address              | Full-to-address    |

These disparities in data format significantly disrupt the seamless transfer of data between systems. When the data format misaligns, it often requires manual intervention, where team members invest time and effort to manually reformat the data to match the receiving system's requirements. This manual intervention not only introduces the risk of human error but also leads to a noticeable reduction in operational efficiency.

To address these challenges, we've introduced a solution in our latest update. Users can now control and modify the sequence of predefined Export Packed Orders CSV fields on the Export Packed Orders page. This flexibility helps users to edit the field names of individual fields and swiftly reorganize the fields as per the format of the receiving system. This update allows users to rectify sequencing issues on the fly, ensuring a smoother data transfer process and reducing the need for manual intervention.
