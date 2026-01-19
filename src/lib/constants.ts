

import type { LucideIcon } from "lucide-react";
import { Lightbulb, Target, Users, Bot, Star, BarChart, Gem, Briefcase, DraftingCompass, Cpu, Code, BrainCircuit, Building, Network, Shield, Handshake, Landmark, BriefcaseBusiness, TrendingUp, UsersRound, Palette, Scale, HeartHandshake, Rocket, Banknote } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/resulting", label: "Core Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "About Us" },
];

export const WHAT_WE_DO_CARDS: { title: string; description: string; Icon: LucideIcon, imageId: string }[] = [
    { title: "RESULTING™", description: "Our proprietary framework for measuring and driving tangible outcomes in technology and human capital.", Icon: Target, imageId: "what-we-do-1" },
    { title: "Thought-leadership", description: "Cutting-edge research and insights from the forefront of human-computer interaction and organizational psychology.", Icon: Lightbulb, imageId: "what-we-do-2" },
    { title: "Training & Development", description: "Upskilling your teams to thrive in a dynamically changing digital landscape with our bespoke programs.", Icon: Users, imageId: "what-we-do-3" },
];

export const INSIGHTS_TEASER_CARDS = [
    { title: "Global Tech Impact Survey 2024", category: "Surveys", description: "Our annual survey provides a comprehensive overview of the technology landscape. We analyze critical trends, benchmark industry standards, and offer forward-looking predictions for the year ahead.", imageId: "insight1", date: "Oct 22, 2024", readTime: "8 min read", _id: "research1" },
    { title: "The Rise of the Hybrid Workforce", category: "Blogs", description: "Explore our expert analysis on the evolving nature of work. This blog post delves into the challenges and opportunities presented by hybrid models and offers strategies for building a resilient and connected remote team.", imageId: "insight2", date: "Oct 15, 2024", readTime: "5 min read", _id: "research2" },
    { title: "Transforming Retail with AtomicAI™", category: "Case Studies", description: "Discover how a leading retailer leveraged AtomicAI™ to revolutionize their customer experience and drive revenue. This case study details the implementation process, key performance indicators, and the impressive results achieved.", imageId: "insight3", date: "Oct 1, 2024", readTime: "12 min read", _id: "research3" },
    { title: "The Ethics of AI in Hiring", category: "AI Ethics", description: "This article navigates the complex ethical considerations of using AI in recruitment and talent acquisition. We discuss potential biases in algorithms and propose a framework for responsible, fair, and transparent implementation.", imageId: "insight4", date: "Sep 25, 2024", readTime: "7 min read", _id: "research4" },
    { title: "Cybersecurity in the Quantum Era", category: "Cybersecurity", description: "As quantum computing advances, new cybersecurity threats emerge that could break current encryption standards. Our research explores the potential risks and outlines strategies for future-proofing your security infrastructure.", imageId: "insight5", date: "Sep 18, 2024", readTime: "10 min read", _id: "research5" },
    { title: "UX for AR: Designing for New Realities", category: "UX Design", description: "Augmented reality presents unique design challenges that go beyond traditional screen-based interfaces. This article provides best practices for creating intuitive and engaging user experiences in AR environments.", imageId: "insight6", date: "Sep 10, 2024", readTime: "9 min read", _id: "research6" }
];

export const RESEARCH_CATEGORIES = [
    { name: "UX Research", description: "Deep dives into user behavior and interaction design.", icon: Users, imageId: "category-ux" },
    { name: "Artificial Intelligence", description: "Exploring the frontiers of machine learning and cognitive computing.", icon: Bot, imageId: "category-ai" },
    { name: "Developer Tools", description: "Analysis of tools and platforms that shape modern software development.", icon: Code, imageId: "category-dev" },
    { name: "Future of Work", description: "Investigating the evolving landscape of work, collaboration, and productivity.", icon: BriefcaseBusiness, imageId: "category-work" },
    { name: "AI Ethics", description: "Navigating the moral and societal implications of artificial intelligence.", icon: Handshake, imageId: "category-ethics" },
    { name: "Cybersecurity", description: "Studies on digital defense, threat intelligence, and secure systems.", icon: Shield, imageId: "category-cyber" },
    { name: "Economics", description: "Analyzing the financial and market impacts of technological innovation.", icon: Landmark, imageId: "category-econ" },
    { name: "Data Science", description: "Methodologies for extracting knowledge and insights from data.", icon: BarChart, imageId: "category-data" },
    { name: "Psychology", description: "Understanding the cognitive and behavioral aspects of technology use.", icon: BrainCircuit, imageId: "category-psych" },
];

