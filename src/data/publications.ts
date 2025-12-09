export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  publication: string;
  date: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export const publications: Publication[] = [
  {
    id: "building-scalable-data-pipelines",
    title: "Building Scalable Data Pipelines with Apache Beam",
    excerpt: "A deep dive into designing and implementing production-grade data pipelines that can handle billions of events per day while maintaining low latency and high reliability.",
    publication: "HackerNoon",
    date: "2024-01-15",
    tags: ["Apache Beam", "Data Engineering", "GCP"],
    url: "https://hackernoon.com",
    featured: true,
  },
  {
    id: "streaming-vs-batch",
    title: "Stream Processing vs Batch: When to Choose What",
    excerpt: "Understanding the tradeoffs between streaming and batch processing paradigms, with real-world examples from automotive data processing at scale.",
    publication: "Medium",
    date: "2023-11-20",
    tags: ["Big Data", "Architecture", "Best Practices"],
    url: "https://medium.com",
    featured: true,
  },
  {
    id: "flutter-enterprise",
    title: "Flutter for Enterprise: Lessons from Production",
    excerpt: "Key insights and patterns learned from building enterprise-grade mobile applications with Flutter, including state management, testing, and CI/CD.",
    publication: "Medium",
    date: "2023-09-05",
    tags: ["Flutter", "Mobile", "Enterprise"],
    url: "https://medium.com",
    featured: false,
  },
  {
    id: "distributed-systems-patterns",
    title: "Essential Patterns for Distributed Systems",
    excerpt: "A practical guide to implementing common patterns like saga, event sourcing, and CQRS in modern distributed applications.",
    publication: "HackerNoon",
    date: "2023-06-10",
    tags: ["Distributed Systems", "Architecture", "Patterns"],
    url: "https://hackernoon.com",
    featured: true,
  },
];

export const getFeaturedPublications = () => publications.filter(p => p.featured);
