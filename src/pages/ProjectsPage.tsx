import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects | Abgar Simonean</title>
        <meta
          name="description"
          content="Explore Abgar Simonean's portfolio of projects including data pipelines, mobile apps, and enterprise solutions."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="text-sm text-primary font-medium mb-4 block">
              Projects
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Things I've{" "}
              <span className="text-gradient">built</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A collection of projects spanning data engineering, mobile development, 
              and enterprise solutions. Each project represents unique challenges 
              and innovative solutions.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects in this category yet.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
