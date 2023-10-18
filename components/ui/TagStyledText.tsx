interface StyledTextProps {
  autoClosing?: boolean;
  children: string;
  className?: string;
}

export default function TagStyledText({
  autoClosing = false,
  className,
  children,
}: StyledTextProps) {
  return (
    <span className={className}>
      <span className="text-secondary">{"<"}</span>
      <span className="text-primary">{children}</span>
      {autoClosing && <span className="text-secondary">{"/"}</span>}
      <span className="text-secondary">{">"}</span>
    </span>
  );
}
