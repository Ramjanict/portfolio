import AboutSection from "@/components/sections/home/AboutSection";
import BlogSection from "@/components/sections/home/BlogSection";
import Hero from "@/components/sections/home/Hero";
import ProjectsSection from "@/components/sections/home/ProjectsSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Container>
        <AboutSection />
        <ProjectsSection />
        <BlogSection />
        <TestimonialsSection />
      </Container>
    </main>
  );
}
