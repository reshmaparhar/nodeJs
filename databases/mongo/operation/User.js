const User = require('../models/user')
const bcrypt = require("bcrypt");

const findUserById = async(userId)=>{
    const user =  await User.findById(userId)
    return user;
}
const findUser =  async(userId)=>{
    const user =  await User.find(userId)
    return user;
}
const addNewUser = async(newUser)=>{
    try{
        const user = new User(newUser);
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        user.password = await bcrypt.hash(user.password, salt);
        await user.save()
        return user;
    }
    catch(error){
        if(error.code == 11000){
            
            return 
     }
 }
        
}
module.exports = {
    findUserById,
    findUser,
    addNewUser
}