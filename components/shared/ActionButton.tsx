import Link from "next/link";
import { ReactNode } from "react";

interface ActionButtonProps {
  children: ReactNode;
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  download?: string;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  href,
  icon,
  variant = "primary",
  download,
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-2 font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95";

  const variants = {
    primary: "bg-main hover:bg-[#e05a3c] text-white",
    secondary: "bg-foreground hover:bg-foreground/90 text-background",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  // Download file
  if (download) {
    return (
      <a href={href} download={download} className={styles}>
        {children}
        {icon}
      </a>
    );
  }

  // Normal Next.js navigation
  return (
    <Link href={href} className={styles}>
      {children}
      {icon}
    </Link>
  );
};

export default ActionButton;
