# Departments

## What are Departments?

Departments are listed first on transactions, and are useful when designating transactions and employees as part of an internal team.

They're also used to track income and expenses by each department over any time period in the reports.

[Reference](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section\_N261602.html#Departments-and-Classes-Overview)

## How they're setup in HotWax

The department, from a business perspective, is determined by the facility the order is placed from. Before HotWax this information was mapped from Shopify Location ID to NetSuite Department using a Celigo Script.

In HotWax, Gorjana will be able to add custom Facility Identifications, allowing them to map custom values to each facility they setup. The identification types will have to be predetermined so that when HotWax syncs the order to NetSuite it is able to check specifically the Department type of facility identification and include it in the order.

<details>

<summary>Facility Identification mappings for Department</summary>

**Facility Identification Type**

```
ORDR_ORGN_DPT
```

**Enumeration**

```xml
<Enumeration description="Netsuite Department Code" enumId="ORDR_ORGN_DPT" enumCode="ORDER_ORIGIN_DEPARTMENT" enumTypeId="FACILITY_IDENTITY" sequenceId="01" />
```

**Mappings with Departments**

```xml
<FacilityIdentification facilityId="WH" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="2" />
<FacilityIdentification facilityId="56" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="149"/>
<FacilityIdentification facilityId="64" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="152"/>
<FacilityIdentification facilityId="106" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="180"/>
<FacilityIdentification facilityId="67" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="156"/>
<FacilityIdentification facilityId="49" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="145"/>
<FacilityIdentification facilityId="72" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="161"/>
<FacilityIdentification facilityId="122" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="190"/>
<FacilityIdentification facilityId="58" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="151"/>
<FacilityIdentification facilityId="53" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="143"/>
<FacilityIdentification facilityId="65" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="153"/>
<FacilityIdentification facilityId="42" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="136"/>
<FacilityIdentification facilityId="69" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="158"/>
<FacilityIdentification facilityId="78" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="163"/>
<FacilityIdentification facilityId="29" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="130"/>
<FacilityIdentification facilityId="74" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="4"/>
<FacilityIdentification facilityId="48" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="140"/>
<FacilityIdentification facilityId="76" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="137"/>
<FacilityIdentification facilityId="46" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="142"/>
<FacilityIdentification facilityId="57" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="150"/>
<FacilityIdentification facilityId="20" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="16"/>
<FacilityIdentification facilityId="54" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="148"/>
<FacilityIdentification facilityId="70" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="155"/>
<FacilityIdentification facilityId="28" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="129"/>
<FacilityIdentification facilityId="75" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="127"/>
<FacilityIdentification facilityId="68" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="157"/>
<FacilityIdentification facilityId="71" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="159"/>
<FacilityIdentification facilityId="43" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="138"/>
<FacilityIdentification facilityId="101" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="175"/>
<FacilityIdentification facilityId="47" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="141"/>
<FacilityIdentification facilityId="100" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="181"/>
<FacilityIdentification facilityId="52" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="147"/>
<FacilityIdentification facilityId="26" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="128"/>
<FacilityIdentification facilityId="51" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="139"/>
<FacilityIdentification facilityId="73" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="125"/>
<FacilityIdentification facilityId="50" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="144"/>
<FacilityIdentification facilityId="14" facilityIdenTypeId="ORDR_ORGN_DPT" fromDate="2024-05-01 05:31:34.056" idValue="126"/>
```

</details>