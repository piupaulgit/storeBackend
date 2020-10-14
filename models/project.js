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
    },

    startDate: {
        type: Date,
        required: [true, "Start date is required."]
    },
    endDate: {
        type: Date,
        required: [true, "End date is required."]
    },
    client: {
        name: {
            type: String
        },
        mobile: {
            type: String
        },
        email: {
            type: String
        }
    }
},
{
    timestamps: true
}
)


module.exports = mongoose.model('Project', ProjectSchema)