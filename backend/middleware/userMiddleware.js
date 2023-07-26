const userMiddleware = async (req,res,next)=>{
    const {id} = req.params;
    if(!id){
        return res.status(400).json({err:"USER ID is required"})
    }
    req._id = id;
    next();
}

module.exports = userMiddleware;