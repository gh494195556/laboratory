// const regex = /bo{1,}/;
// const str = 'A boat grunted';
// console.log(RegExp(regex).test(str));

// 匹配一个电话号码
const regexNum = /1\d{10}/;
const strNum = '17777613941';
console.log(RegExp(regexNum).test(strNum));

// 匹配一个邮箱
const regexEmail = /\w+@\w+\.\w+/;
const strEmail = 'z@xxx.x';
console.log(RegExp(regexEmail).test(strEmail));

// 匹配一个日期
const regexDate = /[12]\d{3}\/[01]\d{1}\/[0123]\d{1}/;
const strDate = '1011/11/02';
console.log(RegExp(regexDate).test(strDate));
