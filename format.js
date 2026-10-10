import { formatNRC } from "myanmar-nrc-validator";

console.log("=== FORMAT CONVERTER TEST ===");

// ၁။ မြန်မာမှ အင်္ဂလိပ်သို့ ပြောင်းခြင်း
const toEnglish = formatNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆", "en");
console.log("To English:", toEnglish); // ထွက်မည့်ရလဒ်: 12/UKAMA(N)123456

// ၂။ အင်္ဂလိပ်မှ မြန်မာသို့ ပြောင်းခြင်း
const toMyanmar = formatNRC("12/UKAMA(N)123456", "mm");
console.log("To Myanmar:", toMyanmar); // ထွက်မည့်ရလဒ်: ၁၂/UKAMA(နိုင်)၁၂၃၄၅၆

const allTypes = getCitizenType();
console.log(allTypes);
/*
Output:
[
  { code: "N", en: "Citizen", mm: "နိုင်" },
  { code: "E", en: "Associate Citizen", mm: "ဧည့်" },
  { code: "P", en: "Naturalized Citizen", mm: "ပြု" },
  ...
]
*/
