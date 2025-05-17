import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export default function BackdropButton({
  variant = "default",
  href,
  target,
  onClick,
  rel,
  className,
  size,
  children,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "accent"
    | "tertiary"
    | "destructive"
    | "ghost"
    | "link"
    | "icon";
  target?: string;
  size?: "default" | "sm" | "lg";
  rel?: string;
  onClick?: () => void;
  className?: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      size={size}
      className={cn(
        "hover:shadow-lg backdrop-blur-xl px-4 py-2 rounded-lg transition duration-200",
        {
          "shadow-none hover:underline underline-offset-2  px-0 backdrop-blur-none":
            variant === "link",
        },
        className
      )}
    >
      <a href={href} target={target} rel={rel} className="px-3">
        {children}
      </a>
    </Button>
  );
}
