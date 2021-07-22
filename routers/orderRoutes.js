const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schemas = require('../middlewares/validator/orderSchema');
const {getOrdersCountForEachUser,getOrdersCountForEachProduct} = require('../controller/order')

router.route('/orderscountbyuser').get(validation(schemas.getCount),getOrdersCountForEachUser)
router.route('/orderscountbyproduct').get(validation(schemas.getCount),getOrdersCountForEachProduct)


module.exports = router;