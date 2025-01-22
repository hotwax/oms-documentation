# External Mappings

## Facility Blanket Customer ID

- Some Shopify POS orders lack customer details.  
- NetSuite requires every order to be associated with an existing customer.  
- Gorjana uses a **Blanket Customer ID** (named as 'Facility Blanket Customer' in the facilities app) for such orders.  
- Each facility must have its unique blanket customer ID mapped in both NetSuite and OMS to ensure smooth integration.  

## ShipSi Fulfillment Location

- Gorjana integrates with ShipSi, which assigns a unique **Fulfillment Location ID** (named as 'ShipSi Unique Code' in the facilities app) to each facility using its services.  
- This ID must be mapped in OMS to enable integration between OMS and ShipSi’s Fulfillment App.  

## NetSuite Department Code

- Facilities are grouped into departments in NetSuite using specific **NetSuite Department codes**.  
- OMS must maintain these codes to post the appropriate department code for sales orders:  
  - **Online Orders:** Always mapped to the warehouse department code.  
  - **POS Orders:** Mapped based on the purchase location.  

## Adding External Mappings in OMS

The user must follow the below steps to add the external mappings:

1. Navigate to the [Facilities App](https://facilities.hotwax.io/tabs/find-facilities).  
2. Search for the facility that needs to be configured using the search bar.  
3. Open the facility's details page by clicking on its name.  
4. Scroll to the **External Mappings** section at the bottom of the page.  
5. Click on **+ MAP FACILITY TO AN EXTERNAL SYSTEM**.  
6. Select the type of mapping to add from the dropdown menu.  
7. Enter the required mapping value in the **Identification** field in the modal.  
8. Save the mapping by clicking on the save icon in the modal.  
