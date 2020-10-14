const express = require('express');
const { addProject } = require('../controllers/project');
const router = express.Router();

// add new project
router.post('/project/add', addProject)



module.exports = router;