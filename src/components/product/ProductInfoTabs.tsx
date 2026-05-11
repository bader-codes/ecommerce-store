'use client';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

import { FaBox, FaStar, FaTruck } from "react-icons/fa";
import ProductInformation from "./ProductInformation";
import { Product } from "@/types/product.types";
import ProductReviews from "./ProductReviews";
import AboutProduct from "./AboutProduct";

export default function ProductInfoTabs({ data }: { data: Product }) {

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <div className="rounded-lg shadow-sm overflow-hidden ">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList
                            className={`justify-start bg-transparent w-full py-4 overflow-x-auto scroll-w-1`}
                        >
                            <TabsTrigger value="overview">
                                <FaBox />
                                Product Details
                            </TabsTrigger>
                            <TabsTrigger value="analytics">
                                <FaStar />
                                {`Reviews (${data.reviews.length})`}
                            </TabsTrigger>
                            <TabsTrigger value="reports">
                                <FaTruck />
                                Shipping & Returns
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview">
                            <AboutProduct data={data} />
                        </TabsContent>

                        <TabsContent value="analytics">
                            <ProductReviews data={data} />
                        </TabsContent>

                        <TabsContent value="reports">
                            <ProductInformation />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}