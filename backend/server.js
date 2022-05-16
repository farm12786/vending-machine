const express = require("express");
const app = express();
const middleware = require("./middleware/middleware");
const PORT = process.env.PORT || 7709;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(middleware);
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({
    message: "vending machine is running ...",
  });
});

app.use("/api/v1/products", require("./route/product"));

app.listen(PORT, () => {
  console.log("Start server at port " + PORT);
});
