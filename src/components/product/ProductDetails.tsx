import { Product } from "@/types/product.types";
import ProductGallery from "./ProductImages";
import ProductInfo from "./ProductInfo";

export default async function ProductDetails({ data }: { data: Product }) {

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div id="product-images" className="lg:w-1/4">
        <div className="bg-white rounded-xl shadow-sm p-4 sticky top-4">
          {/* Product Photo Gallery */}
          <ProductGallery images={data.images} />
        </div>
      </div>
      <div id="product-info" className="lg:w-3/4">

        {/* produc Info Box */}
        <ProductInfo data={data} />

      </div>
    </div>
  )
}