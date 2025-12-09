import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import type { Publication } from "@/data/publications";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  publication: Publication;
  index?: number;
}

export function BlogCard({ publication, index = 0 }: BlogCardProps) {
  const formattedDate = new Date(publication.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <motion.a
      href={publication.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group block rounded-xl p-6",
        "bg-card border border-border",
        "transition-all duration-300",
        "hover:shadow-card-hover hover:border-primary/30"
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <Badge variant="outline" className="text-xs">
          {publication.publication}
        </Badge>
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
        {publication.title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
        {publication.excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {formattedDate}
        </div>
        
        <div className="flex gap-2">
          {publication.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
