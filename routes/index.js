// const express = require("express");
// const router = express.Router();
const router = require("express").Router();
const bookRouter = require("./book_route");

router.get("/", (req, res) => {
  res.json({ msg: "Hello from index" });
});

router.use("/books", bookRouter);

module.exports = router;
