import { searchTownships, isValidTownship } from '@tm11/mmgeo';

const data = searchTownships('hlaing');   
console.log(data) // substring match on English, Burmese, or slug;
                               // each result includes stateSlug/districtSlug to pre-fill the form
const result = isValidTownship('Hlaingthaya'); 
console.log(result) // true or false