import  { NextFunction , Response , Request } from "express"

export default class ErorMiddlware{
handle(err:Error , req:Request , res:Response , next:NextFunction  ){

    if(req.originalUrl.startsWith("/api")){
        res.status(500).json({

            eror : "Internal Server Error",
            message: err.message
        });
    }

}
}

