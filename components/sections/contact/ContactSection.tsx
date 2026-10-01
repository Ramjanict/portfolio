import ContactForm from "@/components/client/ContactForm";
import ContactHeading from "@/components/client/ContactHeading";
import CommonSpace from "@/components/shared/CommonSpace";
import Container from "@/components/shared/Container";
import contactIllu from "@/public/images/contact-illustration.png";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const CONTACT_INFO = [
  {
    icon: Mail,
    label: "Email",
    value: "mdramjan.ict@gmail.com",
    href: "mailto:mdramjan.ict@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7060741633",
    href: "tel:+917060741633",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bihar, India",
    href: "https://maps.google.com/?q=Bihar,India",
  },
];

export default function ContactSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background transition-colors">
      <CommonSpace>
        <Container>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Header intro */}
            <div>
              <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-main uppercase mb-2 flex items-center gap-2">
                <span>Say Hello</span>
                <span className="inline-block text-base">👋</span>
                <span>—</span>
              </p>

              {/* Animated highlight heading island */}
              <ContactHeading />

              <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
                Have a project in mind or want to collaborate? I&apos;m always
                open to discussing new opportunities, innovative ideas, or
                creative visions.
              </p>
            </div>

            {/* Illustration */}
            <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[400px]">
              <Image
                src={contactIllu}
                alt="Let's work together illustration"
                fill
                sizes="(max-width: 768px) 100vw, 550px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div className="space-y-3">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border/80 hover:border-main/60 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm hover:shadow-md transition-colors group block"
                  >
                    <div className="h-11 w-11 rounded-xl bg-[#FDE2D2] dark:bg-main/20 text-main flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base font-semibold text-foreground truncate group-hover:text-main transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
            <ContactForm />
          </div>
        </Container>
      </CommonSpace>
    </section>
  );
}
