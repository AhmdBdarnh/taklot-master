const express = require('express');
const router = express.Router();
const userController = require('../../controllers/usersController/usersControllers');

router.get("/",userController.getindex);

router.get("/user/:id", userController.getUserByID);
router.post("/signup", userController.user_post);
router.put("/user/:id", userController.user_update);
router.delete("/user/:id", userController.user_delete);


  


module.exports = router;