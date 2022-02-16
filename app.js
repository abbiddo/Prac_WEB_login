const express = require("express");
const app = express();
// npm install express --save

// ctrl+c로 실행 중인 프로세스 종료
// node 파일명으로 프로세스 실행
// 꼭 저장 후 실행

// localhost:3000
app.get("/", (req, res) => {
    res.send("여기는 루트입니다.");
});

// localhost:3000/login
app.get("/login", (req, res) => {
    res.send("여기는 로그인 화면입니다.");
});

app.listen(3000, function () {
    console.log("서버 가동");
});