import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight max-w-2xl mx-auto leading-tight">
          Prepared to turn your ideas into reality? <br />
          <span className="text-main">I&apos;m here to help</span>
        </h2>

        <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-lg mx-auto">
          Let&apos;s discuss your project and explore how we can collaborate to
          bring your vision to life with precision and speed.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="https://wa.me/917060741633"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-medium px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-sm"
          >
            <FaWhatsapp className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border text-foreground font-medium px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all text-sm"
          >
            <span>Contact Me</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
