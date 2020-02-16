const User = require('./user.model');

module.exports = {
    getAll,
    getById,
    add
};

async function add(userData){
    if(await User.findOne({user_uid: userData.user_uid})){
        throw new Error('User already exists!');
    }
    const user = new User(userData);
    await user.save();

    return user;
}


async function getAll(){
    return await User.find();
}

async function getById(id){
    return await User.findById(id);
}
