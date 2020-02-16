const Issue = require('./issue.model');

module.exports = {
    add,
    getAll,
    getById,
};

async function add(issueData){
    if(await Issue.findOne({issue_id: issueData.issue_id})){
        throw new Error('Issue with same name already exists!');
    }
    const issue = new Issue(issueData);
    await issue.save();

    return issue;
}

async function getAll(){
    return await Issue.find().populate('project').populate('issue_author');
}

async function getById(id){
    return await Issue.findById(id);
}
