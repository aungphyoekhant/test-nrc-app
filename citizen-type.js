import { getStateTownships, getCitizenType } from "myanmar-nrc-validator";

// 1. State နှင့် Townships များကို ဆွဲထုတ်ရန်
const yangonInfo = getStateTownships("12");
console.log(yangonInfo?.stateNameEn); // Yangon

// 2. Citizen Type ကို ဆွဲထုတ်ရန်
const citizenType = getCitizenType("12/UKAMA(N)123456");
console.log(citizenType); // နိုင် (သို့မဟုတ် N လိုက်ရင်လည်း ပုံစံပေါ်မူတည်ပြီး ထုတ်ပေးနိုင်သည်)

const type = getCitizenType()
console.log(type)