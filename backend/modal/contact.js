const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    username:String,
    email:String,
    contact:String,
    city:String,
    message:String

})

const UserModel = mongoose.model("users",UserSchema)

module.exports= UserModel