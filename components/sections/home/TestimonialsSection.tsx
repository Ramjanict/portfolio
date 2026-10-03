import TestimonialsSlider from "@/components/client/TestimonialsSlider";
import CommonHeader from "@/components/shared/CommonHeader";
import CommonSpace from "@/components/shared/CommonSpace";

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-background transition-colors py-4">
      <CommonSpace>
        {/* Header centered */}
        <div className="flex justify-center mb-10 text-center">
          <CommonHeader title="What Our Clients Say" />
        </div>

        <TestimonialsSlider />
      </CommonSpace>
    </section>
  );
}
