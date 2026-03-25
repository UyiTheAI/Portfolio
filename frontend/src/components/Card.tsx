import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  date?: string;
  description: React.ReactNode;
  tags?: string[];
  link?: string;
}

export function Card({ title, subtitle, date, description, tags, link, className, ...props }: CardProps) {
  const Wrapper = link ? "a" : "div";
  const wrapperProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      className={cn(
        "group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50",
        link && "cursor-pointer",
        className
      )}
      {...wrapperProps}
      {...props}
    >
      {/* Hover Background */}
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-muted/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
      
      {/* Date */}
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-secondary sm:col-span-2"
        aria-label={date}
      >
        {date}
      </header>

      {/* Content */}
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200 group-hover:text-primary transition-colors">
          <div>
            <span className="inline-flex items-baseline">
              {title}
              {link && (
                <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ml-1" />
              )}
            </span>
            {subtitle && (
              <div className="text-secondary text-sm mt-1">
                {subtitle}
              </div>
            )}
          </div>
        </h3>
        <div className="mt-2 text-sm leading-normal text-foreground">
          {description}
        </div>
        
        {tags && tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((tag, idx) => (
              <li key={idx}>
                <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Wrapper>
  );
}
