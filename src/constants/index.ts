import { getExperienceYears } from "../utiles/experience";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  
} from 'react-icons/si';
import { VscAzure } from "react-icons/vsc";
import certBadge from "../assests/claude-certified-associate-foundations.png";
import certFile from "../assests/Claude_Certified_Associate_Foundations_Certificate.pdf";
const experienceYears = getExperienceYears();

export const tagColorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    darkBg: "dark:bg-blue-900/30",
    darkText: "dark:text-blue-400",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    darkBg: "dark:bg-green-900/30",
    darkText: "dark:text-green-400",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-600",
    darkBg: "dark:bg-pink-900/30",
    darkText: "dark:text-pink-400",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    darkBg: "dark:bg-violet-900/30",
    darkText: "dark:text-violet-400",
  },
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const technologies = [
  { name: "HTML 5", color: "#E34F26", proficiency: 100, category: "Frontend" },
  { name: "CSS 3", color: "#1572B6", proficiency: 100, category: "Frontend" },
  { name: "Bootstrap", color: "#7952B3", proficiency: 100, category: "Frontend" },
  { name: "Tailwind CSS", color: "#38B2AC", proficiency: 100, category: "Frontend" },
  { name: "JavaScript", color: "#F7DF1E", proficiency: 80, category: "Frontend" },
  { name: "TypeScript", color: "#3178C6", proficiency: 75, category: "Frontend" },
  { name: "React JS", color: "#61DAFB", proficiency: 100, category: "Frontend" },
  { name: "React Material-UI", color: "#0081CB", proficiency: 100, category: "Frontend" },
  { name: "Angular", color: "#DD0031", proficiency: 75, category: "Frontend" },
  { name: "Redux", color: "#764ABC", proficiency: 100, category: "Frontend" },
  { name: "Node JS", color: "#339933", proficiency: 70, category: "Backend" },
   { name: "Python", color: "#F7DF1E", proficiency: 70, category: "Backend" },
  { name: "MongoDB", color: "#47A248", proficiency: 75, category: "Database" },
  { name: "Azure", color: "#008AD7", proficiency: 70, category: "Cloud & DevOps" },
  { name: "Git", color: "#F05032", proficiency: 85, category: "Tools" },
];

export const experiences = [
  {
    title: "Full-Stack Developer | Azure",
    company_name: "TCS (Tata Consultancy Services)",
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Building and maintaining enterprise-grade web applications using React.js, Angular, Node.js, and modern JavaScript/TypeScript workflows.",
      "Leading UI development for a major telecom client using Angular, implementing secure authentication workflows with Azure MSAL and role-based access control.",
      "Integrated AWS Guardrails to provide dynamic feature management, enabling administrators to control UI functionalities directly from the dashboard.",
      "Embedded Power BI dashboards and reports to deliver advanced analytics, enabling stakeholders to track KPIs and operational insights in real time.",
      "Delivered responsive UI solutions for insurance and FMCG clients using ReactJS, Material UI, and custom component architectures, including GPT-powered conversational interfaces.",
      "Designed PDF-data extraction workflows using Python and Streamlit, and integrated processed insights seamlessly into React-based applications.",
      "Developed multiple Angular POCs featuring Generative AI workflows, automation tools, and modern frontend performance optimizations.",
      "Contributed to Indian government digital portals by building scalable React applications with Redux, Bootstrap, and Material UI to support high-traffic user journeys.",
      "Collaborated closely with designers, product owners, and backend teams to deliver performant, accessible, and aesthetically consistent user interfaces.",
      "Implemented responsive design strategies, optimized performance across browsers/devices, and ensured strict adherence to accessibility guidelines.",
      "Actively participated in peer code reviews, improving code quality, standards, and best practices across the team."
    ],
  },
];

