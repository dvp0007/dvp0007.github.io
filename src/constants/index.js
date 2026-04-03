import {
  FaPython, FaDocker, FaGitAlt, FaAws,
} from "react-icons/fa";
import {
  SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas,
  SiMlflow, SiLangchain,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdWork, MdScience, MdSchool } from "react-icons/md";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const heroData = {
  name: "Dharmik Patel",
  roles: [
    "Lead Engineer - Virtual Battery Model Development",
    "AI Engineer",
    "Co-Founder @ PatentAssist.ai",
    "ML & Data Engineering",
  ],
  tagline: "Building intelligent systems at the intersection of AI, Machine Learning, and Battery Technology.",
};

export const aboutData = {
  description: [
    "I'm an AI Engineer and researcher with deep expertise in machine learning, physics-informed modeling, and battery data engineering. Currently leading virtual battery model development at Clarios in Hannover, Germany.",
    "As Co-Founder of PatentAssist.ai, I build AI pipelines for patent drafting using LLMs, RAG, and semantic search. My work spans anomaly detection, predictive maintenance, digital twins, and NLP-based diagnostics.",
    "I hold an MSc in Computational Modeling & Simulation from TU Dresden, with a strong foundation in scientific computing, HPC, and data-driven methods.",
  ],
  info: {
    name: "Dharmik Patel",
    email: "dharmik.patel101097@gmail.com",
    location: "Hannover, Germany",
    nationality: "Indian",
    languages: "English (Fluent), German (B1), Hindi (Fluent), Gujarati (Native)",
  },
};

export const experiences = [
  {
    title: "Lead Engineer - Virtual Battery Model Development",
    company: "Clarios",
    location: "Hannover, Germany",
    type: "Full-time | On-site",
    date: "Dec 2025 - Present",
    points: [
      "Leading virtual battery model development using AI and machine learning algorithms.",
      "Working on physics-informed ML models for battery dynamics and state estimation.",
    ],
    icon: MdWork,
    iconBg: "#6366f1",
  },
  {
    title: "Co-Founder & AI Lead",
    company: "PatentAssist.ai",
    location: "Remote",
    type: "Co-Founder",
    date: "Jan 2024 - Present",
    points: [
      "Developed the core AI pipeline for patent drafting assistant, including prompt engineering, fine-tuning of LLMs, and RAG models.",
      "Built patent search and text-to-image modules for automated block diagram generation.",
    ],
    icon: MdWork,
    iconBg: "#8b5cf6",
  },
  {
    title: "AI Engineer / Battery Data Engineer",
    company: "volytica diagnostics GmbH",
    location: "Dresden, Germany",
    type: "Full-time | Hybrid",
    date: "May 2023 - Nov 2025",
    points: [
      "Built a Battery Chat Assistant using RAG & semantic search for real-time NLP-based diagnostics.",
      "Spearheaded ML projects in anomaly detection, predictive maintenance, and digital twin creation.",
      "Designed algorithms for battery state estimation and health diagnostics.",
      "Researched and developed physics-informed ML models and SPM for battery dynamics.",
      "Developed tools for battery degradation modeling, parameterization, and real-time diagnostics.",
    ],
    icon: MdWork,
    iconBg: "#06b6d4",
  },
  {
    title: "Battery Data Analyst (Intern)",
    company: "Sphere Energy",
    location: "Grossaitingen, Germany",
    type: "Internship",
    date: "Apr 2023 - May 2023",
    points: [
      "Automated platform design for analysis of battery cell datasets to estimate degradation.",
      "Applied battery analytic techniques including LLI, LAM, and CL degradation modes.",
    ],
    icon: MdScience,
    iconBg: "#6366f1",
  },
  {
    title: "Working Student - Battery Data Engineering",
    company: "volytica diagnostics GmbH",
    location: "Dresden, Germany",
    type: "Part-time | On-site",
    date: "Apr 2022 - Jan 2023",
    points: [
      "Algorithm development for battery state estimation.",
      "Contributed to battery data engineering and diagnostics tools.",
    ],
    icon: MdWork,
    iconBg: "#8b5cf6",
  },
  {
    title: "Student Research Assistant - Data Analysis",
    company: "Technische Universitat Dresden",
    location: "Dresden, Germany",
    type: "Research",
    date: "May 2022 - Oct 2022",
    points: [
      "Modeling of memristor devices using thermo-mechanical models.",
      "Variability fitting of the JART memristor model using a simplified equation.",
    ],
    icon: MdScience,
    iconBg: "#06b6d4",
  },
  {
    title: "Student Research Assistant - Machine Learning",
    company: "Technische Universitat Dresden",
    location: "Dresden, Germany",
    type: "Research",
    date: "Sep 2021 - Feb 2022",
    points: [
      "Designed a sequential multigrid model for material characterization and reconstruction.",
      "Built a framework to speed up MCR compatible with HPC using CNNs and GANs.",
    ],
    icon: MdScience,
    iconBg: "#6366f1",
  },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, icon: FaPython },
      { name: "C++", level: 40, icon: TbBrandCpp },
    ],
  },
  {
    title: "NLP & Language AI",
    skills: [
      { name: "Hugging Face Transformers", level: 85 },
      { name: "LangChain", level: 85, icon: SiLangchain },
      { name: "Prompt Engineering", level: 90 },
      { name: "RAG Pipelines", level: 90 },
      { name: "Semantic Search", level: 85 },
      { name: "LLM Fine-Tuning", level: 80 },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "TensorFlow", level: 85, icon: SiTensorflow },
      { name: "PyTorch", level: 85, icon: SiPytorch },
      { name: "Scikit-learn", level: 90, icon: SiScikitlearn },
      { name: "Time-Series Analysis", level: 85 },
      { name: "NumPy", level: 95, icon: SiNumpy },
      { name: "pandas", level: 95, icon: SiPandas },
      { name: "MLflow", level: 75, icon: SiMlflow },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Git", level: 85, icon: FaGitAlt },
      { name: "Docker", level: 70, icon: FaDocker },
      { name: "Azure", level: 70 },
      { name: "AWS", level: 60, icon: FaAws },
      { name: "CI/CD Pipelines", level: 75 },
      { name: "Agile Methodology", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "Development of Digital Battery Twin",
    subtitle: "Master's Thesis | TU Dresden | Jan 2023",
    description:
      "Developed machine-learning and hybrid models to create a digital battery twin (DBT) based on actual field data. DBT is used for battery health estimation using physics-informed ML methods.",
    tags: ["Physics-Informed ML", "Digital Twin", "Battery", "Hybrid Models"],
  },
  {
    title: "PatentAssist.ai - AI Patent Drafting",
    subtitle: "Co-Founder Project | Jan 2024 - Present",
    description:
      "Core AI pipeline for patent drafting using prompt engineering, LLM fine-tuning, and RAG models. Includes patent search and text-to-image modules for automated block diagram generation.",
    tags: ["LLM", "RAG", "NLP", "Patent AI"],
  },
  {
    title: "Battery Chat Assistant",
    subtitle: "volytica diagnostics | 2023-2025",
    description:
      "Built a chat assistant using RAG and semantic search to support real-time NLP-based battery diagnostics for customers and engineers.",
    tags: ["RAG", "Semantic Search", "NLP", "Chatbot"],
  },
  {
    title: "Accelerating Microstructure Reconstruction",
    subtitle: "Research Project | TU Dresden | Mar 2022",
    description:
      "Built a hybrid framework for microstructure reconstruction using sequential multigrid methods and ML (GANs). Generative modeling for solving inverse-design problems and building PSP linkages.",
    tags: ["GANs", "CNNs", "HPC", "Material Science"],
  },
  {
    title: "Anomaly Detection & Predictive Maintenance",
    subtitle: "volytica diagnostics | 2023-2025",
    description:
      "Spearheaded ML projects in anomaly detection for battery systems, predictive maintenance algorithms, and digital twin creation for real-time diagnostics.",
    tags: ["Anomaly Detection", "Predictive Maintenance", "ML", "Battery"],
  },
  {
    title: "Design & Optimization of Intake Manifold",
    subtitle: "Undergraduate Project | B.E. Mechanical | May 2019",
    description:
      "Analyzed impacts of different design parameters on volumetric efficiency of intake manifold for a formula race car. Validated results with CFD simulation and testing.",
    tags: ["CFD", "ANSYS", "Optimization", "Automotive"],
  },
];

