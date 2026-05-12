import DiscountSection from "@/components/discount/DiscountSection";
import HighlightCard from "@/components/home/HighlightCard";
import Categories from "@/components/categories/Categories";
import AllProducts from "@/components/products/AllProducts";
import HeroCarousel from "@/components/home/HeroCarousel";
import { TbLoader3 } from "react-icons/tb";
import { Suspense } from "react";

export default function Home() {

  return (
    <>
      <HeroCarousel />

      <HighlightCard />

      {/* API */}
      <Suspense
        fallback={
          <div className="h-100 flex items-center justify-center">
            <TbLoader3 color="#00CF1B" className="animate-spin" size={40} />
          </div>
        }
      >
        <Categories />
      </Suspense>

      <DiscountSection />

      {/* API */}
      <Suspense
        fallback={
          <div className="h-100 flex items-center justify-center">
            <TbLoader3 color="#00CF1B" className="animate-spin" size={40} />
          </div>
        }
      >
        <AllProducts />
      </Suspense>
    </>
  );
}