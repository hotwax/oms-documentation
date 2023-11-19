# Departments

## What are Departments?
Departments are listed first on transactions, and are useful when designating transactions and employees as part of an internal team.

They're also used to track income and expenses by each department over any time period in the reports

[Reference][departmentDocs]

## How they're setup in HotWax
The department, from a business perspective, is determined by the facility the order is placed from. Before HotWax this information was mapped from Shopify Location ID to NetSuite Department using a Celigo Script.

In HotWax, Krewe will be able to add custom Facility Identifications, allowing them to map custom values to each facility they setup. The identification types will have to be predetermined so that when HotWax syncs the order to NetSuite it is able to check specifically the Department type of facility identification and include it in the order.

Facility Identification Type
```
ORDR_ORGN_DPT
```
```xml
<Enumeration enumId="ORDR_ORGN_DPT" description="Netsuite Department Code" enumCode="ORDER_ORIGIN_DEPARTMENT" enumTypeId="FACILITY_IDENTITY" sequenceId="01"/>
```

<!-- add actual facility type id -->

## Source Data
```
{{#compare source_name '==' 'pos'}}{{#compare location_id '==' '30696177751'}}212{{else compare  location_id '==' '30696210519'}}210{{else compare location_id '==' '62714806359'}}335{{else compare  location_id '==' '62714773591'}}317{{else compare location_id '==' '31137890391'}}260{{else compare  location_id '==' '35758243927'}}294{{else compare location_id '==' '35764404311'}}295{{else compare  location_id '==' '35781869655'}}241{{else compare location_id '==' '35698901079'}}327{{else compare  location_id '==' '61327048791'}}325{{else compare location_id '==' '60903391319'}}378{{else compare  location_id '==' '60903424087'}}313{{else compare location_id '==' '60912140375'}}322{{else compare  location_id '==' '60914499671'}}320{{else compare location_id '==' '62191239255'}}356{{else compare  location_id '==' '62571642967'}}364{{else compare location_id '==' '62743052375'}}375{{else compare  location_id '==' '62762614871'}}386{{else compare location_id '==' '62739513431'}}373{{else compare  location_id '==' '34464825431'}}273{{else compare location_id '==' '62750916695'}}377{{else compare  location_id '==' '31157780567'}}266{{else compare location_id '==' '34465185879'}}222{{else compare  location_id '==' '30696341591'}}218{{else compare location_id '==' '62759370839'}}382{{else compare  location_id '==' '62050500695'}}353{{else compare location_id '==' '62778048599'}}392{{else compare  location_id '==' '62288560215'}}358{{else compare location_id '=='  
'62776344663'}}391{{else}}{{/compare}}{{else}}203{{/compare}}{{else}}203{{/compare}}
```

## Formatted

```
{
  "#compare source_name '==' 'pos'": {
    "#compare location_id '==' '30696177751'": 212,
    "#compare  location_id '==' '30696210519'": 210,
    "#compare location_id '==' '62714806359'": 335,
    "#compare  location_id '==' '62714773591'": 317,
    "#compare location_id '==' '31137890391'": 260,
    "#compare  location_id '==' '35758243927'": 294,
    "#compare location_id '==' '35764404311'": 295,
    "#compare  location_id '==' '35781869655'": 241,
    "#compare location_id '==' '35698901079'": 327,
    "#compare  location_id '==' '61327048791'": 325,
    "#compare location_id '==' '60903391319'": 378,
    "#compare  location_id '==' '60903424087'": 313,
    "#compare location_id '==' '60912140375'": 322,
    "#compare  location_id '==' '60914499671'": 320,
    "#compare location_id '==' '62191239255'": 356,
    "#compare  location_id '==' '62571642967'": 364,
    "#compare location_id '==' '62743052375'": 375,
    "#compare  location_id '==' '62762614871'": 386,
    "#compare location_id '==' '62739513431'": 373,
    "#compare  location_id '==' '34464825431'": 273,
    "#compare location_id '==' '62750916695'": 377,
    "#compare  location_id '==' '31157780567'": 266,
    "#compare location_id '==' '34465185879'": 222,
    "#compare  location_id '==' '30696341591'": 218,
    "#compare location_id '==' '62759370839'": 382,
    "#compare  location_id '==' '62050500695'": 353,
    "#compare location_id '==' '62778048599'": 392,
    "#compare  location_id '==' '62288560215'": 358,
    "#compare location_id '=='  '62776344663'": 391
  }
}
```

## Refactored
```
{
  "source_name": "pos",
  "location_id": {
    "30696177751": 212,
    "30696210519": 210,
    "62714806359": 335,
    "62714773591": 317,
    "31137890391": 260,
    "35758243927": 294,
    "35764404311": 295,
    "35781869655": 241,
    "35698901079": 327,
    "61327048791": 325,
    "60903391319": 378,
    "60903424087": 313,
    "60912140375": 322,
    "60914499671": 320,
    "62191239255": 356,
    "62571642967": 364,
    "62743052375": 375,
    "62762614871": 386,
    "62739513431": 373,
    "34464825431": 273,
    "62750916695": 377,
    "31157780567": 266,
    "34465185879": 222,
    "30696341591": 218,
    "62759370839": 382,
    "62050500695": 353,
    "62778048599": 392,
    "62288560215": 358,
    "62776344663": 391
  }
}
```

<!-- page links -->
[departmentDocs]: https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N261602.html#Departments-and-Classes-Overview