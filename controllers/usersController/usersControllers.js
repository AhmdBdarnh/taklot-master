const userRepository = require('../../repository/userRepository/userRepos');
const { NotFoundError, BadRequsetError } = require('../../errors/err');


// add new User to db
const user_post = async (req, res) => {
  try {
    const new_user = await userRepository.addUser(req.body);
    if (!new_user) throw new BadRequsetError(`User implement is not true`);
    res.status(200).redirect(req.originalUrl);
  } 
  catch (err) {
    res.status(err?.status || 500).json({ message: err.message });
  }
};

// get all User in db
const getUserByID = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userRepository.getUserByID(id);
    if (!user || user.length === 0) throw new NotFoundError('User');
    return res.status(200).send(user);
  } 
  catch (err) {
    return res.status(err?.status || 500).json({ message: err.message });
  }
};



module.exports = {
  user_post,
  getUserByID
};