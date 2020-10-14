const Project = require('../models/project')
const { sendResponseToFrontend } = require('../shared/handleResponse')


// add project
module.exports.addProject = async(req, res) => {
    try{
        const project = await Project.create(req.body);
        sendResponseToFrontend(res, 200, project, false, "project added successfully");
    }
    catch(err){
        console.log(err)
        sendResponseToFrontend(res, 400, err, true, "project not added.");
    }
}

// get all projects
// ==================================

// get single project detail
// ==================================

// update project
// ==================================

// delete project
// ==================================

