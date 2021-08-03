const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schemas = require('../middlewares/validator/orderSchema');
const {getOrdersCountForEachUser,getOrdersCountForEachProduct} = require('../controller/order')

/**
 * @swagger
 * /order/orderscountbyuser:
 *   get:
 *     summary: Retrieve Order's Count for each User.
 *     description: Retrieve Order's Count for each User by UserId
 *     parameters:
 *       - in: query
 *         name: values
 *         schema:
 *           type: object
 *           properties:
 *              limit: 
 *                  type: integer
 *                  required: true
 *                  description: Used for paging to show how many items per page should be present.
 *              page:
 *                  type: integer
 *                  required: true
 *                  description: Used for paging to show which page should be shown.
 *       
 *     responses:
 *       200:
 *         description: Order's count by userId.
 *         content:
 *           application/json:
 *              schema:
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
 *                         example: 1
 *                       count:
 *                         type: integer
 *                         description: The order's count.
 *                         example: 12
 *                      
 */

router.route('/orderscountbyuser').get(validation(schemas.getCount),getOrdersCountForEachUser)
/**
 * @swagger
 * /order/orderscountbyproduct:
 *   get:
 *     summary: Retrieve Order's Count for each Product.
 *     description: Retrieve Order's Count for each product by ProductId
 *     parameters:
 *       - in: query
 *         name: values
 *         schema:
 *           type: object
 *           properties:
 *              limit: 
 *                  type: integer
 *                  required: true
 *                  description: Used for paging to show how many items per page should be present.
 *              page:
 *                  type: integer
 *                  required: true
 *                  description: Used for paging to show which page should be shown.
 *        
 *         
 *     responses:
 *       200:
 *         description: Order's count by productId.
 *         content:
 *           application/json:
 *              schema:
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
 *                         example: 1
 *                       count:
 *                         type: integer
 *                         description: The order's count.
 *                         example: 12
 *                    
 
 */
router.route('/orderscountbyproduct').get(validation(schemas.getCount),getOrdersCountForEachProduct)


module.exports = router;