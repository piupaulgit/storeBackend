const express = require('express');
const { isSignedIn } = require('../controllers/auth');
const { addProject } = require('../controllers/project');
const router = express.Router();

// add new project
router.post('/project/add', isSignedIn, addProject)



module.exports = router;