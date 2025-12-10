export interface Skill {
  name: string;
  category: string;
  level: "expert" | "advanced" | "intermediate";
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Java", category: "Languages", level: "expert" },
      { name: "Python", category: "Languages", level: "advanced" },
      { name: "SQL", category: "Languages", level: "expert" },
      { name: "Dart", category: "Languages", level: "advanced" },
      { name: "TypeScript", category: "Languages", level: "intermediate" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot / Spring Framework", category: "Frameworks & Libraries", level: "expert" },
      { name: "Apache Beam", category: "Frameworks & Libraries", level: "expert" },
      { name: "Hibernate / JPA", category: "Frameworks & Libraries", level: "advanced" },
      { name: "Flutter (BLoC, Clean Arch)", category: "Frameworks & Libraries", level: "advanced" },
      { name: "React / Redux", category: "Frameworks & Libraries", level: "advanced" },
      { name: "AngularJS", category: "Frameworks & Libraries", level: "intermediate" },
    ],
  },
  {
    name: "Cloud & Data (GCP)",
    skills: [
      { name: "Google Cloud Platform", category: "Cloud & Data (GCP)", level: "expert" },
      { name: "BigQuery", category: "Cloud & Data (GCP)", level: "expert" },
      { name: "Dataflow (Beam Runner)", category: "Cloud & Data (GCP)", level: "expert" },
      { name: "Cloud Composer", category: "Cloud & Data (GCP)", level: "advanced" },
      { name: "GKE / Kubernetes", category: "Cloud & Data (GCP)", level: "advanced" },
      { name: "Pub/Sub & Cloud Storage", category: "Cloud & Data (GCP)", level: "advanced" },
      { name: "Redis (caching & DR)", category: "Cloud & Data (GCP)", level: "advanced" },
    ],
  },
  {
    name: "DevOps & Delivery",
    skills: [
      { name: "Docker", category: "DevOps & Delivery", level: "advanced" },
      { name: "Kubernetes (incl. GKE)", category: "DevOps & Delivery", level: "advanced" },
      { name: "GitHub Actions / CI/CD Pipelines", category: "DevOps & Delivery", level: "advanced" },
      { name: "Terraform / Helm", category: "DevOps & Delivery", level: "intermediate" },
      { name: "Maven / Gradle", category: "DevOps & Delivery", level: "expert" },
      { name: "Git (GitHub, Bitbucket, SVN)", category: "DevOps & Delivery", level: "expert" },
    ],
  },
  {
    name: "Architecture & Security",
    skills: [
      { name: "Microservices & Backend Architecture", category: "Architecture & Security", level: "expert" },
      { name: "Domain-Driven Design (DDD)", category: "Architecture & Security", level: "advanced" },
      { name: "Clean Architecture (Java & Flutter)", category: "Architecture & Security", level: "advanced" },
      { name: "OAuth2 / OpenID Connect", category: "Architecture & Security", level: "advanced" },
    ],
  },
];

export const allSkills = skillCategories.flatMap(c => c.skills);
