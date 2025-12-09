import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
  isLast?: boolean;
  index?: number;
}

export function TimelineItem({
  company,
  role,
  period,
  location,
  description,
  highlights,
  technologies,
  isLast = false,
  index = 0,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 pb-12"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
      )}
      
      {/* Timeline dot */}
      <div className={cn(
        "absolute left-0 top-2 w-6 h-6 rounded-full",
        "bg-primary/20 border-2 border-primary",
        "flex items-center justify-center"
      )}>
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>
      
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{role}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="font-medium text-primary">{company}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{period}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground">{description}</p>
        
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-1">▸</span>
              {highlight}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
