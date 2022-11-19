const http = require('http')
const fs = require('fs').promises;
const server = http.createServer(function(req, res){
    fs.readFile('./test.html');
})
// const server = http.createServer(function(req, res){
//     res.write("<h1>Hello</h1>");
//     res.end("<hr>")
// }); //첫번째, 클라이언트의 요청 , 두번째는 서버의 응답

/*
server.on() // 이벤트를 등록하는 함수
server.listen() // 서버를 실행하고 클라이언트를 기다린다.

*/

server.listen(8080, function(){
    console.log('8080번 포트로 실행');
}); 