export const RESEARCH_ARTICLES = [
  { 
    _id: "mock-1",
    title: "The Psychology of UI: How Color and Shape Influence User Behavior", 
    category: "UX Research", 
    imageId: "research1",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-2",
    title: "AI in 2025: Predicting the Next Wave of Disruptive Innovation", 
    category: "Artificial Intelligence", 
    imageId: "research2",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-3",
    title: "Measuring Developer Productivity: Beyond Lines of Code", 
    category: "Developer Tools", 
    imageId: "research3",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-4",
    title: "The Future of Remote Collaboration: Tools and Techniques", 
    category: "Future of Work", 
    imageId: "research4",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-5",
    title: "Ethical AI: Navigating the Moral Landscape of Machine Learning", 
    category: "AI Ethics", 
    imageId: "research5",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-6",
    title: "Quantum Computing's Impact on Enterprise Data Security", 
    category: "Cybersecurity", 
    imageId: "research6",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-7",
    title: "The Economic Impact of Open Source Software", 
    category: "Economics", 
    imageId: "research7",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-8",
    title: "Data Sonification: Turning Data into Sound", 
    category: "Data Science", 
    imageId: "research8",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-9",
    title: "The Gig Economy & The Future of Work", 
    category: "Future of Work", 
    imageId: "research9",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-10",
    title: "Human-AI Collaboration in Creative Processes", 
    category: "Artificial Intelligence", 
    imageId: "research10",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-11",
    title: "The Role of Empathy in Design Thinking", 
    category: "UX Research", 
    imageId: "research11",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-12",
    title: "Cyber-Physical Systems: A New Frontier", 
    category: "Cybersecurity", 
    imageId: "research12",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-13",
    title: "The Psychology of Gamification", 
    category: "Psychology", 
    imageId: "research13",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-14",
    title: "Low-Code/No-Code Platforms: The Democratization of Development", 
    category: "Developer Tools", 
    imageId: "research14",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-15",
    title: "Neuro-Symbolic AI: The Next Evolution", 
    category: "Artificial Intelligence", 
    imageId: "research15",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-16",
    title: "The Metaverse: Hype vs. Reality", 
    category: "Future of Work", 
    imageId: "research16",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-17",
    title: "Privacy-Preserving Machine Learning", 
    category: "AI Ethics", 
    imageId: "research17",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-18",
    title: "Digital Twins: Modeling the Real World", 
    category: "Data Science", 
    imageId: "research18",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-19",
    title: "The Impact of 5G on IoT", 
    category: "Cybersecurity", 
    imageId: "research19",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
  { 
    _id: "mock-20",
    title: "The Ethics of Autonomous Weapons", 
    category: "AI Ethics", 
    imageId: "research20",
    summary: "A comprehensive analysis of how remote work has transformed organizational culture.",
    publicationDate: "2024-11-15",
  },
];

export const GLOBAL_OFFICES = ["Australia", "Brazil", "Germany", "India", "Japan", "UK", "US"];

export const LEADERSHIP_TEAM = [
    { name: "Amit Dengle", role: "Founder, Planckpoint", bio: "Amit Dengle is a strategy, research, and transformation leader with over two decades of experience advising enterprises on high-stakes technology and operating model decisions. Before founding PlanckPoint, Amit held senior leadership roles in global research and advisory firms, where he worked closely with CIOs, boards, and executive teams across banking, insurance, telecom, and large enterprises. His work has consistently focused on areas where decisions carry long-term risk, vendor selection, large-scale transformation, sourcing strategy, and execution governance.", imageId: "leader1" },
    { name: "Florian Scheibmayer", role: "Co-Founder, PlanckPoint", bio: "Florian Scheibmayer is a senior technology and transformation leader with deep experience across enterprise IT, service delivery, and large-scale operating models. He has worked closely with global enterprises and service providers on complex technology programs, with a focus on execution quality, delivery governance, and the structural factors that determine whether transformation efforts succeed or fail. His experience spans strategy through implementation, giving him a practical view of how decisions translate into operational outcomes.", imageId: "leader2" },
    { name: "Kiran Kommineni", role: "Head of Technology, PlanckPoint Research", bio: "Kiran Kommineni leads technology at PlanckPoint, with responsibility for the platforms, data architecture, and AI-enabled systems that underpin the firm’s research and decision intelligence. He brings deep experience in building and scaling enterprise-grade technology solutions, with a strong focus on data engineering, analytics platforms, and applied AI. His work has consistently centred on turning complex, fragmented data into reliable systems that support real decision-making under uncertainty.", imageId: "leader3" },
    { name: "Ulrich Meister", role: "Distinguished Analyst, PlanckPoint Research", bio: "Ulrich Mesiter is a senior industry analyst with deep expertise in technology services, enterprise delivery models, and large-scale transformation dynamics. He brings decades of experience analysing how technology providers operate in practice across delivery structures, talent models, commercial constructs, and execution risk. His work has focused on separating durable capability from short-term positioning and understanding why certain vendors consistently perform while others struggle under scale and complexity.", imageId: "leader4" },
];

export const BOARD_OF_ADVISORS = [
    { name: "Dr. Alistair Finch", role: "Professor of Human-Computer Interaction, MIT" },
    { name: "Isabella Rossi", role: "Former CEO, Tech Solutions Inc." },
    { name: "General Carter (Ret.)", role: "Cybersecurity Strategist" },
    { name: "Priya Sharma", role: "Venture Capitalist, Futura Ventures" },
];

export const FOOTER_LINKS = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Research", href: "/research" },
        ],
    },
    {
        title: "Connect",
        links: [
            { label: "Contact Us", href: "/contact" },
            { label: "LinkedIn", href: "#" },
            { label: "Twitter", href: "#" },
        ],
    },
];


