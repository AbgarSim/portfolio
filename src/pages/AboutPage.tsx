import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/components/Timeline";
import { CertificationList } from "@/components/CertificationList";
import { MembershipList } from "@/components/MembershipList";
import { TechBadge } from "@/components/TechBadge";
import { timelineEntries } from "@/data/timeline";
import { certifications } from "@/data/certifications";
import { memberships } from "@/data/memberships";

const achievements = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Delivered", value: "20+" },
  { label: "Events/Day Processed", value: "100M+" },
  { label: "Publications", value: "10+" },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About | Abgar Simonean</title>
        <meta
          name="description"
          content="Learn about Abgar Simonean's journey from software engineer to senior data engineer,
          specializing in distributed systems and real-time data processing."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <span className="text-sm text-primary font-medium">About Me</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Turning complex data into{" "}
                <span className="text-gradient">actionable insights</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                I'm a Senior Software Engineer with a strong foundation in
                building reliable microservices and large-scale data systems. I focus on
                creating solutions that are both scalable and cost-efficient, even under
                demanding real-world constraints.
              </p>
              <p className="text-muted-foreground mb-6">
                Throughout my career, I've delivered high-impact systems ranging from
                distributed data pipelines to mission-critical backend services. My strength
                lies in taking complex technical challenges—from architecture to
                implementation—and bringing them to production with clarity, ownership,
                and long-term maintainability.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  Remote
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-primary" />
                  Renault Group
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  Computer Science
                </div>
              </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/10">
                <img
                    src="/photo.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Glow element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-subtle">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience & Projects Timeline */}
      <section id="timeline" className="py-24 scroll-mt-20">
        <Container size="narrow">
          <SectionHeader
            title="Experience & Projects Timeline"
            subtitle="My professional journey through the years"
          />

          <div className="mt-12">
            <Timeline entries={timelineEntries} />
          </div>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-gradient-subtle scroll-mt-20">
        <Container>
          <SectionHeader
            title="Certifications"
            subtitle="Professional credentials and achievements"
            align="center"
          />

          <div className="mt-12">
            <CertificationList certifications={certifications} />
          </div>
        </Container>
      </section>

      {/* Professional Memberships */}
      <section id="memberships" className="py-24 scroll-mt-20">
        <Container>
          <SectionHeader
            title="Professional Memberships"
            subtitle="Organizations I'm part of"
            align="center"
          />

          <div className="mt-12">
            <MembershipList memberships={memberships} />
          </div>
        </Container>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <SectionHeader
            title="Focus Areas"
            subtitle="What I specialize in"
            align="center"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Distributed Systems",
                description:
                  "Designing fault-tolerant systems that scale horizontally to handle petabytes of data across global infrastructure.",
                skills: ["Apache Beam", "Apache Flink", "Kafka", "Microservices"],
              },
              {
                title: "Real-Time Processing",
                description:
                  "Building streaming pipelines that process millions of events per second with sub-second latency.",
                skills: ["Dataflow", "Pub/Sub", "Stream Processing", "Event-Driven"],
              },
              {
                title: "Cloud Architecture",
                description:
                  "Architecting cloud-native solutions on GCP with focus on cost optimization and operational excellence.",
                skills: ["GCP", "BigQuery", "Cloud Storage", "Terraform"],
              },
            ].map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground mb-4">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Interests */}
      <section className="py-24">
        <Container size="narrow">
          <SectionHeader
            title="Beyond Engineering"
            subtitle="What drives me outside of work"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <p className="text-muted-foreground">
              When I'm not diving into data pipelines or optimizing query performance, 
              you'll find me contributing to open-source projects, writing technical 
              articles on HackerNoon and Medium, or exploring the latest developments 
              in distributed computing.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about knowledge sharing. I believe in the power
              of community-driven learning and try to give back through mentoring 
              and open-source contributions.
            </p>
            <p className="text-muted-foreground">
              Outside of tech, I enjoy traveling, fixing my infinitely breaking retro BMW and drinking specialty coffee.
            </p>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
