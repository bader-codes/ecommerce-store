import { motion } from "framer-motion";
import Link from "next/link";

type Button = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  buttonColor: string;
};

type Props = {
  title: React.ReactNode;
  text?: React.ReactNode;
  buttons?: Button[];
  animate?: boolean;
  className?: string;
};

const base = "px-6 py-2 rounded-lg font-semibold transition";

// Centralized variants for consistency across buttons
const variants = {
  primary: "bg-white",
  outline: "border border-white",
};

export default function HeroSlideContent({
  title,
  text,
  buttons = [],
  animate = true,
  className = '',
}: Props) {
  return (
    <motion.div
      className="container h-full content-center mx-5"
      // Animation is optional to allow reuse in static contexts
      initial={animate ? { opacity: 0, y: 80 } : false}
      animate={animate ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-white text-3xl font-bold mb-4 max-w-96">{title}</h2>
      <p className="text-lg">{text}</p>
      <div className="mt-4">
        {
          buttons.map((button) => (
            <Link
              key={button.label} //unique labels per slide
              href={button.href}
              className={`${className} ${button.buttonColor} ${variants[button.variant || "primary"]} ${base} me-5 inline-block transition-transform duration-300 hover:scale-110`}>
              {button.label}
            </Link>
          ))
        }
      </div>
    </motion.div>
  );
}