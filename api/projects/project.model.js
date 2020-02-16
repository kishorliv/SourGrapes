const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Project = new Schema({
    project_name: {
        type: String
    },
    project_created: {
        type: String
    },
    project_due: {
        type: String
    }
});

module.exports = mongoose.model('Project', Project);
