# Cycle Count Application: Store Operations User Manual

## Sign in to the correct instance

Open the Cycle Count app URL provided by your organization. If the app asks for an `OMS`, enter the instance name provided by your administrator and select `Next`. Check the instance name above the sign-in fields before entering your account credentials.

<figure><img src="../.gitbook/assets/cycle-count-instance-sign-in.jpg" alt="Cycle Count sign-in screen with the selected demo instance displayed above empty username and password fields"><figcaption><p>Confirm the selected instance before signing in. The demo instance shown here is an example; use your organization's instance.</p></figcaption></figure>

## Dashboard

When the store associate or manager logs into the application, all assigned cycle counts appear on the dashboard. Each count card shows the type (Hard/Directed), name of the count, start date & time, and due date.

## Open app navigation

On a phone or tablet, use the top-left menu button on the list and settings pages to open navigation. On Assigned and Pending review, the separate top-right filter button opens filters for that page.

When opening the app inside Shopify POS, confirm that its selected facility matches the POS location. If login reports that your user is not associated with that location, ask an administrator to check your facility access and location mapping.

## From counting to final review

Submitting a session finishes one associate's work. Submitting the count sends the store's combined work to head office. These are separate steps; head office reviews the proposed variances before closing the count.

```mermaid
sequenceDiagram
    accTitle: Cycle count handoff between store and head office
    accDescr: Associates submit their sessions, the store manager checks completeness and submits the count for review, and head office reviews variances and closes the count.
    participant A as Store associates
    participant M as Store manager
    participant H as Head office
    A->>A: Count in assigned sessions
    A->>M: Resolve unmatched items and submit sessions
    M->>M: Review remaining requested and undirected items
    M->>H: Submit count for review
    H->>H: Accept or reject proposed variances
    H->>H: Close count and retain history
```

## Cycle count workflow

* [Plan your count with a preview](plan-cycle-count.md)
* [Create sessions and complete your count](start-complete-session.md)
* [Review counts at the store before submitting for review](count-progress-review.md)
* Review and approve variances at head office
* [Go back and review old counts and export](../../retail-operations/inventory/cycle-count/closed.md)

{% embed url="https://drive.google.com/file/d/1D-DbMBTo41v_OKKyuE_TXzQHcni1FSt_/view?usp=drive_link" %}
Inventory Cycle Count
{% endembed %}