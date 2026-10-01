import AboutTabs from "@/components/client/AboutTabs";
import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";

export default function AboutSection() {
  return (
    <section id="about" className="w-full bg-background  ">
      <CommonSpace>
        <div>
          <div className="text-center max-w-2xl mx-auto mb-4">
            <div className="inline-flex items-center gap-2 mb-3">
              <CommonHeader title="About Me" />
            </div>
          </div>

          <AboutTabs />
        </div>
      </CommonSpace>
    </section>
  );
}
