export interface TimelineEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  description: string;
  techStack: string[];
  link?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "renault",
    title: "Senior Data Engineer",
    company: "Renault Group",
    location: "Paris, France",
    startDate: "2022",
    endDate: "Present",
    isCurrent: true,
    description: "Leading the design and implementation of large-scale data processing infrastructure for connected vehicles and manufacturing operations. Architected real-time pipelines processing 100M+ events daily.",
    techStack: ["Apache Beam", "GCP", "BigQuery", "Dataflow", "Java", "Python"],
    link: "https://www.renaultgroup.com"
  },
  {
    id: "grid-dynamics",
    title: "Java Engineer",
    company: "Grid Dynamics",
    location: "Remote",
    startDate: "2020",
    endDate: "2022",
    isCurrent: false,
    description: "Developed high-performance financial analytics systems for major banking clients with focus on anti-money laundering and fraud detection.",
    techStack: ["Java", "Apache Flink", "Kafka", "Neo4j", "PostgreSQL"],
    link: "https://www.griddynamics.com"
  },
  {
    id: "endava",
    title: "Software Engineer",
    company: "Endava",
    location: "Bucharest, Romania",
    startDate: "2018",
    endDate: "2020",
    isCurrent: false,
    description: "Full-stack development for enterprise clients in telecommunications and retail sectors. Built microservices architecture and mobile applications.",
    techStack: ["Java", "Spring Boot", "Flutter", "Docker", "PostgreSQL"],
    link: "https://www.endava.com"
  }
];

export const getRecentTimelineEntries = (count: number = 3): TimelineEntry[] => {
  return timelineEntries.slice(0, count);
};
