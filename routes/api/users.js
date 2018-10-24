const express = require("express");
const router = express.Router();

// @route GET api/users
// @desc users routes
// @access Private
router.get("/", (req, res) =>
  res.send({
    msg: "hi good",
    status: 200,
    tel: "ask your father"
  })
);

module.exports = router;
