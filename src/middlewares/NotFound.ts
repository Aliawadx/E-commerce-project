import  { NextFunction , Response , Request } from "express"

export default class notfoundMiddleware{
static handle(  req:Request , res:Response , next:NextFunction  ){

    if(req.originalUrl.startsWith("/api")){
        res.status(404).json({

            eror : `API | ${req.originalUrl} | endpoint not found`,
        
        });
    }

    res.status(404).render("notFound",{
        pagetitle:"Eror",
        Message:`API | ${req.originalUrl} | endpoint not found`
        
    })

    next();
}
}