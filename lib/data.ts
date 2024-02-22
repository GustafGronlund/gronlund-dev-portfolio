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
    year: "2023",
    title: "Vizz",
    description: "",
    tags: ["Design", "Development"],
    techStack: ["Flutter", "Dart"],
    imageUrl: projectsImg1,
  },
  {
    id: 1,
    year: "2023",
    title: "ZapUp",
    description: "",
    tags: ["Development"],
    techStack: ["Flutter", "Dart"],
    imageUrl: projectsImg2,
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    description: "I use HTML to build the foundation of web pages.",
  },
  {
    name: "CSS",
    description: "I use CSS to add visual design to web pages.",
  },
  {
    name: "JavaScript",
    description:
      "I use JavaScript to add interactivity to web pages, like animations, form validation, and dynamic content updates.",
  },
  {
    name: "TypeScript",
    description:
      "I use TypeScript to write cleaner and more predictable code, especially for large and complex projects.",
  },
  {
    name: "React",
    description:
      "I use React to build user interfaces that are responsive, interactive, and engaging.",
  },
  {
    name: "React Native",
    description:
      "I use React Native to build cross-platform mobile applications for iOS and Android.",
  },
  {
    name: "Next.js",
    description:
      "I prefer Next.js for web development because it offers a powerful framework for building fast, user-friendly, and SEO-optimized applications.",
  },
  {
    name: "Flutter",
    description:
      "I also use Flutter to build high-performance, cross-platform mobile applications for iOS and Android.",
  },
  {
    name: "Node.js",
    description:
      "I use Node.js to build scalable, high-performance server applications for web and mobile devices.",
  },
  {
    name: "Express",
    description:
      "I use Express.js to build robust, scalable web APIs for Node.js applications.",
  },
  {
    name: "Git",
    description:
      "I use Git to collaborate with others on code projects and track changes over time.",
  },
  {
    name: "Redux",
    description:
      "I use Redux to manage state in my React applications in a predictable and scalable way.",
  },
  {
    name: "MongoDB",
    description:
      "I use MongoDB to store and manage data for my web and mobile applications in a scalable and efficient way.",
  },
  {
    name: "Firebase",
    description:
      "I use Firebase to store and manage data for my web and mobile applications in a scalable and secure way.",
  },
  {
    name: "Tailwind",
    description:
      "I use Tailwind to build responsive and visually appealing web applications with ease.",
  },
  {
    name: "Dart",
    description:
      "I use Dart to develop high-performance and cross-platform mobile applications with Flutter.",
  },
  {
    name: "Framer Motion",
    description:
      "I use Framer Motion to create engaging and interactive animations for my web and mobile applications.",
  },
] as const;
