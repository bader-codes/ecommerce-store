export default function SectionHeader() {
    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8">

            <div className="flex items-center gap-3 my-8">
                <div className="h-8 w-1.5 bg-linear-to-b from-emerald-500 to-emerald-700 rounded-full"></div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {'Featured '}
                    <span className="text-emerald-600">Products</span>
                </h2>
            </div>
        </div>
    )
}