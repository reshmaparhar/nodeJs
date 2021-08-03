

const jwt      = require('jsonwebtoken');
const passport = require('passport');
const {auth} = require('../config/config');
/**
 * @swagger
* /auth/login:
 *   post:
 *     summary: Login User
 *     description: Verify whether Credentials entered by user are correct or not.
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
 *                   type: object
 *                   properties:
 *                        _id:
 *                          type: integer
 *                          description: user's unique id.
 *                          example: 60f7d70b7c2b445d22e0265d
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

const login =  (req, res, next) =>{

    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(err);
        if (err || !user) {
            return res.status(400).json({
                message: info ? info.message : 'Login failed',
                user   : user
            });
        }

        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }

            const token = jwt.sign({_id:user._id}, auth.secretKey);

            return res.json({user, token});
        });
    })
    (req, res);

}

module.exports = login;
