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
  credentialsUrl?: string;
  link?: string;
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "renault",
    title: "Senior Software Engineer – Data Engineering",
    company: "Renault Group",
    location: "Remote",
    startDate: "Jul 2023",
    endDate: "Present",
    isCurrent: true,
    description:
        "Designing and delivering scalable data pipelines and backend services for Renault's global manufacturing analytics platform, using Apache Beam, BigQuery, and Spring Boot APIs to power real-time and historical insights.",
    techStack: [
      "Apache Beam",
      "GCP",
      "Dataflow",
      "BigQuery",
      "Spring Boot",
      "Java",
      "Redis",
      "Kubernetes"
    ],
    link: "https://www.renaultgroup.com"
  },
  {
    id: "grid-dynamics",
    title: "Senior Full-Stack Software Developer",
    company: "Grid Dynamics",
    location: "Chisinau, Moldova",
    startDate: "Jun 2022",
    endDate: "Jul 2023",
    isCurrent: false,
    description:
        "Built high-performance AML analytics tools for a large e-commerce environment, developing Java-based services and React UIs to monitor suspicious activity under SLAs of 200k+ requests per second.",
    techStack: [
      "Java",
      "Spring Boot",
      "Java EE",
      "React",
      "Redux",
      "NoSQL",
      "PostgreSQL",
      "Kafka"
    ],
    link: "https://www.griddynamics.com"
  },
  {
    id: "endava-java-dev",
    title: "Java Software Developer",
    company: "Endava",
    location: "Chisinau, Moldova",
    startDate: "Jul 2019",
    endDate: "Jun 2022",
    isCurrent: false,
    description:
        "Engineered core modules for a secure financial platform supporting central banking and Immediate Payment System integrations, using Java, Spring, and enterprise databases like Oracle and IBM DB2.",
    techStack: [
      "Java",
      "Java EE",
      "Spring",
      "Spring Boot",
      "Oracle",
      "IBM DB2",
      "JUnit",
      "Mockito"
    ],
    link: "https://www.endava.com"
  },
  {
    id: "endava-mentor",
    title: "Intern Software Mentor",
    company: "Endava",
    location: "Chisinau, Moldova",
    startDate: "Feb 2020",
    endDate: "Jun 2020",
    isCurrent: false,
    description:
        "Mentored an Endava Spring intern through backend development fundamentals, project workflows, and professional best practices, helping them integrate into a production team.",
    techStack: ["Java", "Spring Boot", "Mentoring", "Agile"],
    link: "https://www.endava.com"
  },
  {
    id: "isd-dev",
    title: "Software Maintainer / Developer",
    company: "ISD Moldova",
    location: "Chisinau, Moldova",
    startDate: "Sep 2018",
    endDate: "Jun 2019",
    isCurrent: false,
    description:
        "Maintained and extended large-scale logistics platforms for international clients, focusing on backend services, data integrity, and system integrations across warehouses and shipments.",
    techStack: [
      "Java",
      "Spring",
      "PostgreSQL",
      "Oracle",
      "JPA",
      "Liquibase",
      "JMS"
    ],
    link: "https://www.isd-soft.com"
  },
  {
    id: "isd-intern",
    title: "Intern Software Developer",
    company: "ISD Moldova",
    location: "Chisinau, Moldova",
    startDate: "May 2018",
    endDate: "Aug 2018",
    isCurrent: false,
    description:
        "Contributed to Motivision, a cross-platform reward-based app encouraging healthy activities, gaining hands-on experience with real-world product development.",
    techStack: ["Java", "Android", "Agile"],
    link: "https://www.isd-soft.com"
  },
  {
    id: "freelance",
    title: "Freelance Contractor",
    company: "Self-Employed",
    location: "Chisinau, Moldova",
    startDate: "Aug 2017",
    endDate: "May 2018",
    isCurrent: false,
    description:
        "Designed, developed, and deployed a full website for a pharmaceutical company, owning the entire delivery from requirements to production launch.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
  }
];

export const educationTimelineEntries: TimelineEntry[] = [
  {
    id: "masters",
    title: "Master’s Degree – Informational Technologies in Modeling",
    company: "Technical University of Moldova",
    location: "Chisinau, Moldova",
    startDate: "2022",
    endDate: "2024",
    isCurrent: false,
    description:
        "Advanced studies in Software Development, distributed systems, software architecture, and cloud-native " +
        "development. Focused on scalable backend systems, machine learning foundations, and modern enterprise " +
        "engineering practices.",
    techStack: [
      "Java",
      "Distributed Systems",
      "Machine Learning",
      "Cloud Computing",
      "Software Architecture"
    ],
    link: "https://usm.md",
    credentialsUrl: "/pdf/masters.pdf"
  },
  {
    id: "bachelors",
    title: "Bachelor’s Degree – Computer Science",
    company: "Technical University of Moldova",
    location: "Chisinau, Moldova",
    startDate: "2017",
    endDate: "2020",
    isCurrent: false,
    description:
        "Comprehensive IT program covering programming, algorithms, web technologies, databases, and system design. " +
        "Formed the technical foundation for full-stack and backend engineering roles.",
    techStack: [
      "Java",
      "Algorithms",
      "Databases",
      "Web Development",
      "Networking"
    ],
    link: "https://usm.md",
    credentialsUrl: "/pdf/bachelors.pdf"
  }
];

export const getRecentTimelineEntries = (count: number = 3): TimelineEntry[] => {
  return timelineEntries.slice(0, count);
};
