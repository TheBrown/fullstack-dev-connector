const express = require('express');
const router = express.Router();

// @route GET api/posts
// @desc posts routes
// @access Public
router.get('/', (req, res) => res.send("Hi from Posts"));

module.exports = router;