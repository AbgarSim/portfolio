import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/projects/${project.id}`}>
        <div className={cn(
          "group relative rounded-xl overflow-hidden",
          "bg-card border border-border",
          "transition-all duration-300",
          "hover:shadow-card-hover hover:border-primary/30",
          "hover:-translate-y-1"
        )}>
          <div className="aspect-video bg-muted relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/20">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.slice(0, 4).map((tech) => (
                <span 
                  key={tech}
                  className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground">
                  +{project.techStack.length - 4}
                </span>
              )}
            </div>
            
            <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
              View Project
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
