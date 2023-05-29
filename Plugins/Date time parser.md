# Date time parser

## Luxon Package

### Overview

The Luxon package is a date and time library for JavaScript applications. By using this package, HotWax parses, manipulates, formats, and displays dates and times in a convenient and efficient manner.

### Installation

To install the Luxon package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your project directory.
3. Run the following command: `npm install luxon@3.2.0`

### Usage

#### 1. Importing the Package

To use the Luxon package in your JavaScript application, import it into your codebase. Use the following import statement:

```javascript
import { DateTime } from 'luxon';
```

#### 2. Working with Dates and Times

Luxon provides a range of methods and features to work with dates and times. Here are some examples:

```javascript
// Create a DateTime object for the current time
const now = DateTime.now();

// Create a DateTime object from a specific date and time string
const date = DateTime.fromISO('2023-05-29T12:00:00');

// Get the day of the month
const day = date.day;

// Format the date and time
const formatted = date.toFormat('yyyy-MM-dd HH:mm:ss');

// Add or subtract duration
const nextDay = date.plus({ days: 1 });
const previousDay = date.minus({ days: 1 });
```

In the above examples, Luxon's `DateTime` class is used to create DateTime objects and perform various operations such as accessing specific components (e.g., day, hour), formatting, and manipulating dates and times.

#### 3. Localization and Time Zones

Luxon also supports localization and time zone handling. You can set the default time zone, convert between time zones, and format dates and times based on specific locales. Refer to the Luxon documentation for more information on these features.

### Conclusion

The Luxon package is a versatile and feature-rich date and time library for JavaScript applications. By leveraging its capabilities, you can easily handle date and time operations, format and display dates and times, and work with different time zones and locales.

For advanced usage and further customization options, consult the official documentation and API reference provided by the Luxon package.
