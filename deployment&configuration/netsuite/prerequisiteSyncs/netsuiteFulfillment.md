# NetSuite Fulfillment Facilities

If NetSuite will be used by any facilities for fulfillment, a NetSuite Fulfillment group must be created in the OMS. All facilities that will be using NetSuite for fulfillment should be added to this group during setup.

Facility Group Data
```
<FacilityGroup description="Facilities which Supports NetSuite fulfillment" facilityGroupId="NETSUITE_FULFILLMENT" facilityGroupName="NetSuite Fulfillment" facilityGroupTypeId="FULFILLMENT"/>
```

Why this group is important:
After orders are allocated, HotWax pushes a brokered item feed to systems with items that they need to fulfill. If items of an order are allocated to a facility that uses NetSuite, then adding that facility to this group will indicate to HotWax that items brokered to these facilities need to have their allocation updated in NetSuite.

To learn more about how brokered items are synced with NetSuite, checkout the full integration documentation.