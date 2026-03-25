import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
