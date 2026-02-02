# Security permissions in apps 

## Apps must be configured to automatically evaluate which permissions to grant to logged-in users based on their role and profile.

HotWax Ionic Apps are now secured based on user permissions. Depending on the granted authorization, some users will be able to perform actions while others may only have permission to view some or all of the information rendered in an app’s interface. Enabling or disabling an app’s features and actions based on permissions of the logged-in user results in higher security clearance management. Automatic configuration of an app’s functions also ensures that only qualified users perform actions.

Apps that only have rudimentary support for permissions increases the likelihood of human errors. Apps adoption also becomes difficult in the absence of security permissions, especially in large enterprises with a hierarchical authority framework and nested teams. If an under-qualified user runs an operation that they are not authorized to perform, it may cause unintended problems. Pinpointing the source of an issue becomes impossible for internal auditors.

Blocking or exposing an app's functions based on permissions supports easy app adoption in organizations. Evaluating which app's attributes are accessible based on the authorizations assigned to a user will help in extending an app’s feature set. Granular control over what actions are allowed depending on a user's role will also ensure that unauthorized users do not make unexpected changes in apps. 

### Testimony 

*Internal quote*: When multiple kinds of users require app access, defining an app's scope based on who is using it ensures authentication and authorization.

*Customer quote*:  The Job Manager App will definitely simplify our operations but we cannot deploy the app if everyone has access to it. Since unauthorized users may run some actions by accident or modify the jobs.

### FAQs

**Question 1: What parts of an app can be gated depending on the user permissions?**

Answer: Security permissions in apps can be set down to if a user can access certain pages, what information can be viewed on them, and what functions they can perform.

### Internal FAQs

**Question 1: Will the app fetch specific user permissions from the server, or will the server return all the available permissions for a user?**

Answer: HotWax will create different groups for users and assign permissions to each group. Therefore, users will be given permission depending on the group they are assigned to. When a user logs into an app, a request is sent to the server to get the user permissions. Apps then make decisions to enable or disable an app’s features based on available permissions for a user.

**Question 2: How will HotWax use server permissions in the app?**

Answer: Based on the list of permissions returned by the server, apps will have a defined set of rules that will help in deciding which app's attributes are accessible to a user.
