// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
//     if (req.url === '/'){
//         res.end("여기는 루트입니다.");
//     } else if (req.url === "/login"){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
// npm install body-parser -s
const app = express();
// npm install express --save

// 라우팅
const home = require("./src/routes/home")

// ctrl+c로 실행 중인 프로세스 종료
// node 파일명으로 프로세스 실행
// 꼭 저장 후 실행

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs"); // ejs는 html과 매우 유사
// npm install ejs -s
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// url을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 인식되지 않는 문제 해결


app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드

module.exports = app;