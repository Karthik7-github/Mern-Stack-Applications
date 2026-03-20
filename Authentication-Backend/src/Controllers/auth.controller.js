const Usermodel = require('../Models/user.model');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
   const { username, email, password } = req.body;

    const isuseralreadyexists = await Usermodel.findOne({
        email 
    })

    if(isuseralreadyexists){
        return res.status(409).json({
            message:"User Already Exists"
        });
    }

    const newUser = await Usermodel.create({
        username,email,password
    });

    const token = jwt.sign({
        id:newUser._id
    },process.env.JWT_SECRET);

    res.cookie("Hero",token);

    res.status(201).send({
        Message:"User Created",
        NewUser:newUser,
        Token:token
    });
};



module.exports = { registerUser }; 