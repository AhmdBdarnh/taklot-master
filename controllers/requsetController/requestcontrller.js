const reqRepository = require('../../repository/requestRepostiory/requesRepos');
const { NotFoundError, BadRequsetError } = require('../../errors/err');
const req = require('../../module/reuqestsSchema/request');
const multer = require('multer');

// Add middleware for file upload
const upload = multer({ dest: 'uploads/' });

// Your other controller methods...

// Controller method for uploading image
const uploadImage = async (req, res) => {
    try {
      const helpseekerId = req.body.helpseekerId;
        // Save the image to the database using the repository
        const newImage = await reqRepository.addReq({
          helpseekerId,
            image: {
                filename: req.file.originalname,
                contentType: req.file.mimetype,
                image: req.file.buffer
            }
        });
        res.status(201).send('Image uploaded successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading image');
    }
};

const renderUploadForm = async (req, res) => {
  try {
      // Assuming 'name' is the field by which you want to retrieve the image
      const imageName = req.params.name; // Assuming the name is passed as a parameter

      // Retrieve the latest uploaded image from MongoDB based on the name
      const latestImage = await req.findOne({ filename: imageName }).sort({ _id: -1 });

      // Render the upload form along with the latest image data
      res.render('upload', { latestImage: latestImage });
  } catch (err) {
      console.error(err);
      res.status(500).send('Error retrieving image');
  }
};
























// add new request to db
const getReqPage = async (req, res) => {
  try {
    res.render('add_request');
} 
catch (err) {
  return res.status(err?.status || 500).json({ message: err.message });
}
};







// add new request to db
const request_post = async (req, res) => {
  try {
    const new_Req = await reqRepository.addReq(req.body);
    if (!new_Req) throw new BadRequsetError(`Request implement is not true`);
      res.status(200).render('home', { userId: new_Req.userId });

  } 
  catch (err) {
    res.status(err?.status || 500).json({ message: err.message });
  }
};

// get all request in db
const getReqByID = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await reqRepository.getReqById(id);
    if (!request || request.length === 0) throw new NotFoundError('Request');
    return res.status(200).send(request);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// update request
const req_update = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedReq = await reqRepository.udpateReq(id, req.body);
    if (!updatedReq || updatedReq.length === 0) throw new NotFoundError('Request');
    return res.status(200).send(updatedReq);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// delete request
const req_delete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedReq = await reqRepository.deleteReq(id);
    if (!deletedReq || deletedReq.length === 0) throw new NotFoundError('Request');
    return res.status(200).send(deletedReq);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};


// get all request in db
const getAllReq = async (req, res) => {
  try {
    const req = await reqRepository.gettAllReq();
    if (!req || req.length === 0) throw new NotFoundError('Request');
    return res.status(200).send(req);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};




module.exports = {
request_post,
getReqByID,
req_update,
req_delete,
getAllReq,
getReqPage,

uploadImage,
renderUploadForm

};