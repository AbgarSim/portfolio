import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Container } from "@/components/Container";
import { TechBadge } from "@/components/TechBadge";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getProjectById, projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <Container className="py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Project not found
        </h1>
        <Button asChild>
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </Container>
    );
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{project.title} | Abgar Simonean</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <Badge variant="secondary" className="mb-4">
              {project.category}
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Project Image */}
      <section className="py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="aspect-video rounded-2xl bg-card border border-border overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center">
              <span className="text-6xl font-bold text-primary/20">
                {project.title.charAt(0)}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-12">
        <Container size="narrow">
          <div className="space-y-12">
            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Key Highlights
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                  >
                    <span className="text-primary mt-0.5">▸</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Problem
              </h2>
              <p className="text-muted-foreground text-lg">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                The Solution
              </h2>
              <p className="text-muted-foreground text-lg">{project.solution}</p>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-primary/5 border border-primary/20"
            >
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Impact
              </h2>
              <p className="text-foreground text-lg">{project.impact}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-24 bg-gradient-subtle">
          <Container>
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Other Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/${p.id}`}
                  className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                >
                  <Badge variant="secondary" className="mb-3">
                    {p.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {p.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
