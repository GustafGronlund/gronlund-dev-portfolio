import projectsImg1 from "../public/projects-placeholder.jpg";
import projectsImg2 from "../public/projects-placeholder.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
];

export const projectsData = [
  {
    id: 0,
    title: "Norcino",
    description: "",
    tags: ["Flutter", "Dart"],
    imageUrl: projectsImg1,
  },
  {
    id: 1,
    title: "ZapUp",
    description: "",
    tags: ["Flutter", "Dart"],
    imageUrl: projectsImg2,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Flutter",
  "Dart",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
