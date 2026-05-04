import  { NextFunction , Response , Request } from "express"

export default class ErorMiddlware{
static handle(err:Error , req:Request , res:Response , next:NextFunction  ){

    if(req.originalUrl.startsWith("/api")){
        res.status(500).json({

            eror : "Internal Server Error",
            message: err.message,
            stack: process.env.NODE_ENV === "development" ? err.stack : null
        });
    }

    res.status(500).render("Error",{
        pagetitle:"Eror",
        Message:"something went wrong",
        error:err.message
    })

    next();
}
}

