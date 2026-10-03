export interface ClientProject {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  status: "Ongoing" | "Completed" | "Upcoming";
  image: string;
  images?: string[];
  description: string;
  overview: string;
  developersNote: string;
  keyFeatures: string[];
  deliverables: string[];
  challenges: string[];
  futurePlans: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  timeline: string;
  role: string;
  teamMembers: { name: string; role: string }[];
}

export interface LearningProject {
  slug: string;
  title: string;
  category: "React.js" | "MERN" | "Next.js";
  image: string;
  images?: string[];
  description: string;
  overview: string;
  keyFeatures: string[];
  tags: string[];
  codeUrl: string;
  demoUrl: string;
  timeline: string;
  role: string;
}

/* ─── Client Projects ──────────────────────────────────────── */

export const CLIENT_PROJECTS: ClientProject[] = [
  {
    slug: "lexipitch",
    title: "LexiPitch",
    tagline: "AI-Powered Customer Engagement Platform",
    category: "AI & Automation",
    status: "Ongoing",
    image: "/assets/images/1.png",
    images: [
      "/assets/images/1.png",
      "/assets/images/6.png",
      "/assets/images/7.png",
      "/assets/images/8.png",
      "/assets/images/9.png",
      "/assets/images/10.png",
      "/assets/images/11.png",
    ],
    description:
      "An AI-powered multi-channel customer engagement platform enabling businesses to interact via Voice, WhatsApp, Email, and Web with Agentic AI and CRM automation.",
    overview:
      "LexiPitch is an AI-powered multi-channel customer engagement platform enabling businesses to interact via Voice, WhatsApp, Email, and Web with Agentic AI and CRM automation. It provides intelligent conversational flows, automated lead qualification, and seamless CRM integration.",
    developersNote:
      "Built the entire frontend architecture with Next.js and integrated multiple AI services including LangChain for conversational workflows and real-time WebSocket communication for live agent handoffs.",
    keyFeatures: [
      "Multi-channel engagement (Voice, WhatsApp, Email, Web)",
      "Agentic AI conversation flows with LangChain",
      "Real-time CRM automation and lead scoring",
      "Live agent handoff with WebSocket support",
      "Analytics dashboard with conversion metrics",
      "Custom chatbot builder with drag-and-drop",
    ],
    deliverables: [
      "Full frontend architecture",
      "AI conversation engine",
      "CRM integration layer",
      "Real-time WebSocket system",
      "Analytics dashboard",
      "Deployment and CI/CD pipeline",
    ],
    challenges: [
      "Handling concurrent multi-channel conversations at scale",
      "Implementing real-time AI response streaming",
      "Building a flexible chatbot flow builder",
    ],
    futurePlans: [
      "AI-powered sentiment analysis",
      "Advanced A/B testing for conversation flows",
      "Multi-language support",
    ],
    tags: ["Next.js", "TypeScript", "Python", "LangChain", "Redis", "AWS"],
    liveUrl: "https://lexipitch.com",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "2024 - Present",
    role: "Frontend & AI Engineer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "Frontend & AI Engineer" },
    ],
  },
  {
    slug: "swaasta",
    title: "Swaasta",
    tagline: "Healthcare Made Simple & Accessible",
    category: "Healthcare",
    status: "Ongoing",
    image: "/assets/doctor/home.png",
    images: [
      "/assets/doctor/home.png",
      "/assets/doctor/admin.png",
      "/assets/images/12.png",
      "/assets/images/13.png",
    ],
    description:
      "A zero-commission healthcare platform connecting patients with doctors, hospitals, laboratories, and pharmacies.",
    overview:
      "Swaasta is a zero-commission healthcare platform connecting patients with doctors, hospitals, laboratories, and pharmacies. It provides appointment booking, telemedicine consultations, medicine delivery, and lab test scheduling.",
    developersNote:
      "Worked on both frontend and backend, implementing real-time appointment scheduling, telemedicine video calls, and complex database queries optimized for healthcare data.",
    keyFeatures: [
      "Doctor appointment booking with real-time availability",
      "Telemedicine video consultation",
      "Medicine ordering and delivery tracking",
      "Lab test scheduling and report access",
      "Hospital and clinic directory",
      "Patient health records management",
    ],
    deliverables: [
      "Patient-facing web application",
      "Doctor dashboard portal",
      "Backend API services",
      "Database architecture",
      "Payment gateway integration",
      "Deployment and DevOps setup",
    ],
    challenges: [
      "Building a scalable and efficient backend for 30,000+ users",
      "Implementing complex filtering and search functionality",
      "Optimizing performance for faster page loads",
    ],
    futurePlans: [
      "AI-powered health recommendations",
      "Wearable device integration",
      "Integrated loyalty program",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "Firebase", "AWS"],
    liveUrl: "https://swaasta.com",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "2024 - Present",
    role: "FullStack Engineer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "FullStack Engineer" },
    ],
  },
  {
    slug: "korike",
    title: "Korike",
    tagline: "Zero-Commission Ride-Sharing & Delivery",
    category: "Transportation",
    status: "Upcoming",
    image: "/assets/images/2.png",
    images: [
      "/assets/images/2.png",
      "/assets/images/14.png",
      "/assets/images/15.png",
    ],
    description:
      "A zero-commission ride-sharing and delivery platform with a subscription model for drivers.",
    overview:
      "Korike is an innovative zero-commission ride-sharing and delivery platform designed with a subscription-based model for drivers instead of per-ride commissions.",
    developersNote:
      "Architecting the mobile app with React Native and building the real-time location tracking system with Google Maps integration.",
    keyFeatures: [
      "Zero-commission driver model",
      "Real-time GPS tracking and route optimization",
      "Subscription-based driver payments",
      "In-app messaging between rider and driver",
      "Surge pricing algorithms",
      "Driver analytics dashboard",
    ],
    deliverables: [
      "React Native mobile application",
      "Backend microservices",
      "Real-time location tracking",
      "Payment integration",
      "Admin dashboard",
      "DevOps and cloud setup",
    ],
    challenges: [
      "Building efficient real-time location tracking",
      "Implementing fair surge pricing algorithms",
      "Handling concurrent ride requests at scale",
    ],
    futurePlans: [
      "Electric vehicle fleet integration",
      "AI route optimization",
      "Package delivery service",
    ],
    tags: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "AWS"],
    liveUrl: "https://korike.com",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "2025 - Upcoming",
    role: "Mobile & Backend Developer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "Mobile & Backend Developer" },
    ],
  },
  {
    slug: "nikasx",
    title: "Nikasx",
    tagline: "Tactical Loadout Marketplace",
    category: "Ecommerce",
    status: "Completed",
    image: "/assets/images/3.png",
    images: [
      "/assets/images/3.png",
      "/assets/images/16.png",
      "/assets/images/17.webp",
    ],
    description:
      "A modern e-commerce marketplace specializing in tactical gear, apparel, and specialized outdoor equipment.",
    overview:
      "Nikasx is a modern e-commerce marketplace specializing in tactical gear, apparel, and specialized outdoor equipment. Built on Shopify Storefront API with a custom Next.js frontend.",
    developersNote:
      "Integrated Shopify Storefront API with a fully custom Next.js frontend, implementing advanced product filtering, real-time inventory sync, and optimized checkout flow.",
    keyFeatures: [
      "Custom Shopify Storefront API integration",
      "Advanced product filtering and search",
      "Real-time inventory synchronization",
      "Optimized checkout with multiple payment options",
      "Product reviews and ratings system",
      "Responsive mobile-first design",
    ],
    deliverables: [
      "Custom Next.js storefront",
      "Shopify API integration",
      "Product catalog system",
      "Checkout and payment flow",
      "SEO optimization",
      "Performance optimization",
    ],
    challenges: [
      "Syncing real-time inventory with Shopify",
      "Implementing complex product variant selection",
      "Optimizing page load times for large catalogs",
    ],
    futurePlans: [
      "AI product recommendations",
      "Virtual try-on feature",
      "Loyalty rewards program",
    ],
    tags: ["Next.js", "Shopify Storefront API", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nikasx.com",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "2024",
    role: "Frontend Developer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "Frontend Developer" },
    ],
  },
  {
    slug: "icesion",
    title: "Icesion",
    tagline: "High-Performance Fashion E-commerce Platform",
    category: "Ecommerce",
    status: "Completed",
    image: "/assets/shopper/home1.png",
    images: [
      "/assets/shopper/home1.png",
      "/assets/shopper/home2.png",
      "/assets/shopper/cart.png",
      "/assets/shopper/admin.png",
    ],
    description:
      "A clothing ecommerce website with over 30,000 users, featuring product catalog, user accounts, and secure checkout.",
    overview:
      "Icesion is a full-featured clothing e-commerce platform with approximately 30,000 users. It offers a wide range of clothing products with features like cart management, user accounts, and payment integration.",
    developersNote:
      "Icesion was my first large-scale e-commerce project, serving over 30,000 users. The performance optimization involved database indexing and query optimization for multipage product listings that reduced page load times by 60%. The project taught me a lot about building multi-page systems while maintaining a smooth user experience.",
    keyFeatures: [
      "Product catalog with categories and filters",
      "User account management",
      "Shopping cart and wishlist",
      "Secure checkout process",
      "Order tracking and history",
      "Responsive design for all devices",
    ],
    deliverables: [
      "E-commerce website frontend",
      "Admin dashboard",
      "Backend API services",
      "Database implementation",
      "Payment gateway integration",
      "Deployment and DevOps setup",
    ],
    challenges: [
      "Building a scalable and efficient backend to handle 30,000+ users",
      "Implementing complex filtering and search functionality for products",
      "Optimizing performance for faster page loads with large product catalogs",
    ],
    futurePlans: [
      "AI-powered product recommendations",
      "Virtual try-on feature",
      "Integrated loyalty program",
    ],
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://icesion.dev",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "Completed in 2023",
    role: "Frontend & DevOps Developer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "Frontend & DevOps Developer" },
    ],
  },
  {
    slug: "sitelayers",
    title: "SiteLayers",
    tagline: "Digital Empire Platform for Modern Businesses",
    category: "SaaS",
    status: "Completed",
    image: "/assets/images/4.png",
    description:
      "A comprehensive website building platform that enables users to create high-converting landing pages and SaaS showcases.",
    overview:
      "SiteLayers is a comprehensive website building platform enabling users to create high-converting landing pages and SaaS showcases with a drag-and-drop builder.",
    developersNote:
      "Built the entire platform from scratch with a focus on performance and user experience. The drag-and-drop builder was the most challenging feature, requiring complex state management.",
    keyFeatures: [
      "Drag-and-drop page builder",
      "Pre-built template library",
      "Custom domain support",
      "SEO optimization tools",
      "Analytics and conversion tracking",
      "Team collaboration features",
    ],
    deliverables: [
      "Page builder application",
      "Template management system",
      "Backend API and database",
      "User authentication system",
      "Hosting and deployment",
      "Documentation",
    ],
    challenges: [
      "Building a performant drag-and-drop interface",
      "Managing complex component state trees",
      "Implementing real-time collaboration",
    ],
    futurePlans: [
      "AI content generation",
      "E-commerce integration",
      "Advanced analytics dashboard",
    ],
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Node.js", "MongoDB"],
    liveUrl: "https://sitelayers.dev",
    githubUrl: "https://github.com/Ramjanict",
    timeline: "2024",
    role: "Full Stack Developer",
    teamMembers: [
      { name: "Md Ramjan Ali", role: "Full Stack Developer" },
    ],
  },
];