export const HOME_HERO_CONTENT = [
    { id: "hero-slide-1", title: "Empower human-centered innovation.", subtitle: "Build technology that works for people.", imageId: "hero-abstract-1" },
    { id: "hero-slide-2", title: "Reimagine business with AI-driven workforces.", subtitle: "Unlock human potential with intelligent automation.", imageId: "hero-abstract-2" },
    { id: "hero-slide-3", title: "Transform data into strategic intelligence.", subtitle: "Drive decisions with clarity and foresight.", imageId: "hero-abstract-3" },
]


// Mock research data for demo containers
export const mockResearchData = [
  {
    _id: 'mock-1',
    title: 'The Evolution of Remote Work Culture',
    summary: 'Comprehensive analysis of how remote work has transformed organizational culture and employee engagement over the past three years.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_f6cd93b30bf640b3a4325a8b6b06308f~mv2.jpg',
    publicationDate: new Date('2024-11-15'),
    category: 'Future of Work',
  },
  {
    _id: 'mock-2',
    title: 'AI Integration in Enterprise Systems',
    summary: 'Study on successful AI implementation strategies and their impact on operational efficiency and cost reduction.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_8801d0855b1f4ab981404fef841c824e~mv2.jpg',
    publicationDate: new Date('2024-11-10'),
    category: 'Artificial Intelligence',
  },
  {
    _id: 'mock-3',
    title: 'Employee Wellness and Productivity Metrics',
    summary: 'Data-driven insights into the correlation between employee wellness programs and overall productivity levels.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_efd169792bfb434581b1736268834290~mv2.jpg',
    publicationDate: new Date('2024-11-05'),
    category: 'Workplace Analytics',
  },
  {
    _id: 'mock-4',
    title: 'Cybersecurity in Distributed Teams',
    summary: 'Best practices for maintaining security protocols in organizations with distributed and remote workforce.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_4361fe968edb461487cc7515b778b550~mv2.jpg',
    publicationDate: new Date('2024-10-28'),
    category: 'Cybersecurity',
  },
  {
    _id: 'mock-5',
    title: 'Digital Skills Gap Analysis 2024',
    summary: 'Assessment of current digital skills gaps in the workforce and recommendations for targeted training programs.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_f6cd93b30bf640b3a4325a8b6b06308f~mv2.jpg',
    publicationDate: new Date('2024-10-20'),
    category: 'Digital Transformation',
  },
  {
    _id: 'mock-6',
    title: 'Cloud Migration Success Factors',
    summary: 'Analysis of key factors that determine successful cloud migration projects and organizational readiness.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_8801d0855b1f4ab981404fef841c824e~mv2.jpg',
    publicationDate: new Date('2024-10-15'),
    category: 'Digital Transformation',
  },
  {
    _id: 'mock-7',
    title: 'Human-Centered Design in Tech',
    summary: 'Exploring the importance of human-centered design principles in creating user-friendly technology solutions.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_efd169792bfb434581b1736268834290~mv2.jpg',
    publicationDate: new Date('2024-10-08'),
    category: 'UX Research',
  },
  {
    _id: 'mock-8',
    title: 'Automation and Job Displacement',
    summary: 'Research on the impact of automation on employment and strategies for workforce transition and reskilling.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_4361fe968edb461487cc7515b778b550~mv2.jpg',
    publicationDate: new Date('2024-09-30'),
    category: 'Future of Work',
  },
  {
    _id: 'mock-9',
    title: 'Organizational Change Management',
    summary: 'Best practices for managing organizational change during digital transformation initiatives.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_f6cd93b30bf640b3a4325a8b6b06308f~mv2.jpg',
    publicationDate: new Date('2024-09-22'),
    category: 'Digital Transformation',
  },
  {
    _id: 'mock-10',
    title: 'Data Privacy and Compliance',
    summary: 'Comprehensive guide to data privacy regulations and compliance strategies for modern organizations.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_8801d0855b1f4ab981404fef841c824e~mv2.jpg',
    publicationDate: new Date('2024-09-15'),
    category: 'Cybersecurity',
  },
  {
    _id: 'mock-11',
    title: 'Customer Experience in Digital Age',
    summary: 'How organizations are leveraging technology to enhance customer experience and build loyalty.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_efd169792bfb434581b1736268834290~mv2.jpg',
    publicationDate: new Date('2024-09-08'),
    category: 'UX Research',
  },
  {
    _id: 'mock-12',
    title: 'Emerging Technologies Roadmap',
    summary: 'Exploration of emerging technologies and their potential impact on business operations and strategy.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_4361fe968edb461487cc7515b778b550~mv2.jpg',
    publicationDate: new Date('2024-08-30'),
    category: 'Artificial Intelligence',
  },
  {
    _id: 'mock-13',
    title: 'Leadership in Digital Transformation',
    summary: 'Study on leadership qualities and skills required to successfully lead digital transformation initiatives.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_f6cd93b30bf640b3a4325a8b6b06308f~mv2.jpg',
    publicationDate: new Date('2024-08-22'),
    category: 'Digital Transformation',
  },
  {
    _id: 'mock-14',
    title: 'Sustainable Technology Practices',
    summary: 'Research on sustainable technology practices and their role in corporate environmental responsibility.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_8801d0855b1f4ab981404fef841c824e~mv2.jpg',
    publicationDate: new Date('2024-08-15'),
    category: 'Economics',
  },
  {
    _id: 'mock-15',
    title: 'Collaborative Tools and Productivity',
    summary: 'Analysis of how modern collaborative tools impact team productivity and communication effectiveness.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_efd169792bfb434581b1736268834290~mv2.jpg',
    publicationDate: new Date('2024-08-08'),
    category: 'Workplace Analytics',
  },
  {
    _id: 'mock-16',
    title: 'Blockchain Applications in Business',
    summary: 'Examination of blockchain technology applications and their potential in various business sectors.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_4361fe968edb461487cc7515b778b550~mv2.jpg',
    publicationDate: new Date('2024-07-30'),
    category: 'Economics',
  },
  {
    _id: 'mock-17',
    title: 'Machine Learning in Decision Making',
    summary: 'How machine learning algorithms are transforming business decision-making processes and analytics.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_f6cd93b30bf640b3a4325a8b6b06308f~mv2.jpg',
    publicationDate: new Date('2024-07-22'),
    category: 'Artificial Intelligence',
  },
  {
    _id: 'mock-18',
    title: 'Digital Twins: Modeling the Real World',
    summary: 'An in-depth look at how digital twin technology is revolutionizing industries from manufacturing to healthcare.',
    mainImage: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg',
    publicationDate: new Date('2024-07-15'),
    category: 'Data Science',
  },
  {
    _id: 'mock-19',
    title: 'The Impact of 5G on IoT',
    summary: 'Analyzing how the rollout of 5G networks is unlocking the full potential of the Internet of Things.',
    mainImage: 'https://images.pexels.com/photos/14840714/pexels-photo-14840714.jpeg',
    publicationDate: new Date('2024-07-08'),
    category: 'Cybersecurity',
  },
  {
    _id: 'mock-20',
    title: 'The Ethics of Autonomous Weapons',
    summary: 'A critical examination of the moral, ethical, and legal challenges posed by autonomous warfare.',
    mainImage: 'https://images.pexels.com/photos/8434771/pexels-photo-8434771.jpeg',
    publicationDate: new Date('2024-07-01'),
    category: 'AI Ethics',
  },
];
    
