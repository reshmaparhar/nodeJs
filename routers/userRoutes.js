const express = require('express');
const router = express.Router();
const validation = require('../middlewares/validator/validation');
const schema = require('../middlewares/validator/userSchema');
const addUser = require('../controller/user');
/**
 * @swagger
* /userapi/user:
 *   post:
 *     summary: Add User
 *     description: Add User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mobileNumber:
 *                 type: string
 *                 description: user's unique mobile number.
 *                 example: 9233333316
 *               password:
 *                 type: string
 *                 description: The user's password.
 *                 example: reshma@123    
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

router.route('/user').post(validation(schema.addNewUser),addUser);
module.exports = router;