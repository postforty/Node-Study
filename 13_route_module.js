const express = require("express");
require("dotenv").config({ path: `mysql/.env.test` }); // 반드시 mysql 위에 위치해야 함
const productRoute = require("./routes/product");
const app = express();

// console.log(process.env);

// post를 받기 위해 필요한 코드
app.use(
  express.json({
    limit: "50mb",
  })
);

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

app.use("/api/product/", productRoute);
