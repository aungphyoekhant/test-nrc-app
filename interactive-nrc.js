import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { isValidTownship } from '@tm11/mmgeo';

const rl = readline.createInterface({ input, output });

async function runInteractiveValidator() {
  console.log("========================================");
  console.log("   MYANMAR NRC INTERACTIVE VALIDATOR    ");
  console.log("========================================\n");

  // 1. Prompt for inputs
  const stateCode = await rl.question('Enter State Code (e.g., 12): ');
  const township = await rl.question('Enter Township Name or Slug (e.g., Latha): ');
  const cardType = await rl.question('Enter Card Type (e.g., Naing): ');
  const serial = await rl.question('Enter 6-digit Serial Number (e.g., 123456): ');

  // 2. Perform validations
  const stateNum = parseInt(stateCode, 10);
  const isStateValid = !isNaN(stateNum) && stateNum >= 1 && stateNum <= 14;
  const isTownshipValid = isValidTownship(township);
  const isSerialValid = /^\d{6}$/.test(serial);
  const allowedTypes = ['Naing', 'AE', 'AC', 'V', 'NC'];
  const isTypeValid = allowedTypes.includes(cardType);

  // 3. Display Results
  console.log("\n----------------------------------------");
  console.log(`Checking: ${stateCode}/${township}(${cardType})${serial}`);
  console.log("----------------------------------------");

  if (isStateValid && isTownshipValid && isTypeValid && isSerialValid) {
    console.log("✅ RESULT: Valid NRC Format!");
  } else {
    console.log("❌ RESULT: Invalid NRC Format. Details:");
    if (!isStateValid) console.log("  - State code must be a number between 1 and 14.");
    if (!isTownshipValid) console.log(`  - Township "${township}" is not recognized.`);
    if (!isTypeValid) console.log(`  - Card type "${cardType}" is invalid (use Naing, AE, etc.).`);
    if (!isSerialValid) console.log("  - Serial number must be exactly 6 digits.");
  }

  rl.close();
}

runInteractiveValidator();