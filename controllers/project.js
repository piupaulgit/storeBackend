const Project = require('../models/project');
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
module.exports.getAllProjects = (req, res) => {
    Project.find().exec((err, project) => {
        if(err){
            sendResponseToFrontend(res, 400, {},true, "No project found")
        }
        sendResponseToFrontend(res, 200, project, false, "project successfully fetched")
    })
}
// ==================================

// get single project detail
// ==================================

// update project
// ==================================

// delete project
// ==================================

