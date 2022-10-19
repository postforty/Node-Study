const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가  포트 3000번으로 시작되었습니다.");
});

// ? 0 혹은 1개: /abcd, /acd
app.get("/ab?cd", (req, res) => {
  res.send("ab?cd");
});

// b가 1개 이상
app.get("/ab+cd", (req, res) => {
  res.send("ab?cd");
});

// 사이에 아무 문자나 들어 올 수도 안들어 올 수도 있음
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get(/a/, (req, res) => {
  res.send("/a/");
});

app.get(/^insert/, (req, res) => {
  res.send("/^insert/");
});
