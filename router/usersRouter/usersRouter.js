const express = require('express');
const router = express.Router();
const userController = require('../../controllers/usersController/usersControllers');

router.get("/user/:id", userController.getUserByID);

router.post("/signup", userController.user_post);

router.get("/",userController.getindex);
  

module.exports = router;