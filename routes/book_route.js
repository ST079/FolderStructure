const router = require("express").Router();
const userRouter = require("./User_route");

router.get("/", (req, res) => {
  res.json({ msg: "hello from book" });
});

router.use("/users", userRouter);

module.exports = router;
