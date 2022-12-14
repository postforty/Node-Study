const express = require("express");
const app = express();
console.log(app.get("env"));

require("dotenv").config({ path: `mysql/.env.${app.get("env")}` }); // 반드시 mysql 위에 위치해야 함
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

app.get("/api/product/category", async (req, res) => {
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});

app.get("/api/product/category: product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

app.post("/api/product/category", async (req, res) => {
  const result = await mysql.query("categoryInsert", req.body.param);
  res.send(result);
});

app.put("/api/product/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]); // 배열 요소가 쿼리의 ? 순서대로 들어감
  res.send(result);
});

app.delete("/api/product/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryDelete", product_category_id);
  res.send(result);
});
