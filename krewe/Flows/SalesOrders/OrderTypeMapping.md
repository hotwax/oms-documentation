# Order Type

## What are Order Types?

## How they're setup in HotWax
Order types are determined by either by the Shopify Source of the order or the the facility the order is placed from if its a POS sale. Before HotWax this information was mapped from Shopify Source and Location ID to NetSuite Order Type using a Celigo Script.

In order to map a custom NetSuite value for each Sales Channel

For mapping source based on POS facility ID, Krewe will be able to add custom Facility Identifications, allowing them to map custom values to each facility they setup. The identification types will have to be predetermined so that when HotWax syncs the order to NetSuite it is able to check specifically the Sales Channel type of facility identification and include it in the order.

<details>
    <summary>All Order Types</summary>
    <table>
    <thead>
        <tr>
        <th>Internal ID</th>
        <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>WEB</td>
        </tr>
        <tr>
        <td>6</td>
        <td>IN-STORE</td>
        </tr>
        <tr>
        <td>7</td>
        <td>OPENING</td>
        </tr>
        <tr>
        <td>8</td>
        <td>PRE-ORDER</td>
        </tr>
        <tr>
        <td>9</td>
        <td>BACKORDER</td>
        </tr>
        <tr>
        <td>10</td>
        <td>REORDER</td>
        </tr>
        <tr>
        <td>107</td>
        <td>WARRANTY</td>
        </tr>
        <tr>
        <td>108</td>
        <td>SAMPLE SALE</td>
        </tr>
        <tr>
        <td>109</td>
        <td>PRIVATE EVENT</td>
        </tr>
        <tr>
        <td>110</td>
        <td>MANUFACTURING DEFECT</td>
        </tr>
        <tr>
        <td>111</td>
        <td>GIFTING PULL</td>
        </tr>
        <tr>
        <td>112</td>
        <td>PR MEDIA</td>
        </tr>
        <tr>
        <td>113</td>
        <td>EXCHANGE</td>
        </tr>
        <tr>
        <td>114</td>
        <td>EMPLOYEE ORDER</td>
        </tr>
        <tr>
        <td>115</td>
        <td>LOST PACKAGE</td>
        </tr>
        <tr>
        <td>116</td>
        <td>REPLACEMENT</td>
        </tr>
        <tr>
        <td>117</td>
        <td>CONSIGNMENT</td>
        </tr>
        <tr>
        <td>118</td>
        <td>KREWE Foundation</td>
        </tr>
        <tr>
        <td>119</td>
        <td>MIS-PICK</td>
        </tr>
        <tr>
        <td>120</td>
        <td>ACL</td>
        </tr>
        <tr>
        <td>121</td>
        <td>BLACK FRIDAY/CYBER MONDAY</td>
        </tr>
        <tr>
        <td>122</td>
        <td>Manufacturing Pull</td>
        </tr>
        <tr>
        <td>123</td>
        <td>DONATION</td>
        </tr>
        <tr>
        <td>124</td>
        <td>CUSTOMER SERVICE</td>
        </tr>
        <tr>
        <td>125</td>
        <td>CORPORATE GIFTING</td>
        </tr>
        <tr>
        <td>126</td>
        <td>LOFT</td>
        </tr>
        <tr>
        <td>127</td>
        <td>OPTICAL ORDER</td>
        </tr>
        <tr>
        <td>129</td>
        <td>OUT OF STOCK</td>
        </tr>
        <tr>
        <td>130</td>
        <td>SHOPIFY DOWN</td>
        </tr>
        <tr>
        <td>131</td>
        <td>DOA</td>
        </tr>
        <tr>
        <td>133</td>
        <td>TEST</td>
        </tr>
        <tr>
        <td>134</td>
        <td>APRIL SALE</td>
        </tr>
        <tr>
        <td>136</td>
        <td>AMAZON</td>
        </tr>
        <tr>
        <td>137</td>
        <td>PR CELEBRITY</td>
        </tr>
        <tr>
        <td>138</td>
        <td>PR INFLUENCER</td>
        </tr>
        <tr>
        <td>139</td>
        <td>KREWE Anniversary</td>
        </tr>
        <tr>
        <td>140</td>
        <td>USO WARRANTY</td>
        </tr>
        <tr>
        <td>141</td>
        <td>ORDER ERROR</td>
        </tr>
        <tr>
        <td>142</td>
        <td>TRUNKSHOW</td>
        </tr>
        <tr>
        <td>143</td>
        <td>SUPPLY ORDER FOR RETAIL</td>
        </tr>
        <tr>
        <td>144</td>
        <td>ASSOCIATE DAMAGE</td>
        </tr>
        <tr>
        <td>145</td>
        <td>INSTAGRAM</td>
        </tr>
        <tr>
        <td>146</td>
        <td>WHOLESALE BLUE LIGHT</td>
        </tr>
        <tr>
        <td>147</td>
        <td>VISION EXPO</td>
        </tr>
        <tr>
        <td>149</td>
        <td>REMAKE - USO</td>
        </tr>
        <tr>
        <td>150</td>
        <td>REMAKE - KREWE LAB</td>
        </tr>
        <tr>
        <td>151</td>
        <td>FACEBOOK</td>
        </tr>
        <tr>
        <td>152</td>
        <td>EVENTING</td>
        </tr>
        <tr>
        <td>156</td>
        <td>GLOBAL-E</td>
        </tr>
        <tr>
        <td>157</td>
        <td>STORE CREDIT</td>
        </tr>
        <tr>
        <td>158</td>
        <td>GIFT EXCHANGE</td>
        </tr>
        <tr>
        <td>159</td>
        <td>LAB DAMAGE</td>
        </tr>
        <tr>
        <td>160</td>
        <td>FRAME DAMAGED BY CASE</td>
        </tr>
        <tr>
        <td>161</td>
        <td>TRADESHOW</td>
        </tr>
        <tr>
        <td>162</td>
        <td>SUPPLY ORDER FOR RETAIL</td>
        </tr>
        <tr>
        <td>163</td>
        <td>SUPPLY</td>
        </tr>
        <tr>
        <td>164</td>
        <td>MARDI GRAS</td>
        </tr>
        <tr>
        <td>165</td>
        <td>LOOP EXCHANGE</td>
        </tr>
        <tr>
        <td>166</td>
        <td>WHOLESALE SAMPLES</td>
        </tr>
        <tr>
        <td>167</td>
        <td>WHOLESALE SAMPLES</td>
        </tr>
    </tbody>

</details>

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