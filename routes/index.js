const express = require("express");
const router = express.Router();

// route 1
router.get("/", (req, res) => {
  res.json("Namesta World");
});

module.exports = router;
