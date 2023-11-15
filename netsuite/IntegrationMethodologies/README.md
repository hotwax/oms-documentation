# Our Approach

Integrating data between NetSuite and HotWax Commerce is a critical aspect of our system, and it's accomplished through a well-thought-out methodology.

We have adopted batch-process integration methodology instead of using real-time based REST APIs. While REST APIs offer real-time data processing capabilities, they often introduce latency and potential data leaks in scenarios where data volumes are high. We've consciously chosen batch process based integration methodology over REST APIs for its reliability, scalability, and the assurance it offers in terms of data integrity and error handling. This approach minimizes risks associated with real-time processing, guaranteeing seamless and efficient data integration.

In this section, we'll delve into the methodologies we employ to import and export data between these two platforms.