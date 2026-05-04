// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';

export default function Slider(
    {
        spaceBetween = 0,
        slidesPerView = 1,
        slides = [],
        sliderHight = 100
    }
        :
        {
            spaceBetween?: number,
            slidesPerView?: number,
            slides: {
                image: string;
                content: React.ReactNode;
            }[],
            sliderHight?: number
        }
) {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            className='relative'
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            height={sliderHight}
            navigation
            loop={true}
            pagination={{
                clickable: true,
                renderBullet(index, className) {
                    return `<span class="${className} custom-bullet"></span>`
                }
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
            {
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='h-100 flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${slide.image})` }}>

                            {/* Overlay + Content */}
                            <div
                                className='overlay py-20 text-white p-4 w-full h-full bg-linear-to-r from-green-500/90 to-green-400/50'
                            >
                                <div className="container text-white p-4">
                                    {/* re-render animation */}
                                    {activeIndex === index && slide.content}
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};