export const SERVICE_CATEGORIES = [
    {
        id: 'research',
        name: 'Research',
        description: 'AI research covering AI markets, readiness, adoption maturity, use-case viability, and operational risk beyond experimentation. Go-to-market assessments evaluating market readiness, positioning credibility, pricing logic, and sales execution risk. Competitive analysis that examines true capability differentiation, delivery strength, and structural advantages - not just feature parity.',
        icon: Lightbulb,
        products: ['atomicai', 'beyondquadrants'],
        imageId: "industry-finance"
    },
    {
        id: 'consulting',
        name: 'Consulting',
        description: 'We help leadership teams translate insight into decisions that are structured, defensible, and executable. Our consulting work focuses on decision quality, risk exposure, and governance — not delivery management. Our consulting capabilities include: 	Decision structuring and option analysis to clarify trade-offs, dependencies, and failure modes before commitments are made 	Transformation risk diagnostics identifying execution bottlenecks across people, process, platform, and partners 	Decision governance and assurance supporting executive, board, and risk committee review with clear evidence and accountability The focus is not activity. It is an informed judgment under uncertainty.',
        icon: Users,
        products: ['elwis', 'skillorbit'],
        imageId: "industry-healthcare"
    },
    {
        id: 'vendor-evaluations',
        name: 'Vendor Evaluations',
        description: 'We conduct rigorous, evidence-based evaluations of technology vendors beyond narrative claims and simplified visual models. Each evaluation is grounded in execution reality, not positioning. Our vendor evaluation capabilities include: 	Experience delivered across various clients, projects, and scenarios. 	Execution capability assessment across delivery maturity, operating model resilience, and scalability 	Talent and operating model analysis examining depth, stability, and alignment to the work required 	Risk exposure mapping across delivery, dependency, concentration, and continuity dimensions The outcome is a clear view of what is likely to perform, what is likely to fail, and the conditions that influence both.',
        icon: BarChart,
        products: ['propricing'],
        imageId: "industry-tech"
    }
]

