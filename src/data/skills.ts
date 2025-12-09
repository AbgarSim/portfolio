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
    name: "Frameworks",
    skills: [
      { name: "Spring Boot", category: "Frameworks", level: "expert" },
      { name: "Apache Beam", category: "Frameworks", level: "expert" },
      { name: "Flutter", category: "Frameworks", level: "advanced" },
      { name: "Apache Flink", category: "Frameworks", level: "advanced" },
      { name: "React", category: "Frameworks", level: "intermediate" },
    ],
  },
  {
    name: "Cloud & Data",
    skills: [
      { name: "Google Cloud Platform", category: "Cloud & Data", level: "expert" },
      { name: "BigQuery", category: "Cloud & Data", level: "expert" },
      { name: "Dataflow", category: "Cloud & Data", level: "expert" },
      { name: "Pub/Sub", category: "Cloud & Data", level: "advanced" },
      { name: "Cloud Storage", category: "Cloud & Data", level: "advanced" },
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      { name: "ETL Pipelines", category: "Data Engineering", level: "expert" },
      { name: "Stream Processing", category: "Data Engineering", level: "expert" },
      { name: "Data Modeling", category: "Data Engineering", level: "advanced" },
      { name: "Kafka", category: "Data Engineering", level: "advanced" },
      { name: "Elasticsearch", category: "Data Engineering", level: "intermediate" },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", category: "DevOps", level: "advanced" },
      { name: "Kubernetes", category: "DevOps", level: "intermediate" },
      { name: "CI/CD", category: "DevOps", level: "advanced" },
      { name: "Terraform", category: "DevOps", level: "intermediate" },
      { name: "Git", category: "DevOps", level: "expert" },
    ],
  },
];

export const allSkills = skillCategories.flatMap(c => c.skills);
