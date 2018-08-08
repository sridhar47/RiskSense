const express = require('express');
const router = express.Router();

const visualization_controller = require('../controllers/visualization.controller');

router.get('/map', visualization_controller.map)

module.exports = router;