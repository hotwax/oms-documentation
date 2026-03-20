import { CONFIG } from "../src/config/index.js";
import { getTargetMonth } from "../src/utils/index.js";

console.log(getTargetMonth(process.env.MONTH || CONFIG.MONTH, CONFIG.PUBLISHING.automation.timezone));
