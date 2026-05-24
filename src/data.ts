import { Project, SkillCategory, JourneyItem } from './types';

export const PERSONAL_INFO = {
  name: 'Niranjan Shanbhag',
  role: 'AI/ML Developer & Full-Stack Engineer',
  tagline: 'Building Intelligent Digital Experiences',
  about: "I'm a Computer Engineering student specializing in AI/ML systems and modern full-stack development. My passion lies in architecting scalable products, building intelligent workflows, and creating immersive, human-centered interfaces. I thrive on solving complex problems with clean code and innovative machine learning pipelines.",
  email: 'nshanbhag345@gmail.com',
  github: 'https://github.com/NiranjanS20',
  linkedin: 'https://www.linkedin.com/in/niranjan-shanbhag-231676317/',
  resumeLink: 'https://docs.google.com/document/d/1DEw46noKxSOsBHJOslG_re5iu7IjHR2jtb6Sw8yx9_0/edit?usp=sharing'
};

export const SKILLS: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'C']
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TailwindCSS', 'Vite', 'HTML5', 'CSS3']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs']
  },
  {
    name: 'AI / ML',
    skills: ['Scikit-learn', 'Gemini API', 'Groq API', 'Recommendation Systems', 'ML Pipelines']
  },
  {
    name: 'Infrastructure',
    skills: ['PostgreSQL', 'MySQL', 'Supabase', 'Firebase', 'Docker', 'Git']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'synapse-crm',
    title: 'SynapseCRM-AI',
    tagline: 'Intelligent Customer Interaction Platform',
    description: [
      'Production-oriented multi-agent CRM platform focused on workflow automation and lead management.',
      'Architected modular AI-agent pipelines for task coordination and communication analysis.',
      'Integrated secure authentication, cloud database infrastructure, and scalable API communication for real-time operations.'
    ],
    techStack: ['React', 'Next.js', 'Flask', 'Supabase', 'Gemini API', 'Groq API'],
    githubUrl: 'https://github.com/NiranjanS20/SynapseCRM-AI',
    featured: true
  },
  {
    id: 'delphi-minds',
    title: 'DelphiMinds-AI',
    tagline: 'AI Career Intelligence Platform',
    description: [
      'AI-powered career guidance platform that analyzes resumes, identifies skill gaps, and generates personalized paths.',
      'Developed scalable full-stack architecture integrating ML services, resume parsing, and PostgreSQL data management.',
      'Designed responsive dashboards for progress tracking and personalized user analytics.'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Scikit-learn', 'Gemini API'],
    githubUrl: 'https://github.com/NiranjanS20/DelphiMinds-AI',
    liveUrl: 'https://delphi-minds-ai.vercel.app/',
    images: ['/images/delphiminds.png'],
    featured: true
  },
  {
    id: 'task-bridge',
    title: 'TaskBridge',
    tagline: 'Resource Allocation for Social Impact',
    description: [
      'Smart resource allocation platform for NGOs to optimize volunteer assignment and task management.',
      'Implemented intelligent matching algorithms using weighted scoring to ensure fairness and burnout prevention.',
      'Integrated geospatial visualization using Leaflet Maps for location-aware task coordination.'
    ],
    techStack: ['React', 'Tailwind CSS', 'Leaflet', 'Flask', 'FastAPI'],
    githubUrl: 'https://github.com/NiranjanS20/TaskBridge',
    liveUrl: 'https://task-bridge-dzfa.vercel.app/',
    images: ['/images/taskbridge.png'],
    featured: true
  },
  {
    id: 'annapurna-ai',
    title: 'Annapurna AI',
    tagline: 'ML Food Demand Forecasting',
    description: [
      'AI-powered food demand prediction platform focused on reducing food waste and improving cooking optimization.',
      'Built machine learning pipelines for demand forecasting and surplus detection using historical data.',
      'Designed dashboards and donation workflows to support efficient food distribution sustainability.'
    ],
    techStack: ['React', 'Flask', 'PostgreSQL', 'Scikit-learn', 'Firebase'],
    githubUrl: 'https://github.com/NiranjanS20/Annapurna-AI',
    liveUrl: 'https://annapurna-ai-nine.vercel.app/',
    images: ['/images/annapurna1.png', '/images/annapurna2.png'],
    featured: true
  }
];

export const JOURNEY: JourneyItem[] = [
  {
    id: 'edu-1',
    role: 'B.Tech in Computer Engineering',
    organization: 'Fr. Conceicao Rodrigues College of Engineering',
    period: '2024 - 2028',
    description: 'CGPA: 8.71 / 10.0. Coursework: Database Systems, Data Structures, Python Programming.',
    type: 'education'
  },
  {
    id: 'exp-1',
    role: 'Team Lead - Student Activity Dashboard',
    organization: 'Mumbai Sustainability Centre NGO',
    period: '2024',
    description: 'Led a student activity dashboard for the NGO to track field work and manage volunteer data efficiently.',
    type: 'experience'
  },
  {
    id: 'exp-2',
    role: 'Class Representative',
    organization: 'Fr. CRCE',
    period: '2026 - Present',
    description: 'Coordinating faculty-student communication, academic updates, and issue resolution for effective classroom management.',
    type: 'experience'
  },
  {
    id: 'ach-1',
    role: 'Finalist',
    organization: 'Bit N Build Hackathon',
    period: '2024',
    description: 'Recognized for innovative solutions among numerous participating teams by GDSC FrCRCE.',
    type: 'achievement'
  }
];
