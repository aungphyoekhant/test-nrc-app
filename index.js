import { validateNRC, parseNRC } from 'myanmar-nrc-validator';

console.log("Testing NRC Validator:");
console.log("12/ဥကမ(နိုင်)123456 ->", validateNRC("12/ဥကမ(နိုင်)123456"));
console.log("Parsed Data:", parseNRC("12/ဥကမ(နိုင်)123456"));