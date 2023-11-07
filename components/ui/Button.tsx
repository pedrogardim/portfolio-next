interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({ variant = "primary", children }: ButtonProps) {
  return (
    <button
      className={
        "px-4 py-2 text-lg hover:bg-white " +
        (variant === "primary" ? "bg-primary" : "bg-secondary")
      }
    >
      {children}
    </button>
  );
}
