const jwt=require("jsonwebtoken");


// Verify Login Token

exports.verifyToken=(req,res,next)=>{


    try{

        const token=req.headers.authorization?.split(" ")[1];


        if(!token)
        {
            return res.status(401).json({
                message:"Token missing"
            });
        }


        const decoded=jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.user=decoded;


        next();


    }
    catch(error){

        return res.status(401).json({
            message:"Invalid Token"
        });

    }

};





// Check Admin Role

exports.verifyAdmin=(req,res,next)=>{


    if(req.user.Role !== "Admin")
    {

        return res.status(403).json({
            message:"Admin access only"
        });

    }


    next();

};