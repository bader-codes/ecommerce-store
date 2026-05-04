'use client';
import { motion } from "framer-motion";
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string,
  iconColor: string,
  duration: number
};

export default function FeatureCard({ icon, title, description, iconBg, iconColor, duration }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration }}
    >
      <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className={`bg-blue-50 text-blue-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${iconBg} ${iconColor}`}>
          {icon}
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}