const router = require("express").Router();
const userRouter = require("./User_route");

router.get("/", (req, res) => {
  res.json({ msg: "hello from book" });
});

router.post("/:id", (req, res) => {
  //req.params => /:id => req.params.id // details
  //req.query => ?key:value //paginations
  //req.body => raw json ({'key':'value'}) //forms
  console.log({ params: req.params });
  console.log({ body: req.body });
  console.log({ Query: req.query });
});
router.use("/users", userRouter);

module.exports = router;
