import projectsImg1 from "@/public/projects/vizz-mockup.jpg";
import projectsImg2 from "@/public/projects/zapup-mockup.jpg";
import aboutPic1 from "@/public/about/me.jpeg";
import aboutPic2 from "@/public/about/me-second.jpg";
import aboutPic3 from "@/public/about/me-third.jpg";

export const headerNavLinks = [
  { title: "About", href: "about-section" },
  { title: "My Skills", href: "skills-section" },
  { title: "My Projects", href: "projects-section" },
  { title: "Contact", href: "contact-section" },
];

export const aboutPictures = [aboutPic1, aboutPic2, aboutPic3] as const;

export const projectsData = [
  {
    id: 0,
    year: "2023",
    title: "Vizz",
    description:
      "Vizz is an in-house project created at COIO TECH, providing a user-friendly solution for effortless contact information sharing. The application enables users to quickly exchange details by scanning a personalized QR code. Thoughtfully designed in Figma and expertly developed using Flutter, Vizz prioritizes the simplicity and speed of contact sharing.",
    tags: ["Design", "Development"],
    techStack: ["Flutter", "Dart"],
    imageUrl: projectsImg1,
    projectLinks: [
      { appStore: "https://apps.apple.com/se/app/vizz/id1632176521" },
      {
        googlePlay:
          "https://play.google.com/store/apps/details?id=se.coio.vizz&hl=sv&gl=US",
      },
    ],
  },
  {
    id: 1,
    year: "2023",
    title: "ZapUp",
    description:
      "ZapUp, born from Uppladdning, is the go-to app for locating electric vehicle charging stations on the fly. The collaboration resulted in a user-friendly mobile app available on Android and iOS. Reflecting the features of the website, ZapUp allows users to effortlessly find charging stations directly from their mobile devices. Crafted with care, the app combines seamless UI/UX design and programming using Google's Flutter framework.",
    tags: ["Development"],
    techStack: ["Flutter", "Dart"],
    imageUrl: projectsImg2,
    projectLinks: [
      {
        appStore:
          "https://apps.apple.com/se/app/zapup-charge-finder/id6446351622",
      },
      {
        googlePlay:
          "https://play.google.com/store/apps/details?id=eu.zapup.cfapp&hl=en_US",
      },
    ],
  },
];

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
