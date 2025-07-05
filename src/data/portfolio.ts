
import { Skill, Project, Experience, TimelineItem, Certification } from '../types';

export const skills: Skill[] = [
  { skill: 'React', level: 9, category: 'Frontend' },
  { skill: 'TypeScript', level: 8, category: 'Language' },
  { skill: 'Java', level: 9, category: 'Backend' },
  { skill: 'Python', level: 8, category: 'Language' },
  { skill: 'Node.js', level: 8, category: 'Backend' },
  { skill: 'AWS', level: 7, category: 'Cloud' },
  { skill: 'Docker', level: 7, category: 'DevOps' },
  { skill: 'MySQL', level: 8, category: 'Database' },
  { skill: 'Git', level: 9, category: 'Tools' },
  { skill: 'Agile', level: 8, category: 'Methodology' }
];

export const projects: Project[] = [
  {
    id: '1',
    name: 'Multi-brand Progressive Web App',
    tech: 'React, Ionic, TypeScript',
    description: 'Consolidated 15 repositories into unified PWA improving maintainability by 70% and reducing deployment time by 50%.',
    featured: true
  },
  {
    id: '2',
    name: 'Glassdoor Feedback Analysis System',
    tech: 'ChatGPT, Selenium, React',
    description: 'AI-powered sentiment analysis system that processes employee feedback and generates actionable insights, increasing user experience by 65%.',
    featured: true
  },
  {
    id: '3',
    name: 'Retail Business Data Warehouse',
    tech: 'Oracle, Apache Hop, SQL, Power BI',
    description: 'End-to-end ETL pipeline for retail business with real-time sales tracking and comprehensive business intelligence dashboards.',
    featured: false
  },
  {
    id: '4',
    name: 'Stock Prediction Dashboard',
    tech: 'Python, Streamlit, Machine Learning',
    description: 'Interactive dashboard for tracking and predicting stock performance using machine learning algorithms over six-month periods.',
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Ideas2IT Technology Services',
    location: 'Chennai, Tamil Nadu',
    duration: '2022-2024',
    description: [
      'Consolidated 15 repositories into one multi-brand themed Progressive Web App',
      'Implemented scalable state management using React Context API',
      'Developed Glassdoor feedback analysis system using ChatGPT integration',
      'Led a team of 4 developers in agile development practices'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker']
  },
  {
    id: '2',
    title: 'Software Engineer',
    company: 'Ideas2IT Technology Services',
    location: 'Chennai, Tamil Nadu',
    duration: '2019-2022',
    description: [
      'Designed and implemented Java-based REST API with multiple endpoints',
      'Improved client-side response times by up to 60%',
      'Developed microservices architecture with automated CI/CD deployments',
      'Collaborated with cross-functional teams to deliver high-quality software'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'Jenkins', 'Git']
  }
];

export const timelineData: TimelineItem[] = [
  {
    year: "2019",
    title: "Bachelor of Engineering",
    company: "Electronics and Communication Engineering",
    location: "Anna University, Chennai",
    description: ["Graduated with comprehensive knowledge in ECE"],
    type: "education"
  },
  {
    year: "2019-2022",
    title: "Software Engineer",
    company: "Ideas2IT Technology Services",
    location: "Chennai, Tamil Nadu",
    description: [
      "Designed and implemented Java-based REST API with multiple endpoints",
      "Improved client-side response times by up to 60%",
      "Developed microservices and automated deployments"
    ],
    type: "work"
  },
  {
    year: "2022-2024",
    title: "Senior Software Engineer",
    company: "Ideas2IT Technology Services",
    location: "Chennai, Tamil Nadu",
    description: [
      "Consolidated 15 repositories into one multi-brand themed Progressive Web App",
      "Implemented scalable state management using React Context API",
      "Developed Glassdoor feedback analysis system using ChatGPT"
    ],
    type: "work"
  },
  {
    year: "2025",
    title: "Master of Science (STEM)",
    company: "Management Information Systems",
    location: "University at Buffalo, SUNY",
    description: ["Currently pursuing advanced degree in STEM"],
    type: "education"
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    url: 'https://www.credly.com/badges/e5ba4d04-1c03-4083-b302-9a333f105dc4'
  },
  {
    id: '2',
    name: 'AWS Certified Data Engineer - Associate',
    issuer: 'Amazon Web Services',
    date: '2025',
    url: 'https://www.credly.com/badges/f42ceef1-91b4-4af3-acda-124766242d70'
  },
  {
    id: '3',
    name: 'Snowflake - Data Warehousing Workshop',
    issuer: 'Snowflake',
    date: '2024',
    url: 'https://achieve.snowflake.com/deb625a0-411a-4d9c-a1f0-7f72fb122e75#acc.wFYqZ5r7'
  },
  {
    id: '4',
    name: 'Tableau Digital Badge - Connect and Transform Data',
    issuer: 'Tableau',
    date: '2024',
    url: 'https://www.credly.com/badges/6fc17ca5-661d-4593-8f47-8711dc24d659/public_url'
  },
  {
    id: '5',
    name: 'Tableau Digital Badge - Create Views and Dashboards',
    issuer: 'Tableau',
    date: '2024',
    url: 'https://www.credly.com/badges/b55846f4-7a23-4a72-a884-68fae744f805/public_url'
  }
];
