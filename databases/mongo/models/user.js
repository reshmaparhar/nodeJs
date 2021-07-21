const mongoose = require('mongoose');


const User = mongoose.Schema({
    
    "mobileNumber":{
        type:String ,
        length:10,
        unique:true
    },
    "password":{
        type: String, 
        minlength: 8,
        maxlength: 16,
        trim: true,
        required: true 
    }

})
/*User.pre('save',async function(next){
    try{
        const salt = await bcrypt.gensalt(10);
        const hashedPassword = await bcrypt.hash(this.password,salt);
        this.password = hashedPassword;
        next()
    }
    catch(err){
        next(err)
    }
})*/
User.methods.isValidPassword = async function(password) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);
  
    return compare;
  }
module.exports = mongoose.model('User',User);