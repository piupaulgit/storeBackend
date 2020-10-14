const mongoose = require('mongoose');


const ProjectSchema = new mongoose.Schema({
    name : {
        type:String,
        required: [true, "Project name is required."],
        maxlength: 30,
        unique: [true, "Duplicate Project name."],
        lowercase: true,
        trim: true
    },
    description: {
        type: String,
        lowercase: true,
        trim: true
    },
    budget: {
        type: Number,
        trim: true,
        required: [true, "Budget is required"]
    }
})


module.exports = mongoose.model('Project', ProjectSchema)