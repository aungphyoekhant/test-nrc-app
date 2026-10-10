import { listStates, listDistricts, listTownships } from '@tm11/mmgeo';

listStates();                       // → [{ slug: 'magway-region', name: 'Magway Region', en, mm, lat, lng, capital }, ...]
listDistricts('magway-region');     // districts of a state, for your second dropdown
const data = listTownships('magway-region', 'magway');
console.log(data)// townships, for your third dropdown

// Burmese labels? Pass lang — no global state:
listStates({ lang: 'mm' });  