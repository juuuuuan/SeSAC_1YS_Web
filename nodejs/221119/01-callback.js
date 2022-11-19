
func1(function (name){
  console.log("func2");
  console.log("name : ", name);   
})
//위 callback함수를 promise로 바꾸면,
func1().then(function(name){
  console.log("func2");
  console.log("name : ", name);   
})