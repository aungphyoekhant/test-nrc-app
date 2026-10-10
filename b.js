import { listStates, listDistricts, listTownships } from "@tm11/mmgeo";

// Get all states/regions
console.log("--- States (English) ---");
console.log(listStates()); // → Returns array of states (defaults to English)

console.log("--- States (Burmese) ---");
console.log(listStates({ lang: "mm" })); // → Returns states with Burmese names

// Cascading dropdowns
console.log("--- Townships in Magway District ---");
console.log(listTownships("magway-region", "magway")); // Townships within a specific district