/* ─── Learning / Personal Projects ─────────────────────────── */

export const LEARNING_PROJECTS: LearningProject[] = [
  {
    slug: "block-graph",
    title: "Block-Graph",
    category: "React.js",
    image: "/assets/new/block.png",
    description:
      "Interactive block graph and node connectivity visualization tool with dynamic layout rendering.",
    overview:
      "An interactive block graph and node connectivity visualization tool built with React.js and Canvas APIs for dynamic layout rendering.",
    keyFeatures: [
      "Dynamic node graph rendering",
      "Interactive drag and connect",
      "Canvas-based visualization",
      "Responsive layout engine",
    ],
    tags: ["React.js", "Canvas", "Graphs", "Tailwind CSS"],
    codeUrl: "https://github.com/Ramjanict/Block-Graph",
    demoUrl: "https://block-graph-seven.vercel.app/",
    timeline: "2024",
    role: "Developer",
  },
  {
    slug: "relationship-visualizer",
    title: "Relationship-Visualizer",
    category: "React.js",
    image: "/assets/new/relation.png",
    description:
      "Interactive data relationship and node connections visualizer built with modern React.",
    overview:
      "An interactive data relationship and entity connections visualizer built with modern React for exploring complex data hierarchies.",
    keyFeatures: [
      "Entity relationship mapping",
      "Interactive node exploration",
      "Data hierarchy visualization",
      "Responsive design",
    ],
    tags: ["React.js", "Data Viz", "Nodes", "Interactive UI"],
    codeUrl: "https://github.com/Ramjanict/Relationship-Visualizer",
    demoUrl: "https://relationship-visualizer.vercel.app",
    timeline: "2024",
    role: "Developer",
  },
  {
    slug: "square-video-player",
    title: "Square-Video-Player",
    category: "React.js",
    image: "/assets/new/video.png",
    description:
      "Responsive square aspect ratio video player featuring customized media controls and overlay gestures.",
    overview:
      "A responsive square aspect ratio video player with customized HTML5 media controls and overlay gestures for modern video playback.",
    keyFeatures: [
      "Custom video controls",
      "Square 1:1 aspect ratio",
      "Gesture-based interactions",
      "Responsive design",
    ],
    tags: ["React.js", "HTML5 Video", "Custom Controls", "Responsive"],
    codeUrl: "https://github.com/Ramjanict/Square-Video-Player",
    demoUrl: "https://square-video-player.vercel.app",
    timeline: "2024",
    role: "Developer",
  },
  {
    slug: "recursive-partitioner",
    title: "Recursive-Partitioner",
    category: "React.js",
    image: "/assets/new/partition.png",
    description:
      "Dynamic recursive screen partitioner and nested layout visualizer with split controls.",
    overview:
      "A dynamic recursive screen partitioner that demonstrates algorithmic layout splitting with interactive controls.",
    keyFeatures: [
      "Recursive screen splitting",
      "Interactive split controls",
      "Color-coded partitions",
      "Algorithm visualization",
    ],
    tags: ["React.js", "Recursion", "Layout Split", "Algorithms"],
    codeUrl: "https://github.com/Ramjanict/Recursive-Partitioner",
    demoUrl: "https://recursive-partitioner-beta.vercel.app",
    timeline: "2024",
    role: "Developer",
  },
  {
    slug: "book-management-app",
    title: "Book Management App",
    category: "React.js",
    image: "/assets/Book/book.png",
    description:
      "Full-featured book and library management system with catalog filtering, status tracking, and inventory.",
    overview:
      "A full-featured book and library management system with catalog filtering, reading status tracking, and inventory management.",
    keyFeatures: [
      "Book catalog management",
      "Reading status tracking",
      "Search and filtering",
      "Inventory system",
    ],
    tags: ["React.js", "State Management", "Inventory", "Tailwind CSS"],
    codeUrl: "https://github.com/Ramjanict/Book-management-app",
    demoUrl: "https://book-management-app-two.vercel.app/",
    timeline: "2024",
    role: "Developer",
  },
  {
    slug: "fullstack-ecommerce-mern",
    title: "Fullstack E-Commerce MERN",
    category: "MERN",
    image: "/assets/MERN/home1.png",
    description:
      "Comprehensive MERN stack e-commerce web application with product listings, cart, user authentication, and checkout.",
    overview:
      "A comprehensive full-stack e-commerce application built with the MERN stack featuring product catalog, cart management, user authentication, and checkout flow.",
    keyFeatures: [
      "Full product catalog with categories",
      "Shopping cart and checkout",
      "User authentication and profiles",
      "Order management system",
    ],
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux"],
    codeUrl: "https://github.com/Ramjanict/Fullstack-Ecommerce-MERN-APP",
    demoUrl: "https://fullstack-ecommerce-mern-app-usvm.vercel.app/",
    timeline: "2024",
    role: "Full Stack Developer",
  },
  {
    slug: "room-booking-system",
    title: "Room Booking System",
    category: "MERN",
    image: "/assets/images/5.png",
    description:
      "Room booking, availability scheduler, and property reservation management platform.",
    overview:
      "A room booking and availability scheduler platform for property reservation management with calendar-based scheduling.",
    keyFeatures: [
      "Room availability calendar",
      "Booking and reservation system",
      "User authentication",
      "Admin management panel",
    ],
    tags: ["MERN Stack", "Booking Engine", "Calendar", "REST API"],
    codeUrl: "https://github.com/Ramjanict/Room-Booking-System",
    demoUrl: "https://room-book-front.vercel.app/",
    timeline: "2024",
    role: "Full Stack Developer",
  },
  {
    slug: "my-portfolio",
    title: "My Portfolio",
    category: "Next.js",
    image: "/assets/images/homepng.png",
    description:
      "Personal portfolio website engineered with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.",
    overview:
      "Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion with animated interactions and responsive design.",
    keyFeatures: [
      "Next.js 16 with App Router",
      "Framer Motion animations",
      "Dark/Light mode",
      "Responsive design",
    ],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
    codeUrl: "https://github.com/Ramjanict",
    demoUrl: "https://mdramjanali.com",
    timeline: "2025",
    role: "Developer",
  },
];

/* ─── Helpers ──────────────────────────────────────────────── */

export function getClientProjectBySlug(slug: string): ClientProject | undefined {
  return CLIENT_PROJECTS.find((p) => p.slug === slug);
}

export function getLearningProjectBySlug(slug: string): LearningProject | undefined {
  return LEARNING_PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return [
    ...CLIENT_PROJECTS.map((p) => p.slug),
    ...LEARNING_PROJECTS.map((p) => p.slug),
  ];
}
