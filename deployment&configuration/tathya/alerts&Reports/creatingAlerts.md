# How to Create an Alert

On the Alerts interface, select `+ Alert` to create a new alert.

The Add Alert window appears.

## Basic Details

1. In the **Alert Name** field (required), enter a name for your new alert.This will also serve as the subject of the email.

2. In the **Owner's** field (required), select one or more owners for the alert. Owners have the ability to edit an alert and are notified in case of any execution failures.
3. In the **Description** (optional) field, enter a short but meaningful description of the alert, to be included in the alert message.

The **Active** toggle switch is automatically enabled.

## Alert Condition Panel

Move to the Alert Condition panel. This area is used to define the event that triggers the activation and notification of the alert.

1. In the **Database** field (required), select the database in which the SQL query should be executed.
2. In the **SQL Query** field (required), enter a SQL statement that defines the nature of the alert (the metric you want to monitor).
3. In the **Trigger Alert If...** field (required), define the condition, and in the **Value** field (required), enter the associated value of the condition.

## Alert Condition Schedule

This panel is used to define the frequency at which the data is checked to see if the defined condition has been met.

## Specify Time

The first schedule option enables you to specify a highly granular schedule based on your specific requirements. Data can be checked every minute, hour, day, week, month, or year.

After setting a schedule, the subsequent **CRON** field will automatically populate with an equivalent CRON expression that represents your defined schedule.

Alternatively, you can also directly enter a CRON expression by selecting the secondary radio button and entering the expression in the **CRON Schedule** field.

{% hint style="info" %}
A CRON expression is a string representing a schedule. It is used to define the timing of recurring tasks or jobs in systems where periodic execution of tasks is required.
{% endhint %}

The basic structure of a CRON expression consists of five fields, representing minute, hour, day of the month, month, and day of the week. Each field can have a specific value or a wildcard (*) to represent any possible value. Here's the general format:

* * * * *
| | | | |
| | | | +----- Day of the week (0 - 6) (Sunday is both 0 and 7)
| | | +------- Month (1 - 12)
| | +--------- Day of the month (1 - 31)
| +----------- Hour (0 - 23)
+------------- Minute (0 - 59)

### For example:

- `0 0 * * *`: Check data at midnight every day.
- `*/15 * * * *`: Check data every 15 minutes.
- `0 2 * * 1-5`: Check data at 2:00 AM every weekday (Monday to Friday).

## Select Timezone

In the **Timezone** field, select the drop-down menu and choose your timezone.

## Define Schedule Settings

1. In the **Log Retention** field (required), enter the number of days that the alert will be stored in the execution log. By default, this is set to 90 days.
2. In the **Working Timeout** field (required), enter the number of seconds that the alert job is allowed to run before it results in an automatic timeout. By default, this is set to 3600 seconds.
3. In the **Grace Period** field, enter the number of seconds that should pass before the alert can trigger relative to when a previous alert was triggered. If an alert triggers within this period, its status will be On Grace, and the alert's evaluation will commence when this period concludes. By default, this is set to 14400 seconds.

## Message Content

In the **Message Content** section, select either the **Dashboard** or **Chart** radio button. Then, in the drop-down field, select the relevant dashboard or chart, a custom link will be prepared and sent based on the defined notification method.

- **Screenshot Width:** An optional parameter that allows you to customize the width (in pixels) for your alert dashboard/chart screenshot.
- **Ignore cache when generating screenshot:** Checkbox to produce real-time data (invalidating cache).

## Notification Method

In the **Notification Method** section, select **Add notification method**. The **Select delivery method** drop-down field appears. Select either **Email** or **Slack**, as needed. On selection, you will be prompted to enter an email address or the channel name. You can also configure it to be sent to both recipient types.

To finalize your alert, select **Add**.

## Let's take a look at an example

You can create an alert for whenever the count of unfillable orders in a day exceeds the defined threshold of 20.

Set conditions for the count of unfillable orders in a day to be greater than 20 and choose the daily time granularity for the evaluation. Specify the email addresses of the operations and customer support teams so that they receive immediate email notifications when facing a higher volume of unfillable orders.

### Outcome

{% hint style="success" %}
Tathya will automatically trigger the alert and notify the designated team members via email whenever the daily count of unfillable orders exceeds 20.
{% endhint %}