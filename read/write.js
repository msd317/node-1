const {readFileSync, writeFileSync} = require('fs')
const first= readFileSync('./contant/text1.txt','utf8')
const second  =readFileSync('./contant/text2.txt', 'utf8')
console.log(first)

writeFileSync('./contant/write',`this is a text:${first} and ${second}`,{flag: 'a'})