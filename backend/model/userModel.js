const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
},{
    timestamps:true,
})

userSchema.statics.createUser = async function(name,email){
    if(!name){
        throw Error("USER NAME is required")
    }
    if(!email){
        throw Error("USER EMAIL is required")
    }
    const user = await this.create({name,email})
    return user
}

userSchema.statics.getUsers = async function(){
    const users = await this.find()
    return users
}

userSchema.statics.getUserByID = async function(_id){
    if(!_id){
        throw Error("USER ID is required")
    }
    const user = await this.findOne({_id})
    if(!user){
        throw Error("USER not found")
    }
    return user
}

userSchema.statics.updateUser = async function(_id,name,email){
    if(!_id){
        throw Error("USER ID is required")
    }
    const user = await this.findOne({_id})
    user.name = name
    user.email = email
    await user.save();
    return user
}

userSchema.statics.deleteUser = async function(_id){
    if(!_id){
        throw Error("USER ID is required")
    }
    const user = await this.findByIdAndDelete(_id)
    return true;
}

const User = mongoose.model("User",userSchema);

module.exports = User