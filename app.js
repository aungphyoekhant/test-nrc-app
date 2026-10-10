import { getStates, getStateTownships } from "myanmar-nrc-validator";

console.log("=== STATES & TOWNSHIPS API TEST ===");

// ၁။ ပြည်နယ်/တိုင်း အားလုံးကို ယူခြင်း
console.log("\n1. All States:");
console.log(getStates());

// ၂။ ID 8 (မကွေးတိုင်း) သို့မဟုတ် 12 (ရန်ကုန်တိုင်း) ပါ မြို့နယ်အားလုံးကို ယူခြင်း
console.log("\n2. Townships for State 12 (Yangon):");
console.log(getStateTownships(11));
