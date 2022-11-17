//배열구조분해

const { join } = require("path");

let list = ['apple', 'banana'];
[item1, item2] = list;
//let item1 = list[0];
//let itme2 = list[1];
//let item3 = list[2];
console.log(item1);
console.log(item2);

[item1, item2 = 'peach', item3='orange'] = list;
console.log(item1);
console.log(item2);
console.log(item3);

let x = 1;
let y = 3;

let temp = x;
x = y;
y= temp;

[y, x] = [x, y]
// [1, 3]
// [a, b] = [1, 3]

let obj = {
    a: 'one',
    b: 'two',
    e: '1',
    f: '2'
};
// let key1 = obj.a;
let { a, b : key1, c='three' } = obj;
console.log(a);
console.log(key1);
console.log(c);


// 전개 연산자 : 나머지를 전개해서 출력
let { b, ...rest } = obj;
console.log(b);
console.log(rest);
