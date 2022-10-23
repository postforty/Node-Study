const express = require("express");
const app = express();

require("dotenv").config({ path: `nodemailer/.env` });
const nodemailer = require("./nodemailer");

// post를 받기 위해 필요한 코드
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가  포트 3000번으로 시작되었습니다.");
});

app.post("/api/email", async (req, res) => {
  console.log(req.body.param);
  const r = await nodemailer.send(req.body.param);
  res.send(r);
});
