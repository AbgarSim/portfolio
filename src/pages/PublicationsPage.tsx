import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { BlogCard } from "@/components/BlogCard";
import { publications } from "@/data/publications";

export default function PublicationsPage() {
  return (
    <>
      <Helmet>
        <title>Writing | Abgar Simonean</title>
        <meta
          name="description"
          content="Technical articles and thoughts on data engineering, distributed systems, and software architecture by Abgar Simonean."
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
              Writing
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Thoughts & <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              I write about data engineering, distributed systems, and software 
              architecture. My articles have been published on HackerNoon, Medium, 
              and other technical publications.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Publications Grid */}
      <section className="py-12 pb-24">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((publication, index) => (
              <BlogCard
                key={publication.id}
                publication={publication}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to collaborate on an article?
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm always open to guest posts, collaborations, and speaking 
              opportunities on topics related to data engineering and distributed systems.
            </p>
            <a
              href="mailto:hello@abgarsimonean.com"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              Get in touch →
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
