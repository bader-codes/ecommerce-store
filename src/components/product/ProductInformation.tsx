import { FaArrowRotateLeft, FaShieldHalved } from 'react-icons/fa6';
import { FaTruck } from 'react-icons/fa';
import CardInfo from './CardInfo';

export default function ProductInformation() {

    const shippingItems = [
        'Free shipping on orders over $50',
        'Standard delivery: 3-5 business days',
        'Express delivery available (1-2 business days)',
        'Track your order in real-time'
    ];

    const returnItems = [
        '30-day hassle-free returns',
        'Full refund or exchange available',
        'Free return shipping on defective items',
        'Easy online return process'
    ];

    return (
        <div className='p-6'>
            <div className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <CardInfo icon={FaTruck} title='Shipping Information'
                        items={shippingItems}
                    />
                    <CardInfo icon={FaArrowRotateLeft} title='Shipping Information'
                        items={returnItems}
                    />
                </div>


                <div className="flex items-center gap-4 rounded-lg bg-gray-50 p-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600">
                        <FaShieldHalved className="text-2xl" />
                    </div>

                    <div>
                        <h4 className="mb-1 font-semibold text-gray-900">
                            Buyer Protection Guarantee
                        </h4>

                        <p className="text-sm text-gray-600">
                            Get a full refund if your order doesn&apos;t arrive
                            or isn&apos;t as described. We ensure your
                            shopping experience is safe and secure.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

