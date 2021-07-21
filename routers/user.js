const express = require('express');
const router = express.Router();

const validation = require('../middlewares/validator/validation');
const schema = require('../middlewares/validator/userSchema');
const addUser = require('../controller/user');
router.route('/buy').get(validation(schemas.getOrder),getOrder);

//router.route('/user').post(validation(schema.addNewUser),addUser);

router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;