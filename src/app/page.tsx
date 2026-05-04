import DiscountSection from "@/components/discount/DiscountSection";
import HighlightCard from "@/components/home/HighlightCard";
import Categories from "@/components/categories/Categories";
import HeroCarousel from "@/components/home/HeroCarousel";
import AllProducts from "@/components/products/AllProducts";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <HighlightCard />
      <Categories />
      <DiscountSection />
      <AllProducts />
    </>
  );
}