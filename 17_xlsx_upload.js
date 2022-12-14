const express = require("express");
const app = express();
const xlsx = require("xlsx");
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

// multer, xlsx 엑셀 업로드 모듈
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // 전송된 파일이 저장되는 디렉토리
  },
  filename: function (req, file, cb) {
    cb(null, new Date().valueOf() + path.extname(file.originalname)); // 시스템 시간으로 파일이름을 변경해서 저장
  },
});

const upload = multer({ storage: storage });

app.post("/api/xlsx", upload.single("xlsx"), async (req, res) => {
  console.log(req.file);
  console.log(req.body);
  const workbook = xlsx.readFile(req.file.path);
  const firstSheetName = workbook.SheetNames[0];
  const firstSheet = workbook.Sheets[firstSheetName];
  const firstSheetJson = xlsx.utils.sheet_to_json(firstSheet);

  res.send(firstSheetJson);
});

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});
