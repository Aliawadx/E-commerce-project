import  express from "express"
import { gnerateFakeProducts } from "./utils/data"
import { productIntreface } from "./intarfaces"
import path, { dirname } from "node:path"
import ProductControllers from "./controllers/ProductControllers"
import  ProductServise from "./servises/Productservise"
import ProductsRouter from "./routes/products"
import ProductsViewControllers from "./controllers/productsViewControllerrs"
const app  = express()
app.use(express.json())
app.set ( "views", path.join(__dirname, "views")  )
app.set("view engine","pug")

//static fiels
app.use(express.static(path.join(__dirname,"pablic")))


const FakeProductsData= gnerateFakeProducts()

const ProducServise = new ProductServise(FakeProductsData)

const productController = new ProductControllers(ProducServise )

const ProductsViewController = new ProductsViewControllers(ProducServise)







// pug
app.get("/products" , ProductsViewController.renderProducts);

//pug 
app.get("/products/:id" ,ProductsViewController.renderProductPage);

    


// ** endPoints products 

app.use("/api/products",ProductsRouter)




app.get("/" , (req,res)=>{
    res.render("index")
})




app.use( (req,res)=>{
res.render("notFound")
})







const PORT : number =8000;
app .listen(PORT,()=>{
    console.log(`app listen in => http://localhost:${PORT}`)
})

