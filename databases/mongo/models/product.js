const mongoose = require('mongoose');
/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The Product ID.
 *           example: 1
 *         name:
 *           type: string
 *           description: The product's name.
 *           example: Product -1 
 *         price:
 *           type: integer
 *           description: The product's price.
 *           example: 100
 *         availableQuantity:
 *           type: integer
 *           description: The product's available Quantity.
 *           example: 95
 *          manufacturer:
 *            type: string
 *            description: The product's manufacturer's name.
 *            example: manufacturer 1
 *          image:
 *            type: string
 *            description: The Image of Product.
 *            example: manufacturer 1
 *                       
 *           
 *           
 */
const Product = mongoose.Schema({
    "_id":{
        type:Number,
        required:true
    },
    "name":{
        type:String,
        required:true
    },
    "price":{
        type:Number,
        required:true
    },
    "availableQuantity":{
        type:Number,
        required:true
    },
    "manufacturer":{
        type:String,
        required:true
    },
    "image":{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Product',Product);