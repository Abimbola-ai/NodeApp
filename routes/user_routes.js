// routes/user_routes.js


const express = require("express");

const  userController = require("../controller/user_controller"); 

const router = express.Router();

router.get('/', userController.getUser);
router.get('/:roll', userController.getspecUser);
router.post('/', userController.createUser);
router.patch('/:roll', userController.updateUser);
router.delete('/:roll', userController.deleteUser);

module.exports=router;