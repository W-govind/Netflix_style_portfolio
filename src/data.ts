import { Project, Skill, Certification, TimelineItem, ContactMe, ProfileBanner } from './types';
import govindProfile from './images/govind_profile.png';

export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072' },
  headline: 'Govind Sharma',
  resumeLink: { url: 'https://drive.google.com/file/d/1vqtG8oHejzeXZUwG_eYkaQcLnMTKDtp2/view?usp=sharing' },
  linkedinLink: 'https://www.linkedin.com/in/govind-sharma-046827278',
  githubLink: 'https://github.com/W-govind',
  profileSummary: 'B.Tech Computer Science student at VIT Chennai with a strong focus on AI/ML, Deep Learning, and Multi-Agent Systems. Experienced in building healthcare AI and financial forecasting models.',
};

export const projectsData: Project[] = [
  {
    title: 'HeartGuard: AI-Powered Smart Cardiac Companion',
    description: 'A healthcare AI system predicting heart failure risk with 87% accuracy using SHAP for transparency and personalized baseline learning.',
    techUsed: 'Python, PyTorch, Tkinter, SHAP, IoT Simulation',
    image: { url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070' },
  },
  {
    title: 'MCANUNet: Multi-Modal Causal Attention Network',
    description: 'Deep learning architecture for cryptocurrency forecasting using causal attention and dynamic GNNs, achieving 14% lower RMSE than baselines.',
    techUsed: 'Python, Deep Learning, GNNs, MAML, Monte Carlo Dropout',
    image: { url: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2069' },
  },
  {
    title: 'AASMA: Adaptive Agent-Based Smart Multimodal Assistant',
    description: 'Clinical Decision Support System predicting ICU patient deterioration with 92.8% accuracy and 47.6% reduction in non-actionable alarms.',
    techUsed: 'Python, XGBoost, Multi-Agent Systems, MIMIC-III, EHR Integration',
    image: { url: 'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=2070' },
  },
];

export const skillsData: Skill[] = [
  { name: 'Python', category: 'Programming', description: 'Primary language for AI/ML development.', icon: 'Python' },
  { name: 'C++', category: 'Programming', description: 'Competitive programming and systems.', icon: 'C++' },
  { name: 'Machine Learning', category: 'AI/ML', description: 'Supervised and Unsupervised learning.', icon: 'ML' },
  { name: 'Deep Learning', category: 'AI/ML', description: 'Neural networks and PyTorch.', icon: 'DL' },
  { name: 'SQL', category: 'Database', description: 'Data querying and management.', icon: 'SQL' },
  { name: 'React', category: 'Web', description: 'Frontend development.', icon: 'React' },
];

export const certificationsData: Certification[] = [
  { 
    title: 'Sequence Models', 
    issuer: 'DeepLearning.AI', 
    issuedDate: '2024', 
    link: 'https://www.coursera.org/account/accomplishments/verify/W5L2TUJTFSAK', 
    iconName: 'DeepLearning' 
  },
  { 
    title: 'Developing AI Applications with Python and Flask', 
    issuer: 'IBM', 
    issuedDate: '2024', 
    link: 'https://www.coursera.org/account/accomplishments/verify/9JSHHNQMQ9RB', 
    iconName: 'IBM' 
  },
  { 
    title: 'Unsupervised Learning, Recommenders, Reinforcement Learning', 
    issuer: 'DeepLearning.AI', 
    issuedDate: '2024', 
    link: 'https://www.coursera.org/account/accomplishments/verify/R8B3KN5S1IEJ', 
    iconName: 'DeepLearning' 
  },
  { 
    title: 'GEN Al Using IBM Watsonx', 
    issuer: 'IBM', 
    issuedDate: '2024', 
    link: 'https://courses.vit.skillsnetwork.site/certificates/04edc25b782f49fcbd45e08d44a207f8', 
    iconName: 'IBM' 
  },
];

export const timelineData: TimelineItem[] = [
  {
    timelineType: 'education',
    name: 'Vellore Institute of Technology, Chennai',
    title: 'B.Tech in Computer Science and Engineering',
    techStack: 'CSE, AI/ML',
    summaryPoints: ['CGPA: 7.89 (till 7th sem)', 'Focus on Advanced Data Structures and AI'],
    dateRange: '2022 - 2026',
  },
  {
    timelineType: 'education',
    name: 'Central Board of Secondary Education',
    title: '12th Standard',
    techStack: 'Science',
    summaryPoints: ['Percentage: 75.6%'],
    dateRange: '2022',
  },
  {
    timelineType: 'education',
    name: 'Central Board of Secondary Education',
    title: '10th Standard',
    techStack: 'General',
    summaryPoints: ['Percentage: 90.34%'],
    dateRange: '2020',
  },
];

export const contactMeData: ContactMe = {
  profilePicture: { url: govindProfile },
  name: 'Govind Sharma',
  title: 'AI/ML Developer & B.Tech Student',
  summary: 'Passionate about building intelligent systems that solve real-world problems in healthcare and finance.',
  companyUniversity: 'VIT Chennai',
  linkedinLink: 'https://www.linkedin.com/in/govind-sharma-046827278',
  email: 'gg.govind26@gmail.com',
  phoneNumber: '8295960934',
};
