
import { prototype } from "node:events";
import { productIntreface } from "../intarfaces";
import ProductControllers from "../controllers/ProductControllers";


type productBody = {
    title: string;
    price: number;
    description: string;
    p:string;
}

export  default class ProductServise {


    constructor( private products:productIntreface[]){
        this.products=products
    }



FindAll() : productIntreface[]{
    return this.products; 
}


FliterByQuery(FliterdQuery?:string){




if (FliterdQuery) {

const propertiesToFilter =  FliterdQuery.split(",");

let filteredProduct = [];

filteredProduct = this.FindAll().map(product => {

    const filteredProduct: any = {};

    propertiesToFilter.forEach(property => {

    if (product.hasOwnProperty(property as keyof productIntreface)) {

        filteredProduct[property] = product[property as keyof productIntreface];

    }

    });
return {id:product.id, ...filteredProduct}
});
return filteredProduct
}
return this.FindAll()

}



getProductById (productId : number){
    return this.FindAll().find(product=>product.id===productId)
}


CreateProduct(productBody:productBody){
return this.FindAll().push({id:this.FindAll().length+1, ...productBody  })

}


UpdateProductByIndex(index:number,body:productBody){
return this.FindAll()[index]= {...this.FindAll()[index], ...body};
}



dleleteProduct(ProductId:number){
return this.FindAll().filter(product=>product.id!==ProductId)
}
}

    