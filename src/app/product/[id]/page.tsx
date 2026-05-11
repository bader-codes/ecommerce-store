import ProductInfoTabs from "@/components/product/ProductInfoTabs";
import SimilarProducts from "@/components/product/SimilarProducts";
import ProductDetails from "@/components/product/ProductDetails";
import { productsApi } from "@/api/services/product.service";
import ProductNav from "@/components/product/ProductNav";

export default async function page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [data, products] = await Promise.all([
    productsApi.getById(id),
    productsApi.getAll(10),
  ]);

  if (!data) return null;
  if (!products) return null;

  return (
    <>
      <ProductNav productName={data.category.name} />
      <ProductDetails data={data} />
      <ProductInfoTabs data={data} />
      <SimilarProducts products={products} />
    </>
  );
}