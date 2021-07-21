const express = require('express');
const router = express.Router();

const {placeOrder} = require('../controller/order')


router.route('/buy').get(placeOrder);
router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;