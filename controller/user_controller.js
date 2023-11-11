//controller/user_controller.js
const express= require('express');
const mongoose= require('mongoose');

const User= require('../models/user.js');

const router= express.Router();

const getUser = async (req, res) => {
    try {
        const user= await User.find();
        
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecUser = async (req,res) => {
    const roll = req.params.roll;

    try {
        const us = await User.findOne({roll: roll});

        res.status(200).json(us);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createUser =  async (req, res) => {
    console.log(req.body);
    const newuser = new User({
        name:req.body.name,
        roll:req.body.roll,
        email:req.body.email,
        zipCode:req.body.zipCode

    })
    try {
        await newuser.save();

        res.status(201).json(newuser);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateUser = async (req, res) => {
    const roll= req.params.roll;
    try{
        await User.findOneAndUpdate({
            roll: roll,
        },
        {   
            name:req.body.name,
            email:req.body.email,
            zipCode:req.body.zipCode
           
        }
        )
        res.status(202).json({roll: roll});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteUser = async (req, res) => {
    const roll= req.params.roll;

    try {
        await User.findOneAndRemove({roll: roll});
        res.status(203).json({roll:roll});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getUser= getUser;
module.exports.createUser= createUser;
module.exports.getspecUser= getspecUser;
module.exports.updateUser= updateUser;
module.exports.deleteUser= deleteUser;