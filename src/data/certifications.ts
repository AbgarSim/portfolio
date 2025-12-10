export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  description?: string;
  expiryDate?: string;
  credentialId?: string;
  credentialPhoto?: string;
  credentialUrl?: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const certifications: Certification[] = [
  {
    id: "oca",
    name: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    issueDate: "2019-05",
    credentialId: "5515b327-1983-4fda-a830-efff410f4822",
    description: "An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of " +
        "object-oriented concepts, the Java programming language and general knowledge of " +
        "Java platforms and technologies.",
    credentialPhoto: "/badge/oca.png",
    credentialUrl: "https://www.credly.com/badges/5515b327-1983-4fda-a830-efff410f4822",
    status: "Completed"
  },
  {
    id: "ocp",
    name: "Oracle Certified Professional, Java SE 8 Programmer",
    issuer: "Oracle",
    issueDate: "2020-01",
    credentialId: "8b3b87e2-fe6f-4f57-a44e-ba2530fb1c6c",
    description: "An Oracle Certified Professional, Java SE 8 Programmer has validated their " +
        "Java development skills by answering challenging, real-world, scenario-based questions " +
        "that measure problem solving skills using Java code.",
    credentialPhoto: "/badge/ocp.png",
    credentialUrl: "https://www.credly.com/badges/8b3b87e2-fe6f-4f57-a44e-ba2530fb1c6c",
    status: "Completed"
  },
];
