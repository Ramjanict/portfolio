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
  previewUrl?: string;
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
    slug: "eventiq",
    title: "Eventiq Event OS",
    tagline:
      "Enterprise Multi-Role Event Management & Turnstile Operating System",
    category: "Enterprise SaaS & Event Tech",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/conference-keynote.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/conference-keynote.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/turnstile-qr-checkin.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/gala-banquet-venue.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/production-control-booth.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Eventiq/main/frontend/public/images/events/attendees-networking.jpg",
    ],
    description:
      "An enterprise-grade, multi-role Event Management Operating System designed to power the complete lifecycle of events across platform administrators, independent organizers, production agencies, convention venues, turnstile gate staff, and attendees.",
    overview:
      "Eventiq Event OS is a comprehensive event operations ecosystem unifying 6 dedicated user roles into a single cohesive platform. It bridges public attendee discovery and multi-tier checkout with complex behind-the-scenes event logistics — including sub-second turnstile QR scanning with offline service worker fallback, interactive banquet table floorplan management, multi-gateway payments (Flutterwave), omnichannel messaging (WhatsApp Cloud API, Twilio, Resend), and multilingual voice RSVP.",
    developersNote:
      "Architected and engineered the full-stack monorepo from scratch. Built the modern Next.js 15 frontend with React 19, TypeScript, Tailwind CSS, and Redux Toolkit / RTK Query with automated role-based routing guards. Engineered the robust NestJS 10 backend modular monolith with 15 domain modules, Prisma ORM with connection pooling to Neon Serverless PostgreSQL, Passport JWT authentication with refresh token rotation, offline PWA turnstile scanning engine with IndexedDB sync, and comprehensive Swagger OpenAPI documentation.",
    keyFeatures: [
      "Universal Multi-Role Access Control across 6 dedicated dashboards (Admin, Individual, Agency, Venue, Gate Staff, Guest)",
      "Sub-second turnstile camera QR code scanner with offline PWA caching (sw-gate.js) and duplicate check-in detection",
      "Interactive banquet floorplan designer mapping attendees to Round, Rectangular, and Square tables",
      "Multi-tier digital ticketing engine with capacity enforcement and dynamic early bird pricing",
      "Agency workspace with corporate client retainers, B2B invoicing, and team permissions",
      "Venue operations suite with space lease availability calendar and facility management",
      "Omnichannel messaging dispatch via Meta WhatsApp Cloud API, Twilio SMS, and Resend email",
      "Multilingual Voice RSVP recognition supporting multiple regional languages via Google Cloud / Gemini",
      "End-to-end payment processing with Flutterwave and webhook reconciliation",
      "Real-time platform telemetry, revenue GMV analytics, and KYC organizer approval workflows",
    ],
    deliverables: [
      "Full-stack monorepo architecture with Next.js 15 (Frontend) and NestJS 10 (Backend)",
      "6 role-specific dashboards with automated post-login routing and permissions",
      "High-speed turnstile PWA scanner with offline IndexedDB manifest cache and auto-sync",
      "Complete relational database schema with 25+ Prisma models on Neon Serverless PostgreSQL",
      "Dual JWT authentication pipeline with access/refresh token rotation and bcryptjs encryption",
      "Comprehensive Swagger OpenAPI 3.0 interactive documentation suite",
      "Production CI/CD deployment on Vercel (Frontend) and Render (Backend)",
    ],
    challenges: [
      "Engineering a zero-latency, offline-first gate scanner capable of validating attendees in high-density convention halls during network dropouts",
      "Designing a flexible 6-role database and API architecture that cleanly separates permissions while sharing core ticketing and event data",
      "Optimizing PostgreSQL connection pooling across serverless Next.js instances and containerized NestJS services using PgBouncer on Neon",
      "Integrating real-time table seating constraints to prevent over-allocation in complex banquet hall configurations",
    ],
    futurePlans: [
      "Direct thermal badge and lanyard printing integration via WebUSB / Bluetooth",
      "Real-time venue density and crowd heatmaps using computer vision edge nodes",
      "Automated AI attendee match-making and personalized networking recommendations",
      "Self-serve sponsor and exhibitor lead capture portal with instant CRM export",
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "NestJS 10",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "Redux Toolkit",
      "Tailwind CSS",
      "PWA & Service Workers",
      "WebSockets",
      "Docker & Render",
      "Vercel",
    ],
    liveUrl: "https://eventiq-ochre.vercel.app",
    previewUrl: "https://eventiq-m71e.onrender.com/api/docs",
    githubUrl: "https://github.com/Ramjanict/Eventiq",
    timeline: "2025 - Present",
    role: "Lead Full-Stack Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Lead Full-Stack Engineer" }],
  },
  {
    slug: "clipstudio-pro",
    title: "ClipStudio Pro",
    tagline:
      "Cloud & In-Browser Video Editing Suite with Distributed Render Cluster",
    category: "Video Engineering & Cloud SaaS",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/color_grading_console.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/video_editor_workstation.jpg",
      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/color_grading_console.jpg",

      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/cinema_production_rig.jpg",
      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/cloud_render_servers.jpg",
      "https://raw.githubusercontent.com/Ramjanict/clipstudio-pro/main/frontend/src/assets/images/creator_studio_desk.jpg",
    ],
    description:
      "A high-performance cloud and in-browser non-linear video editor (NLE) engineered with React 19, NestJS 11, WebCodecs, FFmpeg WASM, and Socket.IO. Features client-side hardware-accelerated MP4 rendering, cloud rendering offload, and a peer-to-peer distributed browser worker rendering cluster.",
    overview:
      "ClipStudio Pro bridges the gap between lightweight web video tools and heavy desktop NLEs. Engineered to eliminate rendering bottlenecks and server compute costs, the platform features a dual-engine export architecture: an in-browser pipeline utilizing the WebCodecs API with GPU hardware encoding and WebAssembly FFmpeg, alongside a server-side NestJS and Fluent-FFmpeg rendering cluster. Creators benefit from a multi-track timeline (Video, Audio, Text, Stickers), keyframe animations, transition blending, color grading filters, and audio waveform scrubbing. Media assets are processed and streamed via Cloudinary, with project versions and user permissions persisted on Neon PostgreSQL.",
    developersNote:
      "Served as Lead Full-Stack & Video Systems Engineer. Architected and built the entire application from scratch across frontend, backend, and distributed compute layers. Developed the multi-track timeline and Canvas compositing engine in React 19, TypeScript, and Redux Toolkit; implemented hardware-accelerated client video encoding with the WebCodecs API and FFmpeg WASM; designed a real-time Socket.IO WebSocket gateway that chunks frame rendering across connected browser worker nodes; and built the NestJS 11 REST API with Neon PostgreSQL (Prisma ORM), Cloudinary media pipelines, and role-based security.",
    keyFeatures: [
      "Multi-track non-linear timeline supporting video, audio, text, and sticker layers with magnetic snapping and ripple delete",
      "Hardware-accelerated client-side MP4 video rendering leveraging the modern browser WebCodecs API",
      "Universal browser fallback rendering powered by WebAssembly FFmpeg (@ffmpeg/ffmpeg)",
      "Distributed WebSocket render cluster converting idle browser tabs into distributed compute worker nodes",
      "Cloud FFmpeg rendering engine for offloading complex multi-layer timeline compositions",
      "Automated Cloudinary media pipeline with video transcoding and hover-scrubbing sprite sheets",
      "Precision transform controls, keyframing, color grading filters (brightness, contrast, saturation), and transition presets",
      "Project version history snapshotting and auto-save persistence backed by Neon PostgreSQL",
      "Role-based Admin Dashboard for monitoring user accounts, cluster compute workers, and system metrics",
    ],
    deliverables: [
      "Responsive React 19 + TypeScript + Vite frontend with custom dark-themed studio UI and Tailwind CSS",
      "High-performance Canvas video player engine with 60fps playback, transform bounding boxes, and audio visualization",
      "Hybrid video export engine integrating WebCodecs, MP4-Muxer, and WebAssembly FFmpeg",
      "Distributed WebSocket cluster gateway (Socket.IO) coordinating frame-chunk distribution across client workers",
      "Production-grade NestJS 11 REST API backend with Prisma ORM, Neon PostgreSQL, and Cloudinary media processing",
      "Multi-cloud production deployment with continuous delivery on Vercel (Frontend) and Docker on Render (Backend)",
    ],
    challenges: [
      "Synchronizing multi-layer visual tracks (video frames, animated text overlays, stickers) with audio waveforms at millisecond precision during client-side WebCodecs canvas capture and MP4 muxing",
      "Architecting a fault-tolerant WebSocket protocol to chunk, distribute, render, and assemble video frames across dynamically connecting/disconnecting browser worker nodes without frame loss",
      "Achieving fluid 60fps timeline scrubbing performance with zero UI lag by caching Cloudinary sprite sheets and thumbnail assets in IndexedDB",
    ],
    futurePlans: [
      "AI-powered automated scene cut detection and smart silence removal",
      "Real-time multi-user collaborative editing sessions using WebSockets and operational transformation (OT)",
      "Automatic speech-to-text audio transcription for instant auto-captions and subtitle burning",
      "Custom 3D LUT (Look-Up Table) color grading profile imports and film grain emulation",
    ],
    tags: [
      "React 19",
      "NestJS 11",
      "TypeScript",
      "WebCodecs API",
      "FFmpeg",
      "WebAssembly",
      "Prisma ORM",
      "Neon PostgreSQL",
      "Cloudinary",
      "Socket.IO",
      "Redux Toolkit",
      "Tailwind CSS",
      "Vite",
      "Docker",
    ],
    liveUrl: "https://clipstudio-pro-one.vercel.app/",
    previewUrl: "https://clipstudio-pro.onrender.com/api/docs",
    githubUrl: "https://github.com/Ramjanict/clipstudio-pro",
    timeline: "2025 - Present",
    role: "Lead Full-Stack & Video Systems Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Lead Full-Stack Engineer" }],
  },

  {
    slug: "cognisphere-ai",
    title: "Cognisphere AI",
    tagline: "Unified Multi-Model AI Co-Pilot & Synthesis Platform",
    category: "Artificial Intelligence & SaaS",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-hero.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-hero.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-comparison.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-synthesis.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-dashboard.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Cognisphere-AI/main/public/images/preview-image-gen.jpg",
    ],
    description:
      "An enterprise AI comparison & consensus SaaS platform that dispatches queries concurrently to leading foundation models (GPT-4o, Claude 3.5, Gemini 1.5, Perplexity), provides side-by-side responses, and synthesizes high-accuracy consensus answers alongside an AI image studio.",
    overview:
      "Cognisphere is a multi-model AI platform developed for client Intellecta Labs LLC to eliminate AI hallucinations, bias, and fragmented subscription fees. By issuing prompts simultaneously to top LLMs (OpenAI ChatGPT, Anthropic Claude, Google Gemini, and Perplexity), users can review differing reasoning styles side-by-side or utilize Cognisphere's intelligent synthesis engine for an optimal consolidated answer. The platform includes a generative AI image studio, LaTeX mathematical equation rendering, thread history management, and Stripe subscription billing.",
    developersNote:
      "Served as Lead Frontend Engineer for client Intellecta Labs LLC. Architected and developed the entire frontend web application using Next.js 16 (App Router), React 18, TypeScript, and Tailwind CSS v4. Engineered parallel asynchronous model dispatching with Redux Toolkit Query, implemented Firebase OAuth & JWT authentication, built interactive Markdown and LaTeX math parsing (KaTeX), and created fluid dark-mode micro-animations with Framer Motion and Radix UI.",
    keyFeatures: [
      "Parallel multi-LLM orchestration across OpenAI GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and Perplexity",
      "Intelligent AI consensus & synthesis engine delivering hallucination-free, unified summaries",
      "Interactive side-by-side comparative analysis view with model-specific response tabs",
      "Generative AI image creation studio with custom aspect ratios, resolutions, and 1-click downloads",
      "Rich Markdown code formatting with LaTeX mathematical equation rendering via KaTeX",
      "Dual authentication flow with Email/Password (OTP verification) and Firebase Google OAuth",
      "Dynamic chat history & session management with debounced search, renaming, and deletion",
      "Full SaaS billing and subscription lifecycle management powered by Stripe checkout",
    ],
    deliverables: [
      "Modern Next.js 16 App Router frontend architecture with TypeScript & Tailwind CSS v4",
      "Interactive AI co-pilot workspace and comparative model inspection interface",
      "Generative AI image studio with responsive media grid and instant downloads",
      "Redux Toolkit and RTK Query state management layer with persistent session caching",
      "Multi-mode authentication system (Firebase OAuth + secure JWT session cookies)",
      "Production CI/CD deployment configuration on Vercel with responsive dark-theme design",
    ],
    challenges: [
      "Orchestrating and reconciling simultaneous streaming responses from multiple distinct AI adapters within a single unified chat UI",
      "Implementing performant Markdown and complex LaTeX mathematical formula parsing without client-side hydration mismatches",
      "Designing an adaptive, collapsible dashboard sidebar with real-time session search, pagination, and subscription gating",
    ],
    futurePlans: [
      "Multi-turn conversational context persistence across individual foundation models",
      "Custom user prompt templates and specialized system persona builder",
      "Thread export capabilities to PDF, Markdown, and structured JSON",
      "Multi-modal audio transcription and speech-to-speech interaction",
    ],
    tags: [
      "Next.js 16",
      "React 18",
      "TypeScript",
      "Tailwind CSS v4",
      "Redux Toolkit",
      "RTK Query",
      "Firebase Auth",
      "Radix UI",
      "Framer Motion",
      "KaTeX",
      "Stripe",
    ],
    liveUrl: "https://cognisphere.us/home",
    previewUrl: "https://sarbeswardas-frontend-tawny.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/Cognisphere-AI",
    timeline: "2025 - Present",
    role: "Lead Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Lead Frontend Engineer" }],
  },
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
    slug: "energhx",
    title: "ENERGHX™ (EnerghxPlus)",
    tagline: "Net-Zero Energy Management & Clean-Tech Engineering SaaS",
    category: "CleanTech & Energy SaaS",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/smart-energy-dashboard.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/smart-energy-dashboard.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/netzero-green-building.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/renewable-microgrid-farm.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/ev-charging-hub.jpg",
      "https://raw.githubusercontent.com/Ramjanict/ENERGHX-/main/public/images/thermal-hvac-twin.jpg",
    ],
    description:
      "An enterprise clean-tech platform providing thermal comfort modeling, indoor air quality simulation, renewable microgrid sizing, and end-to-end net-zero energy management for sustainable built environments.",
    overview:
      "ENERGHX™ (EnerghxPlus) is a comprehensive web and SaaS platform engineered for energy transition professionals, architects, and facility managers. It bridges architectural building audits with complex renewable sizing engines (Solar PV, Wind, Biomass, BESS, and EV Charging), fluid thermal comfort simulations (PMV/PPD, IAQ), RES sequence validations, digital engineering contracts, and an integrated certified engineering Learning Management System (LMS).",
    developersNote:
      "Architected and developed the complete frontend ecosystem using React 19, TypeScript, and Vite with Tailwind CSS v4. Engineered complex multi-role authorization guards (Super Admin, Instructor, Basic Consumer, Standard Consumer, Server/Developer), integrated Redux Toolkit RTK Query state management with persistence, dynamic charting via Recharts, and automated client-side proposal/contract PDF generation with digital signature capture.",
    keyFeatures: [
      "Real-time smart energy dashboard tracking solar, wind, BESS battery storage, and net exporting",
      "Net-Zero Energy Building (NZEB) & Zero-Emission Vehicle (ZEV) transition simulations",
      "Thermal comfort modeling & Indoor Air Quality (IAQ) digital twin (CO2, PM2.5, TVOC, airflow)",
      "Granular building inventory, room zone management, and appliance duty-cycle auditing",
      "Automated sizing calculators for Solar PV arrays, Wind turbines, and Biomass systems",
      "Battery Energy Storage System (BESS) lifecycle modeling and dispatch schedule simulator",
      "Electric Vehicle (EV) charging station infrastructure planning and grid load optimization",
      "RES sequence validation and multi-tier engineering review approval matrix",
      "Digital proposal contracts with canvas signature capture and instant PDF export (jsPDF)",
      "Integrated Clean-Tech LMS with courses, modules, quizzes, and engineer certifications",
      "Multi-role RBAC for Super Admin, Instructors, Basic Consumers, Standard Consumers, and Servers",
    ],
    deliverables: [
      "Complete frontend architecture built with React 19, TypeScript, and Vite",
      "Multi-role layout system with dedicated dashboards for Admin, Consumer, and Server roles",
      "Full engineering simulation suite for NZEB, ZEV, FVM thermal comfort, and HVAC loads",
      "Digital contract proposal generator with automated checkout and PDF export",
      "Centralized state management using Redux Toolkit (RTK Query) and redux-persist",
      "Clean-Tech LMS platform supporting course catalogs, quizzes, and certificate issuance",
      "Production-ready deployment pipeline hosted on Vercel",
    ],
    challenges: [
      "Structuring complex multi-stage engineering calculation forms and state across sizing modules",
      "Handling high-performance real-time telemetry charts, airflow gradients, and simulation graphs",
      "Designing robust Role-Based Access Control (RBAC) protecting distinct portals across multiple personas",
      "Implementing accurate client-side PDF document generation and digital canvas signature binding",
    ],
    futurePlans: [
      "Live IoT sensor gateway integrations via WebSockets for real-time facility telemetry",
      "AI-driven predictive energy dispatch and HVAC load anomaly detection",
      "3D BIM (Building Information Modeling) file import and automated thermal envelope extraction",
      "Decentralized renewable energy carbon credit trading and blockchain verification",
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
      "Framer Motion",
      "jsPDF",
      "CleanTech",
      "Net-Zero",
    ],
    liveUrl: "https://energhx.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/ENERGHX-",
    timeline: "2025 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
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
  {
    slug: "vitalis",
    title: "Vitalis Health",
    tagline: "AI-Powered Health & Wellness Admin Dashboard",
    category: "Healthcare & AI SaaS",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/dashboard-hero.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/dashboard-hero.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/health-vitals.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/ai-wellness-assistant.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/nutrition-scanner.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Vitalis-Health/main/public/images/wellness-nudges.jpg",
    ],
    description:
      "An enterprise-grade, responsive healthcare and wellness management dashboard delivering real-time patient biometrics, wearable device synchronization, AI health companion logs, nutrition database tracking, and proactive wellness nudges.",
    overview:
      "Vitalis is an all-in-one AI-driven healthcare and wellness administration platform designed for health coaches, clinics, and medical practitioners. It bridges continuous patient vitals monitoring from wearable ecosystems (Apple Health, Fitbit, Garmin, Whoop, Oura) with proactive habit nudges, AI diagnostic chat monitoring, biomarker lab report workflows, and macronutrient intake analytics.",
    developersNote:
      "Architected and developed the full standalone frontend application using Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Implemented a zero-dependency local reactive mock state layer with Redux Toolkit, interactive biometric charts using Recharts, client-side authentication guards, and comprehensive modal workflows for user profiles, lab reports, and habit triggers.",
    keyFeatures: [
      "Real-time patient biometrics monitoring (Heart Rate ECG, SpO2, Sleep Stages, Active Minutes)",
      "Wearable ecosystem integration support (Apple Watch, Fitbit, Garmin, Whoop, Oura)",
      "AI Wellness Companion chat session monitoring and automated triage logs",
      "Clinical lab report management pipeline with biomarker review workflows",
      "Nutrition database with calorie, macronutrient breakdown, and food scanning trends",
      "Behavioral wellness nudges and habit reminder scheduler with engagement metrics",
      "Interactive Recharts visualizations for user growth, health trends, and vital ranges",
      "Admin security center with session controls, credentials management, and theme preferences",
    ],
    deliverables: [
      "Complete Next.js 16 App Router & React 19 architecture with TypeScript",
      "Interactive executive KPI analytics dashboard with dynamic Recharts",
      "User & patient management system with debounced search and profile inspection modals",
      "Standalone reactive mock data layer with instant local persistence",
      "Client-side protected route authentication guards and demo sign-in workflow",
      "Production deployment configuration optimized for Vercel",
    ],
    challenges: [
      "Decoupling the application from external backend dependencies into an autonomous, high-performance static client with persistent mock state",
      "Designing multi-metric Recharts visualizations for complex physiological vitals while maintaining fluid 60fps responsiveness",
      "Structuring comprehensive modal forms and detail dialogs for patient records, lab findings, and behavioral nudge automations",
    ],
    futurePlans: [
      "Direct Bluetooth Web API synchronization with local health monitors and smart scales",
      "FHIR and HL7 standard export pipelines for hospital EHR system interoperability",
      "Predictive early warning anomaly detection models using real-time vital streams",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "Radix UI",
      "Recharts",
      "Lucide React",
      "Vercel",
    ],
    liveUrl: "https://surajashray-ten.vercel.app",
    githubUrl: "https://github.com/Ramjanict/Vitalis-Health",
    timeline: "2025 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },

  {
    slug: "nxdi",
    title: "NXDI",
    tagline: "Intelligent Processes & Workflow Automation",
    category: "Digital Transformation & Operations",
    status: "Completed",
    image: `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/digital_transformation_future.png`,
    images: [
      `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/digital_transformation_future.png`,
      `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/process_mining_insights.png`,
      `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/operational_growth_kpi.png`,
      `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/intelligent_automation_rpa.png`,
      `https://raw.githubusercontent.com/Ramjanict/NXDI-Digital-Process-Intelligence/main/public/assets/Images/homecare_lead_intelligence.png`,
    ],
    description:
      "A Melbourne consultancy marketing platform that presents NXDI's Mine, Improve, and Automate method for discovering operational friction and scaling Home Care client pipelines.",
    overview:
      "NXDI is a digital transformation and operational consultancy site built to explain how organisations mine real workflows, improve them, and automate the work that slows growth. The experience is aimed at Home Care and healthcare providers that need to capture qualified leads faster while keeping onboarding consistent. Sticky full-screen stories walk through the M.I.A. method, supported by a contact flow and a visual system for process mining, automation, growth metrics, and client operations.",
    developersNote:
      "Designed and built the marketing site with Next.js 16, React 19, and TypeScript. Implemented the sticky Mine, Improve, and Automate scroll stack, responsive landing sections, and a static export configured for Vercel. Generated the process, automation, growth, home-care, and transformation visuals and wired them into the project profile.",
    keyFeatures: [
      "Sticky full-screen Mine, Improve, and Automate storytelling",
      "Home Care lead-generation and onboarding narrative",
      "Benefit grid covering client growth, efficiency, accuracy, and workforce focus",
      "Accessible FAQ accordion and trust section",
      "Contact page with inquiry form, email, and phone details",
      "Responsive glass navigation with section scrolling",
      "Static export ready for global edge delivery",
    ],
    deliverables: [
      "Next.js 16 App Router site with React 19 and TypeScript",
      "Landing experience for the M.I.A. methodology",
      "Contact and partnership inquiry page",
      "Generated visual set for mining, automation, growth, home care, and transformation",
      "Production build on Next.js 16.4.3",
      "Vercel production deployment",
    ],
    challenges: [
      "Replacing a heavy scroll animation with a sticky card stack that stays readable under the navbar",
      "Keeping long methodology copy inside full-viewport panels on desktop and phone",
      "Shipping a static export while moving off a Next.js release Vercel would not deploy",
    ],
    futurePlans: [
      "Connect the contact and newsletter forms to a real inbox",
      "Replace placeholder FAQ, footer, and contact details with final copy",
      "Add case-study pages for Home Care client acquisition results",
    ],
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
    liveUrl: "https://nxdi-mu.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/NXDI-Digital-Process-Intelligence",
    timeline: "2025 - Present",
    role: "Frontend Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Frontend Engineer" }],
  },

  {
    slug: "folio",
    title: "Folio",
    tagline: "A lending library for readers, authors, and admins",
    category: "Web Application",
    status: "Completed",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-catalog.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-catalog.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-borrow.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-author.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-admin.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Folio/main/assets/images/folio-mark.jpg",
    ],
    description:
      "Folio is a full-stack lending library. Readers browse a real catalog and request loans, authors file manuscripts from a studio, and admins publish books, manage members, and run the loan desk.",
    overview:
      "Folio replaces a static book list with a role-based library. The public shelf supports search, category stacks, and a price range. Signed-in readers save titles and request copies. Authors keep drafts private until they submit them for review. Admins decide what is published, who can sign in, and when a loan moves from requested to borrowed and returned. Stock changes only when a copy actually goes out or comes back.",
    developersNote:
      "Designed and built the product end to end. The frontend is a React 18 and TypeScript app on Vite, styled with Tailwind CSS and driven by Redux Toolkit Query. The API is NestJS 11 with Prisma and PostgreSQL, JWT access and refresh tokens, and role guards for readers, authors, and admins. The catalog UI uses horizontal shelves, cover art, and a dual price slider. Admin and author workspaces share one dashboard shell so profile and author pages stay inside the app.",
    keyFeatures: [
      "Public catalog with search, category stacks, and a low-to-high or high-to-low price slider",
      "Cover rows with hover states and chevron sliders for browsing the shelf",
      "Reader accounts with saved books and a loan request flow",
      "Author studio for drafts, review submissions, and manuscript edits",
      "Admin desk to publish or archive books, manage categories and people, and advance loans",
      "Role-based access for readers, authors, and admins, with blocked and pending accounts",
      "JWT authentication with refresh sessions, password reset, and profile editing",
      "Loan stock that changes only when a copy is borrowed or returned",
    ],
    deliverables: [
      "React 18, TypeScript, and Vite frontend with Tailwind CSS and React Router",
      "NestJS 11 API with Prisma, PostgreSQL, validation, and Swagger docs",
      "Redux Toolkit Query data layer with authenticated catalog, studio, and admin screens",
      "Reader, author, and admin dashboards, including in-app profile and author pages",
      "Production frontend on Vercel and API deployment on Render",
      "Catalog of published books with real titles, categories, and cover images",
    ],
    challenges: [
      "Keeping the public shelf, author studio, and admin desk in separate layouts without sending signed-in users out to the marketing site",
      "Modeling loan status so approving a request does not change stock until the copy is actually borrowed",
      "Building horizontal shelves that show arrows only when more books remain, and hide them at each edge",
    ],
    futurePlans: [
      "Due-date reminders for borrowed and overdue copies",
      "Richer author pages with published-work filters",
      "Reader reviews surfaced on the public book page",
      "Hold queue when a title is out of stock",
    ],
    tags: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Redux Toolkit",
      "RTK Query",
      "NestJS 11",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    liveUrl: "https://foliolibrary.vercel.app/",
    previewUrl: "https://foliolibrary.vercel.app/",
    githubUrl: "https://github.com/Ramjanict/Folio",
    timeline: "2026",
    role: "Full-Stack Engineer",
    teamMembers: [{ name: "Md Ramjan Ali", role: "Full-Stack Engineer" }],
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
    slug: "voltix-electromart",
    title: "Voltix ElectroMart – Modern Fullstack E-Commerce Platform",
    category: "MERN",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/headphones-pro.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/headphones-pro.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/smartwatch-ultra.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/wireless-earbuds.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/flagship-phone.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Voltix/main/frontend/public/products/precision-mouse.jpg",
    ],
    description:
      "A full-featured, production-ready electronics e-commerce web platform built with 100% strict TypeScript, React 19, NestJS, Neon Serverless PostgreSQL, Prisma ORM, and Stripe Checkout.",
    overview:
      "Voltix ElectroMart is an enterprise-grade fullstack electronics e-commerce web application engineered with React 19, Vite, Tailwind CSS, and a modular NestJS backend connected to Neon Serverless PostgreSQL via Prisma ORM. The platform delivers an end-to-end shopping experience featuring secure JWT authentication with HTTP-Only cookies, role-based access control, curated category carousels with hidden horizontal scrollbars, real-time cart calculations with discounts, Cloudinary image upload workflows, and automated Stripe Checkout fulfillment tracking.",
    keyFeatures: [
      "Enterprise modular NestJS backend architecture with dependency injection and DTO validations",
      "Neon Serverless PostgreSQL cloud database with Prisma ORM schema migrations and automated catalog seeding",
      "Full-featured React 19 frontend with Vite, Tailwind CSS, and Redux Toolkit global state management",
      "100% strict TypeScript typing across all controllers, services, data models, and UI components",
      "Secure JWT authentication with HTTP-Only SameSite cookies and bcrypt password hashing",
      "Dynamic shopping cart with quantity adjustments, real prices, and instant savings calculations",
      "Real Stripe Checkout payment gateway integration with order persistence and fulfillment tracking",
      "Full Admin suite for Cloudinary product image uploads, catalog management, and user permissions",
      "Interactive category carousels with cross-browser smooth sliding and hidden scrollbars",
    ],
    tags: [
      "React 19",
      "NestJS",
      "TypeScript",
      "Neon PostgreSQL",
      "Prisma ORM",
      "Stripe Payments",
      "Tailwind CSS",
      "Redux Toolkit",
      "Cloudinary",
      "Vite",
      "MERN",
      "Fullstack",
    ],
    codeUrl: "https://github.com/Ramjanict/Voltix",
    demoUrl: "https://fullstack-ecommerce-mern-app-usvm.vercel.app/",
    timeline: "2024 – 2026",
    role: "Fullstack Developer",
  },
  {
    slug: "whiteboard-studio",
    title: "Whiteboard Studio – Real-Time Collaborative Canvas",
    category: "Next.js",
    image:
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/hero-workspace.png",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/hero-workspace.png",
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/realtime-collaboration.png",
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/cloud-gallery.png",
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/swagger-api-docs.png",
      "https://raw.githubusercontent.com/Ramjanict/whiteboard-studio/main/frontend/public/system-architecture.png",
    ],
    description:
      "A full-stack collaborative digital whiteboard engineered with Next.js 14, NestJS 10, Neon Serverless PostgreSQL, Prisma ORM, Cloudinary, and Socket.IO WebSockets.",
    overview:
      "Whiteboard Studio is an enterprise-grade collaborative visual workspace. It features a custom HTML5 2D vector canvas engine with infinite zoom/pan matrix transformations, 11 interactive tools, an undo/redo Memento stack, and real-time remote cursor projection at 40Hz via Socket.IO rooms. Drawing states are dual-persisted using offscreen Cloudinary CDN rasterization for instant previews and full JSON vector trees stored in Neon Serverless PostgreSQL via Prisma ORM.",
    keyFeatures: [
      "11 interactive drawing tools: freehand pencil, rectangle, circle, diamond, arrow, straight line, text, sticky notes, eraser, and selection",
      "Infinite 2D canvas coordinate projection with smooth zoom (0.2× to 3.0×) and pan transformations",
      "Multiplayer real-time collaboration with throttled 40Hz cursor streaming and live presence nametags",
      "Dual cloud persistence: JSON vector element trees in Neon PostgreSQL with SSL pooling + Cloudinary CDN snapshots",
      "Interactive radar minimap in corner with real-time viewport frame projection",
      "Non-destructive Memento pattern state management with keyboard shortcuts (Ctrl+Z, Ctrl+Y)",
      "Self-healing database schema with automated table initialization on startup",
      "Interactive NestJS Swagger OpenAPI 3.0 documentation explorer and health diagnostic probes",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Neon PostgreSQL",
      "Prisma ORM",
      "Socket.IO",
      "WebSockets",
      "Cloudinary",
      "Tailwind CSS",
      "HTML5 Canvas",
      "Swagger",
    ],
    codeUrl: "https://github.com/Ramjanict/whiteboard-studio",
    demoUrl: "https://yourwhiteboard.vercel.app/",
    timeline: "2025",
    role: "Full-Stack Developer",
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
  {
    slug: "lumina-clinic",
    title: "Lumina Clinic",
    category: "Next.js",
    image:
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/doctor-1.jpg",
    images: [
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/doctor-1.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/doctor-2.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/doctor-3.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/doctor-4.jpg",
      "https://raw.githubusercontent.com/Ramjanict/Lumina-Clinic/main/frontend/public/clinic-consultation.jpg",
    ],
    description:
      "Lumina Clinic is a full-stack doctor appointment and healthcare operations platform with unified multi-role authentication, dynamic 7-day slot scheduling, and real-time practice analytics.",
    overview:
      "Lumina Clinic replaces fragmented appointment tools with a unified, role-based platform for patients, doctors, and clinic admins. Patients discover specialists by medical field and book 30-minute consultation slots over a rolling 7-day calendar with automatic past-hour exclusion and conflict prevention. Doctors track patient volume, complete visits (auto-recording fee collections), and view 14-day revenue analytics in their private practice dashboard. The clinic admin desk manages doctor onboarding with Cloudinary photo uploads, availability toggles, and master booking overviews.",
    keyFeatures: [
      "Unified single sign-on authentication automatically routing Patients, Doctors, and Admins to their respective portals",
      "Dynamic 7-day half-hour slot booking calendar (10:30 AM – 8:30 PM) with database-level conflict prevention",
      "Doctor discovery with speciality filtering, name search, and instant availability toggles",
      "Patient visit history with real-time status badges (Booked, Paid, Completed, Cancelled) and self-cancellation",
      "Doctor practice dashboard with 14-day booking and earnings charts, visit completion, and profile settings",
      "Admin desk for doctor onboarding with Cloudinary photo streaming, availability toggles, and counter fee verification",
      "Full profile management for patients and physicians with Cloudinary avatar uploads",
      "Interactive Swagger (OpenAPI) documentation allowing live API testing with Bearer JWT tokens",
    ],
    tags: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "NestJS 11",
      "Prisma",
      "PostgreSQL",
      "Neon DB",
      "Cloudinary",
      "JWT",
      "Swagger",
      "Recharts",
    ],
    codeUrl: "https://github.com/Ramjanict/Lumina-Clinic",
    demoUrl: "https://luminaclinic.vercel.app",
    timeline: "2026",
    role: "Full-Stack Engineer",
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
