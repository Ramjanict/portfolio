import ExperienceBadge from "@/components/client/ExperienceBadge";
import HeroSocials from "@/components/client/HeroSocials";
import HeroVisual from "@/components/client/HeroVisual";
import TypewriterHeading from "@/components/client/TypewriterHeading";
import ActionButton from "@/components/shared/ActionButton";
import CommonSpace from "@/components/shared/CommonSpace";
import Container from "@/components/shared/Container";
import { ChevronDown, Download, Send } from "lucide-react";
interface HeroProps {
  yearsExperience?: number;
  happyClients?: number;
  finishedProjects?: number;
}

export default function Hero({
  yearsExperience = 3,
  happyClients = 18,
  finishedProjects = 38,
}: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden  bg-[#FEF9F5] dark:bg-background transition-colors">
      <CommonSpace>
        <Container>
          <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-main/10 blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4">
                <p className="text-main text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                  FULL STACK ENGINEER
                </p>
              </div>
              <TypewriterHeading />

              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                Full Stack Engineer with <ExperienceBadge /> Experienced in
                architecting complex systems (backend, mobile, web) at
                growth-stage startups. Owning features from design through
                deployment with proven ability to deliver reliable, scalable
                infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <ActionButton
                  href="/contact"
                  icon={<Send className="h-4 w-4" />}
                >
                  Contact me
                </ActionButton>
                <ActionButton
                  href="/resume_ramjan.pdf"
                  download="Md_Ramjan_Ali_Resume.pdf"
                  variant="secondary"
                  icon={<Download className="h-4 w-4" />}
                >
                  Download CV
                </ActionButton>
              </div>

              <HeroSocials />
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <HeroVisual
                yearsExperience={yearsExperience}
                happyClients={happyClients}
                finishedProjects={finishedProjects}
              />
            </div>
          </div>
          <div className="flex justify-center mt-12 md:mt-16">
            <a
              href="#about"
              aria-label="Scroll to About section"
              className="flex flex-col items-center gap-1 text-main transition-colors"
            >
              <ChevronDown className="text-5xl animate-bounce" />
            </a>
          </div>
        </Container>
      </CommonSpace>
    </section>
  );
}
