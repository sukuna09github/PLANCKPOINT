
import type { LucideIcon } from "lucide-react";
import { Lightbulb, Target, Users, Bot, Star, BarChart, Gem, Briefcase, DraftingCompass, Cpu, Code, BrainCircuit, Building, Network, Shield, Handshake, Landmark, BriefcaseBusiness, TrendingUp, UsersRound, Palette, Scale, HeartHandshake, Rocket, Banknote, ArrowRight } from "lucide-react";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/core-services", label: "Core Services" },
  { href: "/insights", label: "Insights" },
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
    { name: "Amit Dengle", role: "Founder", bio: "Amit Dengle is a strategy, research, and transformation leader with over two decades of experience advising enterprises on high-stakes technology and operating model decisions. Before founding PlanckPoint, Amit held senior leadership roles in global research and advisory firms, where he worked closely with CIOs, boards, and executive teams across banking, insurance, telecom, and large enterprises. His work has consistently focused on areas where decisions carry long-term risk, vendor selection, large-scale transformation, sourcing strategy, and execution governance.", imageId: "leader1" },
    { name: "Florian Scheibmayr", role: "Co-Founder", bio: "Florian Scheibmayr is a senior technology and transformation leader with deep experience across enterprise IT, service delivery, and large-scale operating models. He has worked closely with global enterprises and service providers on complex technology programs, with a focus on execution quality, delivery governance, and the structural factors that determine whether transformation efforts succeed or fail. His experience spans strategy through implementation, giving him a practical view of how decisions translate into operational outcomes.", imageId: "leader2" },
    { name: "Kiran K", role: "Chief Technology Officer", bio: "Kiran K leads technology at PlanckPoint, with responsibility for the platforms, data architecture, and AI-enabled systems that underpin the firm’s research and decision intelligence. He brings deep experience in building and scaling enterprise-grade technology solutions, with a strong focus on data engineering, analytics platforms, and applied AI. His work has consistently centred on turning complex, fragmented data into reliable systems that support real decision-making under uncertainty.", imageId: "leader3" },
    { name: "Mayurika Dutta", role: "Subject Matter Expert - Transformation", bio: "Mayurika Dutta is a transformation and transition leader with extensive experience delivering complex, large-scale change across global organisations. She specialises in end-to-end transition delivery, operating model redesign, and execution governance, from discovery and planning through stabilisation and benefits realisation. She has led multi-region transitions, established global hubs and shared services, and embedded strong governance and risk frameworks to ensure continuity and sustained performance. Known for a structured, data-driven approach, Mayurika partners closely with senior business and technology leaders to align strategy with execution, manage risk, and embed lasting change.", imageId: "leader5" },
    { name: "QELLA", role: "AI Intern - Data Analysis", bio: "QELLA is an AI Intern focusing on data analysis, contributing to the development of advanced analytical models and data-driven insights.", imageId: "leader6" },
    { name: "KORIX", role: "AI Intern - Storytelling", bio: "KORIX is an AI Intern specializing in storytelling, helping to translate complex data and research into compelling narratives.", imageId: "leader7" },
    { name: "Luther", role: "AI Intern - Project Management", bio: "Luther is an AI Intern focused on project management, assisting in the organization and execution of key research and development projects.", imageId: "leader8" },
];

export const BOARD_OF_ADVISORS = [
    { name: "Peter Dean", role: " ", imageId: "board2", bio: "A seasoned expert in enterprise software and digital transformation, Peter helps shape our product strategy and long-term vision." },
    { name: "Ulrich Meister", role: " ", imageId: "board3", bio: "Ulrich brings a deep understanding of corporate governance and risk management, ensuring our strategies are both ambitious and sound." },
    { name: "Sriharsha", role: " ", imageId: "board4", bio: "As a leader in data science and AI, Sriharsha advises on cutting-edge technological advancements and their practical applications." },
];

