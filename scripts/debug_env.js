import "dotenv/config";
console.log("PRODUCTION:", process.env.PRODUCTION);
console.log("PRODUCTION type:", typeof process.env.PRODUCTION);
console.log("DRY_RUN:", process.env.DRY_RUN);
console.log("PRODUCTION !== 'true':", process.env.PRODUCTION !== 'true');
