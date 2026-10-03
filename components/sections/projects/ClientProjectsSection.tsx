import ClientProjectsList from "@/components/client/ClientProjectsList";
import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";
import Container from "@/components/shared/Container";

export default function ClientProjectsSection() {
  return (
    <section className="w-full  bg-background ">
      <Container>
        <CommonSpace>
          <div className="w-full flex justify-center items-center pb-10">
            <CommonHeader
              className=" justify-center!"
              title="Client Projects"
              description="Professional work completed for real-world clients with detailed case studies."
            />
          </div>

          <ClientProjectsList />
        </CommonSpace>
      </Container>
    </section>
  );
}
