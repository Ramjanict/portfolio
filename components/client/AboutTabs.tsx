"use client";

import ramjanImage from "@/public/images/ramjan.png";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  Home,
  Mail,
  Phone,
  User,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

/* ─── Data ──────────────────────────────────────────────────── */

interface Experience {
  company: string;
  type: string;
  role: string;
  period: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  major?: string;
  result?: string;
}

const EXPERIENCES: Experience[] = [
  {
    company: "Swaasta",
    type: "Full Time",
    role: "AI Engineer",
    period: "2024 August - Present",
  },
  {
    company: "Lexipitch",
    type: "Full Time",
    role: "Software Engineer",
    period: "2024 Oct - 2024 Nov",
  },
  {
    company: "Swaasta",
    type: "Full Time",
    role: "FullStack Engineer",
    period: "2024 Oct - 2025 Sep",
  },
  {
    company: "HealthCRAD",
    type: "Internship",
    role: "FullStack Developer",
    period: "2024 March - 2024 August",
  },
];

const EDUCATIONS: Education[] = [
  {
    institution: "Islamic University, Kushtia",
    degree: "Master of Science in Engineering (M.Sc. Engg.)",
    major: "Information & Communication Technology (ICT)",
    result: "CGPA: 3.58 / 4.00",
    period: "2019 - 2022",
  },
  {
    institution: "Islamic University, Kushtia",
    degree: "Bachelor of Science (Honours)",
    major: "Information & Communication Technology (ICT)",
    result: "CGPA: 3.39 / 4.00",
    period: "2014 - 2019",
  },
  {
    institution: "Police Lines School And College, Kushtia",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2011 - 2013",
  },
  {
    institution: "Kharijathak Secondary School, Kushtia",
    degree: "Secondary School Certificate (SSC)",
    period: "2010 - 2011",
  },
];

interface SkillCategory {
  category: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Native (Expo)",
      "Redux",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "GenAI & ML",
    skills: ["GenAI", "LangChain", "Vector DBs", "RAG"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, CloudFront)", "Docker"],
  },
  {
    category: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "C++"],
  },
  {
    category: "DSA",
    skills: ["Data Structures & Algorithms in C++"],
  },
];

interface PersonalInfoItem {
  icon: typeof User;
  value: string;
}

const PERSONAL_INFO: PersonalInfoItem[] = [
  { icon: User, value: "Md Ramjan Ali" },
  { icon: Phone, value: "+91 70507 41633" },
  { icon: Mail, value: "support@mdramjanali.com" },
  { icon: GraduationCap, value: "M.Sc. Engg. in ICT" },
  { icon: Home, value: "Kushtia, Bangladesh" },
];

const LANGUAGES = ["English", "Hindi"];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<
    "qualifications" | "skills" | "personal"
  >("qualifications");

  const tabs = [
    { key: "qualifications" as const, label: "Qualifications" },
    { key: "skills" as const, label: "Skills" },
    { key: "personal" as const, label: "Personal Info" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* ─── Left Column: Profile Photo with Shape (matching Hero visual) ─── */}
      <div className=" flex justify-center lg:sticky lg:top-24">
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="about-blob-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.846,0.199 C0.954,0.322,1.028,0.502,0.990,0.638 C0.951,0.775,0.799,0.867,0.651,0.930 C0.504,0.992,0.361,1.025,0.252,0.971 C0.142,0.918,0.065,0.777,0.026,0.617 C-0.013,0.459,-0.014,0.282,0.063,0.165 C0.142,0.049,0.298,-0.006,0.447,0.001 C0.597,0.007,0.738,0.075,0.846,0.199" />
            </clipPath>
          </defs>
        </svg>

        <div className="max-w-[510px] aspect-[510/462] bg-contain bg-bottom bg-about_shape_light dark:bg-about_shape_dark w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[460px] lg:h-[460px] bg-no-repeat relative flex items-center justify-center">
          <div className="relative w-full h-full bg-hero_shape bg-no-repeat bg-contain bg-bottom">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: "url(#about-blob-clip)" }}
            >
              <Image
                src={ramjanImage}
                alt="Md Ramjan Ali"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {/* Navigation Tabs */}
        <div className="flex justify-center lg:justify-start mb-8">
          <div className="inline-flex items-center bg-white dark:bg-[#212131] border border-[#FBDEDA] dark:border-[#212131] rounded-full p-1 gap-1 shadow-xs">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 sm:px-8 py-3 rounded-full text-xs sm:text-base font-semibold transition-all cursor-pointer ${
                  activeTab === tab.key
                    ? "bg-main text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Qualifications Tab ─── */}
        {activeTab === "qualifications" && (
          <div className="animate-in fade-in duration-300">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Professional Journey
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                A timeline of my career milestones and educational achievements
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Experience Column */}
              <div>
                <div className="flex items-center gap-2 mb-6 text-main font-bold text-base">
                  <Briefcase className="h-5 w-5" />
                  <h3>Experience</h3>
                </div>

                <div className="space-y-6 relative border-l-2 border-main/30 ml-2.5 pl-5">
                  {EXPERIENCES.map((exp, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-main ring-4 ring-background" />
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="font-bold text-sm sm:text-base text-foreground">
                          {exp.company}
                        </span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-main/15 text-main">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-foreground/80">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <div className="flex items-center gap-2 mb-6 text-main font-bold text-base">
                  <GraduationCap className="h-5 w-5" />
                  <h3>Education</h3>
                </div>

                <div className="space-y-6 relative border-l-2 border-main/30 ml-2.5 pl-5">
                  {EDUCATIONS.map((edu, idx) => (
                    <div key={idx} className="relative group">
                      <span className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full bg-main ring-4 ring-background" />
                      <h4 className="font-bold text-sm sm:text-base text-foreground leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="text-xs font-semibold text-main/90 mt-0.5">
                        {edu.institution}
                      </p>
                      {edu.major && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Major: <span className="text-foreground/80">{edu.major}</span>
                        </p>
                      )}
                      {edu.result && (
                        <p className="text-xs text-muted-foreground mt-0.5">
                          Result: <span className="font-semibold text-foreground/90">{edu.result}</span>
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                        <Calendar className="h-3 w-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ─── Skills Tab ─── */}
        {activeTab === "skills" && (
          <div className="animate-in fade-in duration-300">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                Technical Expertise
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Technologies and tools I work with daily
              </p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 bg-main rounded-full" />
              <h3 className="text-base font-bold text-foreground">
                Core Skills
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="bg-card/60 dark:bg-white/5 border border-[#FDE2D2] dark:border-white/10 rounded-xl p-4 shadow-2xs hover:border-main/50 transition-all"
                >
                  <h4 className="text-sm font-bold text-main mb-2.5">
                    {cat.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-muted/80 dark:bg-white/10 text-foreground text-xs font-medium px-2.5 py-1 rounded-md border border-border/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ─── Personal Info Tab ─── */}
        {activeTab === "personal" && (
          <div className="animate-in fade-in duration-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-main mb-3 leading-tight">
              Building Digital Experiences Since 2022
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
              Full-stack developer passionate about creating intuitive, scalable
              web applications with cutting-edge technologies. Specializing in
              GenAI integration, modern web frameworks, and cloud solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {PERSONAL_INFO.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-main/10 text-main shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-foreground">
                      {item.value}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="bg-card/60 dark:bg-white/5 border border-[#FDE2D2] dark:border-white/10 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-main rounded-full" />
                <h3 className="text-xs sm:text-sm font-bold text-main">
                  Languages
                </h3>
              </div>
              <div className="flex gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs font-medium px-3 py-1 rounded-md bg-main/10 text-main border border-main/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
