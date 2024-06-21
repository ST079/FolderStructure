// const express = require("express");
// const router = express.Router();
const router = require("express").Router();
const bookRouter = require("./book_route");
const userRouter = require("./User_route");
const blogRouter = require("./blog_route");
const roleRouter = require("./roles_route");

router.get("/", (req, res) => {
  res.json({ msg: "Hello from index" });
});

router.use("/books", bookRouter);
router.use("/users", userRouter);
router.use("/blogs", blogRouter);
router.use("/roles", roleRouter);

module.exports = router;
