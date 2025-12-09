import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { BlogCard } from "@/components/BlogCard";
import { TechBadge } from "@/components/TechBadge";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/projects";
import { getFeaturedPublications } from "@/data/publications";
import { skillCategories } from "@/data/skills";
import { getRecentTimelineEntries } from "@/data/timeline";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredPublications = getFeaturedPublications();
  const recentTimeline = getRecentTimelineEntries(3);

  return (
    <>
      <Helmet>
        <title>Abgar Simonean | Senior Java + Data Engineer</title>
        <meta
          name="description"
          content="Senior Data Engineer specializing in distributed systems, GCP, and Apache Beam. Building scalable data pipelines at Renault Group."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <Container>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
            >
              Hey, I'm{" "}
              <span className="text-gradient">Abgar Simonean</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium"
            >
              Senior Java + Data Engineer
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground mb-8 max-w-2xl"
            >
              Specializing in distributed systems, real-time data processing, and cloud-native 
              architectures. Currently building scalable data pipelines at{" "}
              <span className="text-foreground font-medium">Renault Group</span> using 
              GCP, Apache Beam, and BigQuery.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button asChild size="lg" className="gap-2">
                <a href="/cv.pdf" target="_blank">
                  <FileText className="h-4 w-4" />
                  View CV
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/contact">
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <span className="text-sm text-muted-foreground">Find me on</span>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeader
                title="About Me"
                subtitle="Building the future of data engineering"
              />
              <p className="text-muted-foreground mb-6">
                With over 6 years of experience in software engineering and data systems, 
                I've worked across the entire spectrum from backend services to real-time 
                analytics platforms. My passion lies in building systems that can handle 
                massive scale while remaining maintainable and cost-effective.
              </p>
              <p className="text-muted-foreground mb-6">
                Currently at Renault Group, I lead the design and implementation of 
                data pipelines that process hundreds of millions of events daily from 
                connected vehicles and manufacturing systems.
              </p>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/about">
                  Learn more about me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 p-8 flex items-center justify-center">
                <div className="text-8xl font-bold text-primary/30">AS</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Recent Highlights Timeline */}
      <section className="py-24">
        <Container size="narrow">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              title="Recent Highlights"
              subtitle="My career journey"
              className="mb-0"
            />
            <Button asChild variant="ghost" className="gap-2 hidden sm:flex">
              <Link to="/about#timeline">
                View full timeline
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <Timeline entries={recentTimeline} showLinks={false} />

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full gap-2">
              <Link to="/about#timeline">
                View full timeline
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <SectionHeader
            title="Skills & Expertise"
            subtitle="Technologies I work with daily"
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      size="sm"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              title="Featured Projects"
              subtitle="Some of my recent work"
              className="mb-0"
            />
            <Button asChild variant="ghost" className="gap-2 hidden sm:flex">
              <Link to="/projects">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Button asChild variant="outline" className="w-full gap-2">
              <Link to="/projects">
                View all projects
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Writing */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              title="Featured Writing"
              subtitle="Thoughts on engineering and technology"
              className="mb-0"
            />
            <Button asChild variant="ghost" className="gap-2 hidden sm:flex">
              <Link to="/publications">
                View all articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPublications.map((publication, index) => (
              <BlogCard key={publication.id} publication={publication} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's work together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a project in mind or want to discuss data engineering challenges? 
              I'd love to hear from you.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/contact">
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
