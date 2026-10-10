import { Country, State, City } from 'country-state-city';

// 1. Verify Myanmar country details
const myanmar = Country.getCountryByCode('MM');
console.log("--- Country ---");
console.log(myanmar);

// 2. Get all states/regions of Myanmar
const myanmarStates = State.getStatesOfCountry('MM');
console.log("\n--- Myanmar States & Regions ---");
console.log(myanmarStates);

// 3. Get all cities of Myanmar
const myanmarCities = City.getCitiesOfCountry('MM');
console.log("\n--- Myanmar Cities (Sample first 5) ---");
console.log(myanmarCities.slice()); // Showing the first 5 to avoid flooding your console
console.log(`Total cities found: ${myanmarCities.length}`);