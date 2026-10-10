import { isValidTownship, searchTownships, listStates } from '@tm11/mmgeo';

// Function to validate a Myanmar NRC input
function validateNRC(stateCode, townshipInput, cardType, serialNumber) {
  console.log(`\nValidating NRC: ${stateCode}/${townshipInput}(${cardType})${serialNumber}`);

  // 1. Validate State Code (Must be between 1 and 14)
  const stateNum = parseInt(stateCode, 10);
  if (isNaN(stateNum) || stateNum < 1 || stateNum > 14) {
    return { valid: false, message: "Invalid State Code! Must be between 1 and 14." };
  }

  // 2. Validate Township using mmgeo package
  const isTownshipValid = isValidTownship(townshipInput);
  if (!isTownshipValid) {
    return { valid: false, message: `Invalid Township: "${townshipInput}" not found in database.` };
  }

  // 3. Validate Card Type (e.g., Naing, AE, etc.)
  const allowedTypes = ['Naing', 'AE', 'AC', 'V', 'NC'];
  if (!allowedTypes.includes(cardType)) {
    return { valid: false, message: `Invalid Card Type: "${cardType}".` };
  }

  // 4. Validate Serial Number (Must be 6 digits)
  const serialRegex = /^\d{6}$/;
  if (!serialRegex.test(serialNumber)) {
    return { valid: false, message: "Invalid Serial Number! Must be exactly 6 digits." };
  }

  return { valid: true, message: "NRC format is fully valid!" };
}

// --- Test Cases ---

// Test 1: Valid NRC input
const test1 = validateNRC("12", "Latha", "Naing", "123456");
console.log(test1);

// Test 2: Invalid Township input
const test2 = validateNRC("12", "FakeTownship", "Naing", "123456");
console.log(test2);

// Test 3: Invalid Serial Number (less than 6 digits)
const test3 = validateNRC("12", "Hlaing", "Naing", "123");
console.log(test3);