export const FOOTER_LINKS = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "/about" },
            { label: "Insights", href: "/insights" },
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
    title: 'Prompt Debt: AI’s Quiet Margin Killer',
    summary: 'A gap is emerging between AI activity and AI impact. This article explores why AI\'s benefits flatten at scale and how \'Prompt Debt\' quietly erodes margins.',
    mainImage: '/Articles/article 1.jpeg',
    publicationDate: new Date('2024-11-15'),
    category: 'Artificial Intelligence',
    imageId: 'research4',
    author: {
        name: 'Amit Dengle',
        role: 'Founder',
        avatarImageId: 'leader1'
    },
    tags: ['AI', 'Prompt Engineering', 'ROI', 'Productivity'],
    content: `
        <p>In just two years, organisations have gone from testing AI at the margins to relying on it in the middle of everyday work. AI now drafts what we send, analyses what we decide, and shapes how customers experience us. Usage is exploding. Productivity looks up. But something far more important is unfolding beneath the surface.</p>
        <p>A gap is emerging between AI activity and AI impact.</p>
        <p>Many organisations report heavy usage but modest improvements in margins, decision speed, or automation at scale. Benefits that appeared compelling in pilots flatten as AI spreads across teams. Senior leaders find themselves more involved in review and validation, not less. Automation timelines slip, even as investment continues.</p>
        <blockquote>Prompt Debt accumulates when prompts are created quickly, shared informally, and embedded into workflows without ownership, standards, or economic accountability. What begins as flexibility gradually becomes fragility. Small inefficiencies compound, confidence in outputs declines, and manual safeguards quietly expand.</blockquote>
        <h2>Strategic Impact of Prompt Debt</h2>
        <p>These impacts affect growth, margins, and long-term scalability. They are usually discussed at the board and executive level, often without being linked back to prompts.</p>
        <div class="overflow-x-auto">
        <table class="min-w-full">
            <thead>
                <tr class="border-b">
                    <th class="px-4 py-2 text-left font-semibold">Strategic Impact</th>
                    <th class="px-4 py-2 text-left font-semibold">Lines impacted</th>
                    <th class="px-4 py-2 text-left font-semibold">Typical Impact</th>
                    <th class="px-4 py-2 text-left font-semibold">What Leadership Sees</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t px-4 py-2">EBITDA margin compression</td>
                    <td class="border-t px-4 py-2">EBITDA</td>
                    <td class="border-t px-4 py-2">2–5 point erosion</td>
                    <td class="border-t px-4 py-2">AI ROI below plan, margins flatten</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Revenue upside erosion</td>
                    <td class="border-t px-4 py-2">Revenue growth</td>
                    <td class="border-t px-4 py-2">15–30% of expected uplift lost</td>
                    <td class="border-t px-4 py-2">AI growth cases revised downward</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Automation payback delay</td>
                    <td class="border-t px-4 py-2">Cash flow and ROI timing</td>
                    <td class="border-t px-4 py-2">6–18-month delay</td>
                    <td class="border-t px-4 py-2">Benefits pushed to later phases</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Cost pyramid inversion</td>
                    <td class="border-t px-4 py-2">SG&A and delivery cost</td>
                    <td class="border-t px-4 py-2">10–20% senior effort uplift</td>
                    <td class="border-t px-4 py-2">Higher blended cost per unit</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Decision velocity decline</td>
                    <td class="border-t px-4 py-2">Opportunity cost</td>
                    <td class="border-t px-4 py-2">3–7% slower cycles</td>
                    <td class="border-t px-4 py-2">Slower execution, more reviews</td>
                </tr>
            </tbody>
        </table>
        </div>
        <p class="text-sm text-muted-foreground mt-2"><em>Source: Planckpoint research, 2026</em></p>
        <h2>Operational Impact of Prompt Debt</h2>
        <p>These are the day-to-day mechanics through which strategic damage accumulates.</p>
        <div class="overflow-x-auto">
        <table class="min-w-full">
            <thead>
                <tr class="border-b">
                    <th class="px-4 py-2 text-left font-semibold">Operational Impact Area</th>
                    <th class="px-4 py-2 text-left font-semibold">Line Impacted</th>
                    <th class="px-4 py-2 text-left font-semibold">Typical Impact</th>
                    <th class="px-4 py-2 text-left font-semibold">What Teams See on the Ground</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t px-4 py-2">Labour productivity loss</td>
                    <td class="border-t px-4 py-2">Cost of labour</td>
                    <td class="border-t px-4 py-2">5–12% output loss</td>
                    <td class="border-t px-4 py-2">More drafting, retries, refinements</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Rework and correction cost</td>
                    <td class="border-t px-4 py-2">Delivery and ops cost</td>
                    <td class="border-t px-4 py-2">8–15% effort duplication</td>
                    <td class="border-t px-4 py-2">AI outputs routinely need fixing</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Compute and run-cost inflation</td>
                    <td class="border-t px-4 py-2">Technology opex</td>
                    <td class="border-t px-4 py-2">12–25% excess cost</td>
                    <td class="border-t px-4 py-2">Rising AI spend without output gain</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Quality assurance overhead</td>
                    <td class="border-t px-4 py-2">QA and compliance cost</td>
                    <td class="border-t px-4 py-2">5–10% extra effort</td>
                    <td class="border-t px-4 py-2">Added checks and duplicated reviews</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Onboarding and reuse drag</td>
                    <td class="border-t px-4 py-2">HR and training cost</td>
                    <td class="border-t px-4 py-2">15–30% longer ramp-up</td>
                    <td class="border-t px-4 py-2">New hires cannot replicate results</td>
                </tr>
            </tbody>
        </table>
        </div>
        <p class="text-sm text-muted-foreground mt-2"><em>Source: Planckpoint research, 2026</em></p>
        <h2>Why This Is Not a Skills Problem</h2>
        <p>Prompt Debt is often misdiagnosed as a training gap. It is not. Well-trained teams still generate Prompt Debt when prompts are treated as informal artefacts rather than as shared organisational assets. Without ownership, lifecycle management, and economic accountability, debt is inevitable.</p>
        <p>There is a familiar precedent here. Organisations spent years learning that technical debt constrained agility and margins long after software worked. Prompt Debt follows the same logic, faster, and across a much broader workforce.</p>
        <h2>How should organisations manage their Prompt Debt?</h2>
        <p>Prompt Debt accumulates when prompts move from individual experimentation to shared, operational use without ownership, standards, or economic accountability. It does not break AI. It prevents AI from compounding value. Managing Prompt Debt is therefore not a technical exercise. It is an organisational discipline.</p>
        <img src="/Articles/article1.1.png" alt="What Organisations Must Do" class="my-6 w-full" />
        <div class="overflow-x-auto">
        <table class="min-w-full">
            <thead>
                <tr class="border-b">
                    <th class="px-4 py-2 text-left font-semibold">What Organisations Must Do</th>
                    <th class="px-4 py-2 text-left font-semibold">Why It Matters</th>
                    <th class="px-4 py-2 text-left font-semibold">What Changes in Practice</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="border-t px-4 py-2">Treat prompts as assets</td>
                    <td class="border-t px-4 py-2">Prompts shape outcomes, cost, and risk</td>
                    <td class="border-t px-4 py-2">High-impact prompts have named owners</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Measure before fixing</td>
                    <td class="border-t px-4 py-2">Prompt Debt is unevenly distributed</td>
                    <td class="border-t px-4 py-2">Intervention focuses on where value leaks</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Enforce ownership</td>
                    <td class="border-t px-4 py-2">No owner means guaranteed debt</td>
                    <td class="border-t px-4 py-2">Prompt changes are controlled</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Apply lifecycle discipline</td>
                    <td class="border-t px-4 py-2">Unreviewed prompts quietly decay</td>
                    <td class="border-t px-4 py-2">Prompts are reviewed and retired</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Standardise selectively</td>
                    <td class="border-t px-4 py-2">Scale needs discipline, not rigidity</td>
                    <td class="border-t px-4 py-2">Core workflows stabilise</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Link prompts to economics</td>
                    <td class="border-t px-4 py-2">Quality alone does not change behaviour</td>
                    <td class="border-t px-4 py-2">Productivity and cost become visible</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Embed governance</td>
                    <td class="border-t px-4 py-2">Side programs are ignored</td>
                    <td class="border-t px-4 py-2">Prompt discipline becomes routine</td>
                </tr>
                <tr>
                    <td class="border-t px-4 py-2">Monitor continuously</td>
                    <td class="border-t px-4 py-2">Debt compounds as AI scales</td>
                    <td class="border-t px-4 py-2">Prompt Debt trends down over time</td>
                </tr>
            </tbody>
        </table>
        </div>
        <h2>The Bottom Line</h2>
        <ul>
            <li>Prompt Debt is not a technical flaw. It is an organisational cost of scaling AI without discipline.</li>
            <li>AI creates opportunity. Prompt discipline determines how much of that opportunity survives.</li>
            <li>Organisations that manage Prompt Debt early preserve productivity gains, protect margins, and accelerate automation. Those who do not will keep asking why AI feels helpful, but never truly transformational.</li>
        </ul>
    `
  },
  {
    _id: 'mock-2',
    title: 'The End of Linear IT Spending – From facilitation to leverage',
    summary: 'Enterprises are rethinking how they spend on technology. IT budgets are no longer treated as a linear function of revenue, headcount, or scale.',
    mainImage: '/Articles/article 2.jpeg',
    publicationDate: new Date('2024-11-10'),
    category: 'Economics',
    imageId: 'research2',
    author: {
        name: 'Kiran K',
        role: 'Chief Technology Officer',
        avatarImageId: 'leader3'
    },
    tags: ['IT Spending', 'Economics', 'ROI'],
    content: `
        <h2>The idea</h2>
        <p>Enterprises are rethinking how they spend on technology. IT budgets are no longer treated as a linear function of revenue, headcount, or scale. Instead, organisations are increasingly directing technology spend towards non-linear investments that deliver disproportionate impact, reduce marginal cost, and compound value over time.</p>
        <h2>What is driving non-linear technology spending</h2>
        <p>The traditional logic of IT spending was built for a world where technology supported the business. Today, technology increasingly defines how the business operates, competes, and grows. As digital platforms, automation, and AI become embedded in core operations, enterprises are realising that not all technology spend is equal. Some investments simply maintain the status quo, while others fundamentally change cost curves, decision quality, and scalability. As a result, leaders are no longer asking, “How much should we spend on IT?” They are asking, “Where can technology change the economics of the business?”</p>
        <h2>What has changed inside the enterprise</h2>
        <p>Several forces are converging: First, technology can now scale independently of labour. Cloud platforms, automation, and AI allow enterprises to grow volumes, customers, or transactions without adding people at the same rate. This breaks the historic link between business growth and IT cost growth.</p>
        <p>Second, data and AI create compounding returns. Once built, data assets and models improve with use. The value generated in year three can be materially higher than in year one, without proportional increases in spend.</p>
        <p>Third, risk has become asymmetric. When technology drives decisions, automation, and customer outcomes, failure carries outsized downside. This pushes enterprises to concentrate investment on fewer, higher-leverage initiatives that are well-governed and resilient, rather than spreading spend thinly across many programmes.</p>
        <p>Fourth, financial discipline has tightened. Boards and CFOs are increasingly sceptical of large, open-ended transformation programmes. They favour investments with clear leverage, faster payback, and visible operating impact.</p>
        <h2>How spending behaviour is changing</h2>
        <p>Enterprise IT spending is becoming more selective and punctuated. Organisations pause initiatives quickly when leverage does not materialise and accelerate those that show early compounding effects. Long, linear roadmaps are giving way to modular bets that can scale rapidly or be stopped with limited sunk cost. Budgets are also shifting away from capacity maintenance towards capability creation. More funding flows to platforms, shared data layers, automation, and core digital assets. Less flows to work that must be repeated each year to sustain the same level of output.</p>
        <h2>The underlying logic</h2>
        <p>At its core, this shift reflects a change in how enterprises think about technology value. Linear IT spending buys capacity. Non-linear technology investment buys leverage. Capacity must be paid for repeatedly. Leverage continues to pay back over time.</p>
        <h2>The bottom line</h2>
        <p>Enterprises are not abandoning IT spending. They are becoming far more deliberate about it. As technology becomes central to business economics, leaders are concentrating investment where it reshapes cost curves, decision quality, and scalability. The future of enterprise IT is not about spending more or less. It is about spending differently.</p>
    `
  },
  {
    _id: 'mock-3',
    title: 'Why Knowing What You Want Is Harder Than Getting It Done, Especially in Artificial Intelligence Efforts',
    summary: "The central challenge for leaders today isn't just execution, which AI can handle, but defining with absolute clarity what needs to be done. This article explores why strategic clarity is the new, critical discipline in the age of AI.",
    mainImage: '/Articles/article 3.jpeg',
    publicationDate: new Date('2024-11-05'),
    category: 'Artificial Intelligence',
    imageId: 'research3',
    author: {
        name: 'Amit Dengle',
        role: 'Founder',
        avatarImageId: 'leader1'
    },
    tags: ['AI', 'Strategy', 'Leadership', 'Execution'],
    content: `
        <blockquote>
            <p>"Would you tell me, please, which way I ought to go from here?"</p>
            <p>"That depends a good deal on where you want to get to," said the Cat.</p>
            <p>"I don't much care where,” said Alice.</p>
            <p>"Then it doesn't matter which way you go," said the Cat.</p>
            <cite>- Lewis Carroll, Alice's Adventures in Wonderland</cite>
        </blockquote>
        <p>When <em>Execution: The Discipline of Getting Things Done</em> was published in 2002, it captured the dominant management challenge of the era. Most organisations had a reasonable sense of direction. Strategies were articulated, targets were set, and priorities were broadly understood. The problem was execution. Leaders struggled with follow-through, coordination, and operational discipline.</p>
        <p>That challenge no longer defines the moment. Today, artificial intelligence executes instructions with a level of consistency, speed, and endurance that human systems never could. What was once the hardest part of management is now automated, scalable, and increasingly inexpensive. Execution, at least in its traditional sense, has become easier. The difficulty has moved upstream. The central leadership challenge today is not whether a strategy can be executed. It is whether leaders can specify, with sufficient clarity and completeness, what should be executed in the first place.</p>
        <h2>When execution stops being the bottleneck</h2>
        <p>Modern AI systems do not hesitate, reinterpret, or apply judgment. They execute exactly what they are instructed to do, continuously and at machine speed. As a result, the core managerial question has shifted. It is no longer “Can we make this happen?” but “Have we told the system precisely what should happen, and what must never happen?” When execution becomes trivial, strategic clarity becomes critical.</p>
        <h2>Why strategic clarity is now harder than execution</h2>
        <p>Traditional goal setting today is incomplete unless its constraints are made explicit. Acceptable response times, quality thresholds, escalation rules, prohibited tactics, compliance requirements, and ethical red lines must all be specified. The challenge is not goal setting. Organisations solved that decades ago. The challenge is constraint completeness. Leaders often discover their unstated assumptions only when an AI system violates them while still meeting the target. When retention improves through manipulative tactics, the metric is achieved, but the outcome is wrong.</p>
        <blockquote><p>In the early 2000s, SMART goals were sufficient because humans supplied what was left unsaid.   A target such as “Increase customer retention from 78 per cent to 85 per cent by Q2” worked because employees understood the boundaries. They knew not to deceive customers, violate privacy, or undermine trust, even when those limits were not written down. Judgement closed the gaps.  AI does not do that. What humans once inferred now must be defined to perfection.</p></blockquote>
        <h2>Rethinking people, strategy, and operations</h2>
        <p>This shift fundamentally alters the familiar triad of people, strategy, and operations. In people processes, high performance once meant operational discipline and consistent execution. Today, the most valuable capability is judgment. Organisations must reward those who can identify when a system is executing the wrong objective efficiently. Ethical reasoning, systems thinking, and governance literacy matter more than speed or output. In strategy, direction is no longer enough. Leaders must translate intent into executable specifications that include constraints, trade-offs, escalation triggers, and verification mechanisms. Direction without specification invites failure at scale. In operations, the focus has moved from doing to governing. Operations now involve monitoring automated execution at granular levels, detecting drift, intervening when context changes, and enforcing oversight even as systems operate faster than human decision cycles. The mismatch between machine speed and human governance introduces risks that did not exist in earlier eras.</p>
        <h2>What has not changed</h2>
        <p>Despite these shifts, a core insight from 2002 still holds. Execution cannot be delegated. What has changed is the form it takes. Leadership now means owning strategic clarity with the same intensity once applied to follow-through. It requires understanding the limits of AI, building governance-focused cultures, and maintaining the courage to override automated recommendations when they conflict with values or long-term outcomes. Uncertainty has not disappeared. It has become more compressed and more consequential.</p>
        <h2>Getting somewhere is no longer the problem</h2>
        <p>It is easy to forget that getting somewhere is not the same as getting to the right place. With AI, organisations can move very quickly. That is precisely the risk.</p>
        <p>AI solves the execution problem that dominated management thinking in the early 2000s, but it creates a deeper challenge. Humans are no longer naturally positioned to govern systems that act faster than judgment can keep pace. Organisations that succeed in the AI era will master strategic clarity as rigorously as earlier leaders mastered execution discipline. They will articulate objectives with precision, define boundaries with care, and preserve human judgement as automation scales.</p>
        <h2>The discipline of this decade is not getting things done. It is ensuring that where you end up is where you intended to go.</h2>
    `
  },
  {
    _id: 'mock-4',
    title: 'Cybersecurity in Distributed Teams',
    summary: 'Best practices for maintaining security protocols in organizations with distributed and remote workforce.',
    mainImage: 'https://static.wixstatic.com/media/61c56d_4361fe968edb461487cc7515b778b550~mv2.jpg',
    publicationDate: new Date('2024-10-28'),
    category: 'Cybersecurity',
    imageId: 'research6',
     author: {
        name: 'Mayurika Dutta',
        role: 'Subject Matter Expert',
        avatarImageId: 'leader5'
    },
    tags: ['Cybersecurity', 'Remote Work', 'Security'],
    content: `
        <h2>The New Perimeter is No Perimeter</h2>
        <p>The shift to distributed and remote work has dissolved the traditional corporate network perimeter. Every home office, coffee shop, and co-working space is now a potential entry point for attackers. This new reality demands a fundamental rethinking of cybersecurity strategy, moving from a location-centric to an identity-centric model.</p>
        <h3>Zero Trust Architecture: The Guiding Principle</h3>
        <p>The core philosophy for securing a distributed workforce is Zero Trust, which operates on the principle of "never trust, always verify." This means that no user or device is trusted by default, regardless of whether they are inside or outside the traditional network.</p>
        <blockquote>In a distributed world, your security is only as strong as your employee's awareness and your identity management.</blockquote>
        <p>Key components of a robust security posture for distributed teams include:</p>
        <ul>
            <li><strong>Multi-Factor Authentication (MFA):</strong> A non-negotiable baseline for all applications and services.</li>
            <li><strong>Endpoint Detection and Response (EDR):</strong> Continuous monitoring of laptops and mobile devices for signs of compromise.</li>
            <li><strong>Security Awareness Training:</strong> Regular, engaging training to help employees spot phishing attempts and other social engineering attacks.</li>
            <li><strong>Secure Access Service Edge (SASE):</strong> Converging networking and security services into a single, cloud-delivered platform to provide secure access for users anywhere.</li>
        </ul>
        <p>By embracing these principles, organizations can build a resilient security framework that protects their data and systems, no matter where their employees are working from.</p>
    `
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
        products: [],
        imageId: "industry-healthcare"
    },
    {
        id: 'vendor-evaluations',
        name: 'Vendor Evaluations',
        description: 'We conduct rigorous, evidence-based evaluations of technology vendors beyond narrative claims and simplified visual models. Each evaluation is grounded in execution reality, not positioning. Our vendor evaluation capabilities include: 	Experience delivered across various clients, projects, and scenarios. 	Execution capability assessment across delivery maturity, operating model resilience, and scalability 	Talent and operating model analysis examining depth, stability, and alignment to the work required 	Risk exposure mapping across delivery, dependency, concentration, and continuity dimensions The outcome is a clear view of what is likely to perform, what is likely to fail, and the conditions that influence both.',
        icon: BarChart,
        products: [],
        imageId: "industry-tech"
    }
]

