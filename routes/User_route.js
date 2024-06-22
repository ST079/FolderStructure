const router = require("express").Router();
const checkRoles = require("../middlewares/role_check_middleware");

//RBAC => Role Based Acces Control


router.get("/user", checkRoles("[user]"), (req, res, next) => {
  try {
    res.send({ msg: "user accessed" });
  } catch (err) {
    next(err);
  }
});
router.get("/admin", checkRoles("[admin]"), (req, res, next) => {
  try {
    res.send({ msg: "admin accessed" });
  } catch (err) {
    next(err);
  }
});

router.get("/", (req, res) => {
  console.log(req.body);
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

router.use(checkRoles);
module.exports = router;
