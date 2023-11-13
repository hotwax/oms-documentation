# Order Type

## What are Order Types?

## How they're setup in HotWax


## Source Data
```
{{#compare source_name '==' 'sell-on-amazon'}}136{{else compare source_name '=='  '2329312'}}145{{else compare source_name '==' '580111'}}151{{else compare source_name '=='  '1498281'}}156{{else compare source_name '==' 'pos'}}{{#compare location_id '=='  '30696177751'}}6{{else compare location_id '==' '30696210519'}}6{{else compare location_id '=='  '62714806359'}}6{{else compare location_id '==' '62714773591'}}6{{else compare location_id '=='  '31137890391'}}6{{else compare location_id '==' '35758243927'}}6{{else compare location_id '=='  '35764404311'}}6{{else compare location_id '==' '35781869655'}}6{{else compare location_id '=='  '35698901079'}}6{{else compare location_id '==' '61327048791'}}6{{else compare location_id '=='  '60903391319'}}6{{else compare location_id '==' '60903424087'}}6{{else compare location_id '=='  '60912140375'}}6{{else compare location_id '==' '60914499671'}}6{{else compare location_id '=='  '62191239255'}}6{{else compare location_id '==' '62571642967'}}6{{else compare location_id '=='  '62743052375'}}152{{else compare location_id '==' '62762614871'}}6{{else compare location_id '=='  '62739513431'}}6{{else compare location_id '==' '34464825431'}}152{{else compare location_id '=='  '62750916695'}}6{{else compare location_id '==' '31157780567'}}6{{else compare location_id '=='  '34465185879'}}152{{else compare location_id '==' '30696341591'}}152{{else compare location_id '=='  '62759370839'}}152{{else compare location_id '==' '62050500695'}}152{{else compare location_id '=='  '62778048599'}}6{{else compare location_id '==' '62288560215'}}152{{else compare location_id '=='  '62776344663'}}152{{else}}{{else}}1{{/compare}}{{else}}1{{/compare}}
```

## Formatted
```
{{#compare source_name '==' 'sell-on-amazon'}}
136
{{else compare source_name '==' '2329312'}}
145
{{else compare source_name '==' '580111'}}
151
{{else compare source_name '==' '1498281'}}
156
{{else compare source_name '==' 'pos'}}
    {{#compare location_id '==' '30696177751'}}
        6
    {{else compare location_id '==' '30696210519'}}
        6
    {{else compare location_id '==' '62714806359'}}
        6
    {{else compare location_id '==' '62714773591'}}
        6
    {{else compare location_id '==' '31137890391'}}
        6
    {{else compare location_id '==' '35758243927'}}
        6
    {{else compare location_id '==' '35764404311'}}
        6
    {{else compare location_id '==' '35781869655'}}
        6
    {{else compare location_id '==' '35698901079'}}
        6
    {{else compare location_id '==' '61327048791'}}
        6
    {{else compare location_id '==' '60903391319'}}
        6
    {{else compare location_id '==' '60903424087'}}
        6
    {{else compare location_id '==' '60912140375'}}
        6
    {{else compare location_id '==' '60914499671'}}
        6
    {{else compare location_id '==' '62191239255'}}
        6
    {{else compare location_id '==' '62571642967'}}
        6
    {{else compare location_id '==' '62743052375'}}
        152
    {{else compare location_id '==' '62762614871'}}
        6
    {{else compare location_id '==' '62739513431'}}
        6
    {{else compare location_id '==' '34464825431'}}
        152
    {{else compare location_id '==' '62750916695'}}
        6
    {{else compare location_id '==' '31157780567'}}
        6
    {{else compare location_id '==' '34465185879'}}
        152
    {{else compare location_id '==' '30696341591'}}
        152
    {{else compare location_id '==' '62759370839'}}
        152
    {{else compare location_id '==' '62050500695'}}
        152
    {{else compare location_id '==' '62778048599'}}
        6
    {{else compare location_id '==' '62288560215'}}
        152
    {{else compare location_id '==' '62776344663'}}
        152
    {{else}}
        1
    {{/compare}}
{{/compare}}
```

## Refactored
```
{
  "source_name": {
    "sell-on-amazon": 136,
    "2329312": 145,
    "580111": 151,
    "1498281": 156,
    "pos": {
      "location_id": {
        "30696177751": 6,
        "30696210519": 6,
        "62714806359": 6,
        "62714773591": 6,
        "31137890391": 6,
        "35758243927": 6,
        "35764404311": 6,
        "35781869655": 6,
        "35698901079": 6,
        "61327048791": 6,
        "60903391319": 6,
        "60903424087": 6,
        "60912140375": 6,
        "60914499671": 6,
        "62191239255": 6,
        "62571642967": 6,
        "62743052375": 152,
        "62762614871": 6,
        "62739513431": 6,
        "34464825431": 152,
        "62750916695": 6,
        "31157780567": 6,
        "34465185879": 152,
        "30696341591": 152,
        "62759370839": 152,
        "62050500695": 152,
        "62778048599": 6,
        "62288560215": 152,
        "62776344663": 152
      }
    }
  }
}
```