import { listStates } from "@tm11/mmgeo";

const states = listStates();
const Kayah = states.find(state => state.slug === 'Kayah-region');

if (Kayah) {
  // Generate the Google Maps URL using lat and lng
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${Kayah.lat},${Kayah.lng}`;
  
  console.log(`Map Link: ${mapUrl}`);
}