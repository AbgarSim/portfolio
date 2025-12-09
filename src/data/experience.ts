export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "renault",
    company: "Renault Group",
    role: "Senior Data Engineer",
    period: "2022 - Present",
    location: "Paris, France",
    description: "Leading the design and implementation of large-scale data processing infrastructure for connected vehicles and manufacturing operations.",
    highlights: [
      "Architected real-time data pipelines processing 100M+ events daily",
      "Reduced data processing costs by 40% through optimization",
      "Led migration from batch to streaming architecture",
      "Mentored team of 5 junior engineers"
    ],
    technologies: ["Apache Beam", "GCP", "BigQuery", "Dataflow", "Java", "Python"]
  },
  {
    id: "grid-dynamics",
    company: "Grid Dynamics",
    role: "Java Engineer",
    period: "2020 - 2022",
    location: "Remote",
    description: "Developed high-performance financial analytics systems for major banking clients with focus on anti-money laundering and fraud detection.",
    highlights: [
      "Built real-time transaction monitoring system",
      "Implemented graph-based fraud detection algorithms",
      "Achieved 99.99% system uptime for critical services",
      "Contributed to open-source Apache Flink connectors"
    ],
    technologies: ["Java", "Apache Flink", "Kafka", "Neo4j", "PostgreSQL"]
  },
  {
    id: "endava",
    company: "Endava",
    role: "Software Engineer",
    period: "2018 - 2020",
    location: "Bucharest, Romania",
    description: "Full-stack development for enterprise clients in telecommunications and retail sectors.",
    highlights: [
      "Developed microservices architecture for telecom billing system",
      "Built mobile applications using Flutter and Spring Boot",
      "Improved API response times by 60%",
      "Led agile ceremonies for team of 8"
    ],
    technologies: ["Java", "Spring Boot", "Flutter", "Docker", "PostgreSQL"]
  }
];
