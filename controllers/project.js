const Project = require('../models/project')
const { sendResponseToFrontend } = require('../shared/handleResponse')

module.exports.addProject = async(req, res) => {
    try{
        const project = await Project.create(req.body);
        sendResponseToFrontend(res, 200, project, false, "Project added successfully");
    }
    catch(err){
        console.log(err)
    }
}