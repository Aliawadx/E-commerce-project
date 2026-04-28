import { describe } from "node:test";
import { productIntreface } from "../intarfaces"

import { Request, Response } from 'express';
import ProductServise from "../servises/Productservise";
import { th } from "@faker-js/faker/.";


class ProductControllers{

constructor (private ProductServises:ProductServise){
    this.getProducts= this.getProducts.bind(this)
    this.getProductsById=this.getProductsById.bind(this)
    this.CreateProduct=this.CreateProduct.bind(this)
    this.UpdateProduct=this.UpdateProduct.bind(this)
    this.dleteProduct=this.dleteProduct.bind(this)

}


getProducts(req:Request , res:Response) {

    
    const FliterdQuery = req.query.filter as string 
    
    if(FliterdQuery){
        return res.send (this .ProductServises.FliterByQuery(FliterdQuery))
    }

   return res.send (this.ProductServises.FindAll());


}
    



getProductsById(req:Request <{id: string}>,res:Response){
    
    const productID = +req.params.id
    if (isNaN(productID)){
        return res.status(404).send({mesage:"invaild id" })
    }

    const product:productIntreface| undefined = this.ProductServises.getProductById(productID)


    if(product){
        res.send({id:productID, title:product.title, price:product.price})
    }else{
        res.status(404).send("product not found");  
    }

}

CreateProduct(req:Request , res:Response){
const productBody = req.body

this.ProductServises.CreateProduct(productBody)
res.status(200).send({

id:this.ProductServises.FindAll().length +1,
title:productBody.title,
price:productBody.price,
description:productBody.description 
    
} )








}


UpdateProduct(req:Request , res:Response){
    const ProductId = + req.params.id
    if(isNaN(ProductId)){
        return res.status(404).send({message: "product not found"})
    }
const PorductIndex : number|undefined= this.ProductServises.FindAll().findIndex(product=>product.id===ProductId) 
    


const body = req.body 

if(PorductIndex!== -1){
this.ProductServises.UpdateProductByIndex(PorductIndex, body )
return res.status(200).send({message:"product has been updated"})
}else{
    return res.status(404).send({message:"product not found !"})
}

} 


dleteProduct(req:Request , res:Response){
    const ProductId = +req.params.id
if(isNaN(ProductId)){
    return res.status(404).send({message:"product not found"})
}

const productindex : number | undefined = this.ProductServises.FindAll().findIndex(product=>product.id===ProductId) 

if(productindex!==-1){
    const FilterProduct  = this.ProductServises.dleleteProduct(ProductId)
    return res.status(200).send(FilterProduct)
}else{
    return res.status(404).send({message:"product not found"}) 
}
}


}

export default ProductControllers