export const enterpriseProjects = [
  {
    name: "Indian Government – ECI Portals (NVSP, NGSP, ETPBS)",
    description: "Developed scalable and accessible UIs for key Election Commission of India portals including NVSP, NGSP, and ETPBMS. Built modules for voter services, grievance handling, and secure postal ballot workflows using React, Redux, Bootstrap, and MUI. Optimized performance and resolved live issues for high-traffic government systems used by millions of citizens.",
    tags: [
      { name: "react", color: "blue" },
      { name: "bootstrap", color: "green" },
      { name: "material-ui", color: "pink" },
    ],
    source_code_link: "https://www.eci.gov.in/",
  },
  {
    name: "Insurance Domain – Generali",
    description: "Built responsive insurance workflow UIs using React, Redux, and Material-UI. Integrated GPT-powered conversational agent supporting auto-suggest, PDF intelligence, and policy Q&A. Implemented agentic workflows for classification, policy lookup, claim tracking, and renewal assistance—reducing manual effort by ~40%.",
    tags: [
      { name: "react", color: "blue" },
      { name: "material-ui", color: "green" },
      { name: "genai", color: "pink" },
    ],
    source_code_link: "https://www.generali.com/",
  },
  {
    name: "FMCG – Power BI Embedded Dashboards",
    description: "Integrated Power BI embedded analytics within a React application, enabling interactive dashboards with edit/save modes. Delivered secure deployments on remote servers and improved decision-making by embedding real-time insights, reducing dependency on standalone BI tools.",
    tags: [
      { name: "react", color: "blue" },
      { name: "powerbi", color: "green" },
      { name: "bootstrap", color: "pink" },
    ],
    source_code_link: "#",
  },
  {
    name: "Food & Beverage – GenAI Product Intelligence",
    description: "Developed interactive UIs using React and MUI for product suggestions and ingredient insights. Integrated GenAI to perform document extraction, product comparisons, and user-guided chat interactions for customer assistance and product discovery.",
    tags: [
      { name: "react", color: "blue" },
      { name: "genai", color: "green" },
      { name: "material-ui", color: "pink" },
    ],
    source_code_link: "#",
  },
  {
    name: "Telecom Client – AI-Enhanced Dashboards & Assistant",
    description: "Developed enterprise-grade Angular UIs with integrated Power BI embedded analytics for KPI dashboards. Built intelligent GPT-based assistants to answer telecom data queries, guide workflows, and enhance reporting—improving user efficiency by 35%.",
    tags: [
      { name: "angular", color: "blue" },
      { name: "powerbi", color: "green" },
      { name: "genai", color: "pink" },
    ],
    source_code_link: "#",
  },
  {
    name: "TCS Innovation – Generative & Agentic AI Suite",
    description: "Built 10+ GenAI-driven POCs including price prediction, CAD drawing analysis, PDF intelligence, image generation, resume analysis, and manufacturing guideline lookup. Integrated solutions into React and Angular apps with agentic workflows, multistep reasoning, and automated decision support.",
    tags: [
      { name: "react", color: "blue" },
      { name: "angular", color: "green" },
      { name: "genai", color: "pink" },
    ],
    source_code_link: "#",
  },
  {
    name: "Water Utility Copilot – AI-Driven Treatment Optimization",
    description: "Built AI-enabled dashboards for real-time water treatment insights using React, Redux, Tailwind, Recharts, and Python APIs. Implemented ML-driven dosage optimization reducing chemical usage by ~38%. Designed digital log systems replacing manual diaries and integrated Agentic RAG workflows to provide SOP-based actionable guidance to field operators.",
    tags: [
      { name: "react", color: "blue" },
      { name: "redux", color: "green" },
      { name: "python", color: "pink" },
    ],
    source_code_link: "#",
  },
  {
    name: "AI Tender Advisor – Agentic AI & Document Intelligence",
    description: "Developed a full Agentic AI system for tender evaluation using React/Angular, Python and RAG pipelines. Implemented clause comparison, conflict detection, corrigendum analysis, and multistep reasoning across documents. Delivered AI-driven Q&A, summarization, and risk assessment—cutting review time by 70%.",
    tags: [
      { name: "angular", color: "blue" },
      { name: "python", color: "green" },
      { name: "genai", color: "pink" },
    ],
    source_code_link: "#",
  },
];

export const personalProjects = [
  {
    name: "EduLearn",
    description: "A comprehensive education management app designed to facilitate course learning and track student progress. It offers separate login systems for students, faculty, and admins.",
    tags: [
      { name: "react", color: "blue" },
      { name: "typescript", color: "green" },
      { name: "TailwindCss", color: "violet" },
    ],
    source_code_link: "https://edulearnapp.netlify.app/",
  },
  {
    name: "Load Matcher",
    description: "An intelligent logistics platform that connects shippers with carriers using a dynamic scoring system. Features advanced algorithms for optimal transport partner matching.",
    tags: [
      { name: "react", color: "blue" },
      { name: "typescript", color: "green" },
      { name: "TailwindCss", color: "violet" },
    ],
    source_code_link: "https://loadmatchapp.netlify.app/",
  },
  {
    name: "Document Comparison",
    description: "The Document Comparison feature automatically scans two versions of a document to identify every insertion, deletion, or modification; organizes each change by page number and shows the original and revised text side-by-side with deep-link navigation.",
    tags: [
      { name: "react", color: "blue" },
      { name: "typescript", color: "green" },
      { name: "TailwindCss", color: "violet" },
    ],
    source_code_link: "https://documencomparsion.netlify.app/",
  },
  {
    name: "StockVision Lite",
    description: "A lightweight stock visualization and analysis demo application that highlights interactive UI, responsive charts, and statistical insights using static sample data. This POC replicates a real-world stock tracking dashboard experience.",
    tags: [
      { name: "react", color: "blue" },
      { name: "typescript", color: "green" },
      { name: "TailwindCss", color: "violet" },
    ],
    source_code_link: "https://stockvisionlite.netlify.app/",
  },
];

