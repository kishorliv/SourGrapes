const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Issue = new Schema({
    issue_id: {
        type: String
    },
    issue_date_created: {
        type: String
    },
    issue_date_due: {
        type: String
    },
    issue_title: {
        type: String
    },
    issue_description: {
        type: String
    },
    issue_author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    issue_status: {
        type: String
    },
    issue_severity: {
        type: String
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }
});

module.exports = mongoose.model('Issue', Issue);