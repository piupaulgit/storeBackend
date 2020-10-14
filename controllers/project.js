const Project = require('../models/project')

module.exports.addProject = async(req, res) => {
    try{
        const project = await Project.create(req.body)
        console.log(project)
    }
    catch(err){
        console.log(err)
    }
}