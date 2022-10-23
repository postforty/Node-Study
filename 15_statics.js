const express = require("express");
const app = express();

// 이미지 등 정적 파일 서버
// app.use(express.static("public"));
app.use("/static", express.static("public"));

//http://localhost:3000/static/images/profile.jpg
app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
