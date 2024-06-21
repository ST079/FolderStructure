const router = require("express").Router();

router.get("/", (req, res) => {
  res.send({ data: "Here is your user data" });
});

router.post("/", (req, res) => {
  res.send({ data: "user created" });
});

router.put("/", (req, res) => {
  res.send({ data: "user updated" });
});

router.delete("/", (req, res) => {
  res.send({ data: "user deleted" });
});

module.exports = router;
