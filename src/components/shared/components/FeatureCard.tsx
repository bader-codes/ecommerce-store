'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type FeatureCardProps = {
    icon: React.ReactNode
    title: string
    description: string
    duration?: number
    mainClass?: string
    className?: string
    iconClassName?: string
}

export default function FeatureCard({
    icon,
    title,
    description,
    duration = 0.5,
    className,
    mainClass,
    iconClassName,
}: FeatureCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration }}
            className={className}
        >
            <div className={`flex items-center gap-4 rounded-xl p-4 ${mainClass}`}>
                <div
                    className={clsx(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                        iconClassName
                    )}
                >
                    {icon}
                </div>

                <div>
                    <h3 className="text-sm font-semibold text-gray-800">
                        {title}
                    </h3>

                    <p className="text-xs text-gray-500">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}