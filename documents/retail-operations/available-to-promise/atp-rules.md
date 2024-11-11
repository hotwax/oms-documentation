# ATP Rules

There are two types of ATP rules: facility rules and channel rules. Facility rules are configured by selecting facility groups to include or exclude, while channel rules are configured by selecting individual configuration facilities directly. Channel facilities are selected directly due to their limited number and infrequent changes.

If a product or facility is included in both an inclusion and an exclusion selection, it will always be excluded from the rule.

## New Rule Setup

### Rule Name

Each rule has a name that serves as its main identifier throughout the app. Ensure the name is descriptive and unique.

### Rule Configuration

The rule configuration defines the settings applied to the qualifying product facilities or channels. Safety stock and thresholds should be set using number values. BOPIS and shipping configurations can be toggled on or off.

### Select Channel or Facility

BOPIS and shipping rules can be configured for either specific facilities or channels. Toggle between Facility and Channel Tabls to select inventory facility groups or configuration facilities. Facilities and channels are based on groups created through the Facility App. For more details, refer to the [Facility Groups user manual](../../system-admin/administration/facilities/manage-groups.md).

**Facility Selection**

Select facilities from a list of facility groups linked to the product store in the app's settings. Add groups to either the "Include" or "Exclude" cards. Groups that should be impacted by the rule go in the "Include" card, and those that should not be impacted go in the "Exclude" card.

**Channel Selection**

For channel-level rules, select the `Channel` tab to choose configuration facilities that will be impacted by the rule.

### Select Products

Products can be included or excluded based on tags or features like size and color. Tags are added to products in Shopify, and HotWax Commerce syncs these tags when syncing products. Tags allow easy filtering by keywords, while features help filter by high-selling sizes and colors.

**Select by Tags**

To select products by tags, click the `add` button on the top right of the include or exclude card and select the desired tag.

**Select by Features**

To select products by features, click the `add` button on the top right of the include or exclude card and select the desired feature.

After configuring all facilities and products, click the `save` button on the bottom right to save your new rule.