export const INDUSTRY_SOLUTIONS = [
    {
        id: 'finance',
        name: 'Finance',
        description: 'Solutions for financial services, banking, and insurance industries.',
        icon: Banknote,
        products: ['propricing', 'atomicai'],
        imageId: "industry-finance"
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Solutions for healthcare providers, pharmaceuticals, and life sciences.',
        icon: HeartHandshake,
        products: ['elwis', 'skillorbit'],
        imageId: "industry-healthcare"
    },
    {
        id: 'technology',
        name: 'Technology',
        description: 'Solutions for software, hardware, and telecommunications companies.',
        icon: Cpu,
        products: ['atomicai', 'beyondquadrants', 'skillorbit'],
        imageId: "industry-tech"
    },
    {
        id: 'legal',
        name: 'Legal',
        description: 'Solutions for law firms, corporate legal departments, and compliance.',
        icon: Scale,
        products: ['elwis'],
        imageId: "industry-legal"
    }
];

export const PRODUCTS = [
    { id: "atomicai", name: "AtomicAI™", description: "Our flagship product for granular, real-time analysis of human-computer interaction.", icon: Cpu, imageId: 'product-atomicai', tagline: 'Measure everything. Move faster.', detailedDescription: 'AtomicAI™ provides unparalleled insights into how your teams interact with technology. By capturing and analyzing every micro-interaction, we help you identify bottlenecks, optimize workflows, and drive productivity. Our platform is built on a foundation of privacy and security, ensuring that your data is always protected.', keyBenefits: "Identify and eliminate workflow inefficiencies.\nGain a deep understanding of user behavior.\nImprove team productivity and satisfaction.\nMake data-driven decisions about technology adoption.", learnMoreUrl: '#' },
    { id: "beyondquadrants", name: "BeyondQuadrants™", description: "Move beyond simplistic vendor comparisons with our multi-dimensional evaluation framework.", icon: Target, imageId: 'product-beyondquadrants', tagline: 'Clarity beyond the noise.', detailedDescription: 'Tired of generic vendor reports? BeyondQuadrants™ offers a bespoke evaluation framework that aligns with your specific business context. We provide a holistic view of vendor capabilities, risks, and potential, enabling you to make strategic decisions with confidence.', keyBenefits: 'Go beyond surface-level vendor analysis.\nAlign technology choices with business goals.\nMitigate risks in your technology partnerships.\nGet a clear, actionable view of the vendor landscape.', learnMoreUrl: '#' },
    { id: "elwis", name: "ELWIS™", description: "Our Early Warning & Intervention System for large-scale technology programs.", icon: Shield, imageId: 'product-elwis', tagline: 'See risk before it sees you.', detailedDescription: 'Large-scale technology programs are notoriously difficult to manage. ELWIS™ is your intelligent co-pilot, continuously monitoring program health and identifying early warning signs of trouble. By combining data from multiple sources, ELWIS™ helps you intervene before risks escalate into crises.', keyBenefits: 'Gain real-time visibility into program health.\nIdentify and mitigate risks proactively.\nImprove the success rate of large-scale initiatives.\nEnhance stakeholder confidence and communication.', learnMoreUrl: '#' },
    { id: "propricing", name: "ProPRICING™", description: "An advanced pricing and proposal generation engine for complex technology services.", icon: Banknote, imageId: 'product-propricing', tagline: 'Price with precision. Win with confidence.', detailedDescription: 'Pricing complex technology services is both an art and a science. ProPRICING™ brings data-driven rigor to the process. Our engine analyzes historical data, market benchmarks, and your unique value proposition to generate optimal pricing strategies and compelling proposals.', keyBenefits: 'Optimize pricing for profitability and win rates.\nStandardize and accelerate your proposal process.\nImprove negotiation outcomes with data-backed insights.\nGain a deeper understanding of your pricing power.', learnMoreUrl: '#' },
    { id: "skillorbit", name: "SkillOrbit™", description: "Map, measure, and manage the critical skills that drive your organization's success.", icon: UsersRound, imageId: 'product-skillorbit', tagline: 'Align talent with strategy.', detailedDescription: "In a rapidly changing world, having the right skills is paramount. SkillOrbit™ is a dynamic platform for talent and capability management. We help you map your organization's existing skills, identify future needs, and create targeted development pathways to bridge the gap.", keyBenefits: 'Gain a clear view of your organization\'s skill landscape.\nAlign talent development with strategic priorities.\nImprove employee engagement and retention.\nBuild a more agile and resilient workforce.', learnMoreUrl: '#' },
];



    