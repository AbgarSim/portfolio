export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: string;
  image: string;
  featured: boolean;
  highlights: string[];
  problem: string;
  solution: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "payup-app",
    title: "PayUp App (WIP)",
    description: "A modern expense tracking and bill splitting application built with Flutter and Spring Boot.",
    longDescription: "PayUp revolutionizes group expense management with real-time synchronization, smart bill splitting algorithms, and seamless payment integrations.",
    techStack: ["Flutter", "Spring Boot", "PostgreSQL", "Docker"],
    category: "Mobile App",
    image: "/placeholder.svg",
    featured: true,
    highlights: [
      "Real-time expense synchronization across devices",
      "Smart bill splitting with multiple algorithms",
      "Payment gateway integration",
      "Push notifications for payment reminders"
    ],
    problem: "Friends and groups struggle to track shared expenses and settle debts efficiently, leading to awkward conversations and forgotten payments.",
    solution: "Built a cross-platform mobile app with intelligent expense categorization, automatic debt simplification, and integrated payment options.",
    impact: "Reduced settlement time by 80% and improved user satisfaction with 4.8★ rating on app stores."
  },
  {
    id: "javelin-connect",
    title: "Javelin Connect",
    description: "Enterprise communication platform enabling seamless collaboration across distributed teams.",
    longDescription: "Javelin Connect provides a unified communication hub for enterprise teams with video conferencing, real-time messaging, and project management integration.",
    techStack: ["React", "Node.js", "WebRTC", "Socket.io", "MongoDB"],
    category: "Enterprise",
    image: "/placeholder.svg",
    featured: true,
    highlights: [
      "HD video conferencing with up to 100 participants",
      "End-to-end encrypted messaging",
      "Integration with popular project management tools",
      "Custom bot framework for automation"
    ],
    problem: "Enterprise teams using multiple communication tools face context switching, information silos, and security concerns.",
    solution: "Developed a unified platform that consolidates communication channels while maintaining enterprise-grade security and compliance.",
    impact: "Adopted by 50+ enterprise clients, reducing communication overhead by 45%."
  },
  {
    id: "renault-data-pipelines",
    title: "Renault Data Pipelines",
    description: "Large-scale data processing infrastructure handling petabytes of automotive telemetry data.",
    longDescription: "Designed and implemented real-time data pipelines for processing vehicle telemetry, manufacturing data, and customer interactions at massive scale.",
    techStack: ["Apache Beam", "GCP", "BigQuery", "Dataflow", "Pub/Sub", "Java"],
    category: "Big Data",
    image: "/placeholder.svg",
    featured: true,
    highlights: [
      "Processing 100M+ events per day",
      "Real-time anomaly detection",
      "Cost-optimized storage tiering",
      "GDPR-compliant data handling"
    ],
    problem: "Legacy batch processing systems couldn't handle the volume and velocity of modern connected vehicle data, limiting real-time insights.",
    solution: "Architected a streaming-first data platform using Apache Beam on GCP Dataflow with intelligent partitioning and cost optimization.",
    impact: "Reduced data processing latency from hours to seconds, enabling predictive maintenance and improved customer experience."
  },
  {
    id: "aml-analytics",
    title: "AML Analytics Platform",
    description: "Anti-Money Laundering analytics platform for real-time transaction monitoring and fraud detection.",
    longDescription: "Built a sophisticated analytics platform that processes financial transactions in real-time to detect suspicious patterns and ensure regulatory compliance.",
    techStack: ["Apache Flink", "Kafka", "Elasticsearch", "Python", "Neo4j"],
    category: "FinTech",
    image: "/placeholder.svg",
    featured: false,
    highlights: [
      "Real-time transaction scoring",
      "Graph-based relationship analysis",
      "ML-powered pattern detection",
      "Regulatory reporting automation"
    ],
    problem: "Financial institutions struggle to detect sophisticated money laundering schemes that span multiple accounts and jurisdictions.",
    solution: "Developed a graph-based analytics engine that identifies complex transaction patterns and generates actionable alerts for compliance teams.",
    impact: "Improved detection rate by 60% while reducing false positives by 40%, saving thousands of analyst hours annually."
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
