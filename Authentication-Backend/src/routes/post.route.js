const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/create', (req, res) => {

    const token = req.cookies.Hero;

    if(!token){
        return res.status(401).send({
            message: "Unauthorized"
        })
    }
    
    jwt.verify(token,process.env.JWT_SECRET);

    res.send("Post created successfully");
});

module.exports = router;