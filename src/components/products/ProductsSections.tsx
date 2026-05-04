import { productsApi } from "@/api/category.api";
import ProductsList from "./ProductsList";

export default async function ProductsSections() {

    const data = await productsApi.getAll();

    return (
        <>
         <ProductsList data={data}/>   
        </>
    )
}