const express = require("express");
const app = express();
// console.log(app.get("env"));

require("dotenv").config({ path: `mysql/.env.test` }); // 반드시 mysql 위에 위치해야 함
// console.log(process.env);
const mysql = require("./mysql");

// post를 받기 위해 필요한 코드
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가  포트 3000번으로 시작되었습니다.");
});

// http://localhost:3000/api/categoryList
app.get("/api/:alias", async (req, res) => {
  const categoryList = await mysql.query(req.params.alias);
  res.send(categoryList);
});
