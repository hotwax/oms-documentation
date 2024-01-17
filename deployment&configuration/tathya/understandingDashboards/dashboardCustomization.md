# Dashboard Customization

Customize your dashboards to improve the user experience and better align with the branding guidelines.

## Tabs
Tabs in Tathya act as a handy way to organize and structure your dashboard. They serve as separate sections, allowing you to group related charts or information together, making navigation a breeze.

- Click the "+" button to add a new tab.
- Rename tabs to provide clarity and relevance.
- Easily switch between different sections of the dashboard using tabs.

## Rows and Columns
Rows and columns are the building blocks of your dashboard layout. They define how charts and elements are arranged on the canvas, giving you control over the visual structure.

- Create a row by dragging the "Row" element onto the canvas.
- Adjust the width and height of rows and columns to control the layout.
- Place charts, headers, or other elements within rows and columns for an organized dashboard.

## Header
Headers provide a descriptive title or label for a specific section of your dashboard. They enhance the visual hierarchy and help users quickly understand the content.

- Drag the "Header" element onto the canvas.
- Customize the header text to convey the purpose or theme of the section.
- Headers can be placed within rows or columns to introduce or label groups of charts.

## Markdown
Markdown elements enable you to add formatted text, images, or hyperlinks to your dashboard. They enhance communication by providing context, instructions, or additional information.

- Drag the "Markdown" element onto the canvas.
- Use Markdown syntax to format text, insert images, or create hyperlinks.
- Position Markdown elements within rows or columns to complement charts and visualizations.

## Divider
Dividers act as visual separators, creating a clear distinction between different sections of your dashboard. They contribute to a clean and organized layout.

- Drag the "Divider" element onto the canvas.
- Place dividers between rows or columns to visually separate content.
- Adjust the divider style to match the aesthetics of your dashboard.

## Color Palettes
As part of the chart creation process, creators specify a color palette for it. On the dashboard level, it is possible to specify a single categorical color palette that would be used by all charts on your dashboard.

To set up a dashboard-level color palette:

1. Access your dashboard.
2. Click on EDIT DASHBOARD, on the top right corner.
3. Click on the three ellipses on the top right corner > Edit properties.
4. Choose a palette under the COLOR SCHEME drop-down.
5. Save changes.

For more control over the columns that are applied to each dimension, you can manually specify the colors using hexadecimal or RGBA code on the dashboard JSON metadata.

To do so:

1. Access the dashboard.
2. Click on EDIT DASHBOARD, on the top right corner.
3. Click on the three ellipses (...) > Edit properties.
4. Expand the ADVANCED section.
5. Create a new section inside the JSON METADATA named label_colors, specifying the desired colors for each metric/dimension.

{% hint style="info" %}
## Additional Tips:
- **Drag-and-Drop Functionality:** Use the drag-and-drop feature to rearrange tabs, rows, columns, headers, markdown, and dividers effortlessly. This enables quick adjustments to your dashboard layout.
- **Responsive Design:** Keep in mind that your dashboard layout is responsive, ensuring an optimal viewing experience across different devices. Test the layout on various screen sizes to ensure consistency.
{% endhint %}

By understanding and utilizing these dashboard layout elements, you'll be able to craft visually appealing and well-organized dashboards in Tathya.