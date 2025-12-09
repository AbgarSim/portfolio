import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function TechBadge({ 
  name, 
  level, 
  size = "md",
  className 
}: TechBadgeProps) {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  const levelColors = {
    expert: "bg-primary/10 text-primary border-primary/20",
    advanced: "bg-accent/10 text-accent border-accent/20",
    intermediate: "bg-secondary text-secondary-foreground border-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border font-medium",
        sizeClasses[size],
        level ? levelColors[level] : "bg-secondary text-secondary-foreground border-border",
        className
      )}
    >
      {name}
    </span>
  );
}
