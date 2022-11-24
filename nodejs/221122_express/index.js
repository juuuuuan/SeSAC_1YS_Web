// 6줄은 고정값. 외우자.
const express = require("express");
const app = express();
const port = 8080; //1023 이하 숫자 말고 그 이상 숫자로 하자. 8080, 8000, 3000 많이 쓰임.

app.set('view engine', 'ejs') // 암기. 나는 view엔진으로 ejs 템플릿을 쓸 거다 라는 뜻.

// app.use(express.static("static"));
//src="img/cat.jpg"

app.use(express.urlencoded({extended: true})); // x-www-urlencoded 데이터 해석
app.use(express.json()); // json형태(딕셔너리 형태와 비슷)로 파싱해주겠다 라는 뜻.
// {
//     key: value
// }

// 클라이언트가 접근을 하려면 서버 측에서 작업을 해줘야 한다. 미들웨어 등록을 해줘야 돼.
app.use("/public", express.static("static")); // 첫번째 인자는 가상경로, 두번째 인자는 무조건 express.static("실제 존재하는 파일이름")으로 써줘야.
// static 이라는 실제 존재하는 폴더에 static 경로로 접근할 수 있도록 함. // 가상경로 이름은 맘대로 해줘도 되는데, 그냥 static으로 설정해주는게 안 헷갈림.
// src="/public/img/cat.jpg"

// localhost: 8080 // 웹서버를 열어주는 app객체의 method(라우트) 중 하나인, get
app.get('/', (req, res)=>{
    res.send("hello express"); //res=server to client 요청을 받아서 서버가 클라이언트에게 응답을 보내는 것. 그래서 method가 send. / req=client to server 클라이언트가 서버에게 보내는 요청.
})

// localhost: 8080/test
app.get('/test', (req, res)=>{
    res.sendFile(__dirname  + "/views/index.html"); //sendfile에 들어가는 것은 무조건 절대경로여야 함.
})
// __dirname : C:/~~~~~/~~~~/221122_express

// localhost:8080/ejs
app.get('/ejs', (req, res)=>{
    res.render("index", {
        title: "index 페이지 입니다.",
        data: ["a", "b", "c"]
    });
})

// localhost:8080/img
app.get('/img', (req, res)=>{
    res.render("img", {
        
    });
})

// localhost:8080/form

app.get('/form', (req, res)=>{
    res.render("form");
})

app.get('/getForm', (req, res)=>{
    console.log(req.query);
    res.send("get 요청 성공");
})

app.post('/postForm', (req, res)=>{
    console.log(req.body);
    res.render("result", {data: req.body});
})

app.get('/getForm', (req, res)=>{
    console.log(req.query);
    res.render("practice_get", {});
    
})

//app 서버 여는 것. 맨 마지막에 코드 써주는 것이 좋음.
app.listen( port, ()=>{
    console.log("server open : ", port);
})