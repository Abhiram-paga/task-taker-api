const jwt=require('jsonwebtoken')

const userAuthentication=async (req,res,next)=>{
    try{
        const {token}=req.headers;
        if(!token){
            res.status(401).json({error:"token not found"});
        }
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        if(!verifyToken){
            res.status(401).json({error:'Invalid token'});
        }
        next();
    }catch(err){
        res.status(500).json({error:err.message});
    }
   
    
}   

module.exports=userAuthentication