import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  python,
  tailwind,
  nodejs,
  mongodb,
  git,
  genfura,
  infosys,
  sit_logo,
  image_recognition,
  chat_app,
  threejs,
  vite,
  nextjs,
  sql,
  resume_reviewer_img,
  crud_app
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "React Development",
    icon: mobile,
  },
  {
    title: "NextJs Development",
    icon: creator,
  },
  {
    title: "Vite Development",
    icon: vite,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Sql",
    icon: sql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences: TExperience[] = [
  {
    title: "Artifical Intelligence",
    companyName: "Infosys",
    icon: infosys,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Dec 2023",
    points: [
      "Completed a comprehensive Artificial Intelligence (AI) course covering core concepts such as machine learning, deep learning, and neural networks.",
      "Gained practical knowledge in data preprocessing, model training, and evaluation techniques for real-world AI applications.",
      "Developed strong understanding of AI algorithms, supervised & unsupervised learning, and performance optimization strategies.",
    ],
  },
  {
    title: "Minor Degree in Artificial Intelligence and Data Science",
    companyName: "Sethu Institute of Technology",
    icon: sit_logo,
    iconBg: "#383E56",
    date: "Mar 2022 - Mar 2025",
    points: [
      "Completed a Minor Degree in Artificial Intelligence and Data Science (AIDS) along with main degree",
      "Acquired knowledge in machine learning, data analytics, and AI fundamentals.",
      "Applied AI and data-driven approaches to support engineering analysis and decision-making.",
      "Built interdisciplinary skills bridging core engineering principles with modern AI technologies.",
    ],
  },
  {
    title: "Junior Developer Intern",
    companyName: "Genfura",
    icon: genfura,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Jan 2026",
    points: [
      "Completed internship as a Junior Developer Intern at Genfura Technologies, working on live development tasks and client requirements.",
      "Developed responsive UI components and application pages using React.js / Next.js.",
      "Assisted in bug fixing, testing, and improving performance of web applications.",
      "Collaborated with the team using version control tools (Git) and followed professional development workflows.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "AI Resume Reviewer",
    description:
      "Developed an AI Resume Reviewer that analyzes resumes and provides automated feedback on formatting, skills, and ATS compatibility to improve candidate success rates.",
    tags: [
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
    ],
    image: resume_reviewer_img,
    sourceCodeLink: "https://github.com/guru-212002/python-resume-reviewer",
  },
  {
    name: "Image Recognition",
    description:
      "Built an Image Recognition Application using TensorFlow to classify and identify objects from images with high accuracy using deep learning models.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "tensorflow",
        color: "pink-text-gradient",
      },
    ],
    image: image_recognition,
    sourceCodeLink: "https://github.com/guru-212002/py-image-classifier",
  },
  {
    name: "Chat App",
    description:
      "Developed a real-time Python chat application using Socket.IO to enable instant messaging with low-latency communication between multiple users.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "socket-io",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: chat_app,
    sourceCodeLink: "https://github.com/guru-212002/py-chat-app",
  },
  {
    name: "CRUD App",
    description:
      "Developed a full-stack CRUD web application using Vite (frontend) and Express.js (backend) with MongoDB for efficient data storage and management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: crud_app,
    sourceCodeLink: "https://github.com/guru-212002/react-app-1",
  },
];

export { services, technologies, experiences, testimonials, projects };
