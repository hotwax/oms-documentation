---
description: >-
  Schedule routing runs using cron expressions to ensure orders are routed as
  per their specific business preference.
---

# Schedule Order Routing Runs with Custom Cron Expressions

<figure><img src="https://www.hotwax.co/hubfs/Schedule%20Order%20Routing%20Runs%20with%20Custom%20Cron%20Expressions.png" alt=""><figcaption></figcaption></figure>

HotWax Commerce provides retailers with the flexibility to schedule order routing runs based on their unique business needs. Previously, the platform allowed retailers to schedule runs at frequent, predefined intervals, offering a simple and effective solution for businesses that required continuous order routing throughout the day.

However, some retailers have specific operational requirements, such as running brokering at particular times. For instance, one of HotWax Commerce's enterprise retailers wanted to schedule brokering runs between 8 AM and 2 PM every hour at their stores. Such specialized scheduling demands more advanced customization.

To address this, HotWax Commerce now offers the flexibility to use cron expressions. Cron expressions are job schedulers that allow tasks to be executed at fixed times, dates, or intervals. This enables retailers to define precise schedules for order routing, such as running brokering at specific times during the day.

For eg, to schedule brokering runs every hour between 12 AM and 11:59 AM, a cron expression like \*/20 0-11 \* \* \* can be used. If help is needed to create these expressions, retailers can utilize [cron expression generators](https://www.freeformatter.com/cron-expression-generator-quartz.html) to tailor schedules that perfectly match their business requirements.

This update gives retailers more control, ensuring that order routing aligns with their operational requirements, whether they need frequent runs or specialized scheduling.
