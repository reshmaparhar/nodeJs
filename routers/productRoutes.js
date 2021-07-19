const express = require('express');
const app = express();
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schemas = require('../middlewares/validator/schema');
const multer = require('multer')
const path = require('path')
const uploadFunction = require('../middlewares/fileUpload')

const {addProduct, updateProduct,deleteProduct,getProduct,getProductById}= require('../controller/product.js');
router.route('/getProduct').get(getProduct);
router.route('/product').post(uploadFunction,validation(schemas.addNewProduct),addProduct)
router.route('/:_id').get(validation(schemas.getId),getProductById).delete(validation(schemas.getId),deleteProduct).put(validation(schemas.editProduct),updateProduct);
module.exports = router;