**HotWax OMS Step-by-Step Demo for Mephisto**

1. **View Real-Time Inventory**
   - **Action:** Access the **Product Inventory View Report** on the HotWax OMS dashboard.
   - **Features:** 
     - See current inventory levels across all stores.
     - View inventory at a specific past moment if needed.
     - Download the report as Excel or CSV for further analysis.

2. **Generate Transfer Recommendations**
   - **Action:** Open the **Inventory Transfer Recommendation Report**.
   - **Features:** 
     - Identify locations with low inventory (destinations).
     - Find source locations with excess stock.
     - View recommended transfer quantities between stores.

3. **Customize Transfer Orders**
   - **Action:** Download the recommendation report as a CSV file.
   - **Features:** 
     - Edit the CSV to keep desired transfer orders (TOs).
     - Remove any TOs that are not needed.
     - Ensure only relevant transfers are processed.

4. **Upload Transfer Orders**
   - **Action:** Upload the customized CSV into the **IMP_TRANSFER_ORD MDM** module in HotWax OMS.
   - **Features:** 
     - Automatically create transfer orders in the system.
     - Notify source stores instantly through their fulfillment app about new transfer orders.

5. **Process Outbound Shipments**
   - **Action:** Source stores receive and process the transfer orders via their fulfillment app.
   - **Features:** 
     - Pick, pack, and ship items, creating an **OUT_TRANSFER** shipment.
     - Unit prices are based on the **Weighted Average Cost (WAC)** at the source facility.
     - The **IN_TRANSFER** shipment is automatically generated for the destination store.

6. **Receive Inbound Shipments**
   - **Action:** Destination stores receive the **IN_TRANSFER** shipments.
   - **Features:** 
     - Log received quantities in the receiving app.
     - Update the inventory levels and recalculate the WAC based on the received unit prices.

7. **Monitor Weighted Average Cost (WAC)**
   - **Action:** View WAC changes over time using charts in HotWax OMS.
   - **Features:** 
     - Track cost trends for each product.
     - Make informed pricing and procurement decisions based on WAC data.

8. **Review Comprehensive Reports**
   - **Action:** Access detailed transfer reports within HotWax OMS.
   - **Features:** 
     - View all received transfers for transparency and record-keeping.
     - Analyze **Net Transfers** to see overall quantity movements after accounting for all transfers between stores.