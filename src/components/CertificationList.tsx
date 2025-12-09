import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Certification } from "@/data/certifications";
import { cn } from "@/lib/utils";

interface CertificationListProps {
  certifications: Certification[];
}

export function CertificationList({ certifications }: CertificationListProps) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {certifications.map((cert, index) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <Badge
                  variant={
                    cert.status === "Completed"
                      ? "default"
                      : cert.status === "In Progress"
                      ? "secondary"
                      : "outline"
                  }
                  className={cn(
                    "whitespace-nowrap",
                    cert.status === "Completed" && "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
                    cert.status === "In Progress" && "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20"
                  )}
                >
                  {cert.status === "Completed" && <CheckCircle className="h-3 w-3 mr-1" />}
                  {cert.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                  {cert.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-foreground mb-1">{cert.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
              
              {cert.issueDate && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                  <Calendar className="h-3 w-3" />
                  <span>
                    Issued {cert.issueDate}
                    {cert.expiryDate && ` · Expires ${cert.expiryDate}`}
                  </span>
                </div>
              )}

              {cert.credentialUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2"
                  asChild
                >
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
