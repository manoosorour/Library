const Users=require('../models/UserModel')

const authAdmin=async (req,res,next)=>{
    try {
        //Getting user information By ID
        const user = await Users.findOne({
            _id:req.user.id
        })
        // checking about admin User Or Not 
        if(user.role !=="admin"){
            return res.status(400).json({msg:"Admin resource access denied"})
        }
        next()
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
}
module.exports=authAdmin;