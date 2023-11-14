# Launch a Machine

To deploy a new OMS instance you first have to setup a machine. These are deployed using Jenkins.

{% hint style="warning" %}
    UAT environments are usually deployed internally so they may have different steps, connect with the Sys Admin team for that.
{% endhint %}

```
https://jenkins.hotwax.co
```

Login with your credentials and proceed to deploy a new instance under "oms-env-setup"

Select "oms-launch-deploy"

## Configure your machine

Click on “Build with Parameters” from the left menu options and enter required details

1. Enter a HOST name

The host name is should be the client name followed by "uat" or "oms" depending on what kind of environment you're setting up.

For example, if a company were named Wasatch Ski Company, the instance name could be "wsc-oms" and "wsc-uat". The name or abbreviation of the company has to be unique.


{% hint style="info" %}
**Multi-instance** names contain an additional identifier between the name and instance type.

For example, if wsc-us-oms and wsc-ca-oms if there will be seperate instances for each country
{% endhint %}

