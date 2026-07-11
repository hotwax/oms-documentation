---
description: >-
  Explore the unique characteristics of the WMS feed utilized by New Era Caps
  Japan, featuring a fixed byte length format for efficient data organization.
---

# WMS Feed

## WMS Feed

The WMS feed is a fixed byte length format rather than a CSV or a JSON.

### What is a fixed byte file format?

A fixed byte file format, also known as a fixed-width file format, is a type of flat file where each field or column has a fixed width or length. In contrast to delimited file formats (such as CSV or tab-delimited), where fields are separated by a specific delimiter character (like a comma or tab), fixed-width files allocate a predetermined number of characters for each field, and the data is organized accordingly.

Here are key characteristics of a fixed byte file format:

1. **Field Width:** Each field in the file has a fixed width or length specified in terms of the number of characters. For example, a field might be defined as 10 characters wide.
2. **Padding:** If the actual data for a field does not use the full allocated width, padding characters (typically spaces) are added to fill the remaining space. This ensures that each field has a consistent length.
3. **Positional Structure:** The position of each field is crucial, as the file format relies on the exact position of characters to interpret the data correctly. Fields are aligned based on their starting positions.
4. **No Delimiters:** Unlike delimited file formats, fixed-width files do not use special characters (e.g., commas or tabs) to separate fields. Instead, the file's structure is determined by the position and width of each field.
5. **Header Row:** Fixed-width files often include a header row that defines the layout and format of the data. The header specifies the starting position and width of each field.
6. **Readability:** While fixed-width files may be less human-readable than delimited files, they offer advantages in terms of simplicity, especially when dealing with data of a consistent and known structure.

Examples of systems that commonly use fixed-width file formats include legacy systems, mainframes, and certain database systems. In such cases, the fixed-width format provides a straightforward and efficient way to structure and store data.

## Fixed Byte File Format Documentation
