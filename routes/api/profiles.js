const express = require('express');
const router = express.Router();

// @route GET api/profiles
// @desc profiles routes
// @access Public
router.get('/', (req, res) => res.send("Hi from Profiles"));

module.exports = router;