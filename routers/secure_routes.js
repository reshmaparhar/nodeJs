const express = require('express');
const router = express.Router();
const {placeOrder, getOrder} = require('../controller/order')
const schema = require('../middlewares/validator/orderSchema')
const validation = require('../middlewares/validator/validation')

router.route('/orders').get(validation(schema.getOrder),getOrder);
router.route('/buy').get(validation(schema.placeOrder),placeOrder);
router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;