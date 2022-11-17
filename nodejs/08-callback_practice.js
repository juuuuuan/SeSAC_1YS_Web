function call(name) {
    console.log("사용자는 " + name);
    return "call";
}
function back() {
    return "back";
}
function hell() {
    return "hell";
}


let a = call('kim');
    setTimeout(function(){
    console.log( "시작은 " + a);
}, 2000);
let b = back();
    setTimeout(function(){
    console.log( "두번째는" + b);
}, 3000);
let c = hell();
    setTimeout(function(){
    console.log( "세번째는"  + c);
}, 3500);