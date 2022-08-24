const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const obj = {
    from: "notes.js",
  };
  res.json(obj);
});

module.exports = router;
