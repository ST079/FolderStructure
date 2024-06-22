const router = require("express").Router();
const userRouter = require("./User_route");
const { numberFormat } = require("../utils/numberFormatter");

router.get("/", (req, res) => {
  res.json({ msg: "hello from book" });
});

router.get("/:id", (req, res, next) => {
  //throw
  //try catch => always go with this
  // try catch finally

  try {
    const { id } = req.params;
    const { name } = req.body;
    if (!id || !name) throw new Error("Id is missing");
    res.json({ msg: `this is ${id} of ${name}` });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/:number", (req, res) => {
  //req.params => /:id => req.params.id // details
  //req.query => ?key:value //paginations
  //req.body => raw json ({'key':'value'}) //forms
  console.log({ params: req.params });
  console.log({ body: req.body });
  console.log({ Query: req.query });
  const result = numberFormat(
    req.query.number || req.body.number || req.params.number
  );
  console.log(result);
  res.json({ msg: result });
});

router.use("/users", userRouter);

module.exports = router;
