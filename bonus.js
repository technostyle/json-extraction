const fs = require('fs');
const vtbOnlineJson = require('./vtbonline.json');

// console.log(JSON.parse(profileCreditCardJson));
const keys = ['bonuses', 'credit-card-bonus-options']

const resJson = {}
keys.forEach(key => resJson[key] = vtbOnlineJson.subNodes[key]);
console.log(resJson);
fs.writeFile('./bonus-texts.json', JSON.stringify(resJson), 'utf-8', () => {})
