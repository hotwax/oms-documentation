# Parse date time with Luxon

## Overview

The Luxon package is javascript wrapper that deals with date and time. This package is used in HotWax Commerce to parse datetime format of the external systems and convert it with what is excepted in HotWax. 

## Use Case

### Case 1: Change Purchase Orders date time format in the Import App

Date formats vary from country to country. When creating Purchase Orders, retailers prefer to follow date formats based on region-specific vendors. While US vendors prefer the MM/DD/YYYY format, most European vendors follow DD/MM/YYYY format. If the purchase order date format does not have the arrival date in the same format within the Import App, the upload will not be successful. The Luxon package helps retailers to view and select their desired date format.
## Usage

To use the Luxon package, refer to the [official documentation](https://moment.github.io/luxon/#/?id=luxon) for detailed instructions and customization options. Make sure to check the compatibility of the package version with your application before integration.
