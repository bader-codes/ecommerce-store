type ButtonProps = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  text,
  icon,
  onClick,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer`}
    >
      {icon}
      {text}
    </button>
  );
}