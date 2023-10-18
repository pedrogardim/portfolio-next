interface StyledTextProps {
  autoClosing?: boolean;
  button?: boolean;
  children: string;
  className?: string;
}

export default function TagStyledText({
  autoClosing = false,
  button = false,
  className,
  children,
}: StyledTextProps) {
  return (
    <span className={className + " font-bold " + (button && "cursor-pointer")}>
      <span className="text-secondary">{"<"}</span>
      <span
        className={
          "text-primary" + " " + (button && "hover:text-white underline")
        }
      >
        {children}
      </span>
      {autoClosing && <span className="text-secondary">{"/"}</span>}
      <span className="text-secondary">{">"}</span>
    </span>
  );
}
