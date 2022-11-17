console.log( "__filename : " + __filename);
console.log("__dirname : " + __dirname);
console.log("--------------------------------------");

//process 객체 = 현재 실행 중인 노드 프로세스 정보
console.log("process.version : ", process.version);
console.log("prodcess.arch : ", process.arch);
console.log("process.platform : ", process.platform);
console.log("process.cpuUsage : ", process.cpuUsage());

//os - 운영체제
const os = require("os");
console.log("os.type : ", os.type());
console.log("os.cpus : ", os.cpus());
console.log("os.homedir : ", os.homedir());
console.log("os.freemem : ", os.freemem());
console.log("--------------------------------------");

//path 모듈
const path = require("path");
const file = __filename;
console.log("path.extname : ", path.extname(file));
console.log("path.parse :", path.parse(file)); // path 안에는 내가 보내는 경로나 파일명을 구분을 지을 수 있음. 확장자만 가져오거나 이름만 가져오거나. parse는 자기가 구분지을 수 있는 모든 것을 할 수 있다.



