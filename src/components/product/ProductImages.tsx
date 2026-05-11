"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Thumbs } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css";

type ProductGalleryProps = {
  images: string[];
};

export default function ProductGallery({
  images,
}: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="flex flex-col gap-4">

      {/* Main Images */}
      <div className="w-full overflow-hidden p-4">
        <Swiper
          modules={[Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt={`Product image ${index + 1}`}
                width={800}
                height={800}
                priority
                quality={70}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full rounded-xl object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              width={800}
              height={800}
              priority
              quality={70}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt={`Thumbnail ${index + 1}`}
              className="cursor-pointer rounded-lg border-4 border-transparent object-cover transition-all duration-1000"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  );
}