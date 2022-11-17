const num = require('./01-module.js');
// num = {a:1, b:3}
const a = num.a;
const b = num.b;


function add(){
    return a + b;
}

module.exports = add;
//module.exports = {add};
//result 