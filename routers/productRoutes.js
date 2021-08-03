
const express = require('express');
const app = express();
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schemas = require('../middlewares/validator/schema');
const multer = require('multer')
const path = require('path')
const uploadFunction = require('../middlewares/fileUpload')


const {addProduct, updateProduct,deleteProduct,getProduct,getProductById}= require('../controller/product.js');
/**
 * @swagger
 * /api/getProduct:
 *   get:
 *     summary: Retrieve a list of Products.
 *     description: Retrieve a list of Products from database. 
 *     responses:
 *       200:
 *         description: A list of Products.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The product's ID.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: The product's name.
 *                         example: Product -1     
 *                       price:
 *                         type: integer
 *                         description: The product's price.
 *                         example: 100
 *                       availableQuantity:
 *                         type: integer
 *                         description: The product's available Quantity.
 *                         example: 95
 *                       manufacturer:
 *                         type: string
 *                         description: The product's manufacturer's name.
 *                         example: manufacturer 1
 *                       image:
 *                         type: string
 *                         description: The Image of Product.
 *                         example: ../../Images/mango.jpeg
*/

router.route('/getProduct').get(getProduct);
/**
 * @swagger
* /api/product:
 *   post:
 *     summary: Add Product
 *     description: Add Product into database
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: integer
 *                 description: The product's ID.
 *                 example: 0
 *               name:
 *                 type: string
 *                 description: The product's name.
 *                 example: Product -1     
 *               price:
 *                 type: integer
 *                 description: The product's price.
 *                 example: 100
 *               availableQuantity:
 *                  type: integer
 *                  description: The product's available Quantity.
 *                  example: 95
 *               manufacturer:
 *                  type: string
 *                  description: The product's manufacturer's name.
 *                  example: manufacturer 1
 *               myFile:
 *                  name: myFile
 *                  type: file
 *                  description: The file to upload.
 *     responses:
 *       200:
 *         description: Newly Added Product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: integer
 *                       description: The Product ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The product's name.
 *                       example: Product -1 
 *                     price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: 100
 *                     availableQuantity:
 *                        type: integer
 *                        description: The product's available Quantity.
 *                        example: 95
 *                     manufacturer:
 *                        type: string
 *                        description: The product's manufacturer's name.
 *                        example: manufacturer 1
 *                     image:
 *                        type: string
 *                        description: The Image of Product.
 *                        example: ../../Images/mango.jpeg
 *                                      
 *     
 *                       
 *   
 *               
*/

router.route('/product').post(uploadFunction,validation(schemas.addNewProduct),addProduct)
/**
 * @swagger
 * /api/{id}:
 *   get:
 *     summary: Retrieve a single Product.
 *     description: Retrieve a single Product. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the Product to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single Product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: integer
 *                       description: The Product ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The product's name.
 *                       example: Product -1 
 *                     price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: 100
 *                     availableQuantity:
 *                        type: integer
 *                        description: The product's available Quantity.
 *                        example: 95
 *                     manufacturer:
 *                        type: string
 *                        description: The product's manufacturer's name.
 *                        example: manufacturer 1
 *                     image:
 *                        type: string
 *                        description: The Image of Product.
 *                        example: ../../Images/mango.jpeg
 *                       
 *   delete:
 *     summary: Delete a single Product.
 *     description: Delete a single Product. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Display content of the product which is deleted.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: integer
 *                       description: The Product ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The product's name.
 *                       example: Product -1 
 *                     price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: 100
 *                     availableQuantity:
 *                        type: integer
 *                        description: The product's available Quantity.
 *                        example: 95
 *                     manufacturer:
 *                        type: string
 *                        description: The product's manufacturer's name.
 *                        example: manufacturer 1
 *                     image:
 *                        type: string
 *                        description: The Image of Product.
 *                        example: ../../Images/mango.jpeg
 *                       
 *   put:
 *     summary: Update a single Product.
 *     description: Update a single Product. 
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the product to update.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The product's name.
 *                 example: Mango
 *     responses:
 *       200:
 *         description: Display the content of Updated Product.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: integer
 *                       description: The Product ID.
 *                       example: 1
 *                     name:
 *                       type: string
 *                       description: The product's name.
 *                       example: Product -1 
 *                     price:
 *                        type: integer
 *                        description: The product's price.
 *                        example: 100
 *                     availableQuantity:
 *                        type: integer
 *                        description: The product's available Quantity.
 *                        example: 95
 *                     manufacturer:
 *                        type: string
 *                        description: The product's manufacturer's name.
 *                        example: manufacturer 1
 *                     image:
 *                        type: string
 *                        description: The Image of Product.
 *                        example: ../../Images/mango.jpeg
 *                       
*/
router.route('/:_id').get(validation(schemas.getId),getProductById).delete(validation(schemas.getId),deleteProduct).put(validation(schemas.editProduct),updateProduct);
module.exports = router;