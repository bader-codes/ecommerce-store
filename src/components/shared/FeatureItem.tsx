type FeatureItemProps = {
    icon: React.ReactNode;
    title: string;
    description: string;
};

export default function FeatureItem({
    icon,
    title,
    description,
}: FeatureItemProps) {
    return (
        <div className="flex items-center gap-3">
            <div
                className="h-10 w-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0"
            >
                {icon}
            </div>

            <div>
                <h4 className="font-medium text-gray-900 text-sm">
                    {title}
                </h4>

                <p className="text-xs text-gray-500">
                    {description}
                </p>
            </div>
        </div>
    );
}