const express = require("express");
const router = express.Router();
const db = require("../database/db");

router.get("/all_product", async (req, res) => {
  let cmd = "SELECT * FROM products";
  const db_response = await db.query(cmd);
  res.json({
    message: "success",
    result: db_response,
  });
});

router.put("/reduce_stock/:code", async (req, res) => {
  console.log(req.params.code);
  let cmd = `UPDATE products SET stock = stock - 1 WHERE code = '${req.params.code}'`;
  const db_response = await db.query(cmd);
  console.log(db_response);
  res.json({
    message: "update success",
  });
});

module.exports = router;
