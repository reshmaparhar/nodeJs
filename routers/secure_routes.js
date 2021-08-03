const express = require('express');
const router = express.Router();
const {placeOrder, getOrder} = require('../controller/order')
const schema = require('../middlewares/validator/orderSchema')
const validation = require('../middlewares/validator/validation')

/**
 * @swagger
* /user/orders:
 *   get:
 *     summary: Get list of Orders Placed by Specific User
 *     description: Get list of Orders Placed by Specific User by giving token Id
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
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Order's Details.
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
 *                        _id:
 *                          type: integer
 *                          description: order's unique ID.
 *                          example: 6108dbb3d22fc03335489201
 *                        orderCreatedBy:
 *                          type: integer
 *                          description: user's unique Id.
 *                          example: 60e82a3a074b796ee68523c5
 *                        productId:
 *                          type: integer
 *                          description: The product's unique Id.
 *                          example: 1
 *                        quantity:
 *                          type: integer
 *                          description: The product's quantity.
 *                          example: 1
 *                        totalCost:
 *                          type: integer
 *                          description: The total cost of Order.
 *                          example: 15
 *         
 *          
 *               
 *                       
 *         
 *          
 *     
 *    
 *                      
*/

router.route('/orders').get(validation(schema.getOrder),getOrder);
/**
 * @swagger
* /user/buy:
 *   post:
 *     summary: Buy Product
 *     description: Get Details of placed Orders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *                 description: product's unique Id.
 *                 example: 3
 *               quantity:
 *                 type: integer
 *                 description: the product's quantity which is to be ordered.
 *                 example: 1
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Order's Details.
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
 *                        _id:
 *                          type: integer
 *                          description: order's unique ID.
 *                          example: 6108dbb3d22fc03335489201
 *                        orderCreatedBy:
 *                          type: integer
 *                          description: user's unique Id.
 *                          example: 60e82a3a074b796ee68523c5
 *                        productId:
 *                          type: integer
 *                          description: The product's unique Id.
 *                          example: 1
 *                        quantity:
 *                          type: integer
 *                          description: The product's quantity.
 *                          example: 1
 *                        totalCost:
 *                          type: integer
 *                          description: The total cost of Order.
 *                          example: 15
 *         
 *          
 *     
 *    
 *                      
*/
router.route('/buy').post(validation(schema.placeOrder),placeOrder);


/**
 * @swagger
* /user/profile:
 *   get:
 *     summary: Verify User
 *     description: Give Access to only authorised user
 *    
 *     security:
 *       - bearerAuth: []
 *         
 *          
 *     
 *     responses:
 *       200:
 *         description: User's Data Along with token.
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
 *                        _id:
 *                          type: integer
 *                          description: user's unique ID.
 *                          example: 60e82a3a074b796ee68523c5
 *                        mobileNumber:
 *                          type: integer
 *                          description: user's unique mobile number.
 *                          example: 9233333316
 *                        password:
 *                          type: string
 *                          description: The user's password.
 *                          example: reshma@123     
 *                      
*/

router.get('/profile', function(req, res, next) {
    res.send(req.user);
});

module.exports = router;