export const education = [
  {
    degree: "Master of Science",
    field: "Computational Modeling and Simulation",
    specialization: "Computational Engineering",
    institution: "Technische Universitat Dresden",
    location: "Dresden, Germany",
    date: "Oct 2020 - Jan 2023",
    highlights: [
      "Machine Learning, AI, High-Performance Computing",
      "Scientific Computing, FEA, CFD",
      "Multibody Systems, Coupled Simulations",
    ],
    icon: HiOutlineAcademicCap,
    iconBg: "#6366f1",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Mechanical Engineering",
    specialization: "Automotive Engineering",
    institution: "Dr. D. Y. Patil Institute of Technology",
    location: "Pune, India",
    date: "Jul 2015 - May 2019",
    highlights: [
      "Automotive Engineering, FEM, CFD",
      "Mathematics, Mechatronics, Computer Science",
      "Material Science, Manufacturing, CAD",
    ],
    icon: MdSchool,
    iconBg: "#8b5cf6",
  },
];

export const achievements = [
  {
    title: "1st Prize - Intrapreneurial Performance Award",
    organization: "Praj Industries Ltd.",
    date: "Jun 2020",
    description:
      "Innovative concept to maximize IC engine efficiency by utilizing heat and carbon emissions to produce recyclable fuel gas.",
  },
  {
    title: "Head of Powertrain & Marketing Department",
    organization: "The Interceptors - Formula Student Team",
    date: "Jul 2016 - May 2019",
    description:
      "Led design of intake and exhaust manifold, CFD simulations for powertrain systems, and marketing strategies.",
  },
];

export const socialLinks = {
  github: "https://github.com/dvp0007",
  linkedin: "https://www.linkedin.com/in/dharmik-patel1097",
  email: "mailto:dharmik.patel101097@gmail.com",
};
