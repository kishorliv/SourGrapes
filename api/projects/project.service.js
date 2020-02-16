const Project = require('./project.model');

module.exports = {
    add,
    getAll,
    getById,
};

async function add(projectData){
    if(await Project.findOne({project_name: projectData.project_name})){
        throw new Error('Project with same name already exists!');
    }
    const project = new Project(projectData);
    await project.save();

    return project;
}

async function getAll(){
    return await Project.find();
}

async function getById(id){
    return await Project.findById(id);
}
