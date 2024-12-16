const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/register',async(req,res) => {
    const {username,email,password} = req.body;
    try{
        const user = new User({username,email,password});
        await user.save();
        res.status(201).json({message: 'Registration successfully'});
    }catch(err){
        res.status(500).json({error: err.message})
    }
});

module.exports = router;