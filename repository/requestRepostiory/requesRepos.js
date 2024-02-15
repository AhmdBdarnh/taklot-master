const Req = require('../../module/reuqestsSchema/request');

const getReqById = async id => {
    try {
        const req = await Req.findById(id);
        return req;
    } 
    catch{
        return false;
    }
};



const udpateReq = async (id, newData) => {
    try {
        const req = await Req.findByIdAndUpdate(id,newData);
        return req;
    } catch (error) {
        console.error("Error saving req:", error);
        throw error;    
    }
};

const deleteReq = async id => {
    try {
        const req = await Req.findByIdAndDelete(id);
        return req;
    } 
    catch {
        return false;
    }
};

const gettAllReq = async id => {
    try {
        const requests = await Req.find();
        return requests;
    } 
    catch {
        return false;
    }
};

const addReq = async reqData => {
    try {
        const newReq = new Req(reqData);
        await newReq.save();
        console.log(newReq);

        return newReq;
    } catch (error) {
        console.error("Error saving req:", error);
        throw error;    
    }
};





module.exports = {
    getReqById,
    addReq,
    udpateReq,
    deleteReq,
    gettAllReq,

};