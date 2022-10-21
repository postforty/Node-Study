const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

app.use(
  express.json({
    limit: "50mb",
  })
);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장
  },
});

const upload = multer({ storage: storage });

app.post("/api/attachment", upload.single("attachment"), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

// app.use(express.static("public"));
app.use("/static", express.static("public"));

//http://localhost:3000/static/images/profile.jpg
app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
