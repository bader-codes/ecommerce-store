"use client";

import { FaChevronLeft, FaChevronRight, FaRegEye, FaRegHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Product } from "@/types/product.types";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import "swiper/css/navigation";
import "swiper/css";
import Image from "next/image";
import { FaArrowsRotate } from "react-icons/fa6";
import Link from "next/link";
import Rating from "../products/Rating";
import { PlusIcon } from "lucide-react";


type Props = {
  products: Product[];
};

export default function SimilarProducts({ products }: Props) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);


  useEffect(() => {
    const swiper = swiperRef.current;

    if (!swiper) return;

    const navigation = swiper.params.navigation;

    if (!navigation || typeof navigation === "boolean") return;

    navigation.prevEl = prevRef.current;
    navigation.nextEl = nextRef.current;

    swiper.navigation.init();
    swiper.navigation.update();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-3 items-center">
            <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>
            <h2 className="text-2xl font-bold">
              You May Also <span className="text-emerald-600">Like</span>
            </h2>
          </div>

          <div className="flex gap-6">
            <button ref={prevRef}
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:text-green-500 hover:bg-green-50 duration-200">
              <FaChevronLeft size={20} />
            </button>

            <button ref={nextRef}
              className="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:text-green-500 hover:bg-green-50 duration-200">
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <div key={product._id} className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative">

                  <Image
                    className="w-full h-60 object-contain bg-white"
                    src={product.imageCover}
                    alt={product.title}
                    width={200}
                    height={200}
                  />

                  <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center transition shadow-sm text-gray-600 hover:text-red-500" title="Add to wishlist">
                      <FaRegHeart />
                    </button>

                    <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm">
                      <FaArrowsRotate />
                    </button>

                    <Link className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600 shadow-sm"
                      href={`/product/${product.id}`}
                    >
                      <FaRegEye />
                    </Link>
                  </div>

                  {/* Disscount Highlight */}
                  <div className="absolute top-3 left-3">
                    {
                      product.priceAfterDiscount &&
                      <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                        Save{" "}
                        {Math.round(
                          ((product.price - product.priceAfterDiscount) / product.price) * 100
                        )}
                        %
                      </span>
                    }
                  </div>

                </div>

                <div className="p-4">
                  <span className="text-xs text-gray-500 mb-1">{product.category.name}</span>
                  <Link className="line-clamp-2" href={`/product/${product.id}`}>
                    <h3 className="font-medium mb-1 cursor-pointer ">{product.title}</h3>
                  </Link>
                  <Rating className="" elementText="" rating={product.ratingsAverage} count={product.ratingsQuantity} />

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-primary-600">
                        {(product.priceAfterDiscount ?? product.price)} EGP
                      </span>

                      {product.priceAfterDiscount && product.priceAfterDiscount < product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {product.price} EGP
                        </span>
                      )}
                    </div>

                    <button className="h-10 w-10 rounded-full flex items-center justify-center transition bg-green-600 text-white hover:bg-primary-700 disabled:opacity-70">
                      <PlusIcon />
                    </button>
                  </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}