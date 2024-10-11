---
'0': d
'1': e
'2': s
'3': c
'4': r
'5': i
'6': p
'7': t
'8': i
'9': o
'10': 'n'
'11': ':'
'12': '-'
'13': ' '
'14': T
'15': h
'16': i
'17': s
'18': ' '
'19': d
'20': o
'21': c
'22': u
'23': m
'24': e
'25': 'n'
'26': t
'27': ' '
'28': d
'29': e
'30': s
'31': c
'32': r
'33': i
'34': b
'35': e
'36': s
'37': ' '
'38': t
'39': h
'40': e
'41': ' '
'42': P
'43': i
'44': c
'45': k
'46': l
'47': i
'48': s
'49': t
'50': ' '
'51': F
'52': u
'53': 'n'
'54': c
'55': t
'56': i
'57': o
'58': 'n'
'59': a
'60': l
'61': i
'62': t
'63': 'y'
'64': ' '
'65': f
'66': o
'67': r
'68': ' '
'69': S
'70': t
'71': o
'72': r
'73': e
'74': ' '
'75': T
'76': r
'77': a
'78': 'n'
'79': s
'80': f
'81': e
'82': r
'83': ' '
'84': F
'85': u
'86': l
'87': f
'88': i
'89': l
'90': l
'91': m
'92': e
'93': 'n'
'94': t
'95': ','
'96': ' '
'97': p
'98': r
'99': o
'100': v
'101': i
'102': d
'103': i
'104': 'n'
'105': g
'106': ' '
'107': a
'108': ' '
'109': s
'110': t
'111': r
'112': e
'113': a
'114': m
'115': l
'116': i
'117': 'n'
'118': e
'119': d
'120': ' '
'121': a
'122': p
'123': p
'124': r
'125': o
'126': a
'127': c
'128': h
'129': ' '
'130': f
'131': o
'132': r
'133': ' '
'134': s
'135': t
'136': o
'137': r
'138': e
'139': ' '
'140': a
'141': s
'142': s
'143': o
'144': c
'145': i
'146': a
'147': t
'148': e
'149': s
'150': ' '
'151': t
'152': o
'153': ' '
'154': e
'155': f
'156': f
'157': i
'158': c
'159': i
'160': e
'161': 'n'
'162': t
'163': l
'164': 'y'
'165': ' '
'166': p
'167': a
'168': c
'169': k
'170': ' '
'171': i
'172': t
'173': e
'174': m
'175': s
'176': ' '
'177': w
'178': h
'179': i
'180': l
'181': e
'182': ' '
'183': a
'184': c
'185': c
'186': u
'187': r
'188': a
'189': t
'190': e
'191': l
'192': 'y'
'193': ' '
'194': t
'195': r
'196': a
'197': c
'198': k
'199': i
'200': 'n'
'201': g
'202': ' '
'203': t
'204': h
'205': e
'206': m
'207': ' '
'208': i
'209': 'n'
'210': ' '
'211': H
'212': o
'213': t
'214': W
'215': a
'216': x
'217': .
description: >-
  This document describes the Picklist Functionality for Store Transfer
  Fulfillment.
---

# Transfer Order Picklist

When packing items for a Transfer Order, store associates face two key challenges:

1. Associates are required to pack items into boxes while simultaneously entering the details into HotWax (OMS). This leads to confusion and mistakes if the packing process is not properly tracked.
2. If items are packed without updating HotWax in real-time, associates might forget which items have been packed into which boxes, causing issues when they try to generate shipping labels later.

To address these challenges, a Picklist Document feature has been implemented, allowing store associates to generate a PDF document that lists all open items in the Transfer Order. This feature serves as a physical tracking sheet during the packing process. This streamlined workflow allows associates to complete one task at a time: first packing and tracking with the picklist, and then performing data entry in HotWax. This approach reduces confusion and errors, leading to improved accuracy and minimized delays in operations.

The picklist includes the following fields:

| Field               | Description                                  |
| ------------------- | -------------------------------------------- |
| No.                 | Serial number of the item.                   |
| Product Description | A brief description of the product.          |
| Qty Ordered         | The quantity of the item that was ordered.   |
| Qty Picked          | The quantity of the item picked for packing. |
| Box Number          | The box in which the item has been packed.   |



{% file src="../.gitbook/assets/Sample.pdf" %}

## How to Use the Picklist Document

Follow these steps to use the picklist functionality, and refer to this [document](https://docs.hotwax.co/documents/store-operations/inventory/transfer-order-management/transfer-order-fulfillment) for a detailed process on transfer order fulfillment..

#### 1. Generate the Picklist Document:

* After opening the TO in the transfer order section of the fulfillment app, click on the `Picklist` button on the bottom right corner of the page next to the `Create Shipment` Button.
* A PDF document will be generated, listing all open items in the TO.
* Print the picklist or keep it available for reference.

#### 2. Pack Items Using the Picklist:

* As you pack the items into boxes, use the picklist to mark which items are going into which boxes.
* Fill in the `Qty Picked` and `Box Number` fields on the picklist as you pack.

#### 3. Enter Data into HotWax:

* Once packing is complete, refer to the picklist and enter the packed items into HotWax.
* For each box, select the items that were packed, then click Create Shipment.
* Generate the shipping label for each box based on the items packed.

#### 4. Complete the Process:

* Continue using the picklist for any additional boxes or items in the TO.
* Once all shipments are created and labels generated, the process is complete.

<figure><img src="../.gitbook/assets/transfer order picklist.png" alt=""><figcaption></figcaption></figure>
