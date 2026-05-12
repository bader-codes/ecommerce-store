import { Card, CardContent, CardHeader } from '../ui/card';
import { Product } from '@/types/product.types';
import { FaCheck } from 'react-icons/fa';

type InfoRowProps = {
    label: string
    value: string | number | undefined
}

function InfoRow({ label, value }: InfoRowProps) {
    return (
        <li className="flex justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-900">{value || "N/A"}</span>
        </li>
    );
}

type FeatureItemProps = {
    text: string
}

function FeatureItem({ text }: FeatureItemProps) {
    return (
        <li className="flex items-center gap-2 text-sm text-gray-600">
            <FaCheck className="text-green-600 w-4 shrink-0" />
            <span>{text}</span>
        </li>
    )
}

export default function AboutProduct({ data }: { data: Product }) {
    return (
        <Card className="p-6 rounded-b-md ring-0 shadow-none border-none outline-none">
            <CardHeader>
                <h2 className='text-lg font-semibold text-gray-900 mb-3'>About this Product</h2>
                <p className='text-gray-600 leading-relaxed'>
                    Soft and comfortable cotton fabric Crew neck and short sleeves Comfortable, regular fit Wash according to care label instructions
                </p>
            </CardHeader>

            <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6'>

                <div className='bg-gray-50 rounded-lg p-4'>
                    <h3 className='text-sm font-semibold text-gray-900 mb-3'>Product Information</h3>

                    <ul className='space-y-2'>
                        <InfoRow label="Category" value={data.category.name} />
                        <InfoRow label="Subcategory" value={data.subcategory?.[0]?.name} />
                        <InfoRow label="Brand" value={data.brand.name} />
                        <InfoRow label="Items Sold" value={`${data.sold} +sold`} />
                    </ul>
                </div>


                <div className='bg-gray-50 rounded-lg p-4'>
                    <h3 className='text-sm font-semibold text-gray-900 mb-3'>Key Features</h3>

                    <ul className="space-y-2">
                        <FeatureItem text="Premium Quality Product" />
                        <FeatureItem text="100% Authentic Guarantee" />
                        <FeatureItem text="Fast & Secure Packaging" />
                        <FeatureItem text="Quality Tested" />
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}
