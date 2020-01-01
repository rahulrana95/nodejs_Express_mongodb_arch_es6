const express = require('express');
const router = express.Router();
const User = require('../models/users/model');

router.post('/user', async (req, res) => {
    console.log(req.body);
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({
            error: true,
            message: err
        })
    }
});

module.exports = router;