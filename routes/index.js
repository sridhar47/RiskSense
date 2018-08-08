const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const home_controller = require('../controllers/home.controller');

router.get('/', home_controller.homePage)

module.exports = router;