interface StyledTextProps {
  children: string;
  className?: string;
}

export default function TagStyledText({
  className,
  children,
}: StyledTextProps) {
  return (
    <span className={className}>
      <span className="text-secondary">{"<"}</span>
      <span className="text-primary">{children}</span>
      <span className="text-secondary">{">"}</span>
    </span>
  );
}
