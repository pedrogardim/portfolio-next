interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export default function Button({
  variant = "primary",
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 text-lg hover:bg-white ${
        variant === "primary" ? "bg-primary" : "bg-secondary"
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
