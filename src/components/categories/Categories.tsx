import SectionHeader from "./SectionHeader";
import CategoriesSection from "./CategoriesSection";

export default function Categories() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <SectionHeader />
                <CategoriesSection />
            </div>
        </section>
    )
}