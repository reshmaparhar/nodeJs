const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const User = mongoose.Schema({
    
    "mobileNumber":{
        type:String ,
        length:10,
        required:true,
        unique:true
    },
    "password":{
        type: String, 
        trim: true,
        required: true 
    }

})

User.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  }
  
module.exports = mongoose.model('User',User);