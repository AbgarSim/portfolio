export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  status: "Completed" | "In Progress" | "Planned";
}

export const certifications: Certification[] = [
  {
    id: "gcp-pde",
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    issueDate: "2023-06",
    expiryDate: "2025-06",
    credentialId: "ABC123456",
    credentialUrl: "https://google.accredible.com/",
    status: "Completed"
  },
  {
    id: "gcp-pca",
    name: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    issueDate: "",
    status: "In Progress"
  },
  {
    id: "aws-saa",
    name: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    issueDate: "2022-03",
    expiryDate: "2025-03",
    credentialId: "DEF789012",
    credentialUrl: "https://www.credly.com/",
    status: "Completed"
  },
  {
    id: "apache-beam",
    name: "Apache Beam Contributor",
    issuer: "Apache Software Foundation",
    issueDate: "2023-01",
    status: "Completed"
  }
];
