import { categoryApi } from "@/api/services/category.service";
import CategoriesList from "./CategoriesList";

export default async function CategoriesSection() {
  const data = await categoryApi.getAll();
  
  return (
    <>
      <CategoriesList data={data} />
    </>
  );
}