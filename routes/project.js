const express = require('express');
const { isSignedIn, isAuthenticated, isAdmin } = require('../controllers/auth');
const { addProject, getAllProjects } = require('../controllers/project');
const { getUserbyId } = require('../controllers/user');
const { route } = require('./user');
const router = express.Router();

// params
router.param("userId", getUserbyId);


// add new project
router.post('/project/add/:userId', isSignedIn, isAuthenticated, isAdmin, addProject);

// get all projects
router.get('/project/:userId', isSignedIn, isAuthenticated, isAdmin, getAllProjects);






// test middlewares
router.get('/auth-test/:userId', isSignedIn, isAuthenticated, isAdmin, (req, res) => {
    res.status(200).json({
        msg: "success"
    })
})



module.exports = router;