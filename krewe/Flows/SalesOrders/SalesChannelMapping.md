# Sales Channels

## What are Sales Channels?
<!-- include how they are uniquely handled in Krewe and why -->

## How they're setup in HotWax

## Source Data
```
{{#compare source_name '==' 'pos'}}{{#compare location_id '==' '30696177751'}}12{{else compare  location_id '==' '30696210519'}}10{{else compare location_id '==' '62714806359'}}144{{else compare  location_id '==' '62714773591'}}156{{else compare location_id '==' '31137890391'}}65{{else compare  location_id '==' '35758243927'}}94{{else compare location_id '==' '35764404311'}}43{{else compare  location_id '==' '35781869655'}}45{{else compare location_id '==' '35698901079'}}121{{else compare  location_id '==' '61327048791'}}128{{else compare location_id '==' '60903391319'}}171{{else compare  location_id '==' '60903424087'}}104{{else compare location_id '==' '60912140375'}}112{{else compare  location_id '==' '60914499671'}}110{{else compare location_id '==' '62191239255'}}139{{else compare  location_id '==' '62571642967'}}155{{else compare location_id '==' '62743052375'}}167{{else compare  location_id '==' '62762614871'}}176{{else compare location_id '==' '62739513431'}}166{{else compare  location_id '==' '34464825431'}}75{{else compare location_id '==' '62750916695'}}169{{else compare  location_id '==' '31157780567'}}69{{else compare location_id '==' '34465185879'}}26{{else compare  location_id '==' '30696341591'}}22{{else compare location_id '==' '62759370839'}}172{{else compare  location_id '==' '62050500695'}}137{{else compare location_id '==' '62778048599'}}181{{else compare  location_id '==' '62288560215'}}142{{else compare location_id '=='  
'62776344663'}}180{{else}}{{/compare}}{{else}}1{{/compare}}{{else}}1{{/compare}} 

```

## Formatted Data
```
{
  "#compare source_name '==' 'pos'":{
    "#compare location_id '==' '30696177751'": 12,
    "#compare  location_id '==' '30696210519'": 10,
    "#compare location_id '==' '62714806359'": 144,
    "#compare  location_id '==' '62714773591'": 156,
    "#compare location_id '==' '31137890391'": 65,
    "#compare  location_id '==' '35758243927'": 94,
    "#compare location_id '==' '35764404311'": 43,
    "#compare  location_id '==' '35781869655'": 45,
    "#compare location_id '==' '35698901079'": 121,
    "#compare  location_id '==' '61327048791'": 128,
    "#compare location_id '==' '60903391319'": 171,
    "#compare  location_id '==' '60903424087'": 104,
    "#compare location_id '==' '60912140375'": 112,
    "#compare  location_id '==' '60914499671'": 110,
    "#compare location_id '==' '62191239255'": 139,
    "#compare  location_id '==' '62571642967'": 155,
    "#compare location_id '==' '62743052375'": 167,
    "#compare  location_id '==' '62762614871'": 176,
    "#compare location_id '==' '62739513431'": 166,
    "#compare  location_id '==' '34464825431'": 75,
    "#compare location_id '==' '62750916695'": 169,
    "#compare  location_id '==' '31157780567'": 69,
    "#compare location_id '==' '34465185879'": 26,
    "#compare  location_id '==' '30696341591'": 22,
    "#compare location_id '==' '62759370839'": 172,
    "#compare  location_id '==' '62050500695'": 137,
    "#compare location_id '==' '62778048599'": 181,
    "#compare  location_id '==' '62288560215'": 142,
    "#compare location_id '=='  '62776344663'": 180
  },
  "else": 1
}

```

## Refactored

{
  "source_name": "pos",
  "location_id": {
    "30696177751": 12,
    "30696210519": 10,
    "62714806359": 144,
    "62714773591": 156,
    "31137890391": 65,
    "35758243927": 94,
    "35764404311": 43,
    "35781869655": 45,
    "35698901079": 121,
    "61327048791": 128,
    "60903391319": 171,
    "60903424087": 104,
    "60912140375": 112,
    "60914499671": 110,
    "62191239255": 139,
    "62571642967": 155,
    "62743052375": 167,
    "62762614871": 176,
    "62739513431": 166,
    "34464825431": 75,
    "62750916695": 169,
    "31157780567": 69,
    "34465185879": 26,
    "30696341591": 22,
    "62759370839": 172,
    "62050500695": 137,
    "62778048599": 181,
    "62288560215": 142,
    "62776344663": 180
  }
}
