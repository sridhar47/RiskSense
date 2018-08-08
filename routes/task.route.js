const express = require('express');
const router = express.Router();

const task_controller = require('../controllers/task.controller');

router.post('/api/add', task_controller.add);
router.post('/api/upload', task_controller.upload)
router.get('/fetch', task_controller.getAllTasks)



module.exports = router;