export const certifications = [
  {
    title: "Claude Certified Associate - Foundations",
    issuer: "Anthropic",
    issueDate: "Sep 2026",
    expiryDate: "Sep 2027",
    credentialId: "ANTH516426",
    score: "884 / 1000 (Pass)",
    badgeImage: certBadge,
    credentialUrl:
      "https://www.credly.com/badges/6e9de643-68f8-4bf6-8dd0-853015d972ed",
    certificateFile: certFile,
  },
];

export const additionalSkills = [
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Web Accessibility (A11y)",
  "Performance Optimization",
  "RESTful API Integration",
  "UI/UX Implementation",
  "Agile / Scrum Methodology",
  "Azure Active Directory (MSAL Authentication)",
  "Cloud Deployment (Azure)",
  "CI/CD & Git Version Control",
  "Power BI Integration",
  "PDF Data Extraction & Automation",
  "Generative AI Workflows (GPT Integrations)",
  "State Management (Redux, RxJS)",
  "Micro-Frontend Architecture Basics"
];

export const aboutCards = [
  {
    title: "Full-Stack Development",
    description: "Proficient in building scalable, end-to-end web applications using React, Angular, Node.js, Express, and MongoDB."
  },
  {
    title: "UI/UX Engineering",
    description: "Transforming wireframes into polished, high-performance interfaces using modern CSS, responsive design, and component-driven architecture."
  },
  {
    title: "API Integration & Architecture",
    description: "Specialized in REST APIs, MSAL (Azure AD), cloud services, and third-party integrations for secure, seamless ecosystems."
  },
  {
    title: "AI & Automation Workflows",
    description: "Implementing AI-powered features, RAG workflows, and modern data pipelines that enhance UX and business productivity."
  },
  {
    title: "Cloud & Deployment",
    description: "Deploying full-stack apps on Azure with CI/CD, performance tuning, and secure access configurations."
  },
];

export const stats = [
  { value: 8, label: "Enterprise Projects", suffix: "+" },
  { value: 4, label: "Years at TCS", suffix: "+" },
  { value: 10, label: "GenAI POCs", suffix: "+" },
  { value: 5, label: "Domains", suffix: "" },
];

export const profileInfo = {
  name: "Yogendhar Sri Ram",
  role: "Full-Stack Developer | Azure | AI Workflows",
  tagline: "Building scalable React & Angular apps powered by Node, Python, Azure, and modern AI workflows.",
  bio: `Full-stack developer wit ${experienceYears} of experience building scalable web applications using React, Angular, Node.js, and Python. I specialize in high-performance UIs, secure Azure-based architectures, and modern AI solutions including RAG pipelines, agentic workflows, and document intelligence systems.`,
  linkedin: "https://in.linkedin.com/in/yogendhar",
  github: "https://github.com/Yogendhar123",
  email: "yogendharbolisetti@gmail.com",
  phone: "+91 9951976339",
  location: "Hyderabad, India",
  resumeLink: "#",
};


export const techOrbitItems = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
  },
  {
    name: 'Angular',
    icon: SiAngular,
    color: '#DD0031',
  },
  {
    name: 'Azure',
    icon: VscAzure,
    color: '#0078D4',
  },
  {
    name: 'Node',
    icon: SiNodedotjs,
    color: '#339933',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
  },
  {
    name: 'Python',
    icon: SiPython,
    color: '#3776AB',
  },
];

export const floatingBadges = [
  // { icon: "💼", text: `${experienceYears} Years Experience` },
  // { icon: "⚡", text: "Full-Stack Developer" },
  // { icon: "🤖", text: "GenAI Workflows" },
];
