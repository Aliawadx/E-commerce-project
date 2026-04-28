import type ProductServise from "../servises/Productservise"
import { Request,Response } from "express"



export default class ProductsViewControllers{
constructor (private ProductServises:ProductServise){
    this.renderProductPage=this.renderProductPage.bind(this)
    this.renderProducts=this.renderProducts.bind(this)

}

renderProducts(req:Request , res:Response){
    res.render("products",{
        pagetitle: "Product list",
        description: "good products",
        products: this.ProductServises.FindAll(),

    })
}

renderProductPage(req:Request , res:Response){
    const productID = +req.params.id
    res.render("product",{
        product: this.ProductServises.getProductById(productID)
    })


}



}