import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { TimelineEntry } from "@/data/timeline";
import {Button} from "@/components/ui/button.tsx";

interface TimelineProps {
  entries: TimelineEntry[];
  showLinks?: boolean;
}

export function Timeline({ entries, showLinks = true }: TimelineProps) {
  return (
    <div className="relative">
      {entries.map((entry, index) => (
        <motion.div
          key={entry.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative pl-8 pb-12 last:pb-0"
        >
          {/* Timeline line */}
          {index !== entries.length - 1 && (
            <div className="absolute left-[11px] top-6 bottom-0 w-px bg-border" />
          )}

          {/* Timeline dot */}
          <div
            className={cn(
              "absolute left-0 top-2 w-6 h-6 rounded-full",
              "flex items-center justify-center",
              entry.isCurrent
                ? "bg-primary border-2 border-primary"
                : "bg-primary/20 border-2 border-primary"
            )}
          >
            {entry.isCurrent ? (
              <div className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            ) : (
              <div className="w-2 h-2 rounded-full bg-primary" />
            )}
          </div>

          {/* Content Card */}
          <div className="rounded-xl bg-card border border-border p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {entry.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mt-1">
                  <span className="font-medium text-primary">{entry.company}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {entry.location}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={entry.isCurrent ? "default" : "secondary"}
                  className="whitespace-nowrap"
                >
                  <Calendar className="h-3 w-3 mr-1" />
                  {entry.startDate} – {entry.endDate}
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              {entry.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {entry.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {showLinks && entry.link && (
              <a
                href={entry.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-4"
              >
                Visit {entry.company}
                <ExternalLink className="h-3 w-3" />
              </a>
            )}

            {entry.credentialsUrl && (
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full gap-2 mt-2"
                    asChild
                >
                  <a
                      href={entry.credentialsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                  >
                    View Credential
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
