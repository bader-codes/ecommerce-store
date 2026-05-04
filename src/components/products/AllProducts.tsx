import ProductsSections from "./ProductsSections";
import SectionHeader from "./SectionHeader";

export default function AllProducts() {
    return (
        <>
            <section className="py-10">
                <div className="container mx-auto px-4">
                    <SectionHeader />
                    <ProductsSections />
                </div>
            </section>
        </>
    )
}