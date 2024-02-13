const User = require('../../module/helpSekeerSchema/helpseeker');

const getUserByID = async userId => {
    try {
        const user = await User.findById(userId);
        return user;
    } 
    catch{
        return false;
    }
};

const addUser = async userData => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        console.error("Error saving user:", error);
        throw error;    
    }
};





module.exports = {
    getUserByID,
    addUser,
};