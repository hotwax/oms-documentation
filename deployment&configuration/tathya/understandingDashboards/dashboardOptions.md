# Dashboard Options

## Editing Mode

Select the ellipsis icon (3 dots) while in editing mode to view the following options:

- **Edit dashboard properties**
  - **Title:** The title of the dashboard.
  - **URL Slug:** Customize the end of the URL (slug) to a more memorable name.
  - **Owners:** Assign/remove access to the dashboard.
  - **JSON Metadata:** By expanding the Advanced header, the JSON Metadata panel appears. This area is for power users who may wish to alter specific dashboard parameters.

- **Edit CSS**
  - Loads the Live CSS Editor, which can be used to make ad hoc stylesheet changes in a live editing environment (i.e., changes applied in real time).

- **Save as**
  - Duplicate a dashboard, this dashboard will contain all of the same charts as the existing dashboard. This is useful to allow you to create a dashboard from an existing dashboard.

- **Share**
  - **Copy permalink to clipboard:** Copies a shareable dashboard link to the system's clipboard.
  - **Share by email:** Launches the system's default email client and composes a new message featuring your dashboard URL.
    
- **Set auto-refresh interval**
  - Select to specify an automatic refresh rate for the dashboard. Options include seconds (10 or 30), minutes (1, 5, or 30), or hours (1, 6, 12, or 24). Note that this will be only applied to the current session.

- **Setting a permanent auto-refresh**
   - If you would like to set a permanent auto-refresh instead, you would need to modify the JSON metadata in the Dashboard Properties. For that, set a value (in seconds) to the "refresh_frequency" parameter (default value is 0). For example, to set a 1-hour refresh-rate, set the parameter value as 3600.

## View Mode

- **Refresh dashboard**
  - Select to refresh the chart's data. The time duration since the last cache is also provided.

- **Enter fullscreen**
  - View the chart in full screen mode (i.e., just the chart occupies the entire screen).

- **Download as image**
  - Downloads an image of the entire chart in JPEG format.

- **Share**
  - **Copy permalink to clipboard:** Copies a shareable chart link to the system's clipboard.
  - **Share permalink by email:** Launches the system's default email client and composes a new message featuring your chart URL.

- **Set auto-refresh interval**
  - Select to specify an automatic refresh rate for the dashboard. Options include seconds (10 or 30), minutes (1, 5, or 30), or hours (1, 6, 12, or 24). Note that this will be only applied to the current session.