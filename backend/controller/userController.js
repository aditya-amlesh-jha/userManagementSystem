const User = require("../model/userModel")


module.exports.createUser = async (req,res)=>{

    try{
        console.log(req.body)
        const {name,email} = req.body

        const user = await User.createUser(name,email);
        res.status(200).json({user})
    }
    catch(err){
        res.status(400).json({err})
    }
}


module.exports.getUsers = async (req,res)=>{
    try{
        const users = await User.getUsers()
        res.status(200).json({users})
    }
    catch(err){
        res.status(400).json({err})
    }
}

module.exports.getUserByID = async (req,res)=>{
    const id = req._id;
    try{
        const user = await User.getUserByID(id)
        res.status(200).json({user})
    }
    catch(err){
        res.status(400).json({err})
    }
}

module.exports.updateUser = async (req,res)=>{
    const id = req._id;
    const {name,email} = req.body
    try{
        const user = await User.updateUser(id,name,email)
        res.status(200).json({user})
    }
    catch(err){
        res.status(400).json({err})
    }
}

module.exports.deleteUser = async (req,res)=>{
    const _id = req._id;
    try{
        const user = await User.deleteUser(_id)
        res.status(200).json();
    }
    catch(err){
        // console.log(err)
        res.status(400).json({err})
    }
}

module.exports.searchUser = async (req,res)=>{

    const {name} = req.query;
    try{
        const users = await User.find({name:new RegExp(name,"i")})
        res.status(200).json({users})
    }
    catch(err){
        res.status(400).json({err})
    }
}

