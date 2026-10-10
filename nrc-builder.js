import { listStates, listDistricts, listTownships } from '@tm11/mmgeo';

// 1. Get all states/regions to display as the first part of an NRC (e.g., "12" for Yangon)
const states = listStates();
console.log("--- Step 1: Available States/Regions ---");
states.forEach((state, index) => {
  // NRC numbers typically start from 1 to 14
  const nrcCode = index + 1;
  console.log(`[${nrcCode}] ${state.en} (${state.mm}) - Capital: ${state.capital}`);
});

// 2. Select a state slug (e.g., 'yangon-region' or 'magway-region') and list its townships
const targetStateSlug = 'yangon-region';
console.log(`\n--- Step 2: Townships for ${targetStateSlug} (used for NRC middle part) ---`);

// Get districts in Yangon, then townships inside those districts
const districts = listDistricts(targetStateSlug);
districts.forEach(district => {
  const townships = listTownships(targetStateSlug, district.slug);
  townships.forEach(township => {
    console.log(`- Township Name: ${township.en} (${township.mm}) | Slug: ${township.slug}`);
  });
});