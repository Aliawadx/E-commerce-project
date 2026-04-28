import { Router } from "express";
import ProductControllers from "../controllers/ProductControllers";
import ProductServise from "../servises/Productservise";
import { gnerateFakeProducts } from "../utils/data";

const ProductsRouter = Router()

const FakeProductsData= gnerateFakeProducts()

const ProducServise = new ProductServise(FakeProductsData)

const {getProducts,CreateProduct,getProductsById,UpdateProduct,dleteProduct} = new ProductControllers(ProducServise )


ProductsRouter.route("/").get(getProducts).post(CreateProduct);
ProductsRouter.route("/:id").get(getProductsById).patch(UpdateProduct).delete(dleteProduct)

export default ProductsRouter