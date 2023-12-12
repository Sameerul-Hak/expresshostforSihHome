const mongoose = require('mongoose');

// Define the schema
const ProjectSchema = new mongoose.Schema({
    department: {
        type: String,
        required: true,
        default: 'Highways'
    },
    projectName: {
        type: String,
        required: true,
        default: 'Bridge'
    },
    projectEngineer: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
        default: 'Chennai'
    },
    estimatedTime: {
        type: String,
        required: true
    },
    estimatedBudget: {
        type: String,
        required: true
    },
    completionStatus: {
        type: String,
        default: null // You can set a default value or change it as needed
    }
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
