const express = require("express");
const router = express.Router();
const mysql = require("../mysql");

router.get("/category", async (req, res) => {
  const categoryList = await mysql.query("categoryList");
  res.send(categoryList);
});

router.get("/category: product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const categoryList = await mysql.query("categoryDetail", product_category_id);
  res.send(categoryList);
});

router.post("/category", async (req, res) => {
  const result = await mysql.query("categoryInsert", req.body.param);
  res.send(result);
});

router.put("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryUpdate", [
    req.body.param,
    product_category_id,
  ]); // 배열 요소가 쿼리의 ? 순서대로 들어감
  res.send(result);
});

router.delete("/category/:product_category_id", async (req, res) => {
  const { product_category_id } = req.params;
  const result = await mysql.query("categoryDelete", product_category_id);
  res.send(result);
});

module.exports = router;
