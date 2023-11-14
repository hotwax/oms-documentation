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

The host name is should be the client name followed by "uat" or "oms" depending on what kind of environment you're setting up followed by .hotwax.io

For example, if a company were named Wasatch Ski Company, the instance name could be "wsc-oms.hotwax.io" and "wsc-uat.hotwax.io". 

{% hint style="danger" %}
The name or abbreviation of the company has to be unique.
{% endhint %}

{% hint style="info" %}
**Multi-instance** names contain an additional identifier between the name and instance type.

For example, if wsc-us-oms and wsc-ca-oms if there will be seperate instances for each country
{% endhint %}

2. Select version

The ECR_IMAGE value selects the version of the OMS to deploy the system onto. Ensure this is on the lastest version by default.

3. Choosing a machine type

Select the machine size from the EC2_INSTANCETYPE dropdown. Based on the business order size/day we can select the Instance type.

- C5a.xlarge: Less than or equal to 100 orders orders per day.
- C5a.2xlarge: More than 100 orders orders per day.

4. Timezone

Select the timezone where the client’s business is headquartered.

{% hint style="info" %}
**If the preferable timezone is not present** in the dropdown, ask the system admin team to create it.
{% endhint %}


You're now ready to build your machine. Click build and confirm your action in the pop  up.

## Verify your machine

Wait until the processing is finished and the box in the stage view turns green.


{% hint style="warning" %}
In the stage view, red box colors indicate an error. If this happens please report the error to the system admin team.
{% endhint %}

Check your deployment in the Build History screen. Click on Console Output and verify that the process has "Finished" and the status is "Sucess"

It can take up to 15 minutes for an instance to become active after deployment. Until the instance comes online, the following message will show:
> The site can’t be reached

{% hint style="warning" %}
If it takes longer than 25 minutes for your instance to come online, alert the system admin team.
{% endhint %}

If you refresh your window and a login screen appears, your system is now online.

### Initial Setup
- [x] Launch machine
- [ ] Initial login
- [ ] Add DBICs
- [ ] Configure Product Store
  - [ ] Add more Product Stores
- [ ] Add company name
- [ ] Load facilities
- [ ] Load System Property data