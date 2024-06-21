const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ data: "Here is your blogs data" });
});

router.post("/", (req, res) => {
  res.send({ data: "blog created" });
});

router.put("/", (req, res) => {
  res.send({ data: "blog updated" });
});

router.delete("/", (req, res) => {
  res.send({ data: "blog deleted" });
});

module.exports = router;
