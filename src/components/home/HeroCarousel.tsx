// Required because Swiper & animations depend on client-side behavior
'use client';

import Slider from '../shared/components/Slider';
import Image1 from '../../assets/Images/1.webp';
import Image2 from '../../assets/Images/2.webp';
import Image3 from '../../assets/Images/3.webp';
import HeroSlideContent from './HeroSlideContent';

export default function HeroCarousel() {
    return (
        <div className='relative'>
            <Slider
                slidesPerView={1}
                
                // Slides are defined as data + UI composition for flexibility
                slides={[
                    {
                        image: Image1.src,
                        content: (
                            <HeroSlideContent
                                title='Fresh Products Delivered to your Door'
                                text='Get 20% off your first order'
                                animate={true}
                                buttons={[
                                    { label: "Shop Now", href: "/products", buttonColor: 'text-green-500' },
                                    { label: "View Deals", href: "/deals", variant: "outline", buttonColor: 'text-white' },
                                ]}
                            />
                        ),
                    },
                    {
                        image: Image2.src,
                        content: (
                            <HeroSlideContent
                                title='Premium Quality Guaranteed'
                                text='Fresh from farm to your table'
                                // Static content for performance and visual balance
                                animate={false}
                                buttons={[
                                    { label: "Shop Now", href: "/products", buttonColor: 'text-blue-500' },
                                    { label: "Learn More", href: "/deals", variant: "outline", buttonColor: 'text-white' },
                                ]}
                            />

                        ),
                    },
                    {
                        image: Image3.src,
                        content: (
                            <HeroSlideContent
                                title='Fast & Free Delivery'
                                text='Same day delivery available'
                                // Static content for performance and visual balance
                                animate={false}
                                buttons={[
                                    { label: "Shop Now", href: "/products", buttonColor: 'text-purple-500' },
                                    { label: "View Deals", href: "/deals", variant: "outline", buttonColor: 'text-white' },
                                ]}
                            />
                        ),
                    },
                ]}
            />
        </div>

    );
};