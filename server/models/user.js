 const mongoose = require('mongooose');
 const validator = require('validator');


 const userSchema = mongoose.schema({
        email:{
            type:String,
            require:true,
            unique:true,
            trim:true,
            validator(value){
              if(!validator.isEmail(value)){
                throw new Error('Invalid email')
              }
            }
        },
        password:{
            type:String,
            require:true,
            trim:true,
        }
 })

 const User = mongoose.model('user' , userSchema);
 module.exports = { User }; 