import {
  validateNRC,
  parseNRC,
  formatNRC,
  nrcStringSchema,
} from "myanmar-nrc-validator";

// ၁။ Validate လုပ်ခြင်း
console.log("Is Valid:", validateNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆")); // true

// ၂။ Parse လုပ်ခြင်း
console.log("Parsed:", parseNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆"));

// ၃။ Format ပြောင်းခြင်း (en / mm)
console.log("To English:", formatNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆", "en"));
console.log("To Myanmar:", formatNRC("12/UKAMA(N)123456", "mm"));

// ၄. Zod Schema Validation စမ်းခြင်း
const zodResult = nrcStringSchema.safeParse("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆");
console.log("Zod Test Success:", zodResult.success);
