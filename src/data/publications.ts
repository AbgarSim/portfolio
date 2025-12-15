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
    id: "accidental-programming-language",
    title: "How to Accidentally Build a Programming Language While Cleaning Redis",
    excerpt: "A Redis cleanup task evolved into a full rule engine. Configurable JSON rules grew to support " +
        "logic, recursion, traversal, persistence, and rollback — effectively becoming a rule engine/programming language " +
        "by accident.",
    publication: "HackerNoon",
    date: "2025-12-15",
    tags: [
      "case-study",
      "redis",
      "business-rule-engine",
      "java",
      "tech-debt",
      "backend-development",
      "software-development",
      "scaling"
    ],
    url: "https://hackernoon.com/how-to-accidentally-build-a-programming-language-while-cleaning-redis",
    featured: true,
  },
  {
    id: "address-parsing-case-study",
    title: "When the Best Solution Isn’t the Obvious One: A Case Study in Address Parsing",
    excerpt: "A simple “deserialize XML into a POJO” task for AML compliance turned into a nightmare of messy, " +
        "multilingual, unstructured addresses. Regexes, heuristics, and Java libraries all failed. The real solution " +
        "required integrating a C NLP library into Java via JNI and switching to a better trained model.",
    publication: "HackerNoon",
    date: "2025-12-10",
    tags: [
      "case-study",
      "software-architecture",
      "programming",
      "java",
      "nlp",
      "java-native-interface",
      "data-normalization",
      "software-development",
      "scaling"
    ],
    url: "https://hackernoon.com/when-the-best-solution-isnt-the-obvious-one-a-case-study-in-address-parsing",
    featured: true,
  },
  {
    id: "documentation-discussion",
    title: "If Your Documentation Takes Two Clicks to Open, Congrats - It’s Already Outdated",
    excerpt: "Documentation only survives if it lives as close to the code as possible. Good documentation isn’t a " +
        "single artifact - it’s a small ecosystem of layers, each serving a different purpose.",
    publication: "HackerNoon",
    date: "2025-12-07",
    tags: [
      "clean-code",
      "software-documentation",
      "programming",
      "java",
      "hackernoon-top-story",
      "best-practices"
    ],
    url: "https://hackernoon.com/if-your-documentation-takes-two-clicks-to-open-congrats-its-already-outdated",
    featured: true,
  },
];

export const getFeaturedPublications = () => publications.filter(p => p.featured);
