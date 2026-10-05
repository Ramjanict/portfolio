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
    slug: "goautomatemd",
    title: "GoAutomateMD",
    tagline: "Intelligent Healthcare Automation & Agentic AI Platform",
    category: "HealthTech & Enterprise AI",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/healthcare-ai-dashboard.svg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/healthcare-ai-dashboard.svg",
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/agentic-radiology-pipeline.svg",
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/ehr-interoperability-hub.svg",
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/smart-prescription-extractor.svg",
      "https://raw.githubusercontent.com/Ramjanict/goautomatemd-platform/main/public/images/emergency-triage-ai.svg",
    ],
    description:
      "An enterprise Agentic AI healthcare automation platform designed to eliminate paper and fax bottlenecks, streamline clinical protocoling, and connect hospital systems without workflow disruption.",
    overview:
      "GoAutomateMD (founded by CEO Jag Basrai) is an AI-driven clinical workflow platform built to transition hospitals and clinics into fully paperless ecosystems. By combining medical Computer Vision, deep learning OCR, and specialized agentic pipelines (GoAutomateDI, RX, LAB, ER, CARD, DICOM), it accelerates diagnostic imaging bookings from 2–3 weeks down to 1–2 days and saves hospital frontline teams over 100+ administrative hours every week.",
    developersNote:
      "Architected and engineered the official web platform using Next.js 16 (App Router, Turbopack) and React 19 with strict TypeScript typing. Implemented high-performance interactive animations using Framer Motion, dynamic English/French localization powered by Google Cloud Translate and context providers, custom Radix UI primitives with Tailwind CSS v4, GA4 Consent Mode v2, and Schema.org Organization structured SEO metadata.",
    keyFeatures: [
      "Autonomous Radiology Protocoling (GoAutomateDI) with modality worklist matching",
      "Medical Prescription OCR (GoAutomateRX) for handwritten and faxed script extraction",
      "Automated DICOM 3 Anonymization and high-throughput PACS server routing",
      "Emergency Room Intelligence (GoAutomateER) with prior patient history auto-retrieval",
      "Universal Healthcare Interoperability for Epic Systems, Oracle Cerner, and MEDITECH",
      "Standards compliance with HL7 (v2 & v3), HL7 FHIR, and Ocean eReferral networks",
      "Real-time multilingual translation engine (English & French) with cookie persistence",
      "Privacy and compliance controls with GDPR/PHIPA cookie consent & Google reCAPTCHA v2",
    ],
    deliverables: [
      "Enterprise Next.js 16 frontend platform with React 19 & Turbopack",
      "Interactive masonry layout for AI capabilities showcase",
      "Animated card stack and multi-device video case study players",
      "Full i18n translation system with server-side cookies and client context",
      "Integration showcase grid with custom motion hover states",
      "Automated sitemap generator (next-sitemap) & JSON-LD structured SEO",
    ],
    challenges: [
      "Structuring complex, multi-department enterprise medical AI concepts into an engaging, clear user experience",
      "Synchronizing seamless bilingual translation across both static server-rendered and dynamic client components",
      "Optimizing high-definition video assets and complex vector diagrams for 100/100 Core Web Vitals performance",
    ],
    futurePlans: [
      "Live interactive demo sandbox for simulated DICOM de-identification",
      "SMART-on-FHIR embedded clinical app preview portal",
      "Multi-region real-time hospital wait-time and capacity status widgets",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "Redux Toolkit",
      "Radix UI",
      "HealthTech",
      "Agentic AI",
      "DICOM",
      "HL7 FHIR",
    ],
    liveUrl: "https://goautomatemd.com",
    githubUrl: "https://github.com/Ramjanict/goautomatemd-platform",
    timeline: "2024 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },
  {
    slug: "areese",
    title: "Areese (Don't Forget)",
    tagline: "Intelligent Appointment & Team Operations SaaS",
    category: "SaaS & Productivity",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/dashboard-preview.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/dashboard-preview.jpg",
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/public-booking-portal.png",
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/team-collaboration-hub.png",
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/followup-workflow-automation.png",
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/integrations-and-templates.png",
      "https://raw.githubusercontent.com/Ramjanict/areese-frontend/main/src/assets/images/appointment-calendar-view.png",
    ],
    description:
      "A full-featured appointment scheduling, client booking, and team collaboration SaaS platform enabling consultancies and agencies to manage consultations, follow-ups, and payments.",
    overview:
      "Areese (branded as Don't Forget) is an all-in-one business operations and appointment scheduling platform designed for consultancies, agencies, and service professionals. It combines public client scheduling with deep internal operational workflows — including smart follow-up queues, team project tracking, automated message templates, and multi-channel video conferencing integrations.",
    developersNote:
      "Architected and developed the entire frontend application using React 19, TypeScript, and Vite. Designed role-based protected routing for Admin and Collaborator workspaces, integrated dynamic booking packages with calendar slot picking, Redux Toolkit centralized state, and connected payment and video conferencing services.",
    keyFeatures: [
      "Self-serve public booking portal with custom limits and URL redirects",
      "Tiered consultation packages with duration notes and service fees",
      "Role-Based Access Control (Admin and Collaborator dedicated dashboards)",
      "Multi-stage follow-up pipeline (Due Today, Follow-Up, Late, Upcoming)",
      "Video conferencing integrations with Google Meet and Zoom",
      "Payment gateway integration for Stripe and PayPal",
      "1-Click copy-to-clipboard reusable message templates",
      "Real-time analytics dashboard with Recharts KPIs and booking metrics",
    ],
    deliverables: [
      "Full frontend architecture with React 19 & TypeScript",
      "Admin command center and collaborator workspaces",
      "Interactive public booking flow with live calendar picking",
      "Automated client follow-up tracking and reminder engine",
      "Redux Toolkit state management layer",
      "Automated CI/CD deployment configuration on Vercel",
    ],
    challenges: [
      "Architecting smooth role-based routing and authorization guards across client, collaborator, and admin portals",
      "Building an interactive calendar appointment scheduler with dynamic time slot validation and booking limits",
      "Implementing clean multi-panel settings for integrations, branding, and notification templates",
    ],
    futurePlans: [
      "Two-way calendar sync with Google Calendar and Outlook",
      "Automated SMS and WhatsApp reminder notifications",
      "AI-assisted follow-up notes and client satisfaction scoring",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "Radix UI",
      "Recharts",
      "Framer Motion",
    ],
    liveUrl: "https://getdontforget.net",
    githubUrl: "https://github.com/Ramjanict/areese-frontend",
    timeline: "2025 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },
  {
    slug: "ecommerce-kicks",
    title: "KICKS — Sneaker Hyperstore",
    tagline: "High-Performance Sneaker & Streetwear E-Commerce Platform",
    category: "E-Commerce & Retail",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product11.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product11.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product12.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product13.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product14.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ecommerce-kicks/main/src/assets/images/product15.jpg",
    ],
    description:
      "A modern, high-performance sneaker e-commerce hyperstore featuring interactive product showcases, dynamic multi-angle galleries, persistent cart synchronization, and fluid motion design.",
    overview:
      "KICKS is an end-to-end footwear e-commerce application engineered for sneakerheads and streetwear brands. Built with React 18, TypeScript, and Tailwind CSS v4, the platform delivers an ultra-fast retail experience featuring an interactive dynamic hero showcase, responsive category sliders, live search overlay, multi-variant selectors (size and color), and a persistent shopping cart powered by Redux Toolkit and Redux Persist.",
    developersNote:
      "Architected and implemented the full client-side application utilizing React 18, TypeScript, and Vite. Configured centralized global state and server caching with Redux Toolkit and RTK Query, built localStorage cart persistence with Redux Persist, integrated Embla Carousel for smooth touch gestures, and crafted micro-interactions and route transitions with Framer Motion.",
    keyFeatures: [
      "Interactive hero banner with dynamic thumbnail switcher and spring animations",
      "Comprehensive product catalog grid with animated skeleton loading states",
      "High-resolution product detail view with multi-angle image gallery",
      "Interactive size picker and color variant selector with real-time feedback",
      "Persistent shopping cart with Redux Persist (retains items across page reloads)",
      "Dynamic order summary calculating item totals, quantities, and adjustments",
      "Animated search overlay modal with backdrop filter and keyboard accessibility",
      "Touch-optimized category slider powered by Embla Carousel",
      "Mobile-first responsive drawer menu and accessible Radix UI component primitives",
    ],
    deliverables: [
      "Full frontend web application built with React 18, TypeScript & Vite",
      "Centralized Redux Toolkit store with RTK Query API caching and Redux Persist",
      "Responsive design system styled with modern Tailwind CSS v4 and shadcn/ui",
      "Smooth UI micro-interactions and route animations using Framer Motion",
      "Accessible modal dialogs and responsive navigation drawer",
      "Production deployment configuration on Vercel with automatic rewrites",
    ],
    challenges: [
      "Synchronizing reactive client cart state with browser localStorage via Redux Persist while preventing hydration and re-render mismatches",
      "Creating seamless responsive touch carousels that work identically across mobile touchscreens and desktop pointer devices",
      "Managing multi-variant selection state (sizes, colors, quantities) dynamically linked to cart dispatch actions",
    ],
    futurePlans: [
      "Full Stripe & SSLCommerz checkout payment gateway integration",
      "Customer authentication and order history tracking with Supabase / Firebase",
      "User wishlist functionality and real-time stock alert notifications",
    ],
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "RTK Query",
      "Redux Persist",
      "Framer Motion",
      "shadcn/ui",
      "Radix UI",
    ],
    liveUrl: "https://ecommerce-kicks-steel.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/ecommerce-kicks",
    timeline: "2024 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },
  {
    slug: "edward-moll",
    title: "Edward Moll (AAAAAffordable Moving)",
    tagline: "Full-Stack Relocation & Moving Logistics Management Platform",
    category: "Logistics & Enterprise Web",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/moving-truck-fleet.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/moving-truck-fleet.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/crew-packing-service.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/office-relocation.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/specialty-piano-moving.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/happy-homeowners.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/hero.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/delivery1.jpg",
      "https://raw.githubusercontent.com/Ramjanict/edwardmoll-frontend/main/src/assets/images/delivery2.jpg",
    ],
    description:
      "A modern, full-stack relocation and moving operations platform serving Phoenix, Arizona. Features instant quote estimates, interactive service catalogs, dynamic media gallery, community updates, and a secured JWT admin management center.",
    overview:
      "Edward Moll Moving & Relocation Services (operating commercially as AAAAAffordable Moving) is an end-to-end relocation platform built for residential, commercial, senior, and realtor moving services across the Phoenix Valley. The solution pairs a high-conversion, responsive public web portal with a robust NestJS & Prisma REST API backend and a dedicated administrative dashboard for managing service listings, customer inquiries, blog publications, and media gallery assets.",
    developersNote:
      "Architected and developed both the frontend client and administrative portal using React 19, TypeScript, Vite, Tailwind CSS v4, and Redux Toolkit, and built the companion backend with NestJS 11, Prisma ORM, and PostgreSQL. Engineered secure JWT authentication with role-based access control, integrated Cloudinary CDN for real-time asset uploads, configured Nodemailer email dispatch for customer lead capture, and deployed seamlessly on Vercel and Render.",
    keyFeatures: [
      "Under-60-second instant moving quote estimator requiring no forced contact capture",
      "Comprehensive moving service catalog (Residential, Office, Senior Transition, Crating)",
      "Realtor VIP partner hub tailored for Valley real estate agents and quick-turnaround moves",
      "Interactive community updates / blog engine with nested discussion comments and like system",
      "Dynamic high-resolution media gallery backed by Cloudinary CDN media management",
      "Protected administrative portal with JWT authentication and role-based access control (Admin & Owner)",
      "Centralized lead inbox tracking customer inquiries with read/unread statuses and automated email alerts",
      "Interactive Swagger REST API documentation for seamless client-server contract synchronization",
    ],
    deliverables: [
      "Full frontend application and admin dashboard built with React 19, TypeScript, and Vite",
      "Robust NestJS 11 REST API engine with modular architecture and Swagger documentation",
      "Prisma ORM database layer with PostgreSQL schema migrations and seed scripts",
      "Redux Toolkit centralized state management with RTK Query and persistent auth state",
      "Cloudinary CDN media integration for high-performance responsive image delivery",
      "Automated transactional email notification pipeline via Nodemailer SMTP",
      "Automated CI/CD deployment configuration on Vercel (Frontend) and Render (Backend API)",
    ],
    challenges: [
      "Designing a seamless dual-purpose portal that balances public marketing conversions with protected administrative operations",
      "Managing multi-level nested blog comments and real-time like interactions with optimistic UI updates",
      "Optimizing high-resolution photography and media asset delivery across varying device viewports and network bandwidths",
      "Configuring zero-downtime decoupled deployments with CORS policies across Vercel and Render",
    ],
    futurePlans: [
      "Interactive moving cost calculator with room-by-room inventory selection",
      "Real-time moving truck GPS tracking for customers on moving day",
      "Integrated online deposit payments via Stripe for confirmed booking reservations",
      "Automated SMS and WhatsApp dispatch notifications for moving crew and homeowners",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "NestJS 11",
      "Prisma ORM",
      "PostgreSQL",
      "Cloudinary",
      "Swagger",
      "Vercel",
    ],
    liveUrl: "https://edwardmoll-frontend-nine.vercel.app",
    githubUrl: "https://github.com/Ramjanict/edwardmoll-frontend",
    timeline: "2025 - Present",
    role: "Full-Stack Developer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Full-Stack Developer" }],
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
    slug: "vibecheck",
    title: "VibeCheck",
    tagline: "Live DJ Booking & Nightlife Venue Management SaaS",
    category: "Entertainment & Event Management SaaS",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/vibecheck-hero-banner.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/vibecheck-hero-banner.jpg",
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/venue-analytics-dashboard.jpg",
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/dj-live-broadcasting.jpg",
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/venue-management-stages.jpg",
      "https://raw.githubusercontent.com/Ramjanict/hussshehata/main/public/images/dj-gig-calendar-schedule.jpg",
    ],
    description:
      "A comprehensive nightlife operations and talent booking platform connecting DJs, nightclub venues, and live audiences with real-time performance broadcasting, interactive gig calendars, and financial analytics.",
    overview:
      "VibeCheck is an end-to-end entertainment SaaS platform architected for modern music venues, promoters, and touring DJs. The platform bridges administrative operations with real-time performance tracking through dual interfaces: a Super Admin Suite for reviewing venue applications, monitoring subscription growth, and managing talent rosters; and a dedicated DJ Command Portal featuring live set broadcasting, incoming crowd song requests, gig scheduling, and performance analytics.",
    developersNote:
      "Architected and implemented the complete frontend application using React 19, TypeScript, and Vite. Implemented dual layout systems (DashboardLayout & DjLayout) guarded by role-based protected routes, integrated Redux Toolkit Query with automated JWT silent refresh rotation, built custom Recharts visualizations for revenue and genre distribution, and designed an instant 1-click demo login experience.",
    keyFeatures: [
      "DJ Live Broadcasting console with live viewer counters, duration timers, and crowd song requests",
      "Interactive DJ Gig Calendar with color-coded status badges (Confirmed, Pending, Paid)",
      "Venue Management engine with application approvals, stage specs, and acoustics tracking",
      "Deep performance analytics with Recharts for monthly revenue, gig volume, and genre breakdown",
      "Multi-tier subscription monetization management with growth tracking and transaction feeds",
      "Centralized DJ Roster and audience directory with rating metrics and profile controls",
      "Customizable DJ profile with equipment specs, music genres, and Spotify/SoundCloud integrations",
      "Instant 1-Click demo authentication with pre-filled credentials for Admin and DJ personas",
    ],
    deliverables: [
      "Complete frontend architecture built with React 19, TypeScript, and Tailwind CSS v4",
      "Super Admin Command Center for global KPIs, venue requests, and platform governance",
      "Dedicated DJ Portal with live broadcasting booth, booking calendar, and analytics",
      "Redux Toolkit & RTK Query centralized state management with persistent storage",
      "Custom dark-mode cyberpunk UI design system using Radix UI primitives and Lucide icons",
      "Continuous deployment pipeline with live production hosting on Vercel",
    ],
    challenges: [
      "Architecting smooth dual-role layout routing and navigation between administrative controls and artist live features",
      "Designing responsive, high-performance data visualizations for revenue curves, ratings, and genre distributions using Recharts",
      "Handling seamless token re-authentication and session persistence across complex nested routes without UX interruption",
    ],
    futurePlans: [
      "Real-time WebSocket integration for bidirectional live song voting and DJ-to-crowd chat",
      "Automated invoicing, escrow payouts, and smart contract gig deposits via Stripe Connect",
      "Spotify & Apple Music API integration for automatic DJ setlist track identification",
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "RTK Query",
      "Recharts",
      "Radix UI",
      "Lucide React",
    ],
    liveUrl: "https://hussshehata.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/hussshehata",
    timeline: "2025 - 2026",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },
];

