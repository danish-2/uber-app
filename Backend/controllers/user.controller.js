const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const {validationResult} = require('express-validator');

module.exports.registerUser = async (req, res, next) => {

 const error = await validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    
    const {fullname, email, password} = req.body;

    const hasPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname:fullname.firstname,
        lastname:fullname.lastname,
        email,
        password: hasPassword
    })

    const token = user.generateAuthToken();

    res.status(201).json({user, token});
}

module.exports.loginUser = async (req, res, next) => {
    const error = await validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()});
    }
    
    const {email, password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({error: 'Invalid Email or Password'});
    }
    
    const isMatch = await user.comparePassword(password);
    
    if(!isMatch){
        return res.status(401).json({error: 'Invalid Email or Password'});
    }
    
    const token = user.generateAuthToken();
    
    res.status(200).json({token, user});
}