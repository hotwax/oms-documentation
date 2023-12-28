# Launch a Machine

To deploy a new OMS instance you first have to setup a machine. These are deployed using Jenkins.

{% hint style='warning' %}
UAT environments are usually deployed internally so they may have different steps, connect with the System Admin team for that.
{% endhint %}

1. Go to [Jenkins](https://jenkins.hotwax.co)
2. Login with your credentials and proceed to deploy a new instance under `oms-env-setup` segment. 
3. Select `oms-prod-launch-deploy` from the preset options. 

{% hint style='info' %}
In case, you are setting a test production environment, use  `oms-launch-deploy`. Test production accounts are basically replica of production accounts, helping test real challenges faced during production spin up. 
{% endhint %}

## Configure your machine

Click on `Build with Parameters` from the left menu options and enter required details: 

**1. Enter a HOST name**

The host name is should be the client name followed by `uat` or `oms` depending on what kind of environment you're setting up. Replace `xxx-oms` with instance name. 

For example, if a company were named Wasatch Ski Company, the instance name could be `wasatchski-oms` and `wasatchski-uat`. 

{% hint style="danger" %}
The name or abbreviation of the company has to be unique.
{% endhint %}

{% hint style="info" %}
**Multi-instance** names contain an additional identifier between the name and instance type.

For example, wasatchski-us-oms and wasatchski-ca-oms will be seperate instances for each country
{% endhint %}

{% hint style="danger" %}
**Domain name** is prefilled as `hotwax.io`. Do not change this.
{% endhint %}

----

**2. Select version**

The ECR_IMAGE value selects the version of the OMS to deploy the system onto. To determine the current version/tag of the image for deployment, please consult the [OMS 1.0 Releases documentation](https://docs.google.com/document/d/1lfvjpqBiE__1fsCjq7VvQSSXjdRLVZg86zJIXDDK-zc/edit#heading=h.djn7rcq0batn) and locate the ECR_IMAGE value. If there's a need to deploy the system using a different ECR_IMAGE version, kindly use the specified image version accordingly.

---

**3. Choosing a machine type**

{% hint style="danger" %}
The machine size should be confirmed by internal administration team.
{% endhint %}

Select the machine size from the EC2_INSTANCETYPE dropdown. Based on the business order size/day we can select the Instance type.

- C5a.xlarge: Less than or equal to 100 orders orders per day.
- C5a.2xlarge: More than 100 orders orders per day.

---

**4. Timezone**

{% hint style="info" %}
The default AWS region is `us-east-1`. **Do not change** this without explicit confirmation.
{% endhint %}

Select the timezone where the client’s business is headquartered.

{% hint style="info" %}
**If the preferable timezone is not present** in the dropdown, ask the system admin team to create it.
{% endhint %}

Refer this table to know which timezone to be selected: 

| Client Time Zone                     | Offset  | Daylight Saving Time | Proximate Locations                                |
|----------------------------------------------|-------------|----------------------------------|------------------------------------------------------------------------|
| AEST (Australia Eastern)      | UTC+10  | No                    | Brisbane, Sydney                               |
| ACST (Australia Central)      | UTC+09:30| No                    | Adelaide, Darwin                               |
| AFT (Afghanistan)             | UTC+04:30| No                    | Afghanistan                                    |
| AKST (Alaska Standard)        | UTC-09  | Yes (ADKT)            | Alaska                                         |
| AST (Atlantic Standard)        | UTC-04  | Yes (ADT)             | Antigua and Barbuda, Barbados, US Virgin Islands|
| CAT (Central Africa)           | UTC+02  | No                    | Botswana, Malawi, Namibia, Rwanda, Sudan        |
| CET (Central European)         | UTC+01  | Yes (CEST)            | Albania, Algeria, Austria, Belgium, Denmark     |
| CST (Central Standard)         | UTC-06  | Yes (CDT)             | Houston, Mexico City, Winnipeg                  |
| EAT (East Africa)              | UTC+03  | No                    | Ethiopia, Kenya, Madagascar, Somalia            |
| EET (Eastern European)         | UTC+02  | Yes (EEST)            | Bulgaria, Finland, Greece, Lithuania           |
| EST (Eastern Standard)         | UTC-05  | Yes (EDT)             | New York, Toronto, Atlanta                      |
| MSK (Moscow Standard)          | UTC+03  | Yes (MSD)             | Russia (parts), Belarus, Ukraine                |
| MST (Mountain Standard)        | UTC-07  | Yes (MDT)             | Denver, Phoenix, Calgary                        |
| PST (Pacific Standard)         | UTC-08  | Yes (PDT)             | Vancouver, Los Angeles, Las Vegas               |
| WAT (West Africa)              | UTC+01  | No                    | Angola, Chad, Morocco, Nigeria                  |
| WET (Western European)         | UTC+00  | Yes (WEST)            | United Kingdom, Ireland, Portugal               |

---

**5. Build_Command**

{% hint style="danger" %}
Default value `loadOmsDefaultData` should not be changed.
{% endhint %}

---

**6. OFBIZ_INSTANCE_PREFIX**

{% hint style="danger" %}
Default value `HotWax` should not be changed. 
{% endhint %}

---

**7. Plugins**

External system integrations are referred to as plugins. If your instance incorporates integrations with external systems, include those plugins here. To identify the current versions of the plugins for deployment, please refer to the [OMS 1.0 Releases documentation](https://docs.google.com/document/d/1lfvjpqBiE__1fsCjq7VvQSSXjdRLVZg86zJIXDDK-zc/edit#heading=h.djn7rcq0batn) and locate the relevant plugin information.

***You're now prepared to build your machine; simply click the build function.***

It can take up to 15 minutes for an instance to become active after deployment. Until the instance comes online, the following message will show:
> The site can’t be reached

{% hint style="warning" %}
If it takes longer than 25 minutes for your instance to come online, alert the system admin team.
{% endhint %}

--- 

## Verify your machine

Wait until the processing is finished and the box in the stage view turns green.

{% hint style="warning" %}
In the stage view, red box colors indicate an error. If this happens please report the error to the system admin team.
{% endhint %}

To check your deployment in the Build History screen.

1. Go to Build History
2. Click on the instance which is generally latest record to open the latest record. 
3. Click to `Console output` to open the output.
4. Go to the bottom of the output and verify that you see a `Finished: Success` message. 

Go to your instance, it should be online and working. If not, refresh your window and a login screen appears, your system is now online.

--- 

### Initial Setup
- [x] Launch machine
- [ ] Initial login
- [ ] Add DBICs
- [ ] Configure Product Store
  - [ ] Add more Product Stores
- [ ] Add company name
- [ ] Load facilities
- [ ] Load System Property data
