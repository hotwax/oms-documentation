# Cycle Count Sync

HotWax Commerce offers the Cycle Count app, which empowers store associates to record the reasons behind inventory variances.

## Export cycle count from HotWax
Schedule a job in the HotWax integration layer to generate a feed completed cycle counts.

Check these SFTP locations for exported Cycle Count feeds
```
/home/{sftp-username}/netsuite/inventoryadjustment/csv
```

## Import inventory adjustments into NetSuite
Schedule a job in NetSuite to import the cycle count variance file produced by HotWax
```
HC_importInventoryAdjustment
```