import countriesDivisions from '@blockchainhub/countries-divisions';

// List of country codes to test:
// TH: Thailand, JP: Japan, GB: United Kingdom, CA: Canada, IN: India, CN: China
const codes = ['TH', 'JP', 'GB', 'CA', 'IN', 'CN', 'MM'];

console.log("--- Global Administrative Divisions ---");

codes.forEach(code => {
  const division = countriesDivisions[code];
  if (division) {
    console.log(`Country [${code}] -> English: "${division.type_en}" | Local: "${division.type_local}"`);
  }
});