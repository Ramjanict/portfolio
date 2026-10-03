import LearningProjectsList from "@/components/client/LearningProjectsList";
import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";
import Container from "@/components/shared/Container";

export default function LearningProjectsSection() {
  return (
    <section className="w-full  transition-colors">
      <CommonSpace>
        <Container>
          <div className="w-full flex justify-center items-center pb-10">
            <CommonHeader
              title="Projects & Repositories "
              description="Explore live applications, interactive visualizers, and
              open-source GitHub repositories built with modern stacks."
              className=" justify-center!"
            />
          </div>
          <LearningProjectsList />
        </Container>
      </CommonSpace>
    </section>
  );
}