/* ─── Learning / Personal Projects ─────────────────────────── */

export const LEARNING_PROJECTS: LearningProject[] = [
  {
    slug: "block-graph",
    title: "NodeFlow – Block Graph Builder",
    category: "React.js",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_banner_hero_1791092084963.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_banner_hero_1791092084963.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_main_interface_1791091048777.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_drag_interaction_1791091262740.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_connectors_diagram_1791092120191.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_mindmap_usecase_1791092173033.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_dark_theme_1791092148881.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Block-Graph/main/src/assets/nodeflow_mobile_responsive_1791092196146.jpg",
    ],
    description:
      "A zero-dependency interactive visual node editor and block graph builder with dynamic hierarchical tree layouts and real-time SVG connectors.",
    overview:
      "NodeFlow is an interactive tree-structured node graph visualizer built with React, TypeScript, and Tailwind CSS. It enables users to spawn child nodes dynamically, drag and reposition blocks across a full-viewport canvas, and render live orthogonal SVG polyline connectors that adapt in real time to node coordinates without external graph libraries.",
    keyFeatures: [
      "Dynamic child node spawning with automatic horizontal & vertical offset calculation",
      "Smooth drag-and-drop node repositioning via native mouse event listeners",
      "Real-time orthogonal (step) SVG polyline connection lines with dynamic mid-points",
      "Zero external graph library dependencies (pure React + SVG architecture)",
      "Hierarchical tree state management with TypeScript type safety",
      "Full-viewport responsive canvas with overflow protection",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "SVG",
      "Node Graph",
      "Drag & Drop",
      "Tree Visualization",
    ],
    codeUrl: "https://github.com/Ramjanict/Block-Graph",
    demoUrl: "https://block-graph-seven.vercel.app/",
    timeline: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "relationship-visualizer",
    title: "NodeLink — Real-Time Relationship Graph Visualizer",
    category: "React.js",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/app_preview_mockup.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/github_hero_banner.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/app_preview_mockup.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/realtime_sync_concept.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/network_graph_abstract.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Relationship-Visualizer/main/src/assets/images/nodelink_app_icon.jpg",
    ],
    description:
      "A real-time relationship visualizer that dynamically parses free-form text into an interactive, zero-dependency SVG network graph on every keystroke.",
    overview:
      "NodeLink is an interactive relationship graph tool built with React 19, TypeScript, and Zustand. It continuously extracts person and relationship schemas from a free-text editor, rendering an interactive SVG network graph in real time with age-proportional nodes and labeled directional edges—without relying on any external charting libraries.",
    keyFeatures: [
      "Real-time keystroke text parsing with forgiving loose-JSON detection",
      "Zero-dependency native SVG graph rendering for optimal performance",
      "Age-proportional dynamic node scaling and labeled directional edges",
      "Graceful error-free degradation (invalid objects auto-remove without crashing)",
      "Full multilingual Unicode support for person names and relationships",
      "Minimalist global state management powered by Zustand",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "SVG Graph",
      "Data Visualization",
      "Real-Time Parser",
    ],
    codeUrl: "https://github.com/Ramjanict/Relationship-Visualizer",
    demoUrl: "https://relationship-visualizer.vercel.app",
    timeline: "2024",
    role: "Frontend Developer",
  },
  {
    slug: "square-video-player",
    title: "Square Video Player",
    category: "React.js",
    // Primary cover image (uses raw GitHub link so it renders directly in <img> tags)
    image:
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/hero-banner.svg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/hero-banner.svg",
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/player-preview.svg",
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/dark-cyber-theme.svg",
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/perimeter-seek-demo.svg",
      "https://raw.githubusercontent.com/Ramjanict/Square-Video-Player/main/assets/component-architecture.svg",
    ],
    description:
      "A sleek 1:1 squircle video player featuring an animated SVG perimeter progress ring, smooth quadratic easing seeking, and glowing neon accents.",
    overview:
      "Square Video Player reimagines conventional horizontal video scrubbers by wrapping the playback timeline around the outer perimeter of a 1:1 rounded squircle container. Powered by React 19, TypeScript, and Tailwind CSS v4, it computes real-time SVG stroke-dashoffset progression, tracks border click coordinates across four quadrants for immediate seeking, and applies mathematical quadratic ease-in/out interpolation without relying on external media player libraries.",
    keyFeatures: [
      "1:1 Geometric Squircle Frame (400x400 with smooth 50px rounded corners)",
      "360° SVG Perimeter Progress Ring with glowing drop-shadow effects",
      "Interactive 4-Quadrant Border Scrubbing (Top, Right, Bottom, Left edge mapping)",
      "Fluid Quadratic Easing Seek Interpolation powered by requestAnimationFrame",
      "Real-time Synchronized Angular Pointer Indicator tracking the circumference",
      "Lightweight Zero-Bloat Architecture built purely on native HTML5 Media API",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "SVG Animation",
      "HTML5 Media",
      "Custom Video Player",
      "Interactive UI",
    ],
    codeUrl: "https://github.com/Ramjanict/Square-Video-Player",
    demoUrl: "https://square-video-player.vercel.app",
    timeline: "2025",
    role: "Frontend Developer",
  },
  {
    slug: "recursive-partitioner",
    title: "Recursive Partitioner",
    category: "React.js",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/hero-preview.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/hero-preview.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/architecture-tree.svg",
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/split-interaction.svg",
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/drag-resize-hud.svg",
      "https://raw.githubusercontent.com/Ramjanict/Recursive-Partitioner/main/public/screenshots/pruning-workflow.svg",
    ],
    description:
      "An interactive, zero-dependency recursive split-pane layout engine that models browser viewports as expandable binary trees with dynamic drag-resizing and magnetic snapping.",
    overview:
      "Recursive Partitioner is an interactive web-based layout builder inspired by tiling window managers (i3, tmux) and multi-pane IDEs. It enables users to infinitely subdivide viewports along vertical and horizontal axes, dynamically adjust partition ratios with real-time HUD feedback, magnetically snap to standard fractions, and seamlessly rebalance layouts through automated tree pruning and child hoisting.",
    keyFeatures: [
      "Infinite dual-axis recursive splitting (vertical [v] and horizontal [h])",
      "Stateful HSL color persistence for parent partitions and randomized child hues",
      "Fluid divider drag-to-resize with safe boundary clamping (10% – 90%)",
      "Real-time HUD ratio tooltip with magnetic snap alignment (1/4th, 1/2th, 3/4th)",
      "Automated binary tree rebalancing and child hoisting upon partition removal",
      "Zero-dependency UI core built purely with React 18, TypeScript, and Zustand",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Vite",
      "Binary Tree",
      "Split Pane",
      "Layout Engine",
    ],
    codeUrl: "https://github.com/Ramjanict/Recursive-Partitioner",
    demoUrl: "https://recursive-partitioner-beta.vercel.app",
    timeline: "2024",
    role: "Frontend Developer",
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

export function getClientProjectBySlug(
  slug: string,
): ClientProject | undefined {
  return CLIENT_PROJECTS.find((p) => p.slug === slug);
}

export function getLearningProjectBySlug(
  slug: string,
): LearningProject | undefined {
  return LEARNING_PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return [
    ...CLIENT_PROJECTS.map((p) => p.slug),
    ...LEARNING_PROJECTS.map((p) => p.slug),
  ];
}
