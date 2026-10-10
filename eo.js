import { 
  getAllStates, 
  getStateById, 
  getTownshipsByStateId, 
  getTownshipsByStateName 
} from './mm-states.js';

// Test your functions:
console.log("--- All States ---");
console.log(getAllStates());

console.log("--- State by ID '12' ---");
console.log(getStateById('12'));

console.log("--- Townships for Mandalay ---");
console.log(getTownshipsByStateName('mandalay'));