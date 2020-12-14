var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    const errors = { email: null, message: null};
    const emailRegex = /^\S+@\S+\.\S+$/;

    if(req.body.email == null || !req.body.email.match(emailRegex) )
        errors.email = 'Email is not valid.';

    if(req.body.message == null || req.body.message.length < 30)
        errors.message = 'Message is too short. Should be at least 30 characters long.';

    if(errors.email || errors.message)
        res.status(422).json(errors);
    else
        res.status(200).json({ response: 'Your message has been sent!' });
});

module.exports = router;