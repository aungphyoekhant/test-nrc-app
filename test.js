import {
  validateNRC,
  parseNRC,
  composeNRC,
  STATE_REGIONS,
} from "myanmar-nrc-validator";

console.log("=== UPDATED MYANMAR NRC VALIDATOR TEST ===");

// ၁။ အင်္ဂလိပ်ဂဏန်းနှင့် စာလုံးဖြင့် စမ်းသပ်ခြင်း
console.log("1. English Format:", validateNRC("12/OugKaMa(N)123456")); // true ဖြစ်ရပါမယ်

// ၂။ မြန်မာဂဏန်းနှင့် မြန်မာမြို့နယ်ကုဒ်ဖြင့် စမ်းသပ်ခြင်း (အသစ်ပြင်ဆင်ထားချက်)
console.log("2. Myanmar Format:", validateNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆")); // true ဖြစ်ရပါမယ်

// ၃။ မြန်မာဖော်မတ်ဖြင့် Parse လုပ်ခြင်း (အချက်အလက်ခွဲထုတ်ခြင်း)
console.log("\n3. Parse Myanmar NRC Result:");
console.log(parseNRC("၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆"));
/* မျှော်လင့်ထားသည့် ရလဒ်:
{
  stateCode: '12',
  stateNameEn: 'Yangon Region',
  stateNameMm: 'ရန်ကုန်တိုင်းဒေသကြီး',
  township: 'OUGKAMA',
  type: 'နိုင်',
  number: '123456',
  raw: '၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆'
}
*/

// ၄။ Compose လုပ်ခြင်း (NRC အသစ်တည်ဆောက်ခြင်း)
console.log("\n4. Compose Result:");
const composed = composeNRC({
  stateCode: 12,
  township: "UKAMA",
  type: "N",
  number: "123456",
});
console.log("Composed NRC:", composed); // 12/OUGKAMA(N)123456 ဖြစ်ရပါမယ်
