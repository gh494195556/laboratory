function* fibs() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

let [first, second, third, fourth, fifth, sixth] = fibs();
// 0 1 1 2 3 5
console.log(first, second, third, fourth, fifth, sixth);

let { name: n, age: a } = { name: 'tom', age: 21 };
console.log(n, a);

// 7. 当通过结构把值赋予一个已经存在的变量时，需要用括号括起来
let x;
({ name: x } = { name: 'tom' });
console.log(x);
