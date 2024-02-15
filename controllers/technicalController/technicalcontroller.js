const techRepository = require('../../repository/technicalReoistory/technicalRepos');
const { NotFoundError, BadRequsetError } = require('../../errors/err');


// add new Technical to db
const techincal_post = async (req, res) => {
  try {
    const new_Tech = await techRepository.addTechincal(req.body);
    if (!new_Tech) throw new BadRequsetError(`Technical implement is not true`);
       return res.status(200).json(new_Tech);
  } 
  catch (err) {
    res.status(err?.status || 500).json({ message: err.message });
  }
};

// get all Technical in db
const getTechincalByID = async (req, res) => {
  try {
    const { id } = req.params;
    const tech = await techRepository.getTechincalById(id);
    if (!tech || tech.length === 0) throw new NotFoundError('Technical');
    return res.status(200).send(tech);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// update Technical
const techincal_update = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTec = await techRepository.udpateTechincal(id, req.body);
    if (!updatedTec || updatedTec.length === 0) throw new NotFoundError('Technical');
    return res.status(200).send(updatedTec);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// delete Technical
const techincal_delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTech = await techRepository.deleteTechincal(id);
    if (!deletedTech || deletedTech.length === 0) throw new NotFoundError('Technical');
    return res.status(200).send(deletedTech);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// get all Technical in db
const getAllTechincal = async (req, res) => {
  try {
    const Tech = await techRepository.getAllTechincal();
    if (!Tech || Tech.length === 0) throw new NotFoundError('Technical');
    return res.status(200).send(Tech);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};




module.exports = {
    techincal_post,
    getTechincalByID,
    techincal_update,
    techincal_delete,
    getAllTechincal,
};