const express = require('express');
const router = express.Router();
const auth = require('./../../middleware/auth');
const User = require('./../../models/User');
const bcrypt = require('bcryptjs');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});
try {
    let user = await User.findOne({email});
    if(!user) {
        return res
            .status(400)
            .json({errors: [{msg: 'Invalid Credentials'}]});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res
            .status(400)
            .json({errors: [{msg: 'Invalid Credentials'}]});
    }
    const payload = {
        user: {
            id: user.id
        }
    }
    jwt.sign(
        payload, 
        config.get('jwtSecret'), 
        {
            expiresIn: 3600000
        }, 
        (err, token) => {
            if(err) throw err;
            res.json({token});
        })
} catch(err) {
    console.log(err.message);
    res.status(400).send('Server Error');
}

module.exports = router;