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
  {
    name: "HTML",
    description: "I use this to create the skeleton of the application",
  },
  {
    name: "CSS",
    description: "I use this to help structure the HTML skeleton",
  },
  {
    name: "JavaScript",
    description:
      "I use this to make the application become interactive and alive!",
  },
  {
    name: "TypeScript",
    description:
      "I use this when I want the application to be more strictly written :)",
  },
  {
    name: "React",
    description: "I use this to make the application feel reactivity",
  },
  {
    name: "React Native",
    description: "I use this to make mobile applications",
  },
  {
    name: "Next.js",
    description: "I prefer to use this when developing for the web",
  },
  {
    name: "Flutter",
    description: "I use this to make mobile applications aswell",
  },
  {
    name: "Node.js",
    description: "I use this to write server applications",
  },
  {
    name: "Express",
    description: "I use this framework for writing backend on a Node.js",
  },
  {
    name: "Git",
    description: "I use this to keep track of my code",
  },
  {
    name: "Redux",
    description: "I use this sometimes to handle states in my application",
  },
  {
    name: "MongoDB",
    description: "I use this to store data in my applications",
  },
  {
    name: "Firebase",
    description: "I use this to store data in my applications",
  },
  {
    name: "Tailwind",
    description: "I use this to style my applications",
  },
  {
    name: "Dart",
    description: "I use this to write logic in Flutter applications",
  },
  {
    name: "Framer Motion",
    description: "I use this to animate my applications",
  },
] as const;
