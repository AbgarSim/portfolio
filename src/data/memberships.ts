export interface Membership {
  id: string;
  organization: string;
  roleOrGrade: string;
  since: string;
  description: string;
  link?: string;
}

export const memberships: Membership[] = [
  {
    id: "ieee",
    organization: "IEEE – Institute of Electrical and Electronics Engineers",
    roleOrGrade: "IEEE Member",
    since: "2023",
    description: "Active member contributing to knowledge sharing in software engineering and data systems. Engaged with IEEE Computer Society publications and events.",
    link: "https://www.ieee.org"
  },
  {
    id: "acm",
    organization: "ACM – Association for Computing Machinery",
    roleOrGrade: "Professional Member",
    since: "2022",
    description: "Member of the world's largest computing society, staying current with advances in computing research and practice.",
    link: "https://www.acm.org"
  },
  {
    id: "gde",
    organization: "Google Developer Experts",
    roleOrGrade: "Applicant (Cloud/Data)",
    since: "2024",
    description: "In the process of applying to become a Google Developer Expert in Cloud and Data technologies.",
    link: "https://developers.google.com/community/experts"
  }
];
