**Introduction:**
In a distributed inventory environment, the Order Management System (OMS) plays a pivotal role in computing inventory levels and available-to-promise inventory for all products. While standard finished goods are tracked simply by summing inventory across facilities, kit products present a unique challenge due to their multiple component products, each inventoried individually.

**Process:**

1. **Component Product Inventory Computation:**
   - To determine the inventory level of a kit product at a specific facility, the OMS first computes the available inventory of all component products.
   - The available kit inventory is then determined by identifying the component product with the lowest inventory level, referred to as the lowest common denominator (LCD).

2. **Global Inventory Calculation:**
   - Across the distributed inventory network, this computation is performed for all facilities to ascertain inventory levels at each location.
   - Each facility's LCD for a kit product is then summed together to arrive at the online available-to-promise inventory for that kit product.

**Dynamic Inventory Management:**
- Kit product inventory is subject to constant flux due to sales of both the kit product itself and its individual components.
- Unlike regular products, where inventory is solely impacted by their own sales, kit product inventory needs to be recomputed more frequently to ensure accuracy.
- These recalculations must be promptly communicated to the order capture platform to prevent overselling and maintain inventory integrity.