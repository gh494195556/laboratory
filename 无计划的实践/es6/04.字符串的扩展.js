const gender = 1;
const msg = `我是一个${gender === 0 ? '男' : '女'}生`;
console.log(msg);

function add(x, y) {
  return x + y;
}
const [x, y] = [5, 3];
const addResult = `${x} + ${y} = ${add(x, y)}`;
console.log(addResult);

console.log(
  `${[1, 2, 3, 4, 5]}.map(x => x**x)${[1, 2, 3, 4, 5].map(x => x ** x)}`
);

const [toName, fromName] = ['谷梁', '彭傲'];
console.log(`Hi ${toName}:
    ${`
    今天天气挺好的,要不要出去钓鱼呀？
    `}
                      from ${fromName}
`);

function tagFunc(v, to, from) {
  // console.log(arguments);
  // arguments -> { 0: v, 1: to, 2: from }
  console.log(v, to, from);
}

tagFunc`Hello ${toName}, this is ${fromName}.`;
