# Create Rules

There are two types of ATP rules, facility and channel rules, where facility rules are configured by selecting facility groups to include or exclude to be impacted, channel rules are configured by selecting configuration facilities directly. Channel facilities are selected directly because there are usually only a handful of them and they don't change very often.

If a product or facility is included in both an inclusion selection and an exclusion selection, then it will always be excluded from the rule.

## Creating a new rule

### Rule name
Each rule, regardless of its type, has a name. This name is the main way the rule will be identified throughout the app, make sure to use a descriptive and unique name.

### Rule configuration
The rule configuration next to the rule name defines what setting will be applied to the qualifying product facilities or channels. When setting safety stock and thresholds, this should be a number value and when setting BOPIS and shipping configurations toggle on to enable and off to disable.

### Select Channel or Facility
BOPIS and Shipping rules can be configured for either specific facilities or channels. Select Facility or Channel to toggle between selecting inventory facility groups or configuration facilities.

**Facility Selection**

When selecting facilities, you'll be presented with a list of facility groups that are linked to the product store selected in the settings page of the app.

Groups can be added to either the "Include" card or "Exclude" cards. Facility groups that should be impacted by the rule you're creating should be added to the "Include" card and any groups that should not be impacted should be included in the "Exclude".

**Channel Selection**

If a rule will be applied at a channel level, then select the "Channel" tab to show configuration facilities that can be selected to be impacted by this rule.

### Select products

Products can be included or excluded based on tags or features like size and color. Tags allow you to easily filter products by explicitly linked keywords. Features are helpful to filter by when trying to select high-selling sizes and colors of products.

**Select by tags**

To select products by tags, click on the add button on the top right of the include or exclude card and select the desired tag.

**Select by features**

To select the product by features, click on the add button on the top right of the include or exclude card and select the desired feature.


Once the rule has all facilities and products configured, click the save button on the bottom right to save your new rule.
