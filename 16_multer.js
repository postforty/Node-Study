const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
require("dotenv").config({ path: `mysql/.env.test` }); // 반드시 mysql 위에 위치해야 함
// console.log(process.env);
const mysql = require("./mysql");

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

app.post("/api/attachment", upload.single("attachment"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);

  // 업로드된 파일 정보를 fileInfo 객체에 담아 DB로 보낼 수 있다.
  const fileInfo = {
    product_id: parseInt(req.body.product_id),
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    filename: req.file.filename,
    path: req.file.path,
  };

  res.send(fileInfo);

  // 현재 DB의 product_image 테이블이 상품 테이블과 조인이 걸려있어 DB저장은 안됨
  // 따라서 아래 코드는 주석 처리함
  // const r = await mysql.query("imageInsert", fileInfo);
  // res.send(r);
});

// app.use(express.static("public"));
app.use("/static", express.static("public"));

//http://localhost:3000/static/images/profile.jpg
app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
