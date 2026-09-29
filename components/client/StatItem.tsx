"use client";
import { LucideIcon } from "lucide-react";

interface StatItemProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  iconColor?: string;
  iconBgColor?: string;
  suffix?: string;
}

const StatItem = ({
  icon: Icon,
  value,
  label,
  iconColor = "text-main",
  iconBgColor = "bg-main/10",
  suffix = "",
}: StatItemProps) => {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <div className={`p-2 sm:p-2.5 rounded-lg ${iconBgColor} ${iconColor}`}>
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>

      <div>
        <p className="text-base sm:text-xl font-bold text-foreground leading-tight">
          {value}
          {suffix}
        </p>

        <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {label}
        </p>
      </div>
    </div>
  );
};

export default StatItem;
