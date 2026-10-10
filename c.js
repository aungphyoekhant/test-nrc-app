import { listStates } from "@tm11/mmgeo";

// Find Bago Region from the list of states
const states = listStates();
const bago = states.find((state) => state.slug === "bago-region");

if (bago) {
  console.log(`State: ${bago.name}`);
  console.log(`Latitude: ${bago.lat}`);
  console.log(`Longitude: ${bago.lng}`);
  console.log(`Capital: ${bago.capital}`);
}
