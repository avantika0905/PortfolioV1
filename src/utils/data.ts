
export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'web3' | 'design' | 'other';
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  description?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date?: string;
}

export interface Award {
  title: string;
  description: string;
}

export const personalInfo = {
  name: "Avantika Bhadke",
  title: "CS '26 | Full-stack Developer",
  location: "Pune, India",
  email: "avantika0905@gmail.com",
  linkedin: "https://www.linkedin.com/in/avantika-bhadke-2a6445307/",
  github: "https://github.com/avantika0905",
}

export const projects: Project[] = [
  {
    id: 1,
    title: "PlaceBooking.com",
    description: "A comprehensive property booking system with features like no-overlap booking, authentication with password hashing, and photo uploads using Multer and Cloudinary.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    imageUrl: "/placeholder.svg",
    liveUrl: "https://place-booking.vercel.app/",
    githubUrl: "https://github.com/avantika0905/placebooking",
  },
  {
    id: 2,
    title: "MediTrack",
    description: "MediTrack – Pharmacy management platform offering end-to-end medication lifecycle control,secure payment processing, and real-time compliance tracking, designed to streamline healthcare operations while reducing costs and regulatory risks.",
    tags: ["Java", "Speingboot", "Nosql(Mongo)", "Nextjs","TailwindsCss"],
    imageUrl: "/placeholder.svg",
    liveUrl:"https://meditrack-ten.vercel.app/",
    githubUrl: "https://github.com/avantika0905/MediTrack",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing my projects and skills with animations and interactive elements.",
    tags: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    imageUrl: "/placeholder.svg",
    liveUrl:"https://github.com",
    githubUrl: "https://github.com/avantika0905/PortfolioV1",
  },
];

export const skills: Skill[] = [
  { name: "JavaScript", icon: "JS", category: 'frontend' },
  { name: "React", icon: "⚛️", category: 'frontend' },
  { name: "Node.js", icon: "⬢", category: 'backend' },
  { name: "Python", icon: "🐍", category: 'backend' },
  { name: "Django", icon: "🦄", category: 'backend' },
  { name: "HTML5", icon: "📝", category: 'frontend' },
  { name: "CSS3", icon: "🎨", category: 'frontend' },
  { name: "TypeScript", icon: "TS", category: 'frontend' },
  { name: "Java", icon: "☕", category: 'backend' },
  { name: "C++", icon: "++", category: 'backend' },
  { name: "MongoDB", icon: "🍃", category: 'backend' },
  { name: "MySQL", icon: "🐬", category: 'backend' },
  { name: "Git", icon: "🔄", category: 'other' },
  { name: "AWS", icon: "☁️", category: 'other' },
  { name: "Problem Solving", icon: "🧩", category: 'other' },
];

export const education: Education[] = [
  {
    institution: "SavitriBai Phule University, Pune",
    degree: "Bachelor In Computer Application",
    duration: "2021 - 2024",
    grade: "CGPA - 9.1",
  }
];

export const certificates: Certificate[] = [
  {
    title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
  },
  {
    title: "Machine Learning Programme (Citizenship Cohort –1)",
    issuer: "Barclays",
  },
  {
    title: "Python for Data Science",
    issuer: "Infosys | SpringBoard",
  },
  {
    title: "AI Python Programming",
    issuer: "Hope Foundation",
  }
];

export const awards: Award[] = [
  {
    title: "Tech Events Participation",
    description: "Attended and organized various tech events in college to foster a learning environment.",
  },
  {
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons, showcasing problem-solving and coding skills.",
  }
];
