# SM Pass

The customer loyalty program significantly impacts Steve Madden's order routing preferences, particularly for "NEXT_DAY" and "SECOND_DAY" shipping orders.

**LoyaltyPlusOrder Tag:**

*   Orders tagged with "LoyaltyPlusOrder" are given the highest priority in the brokering process. This means that the system will prioritize fulfilling these orders over other orders, even if they are not the earliest placed orders.
*   This preferential treatment applies to both NEXT_DAY and SECOND_DAY shipping options, ensuring that loyal customers receive their orders quickly.

**Prioritization Logic:**

1.  **NEXT_DAY with LoyaltyPlusOrder:** These orders are the top priority.
2.  **NEXT_DAY (without tag):** These orders are the second priority.
3.  **SECOND_DAY with LoyaltyPlusOrder:** These orders have the third highest priority.
4.  **SECOND_DAY (without tag):** These orders are the fourth priority.
5.  **STANDARD orders:** These orders have the lowest priority.

**Real-World Impact:**

*   A customer with the LoyaltyPlusOrder tag who places a NEXT_DAY order will have their order prioritized over a non-loyalty customer's NEXT_DAY order, even if the non-loyalty order was placed earlier.
*   Similarly, a loyal customer with a SECOND_DAY order will have their order fulfilled before a non-loyalty customer's SECOND_DAY order.

**Benefits for Steve Madden:**

*   **Enhanced customer satisfaction:** Loyal customers are more likely to be satisfied with their shopping experience if they receive faster shipping, even during busy periods.
*   **Increased loyalty:** By prioritizing loyal customers, Steve Madden incentivizes continued engagement with the brand and repeat purchases.
*   **Potential for higher sales:** Satisfied customers are more likely to spend more, leading to increased revenue for the company.