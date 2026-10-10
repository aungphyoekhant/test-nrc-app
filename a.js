import { parseNRC, composeNRC } from "myanmar-nrc-validator";

// ဥပမာ - မြန်မာဖော်မတ် ဝင်လာရင် အင်္ဂလိပ်ဖော်မတ်သို့ ပြောင်းရန်
const rawInput = "၁၂/ဥကမ(နိုင်)၁၂၃၄၅၆";
const parsed = parseNRC(rawInput);

if (parsed) {
  // အင်္ဂလိပ်ဖော်မတ်သို့ ပြောင်းထုတ်ခြင်း
  const englishFormat = composeNRC({
    stateCode: parsed.stateCode,
    township: parsed.township, // parsed လုပ်ထားတဲ့ Short Code (UKAMA) ထွက်လာမည်
    type: "N", // အင်္ဂလိပ်လို ပြောင်းမည်
    number: parsed.number,
  });

  console.log("Converted to English:", englishFormat);
  // ထွက်လာမည့်ရလဒ်: 12/UKAMA(N)123456
}
