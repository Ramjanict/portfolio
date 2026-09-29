import contactIllu from "@/public/images/contact-illustration.jpg";
import Image from "next/image";

export default function ContactHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
      {/* Left Column: Heading & Copy */}
      <div className="lg:col-span-6 space-y-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-sm md:text-base font-semibold text-main">
          <span className="h-0.5 w-6 bg-main" />
          <span>Say Hello 👋</span>
        </div>

        {/* Highlighted Heading */}
        <div className="inline-block">
          <div className="inline-block rounded-xl bg-gradient-to-r from-[#FFA86A] via-[#F2C4A2] to-[#D5D9E0] dark:from-[#EA580C] dark:via-[#C2410C] dark:to-[#374151] px-4 py-2 shadow-xs">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-slate-100">
              Let&apos;s Work Together.
            </h1>
          </div>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
          Connect with me effortlessly through my contact page, where every
          message is a step towards turning your ideas into reality. Let&apos;s
          collaborate and bring your projects to life!
        </p>
      </div>

      {/* Right Column: Illustration */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end">
        <div className="relative w-full max-w-md sm:max-w-lg aspect-4/3 rounded-3xl overflow-hidden shadow-xl shadow-main/5 ring-1 ring-border/50 bg-gradient-to-tr from-[#FFF3EE] to-white dark:from-[#252636] dark:to-[#1c1d29]">
          <Image
            src={contactIllu}
            alt="Let's work together illustration"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
