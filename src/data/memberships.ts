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
    roleOrGrade: "IEEE Senior member",
    since: "2025",
    description: "Becoming an IEEE Senior Member is a selective, peer-reviewed recognition awarded only after a" +
        " rigorous evaluation of one’s professional impact and technical contributions. " +
        "It reflects not just years of experience, but proven maturity, leadership, and sustained " +
        "success in the engineering profession.",
    link: "/pdf/IEEE_Membership.pdf"
  },
];