export const INDUSTRY_SOLUTIONS = [
    {
        id: 'finance',
        name: 'Finance',
        description: 'Solutions for financial services, banking, and insurance industries.',
        icon: Banknote,
        products: ['atomicai'],
        imageId: "industry-finance"
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        description: 'Solutions for healthcare providers, pharmaceuticals, and life sciences.',
        icon: HeartHandshake,
        products: [],
        imageId: "industry-healthcare"
    },
    {
        id: 'technology',
        name: 'Technology',
        description: 'Solutions for software, hardware, and telecommunications companies.',
        icon: Cpu,
        products: ['atomicai', 'beyondquadrants'],
        imageId: "industry-tech"
    },
    {
        id: 'legal',
        name: 'Legal',
        description: 'Solutions for law firms, corporate legal departments, and compliance.',
        icon: Scale,
        products: [],
        imageId: "industry-legal"
    }
];

export const PRODUCTS = [
    { id: "atomicai", name: "AtomicAI™", description: "Our flagship product for granular, real-time analysis of human-computer interaction.", icon: Cpu, imageId: 'product-atomicai', tagline: 'Measure everything. Move faster.', detailedDescription: 'AtomicAI is built for leaders who are done with AI theatre. It decomposes real work into atomic tasks and scores each one for AI feasibility, automation upside, cost impact, and risk. You see exactly where AI replaces effort, where it augments judgment, and where humans must stay in control. No generic use cases. No black-box promises.   AtomicAI produces a clear, defensible AI operating model tied to measurable ROI. This is how AI moves from experimentation to execution, one task at a time.', keyBenefits: "Identify and eliminate workflow inefficiencies.\nGain a deep understanding of user behavior.\nImprove team productivity and satisfaction.\nMake data-driven decisions about technology adoption.", learnMoreUrl: '#' },
    { id: "beyondquadrants", name: "BeyondQuadrants™", description: "Move beyond simplistic vendor comparisons with our multi-dimensional evaluation framework.", icon: Target, imageId: 'product-beyondquadrants', tagline: 'Clarity beyond the noise.', detailedDescription: 'BeyondQuadrants challenges the very idea of ranking vendors as dots on a grid. Traditional quadrants reflect analyst opinion. We start with customer truth. Our intelligence is built on real client feedback, delivery outcomes, and lived experience. By analysing customer experience signals, we predict the likelihood of project success before it fails.  Vendors are evaluated on what actually happens after the contract is signed. Execution gaps, hidden strengths, and real risks are surfaced early. No abstract positioning. No glossy narratives. Just evidence-backed insight from the customer’s side of the table. BeyondQuadrants turns feedback into decisions you can stand behind.', keyBenefits: 'Go beyond surface-level vendor analysis.\nAlign technology choices with business goals.\nMitigate risks in your technology partnerships.\nGet a clear, actionable view of the vendor landscape.', learnMoreUrl: '#' },
    { id: "thinkquark", name: "ThinkQuark™", description: "Harness the power of quantum-inspired computing to solve your most complex optimization problems.", icon: BrainCircuit, imageId: 'product-thinkquark', tagline: 'Solve the unsolvable.', detailedDescription: 'ThinkQuark is a new form of thought leadership built for how decisions are actually made. We replace long, bloated publications with sharp, one-page concept papers. Each ThinkQuark challenges a dominant assumption, model, or industry habit. No background filler. No recycled frameworks. Just one powerful idea, clearly argued and grounded in real signals. Designed for leaders who think quickly and make decisions swiftly. Easy to read. Hard to ignore. ThinkQuark turns original thinking into immediate action.', keyBenefits: "Solve complex optimization problems faster.\nUnlock new possibilities in research and development.\nGain a competitive edge with cutting-edge technology.\nIntegrate seamlessly with your existing data pipelines.", learnMoreUrl: '#' },
    { id: "signalone", name: "SignalOne™", description: "Bespoke research and decision-ready intelligence tailored to your strategic questions.", icon: Lightbulb, imageId: 'product-signalone', tagline: 'Intelligence for your decisions.', detailedDescription: 'SignalOne delivers bespoke research built around your real strategic questions. We don’t publish generic reports. We design intelligence for specific decisions. Our research directly informs strategy, go-to-market initiatives, and sales enablement. Every insight is tailored to your market, buyers, and competitive reality. We combine data, field signals, and expert judgment to reduce blind spots. No shelfware. No recycled decks. Just decision-ready intelligence that sharpens strategy and strengthens sales.', keyBenefits: "Decision-ready intelligence.\nSharpened strategy and sales enablement.\nReduced strategic blind spots.\nCustom research for your specific needs.", learnMoreUrl: '#' },
];

    

    

