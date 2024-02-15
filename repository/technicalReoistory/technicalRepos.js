const Techincal = require('../../module/technicalDataSchema/techincal');

const getTechincalById = async id => {
    try {
        const tech = await Techincal.findById(id);
        return tech;
    } 
    catch{
        return false;
    }
};

const addTechincal = async reqData => {
    try {
        const newTech = new Techincal(reqData);
        await newTech.save();
        return newTech;
    } 
    catch {
        return false;
    }
};


const udpateTechincal = async (id, newData) => {
    try {
        const tech = await Techincal.findByIdAndUpdate(id,newData);
        return tech;
    } 
    catch {
        return false;
    }
};

const deleteTechincal = async id => {
    try {
        const deletedTech = await Techincal.findByIdAndDelete(id);
        return deletedTech;
    } 
    catch {
        return false;
    }
};

const getAllTechincal = async id => {
    try {
        const techs = await Techincal.find();
        return techs;
    } 
    catch {
        return false;
    }
};



module.exports = {
    getTechincalById,
    addTechincal,
    udpateTechincal,
    deleteTechincal,
    getAllTechincal,
};