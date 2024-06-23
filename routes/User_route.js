const router = require("express").Router();
const checkRoles = require("../middlewares/role_check_middleware");
const encryptPsw = require("../middlewares/psw_encrypt_middleware");

//RBAC => Role Based Acces Control

router.get("/", (req, res) => {
  console.log(req.body);
  res.send({ data: "Here is your user data" });
});

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

router.post("/password", checkRoles("[user]"), encryptPsw, (req, res, next) => {
  try {
    res.json({ pw: req.body.password });
  } catch (err) {
    next(err);
  }
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

router.use(encryptPsw);
router.use(checkRoles);
module.exports = router;
