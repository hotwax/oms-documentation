# How to Create Reports

After successfully setting up alerts, you may also want to generate regular reports to keep track of important metrics. Tathya allows you to automate the process of creating and sending reports at specified intervals.

Follow the steps below to create and schedule reports:

1. Navigate to the Alerts & Reports screen. By default, you'll land on the Alerts interface. To access the Reports screen, click on the Reports tab.

2. On the Reports interface, select  `+ Report` to create a new report. The "Add Report" window appears.

## Basic Details

1. **Report Name** field (required), enter a descriptive name for your report. This will also serve as the subject of the email.

2. **Owner(s)** field (required), select one or more owners for the report. Owners have the ability to edit the report and are notified in case of any execution failures.

3. **Description** (optional), provide a brief and meaningful description of the report.

The **"Active"** toggle switch is enabled by default.

## Defining the Report Schedule:

This panel is used to define how frequently the report will be sent to a defined notification channel(s).

1. **Specify Time:**
The first schedule option enables you to specify a highly granular schedule based on your specific requirements. Data can be checked every minute, hour, day, week, month, or year. The day, week, month, and year options all allow you to define a schedule down to the hour & minute granularity.

2. **Check or Enter CRON:**
After setting a schedule, the subsequent CRON field will automatically populate with an equivalent CRON expression that represents your defined schedule.

3. Alternatively, you can also directly enter a CRON expression by selecting the secondary radio button and entering the expression in the CRON Schedule field.

   (To learn more about CRON expressions, please refer to the alerts section)

## Select Timezone

In the Timezone field, select the drop-down menu and choose your timezone.

## Define Schedule Settings

1. **Log Retention (required):** Enter the number of days the report will be stored in the execution log (default is 90 days).

2. **Working Timeout (required):** Set the maximum duration for the report job to run before an automatic timeout (default is 3600 seconds).

## Message Content

In the Message Content section, select either the **Dashboard** or **Chart** radio button. Then, in the drop-down field, select the relevant dashboard or chart — a screenshot of the dashboard or chart will be sent along with a link.

When sending a chart, be sure to indicate whether a screenshot will be sent (in PNG format) or as a CSV file. For Table and Pivot Tables, you can also choose to include the chart on the email text (rather than as an attachment).

- **Screenshot Width:** This is an optional parameter that allows you to customize the width (in pixels) for your dashboard / chart screenshot.

  {% hint style="info" %}
  Your custom width can be between 600 and 2400 pixels. The format is the plain number (e.g., 2000). Utilizing the custom screenshot width may allow you to show more columns in a wide table chart which would normally be cut off by the typical screenshot width; please note that tables wider than the maximum limit of 2400 pixels will be cut off.
  {% endhint %}

- **Ignore Cache:** Check this box to generate real-time data and invalidate cache.

## Notification Method:

In the **Notification Method section**, select **Add notification method**. The Select **delivery method** drop-down field appears. Select either **Email** or **Slack**, as needed. On selection, you will be prompted to enter an email address or the channel name. You can also configure it to be sent to both recipient types.

To finalize and save your report, select **Add.**

By following these steps, you can easily create and schedule reports in Tathya, ensuring that the relevant users receive timely and accurate information.