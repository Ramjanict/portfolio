import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "mdramjan.ict@gmail.com",
    href: "mailto:mdramjan.ict@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mirpur-2, Dhaka 1216, Bangladesh",
    href: "https://maps.google.com/?q=Mirpur-2,+Dhaka,+Bangladesh",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+8801303488984",
    href: "tel:+8801303488984",
  },
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    value: "+8801303488984",
    href: "https://wa.me/8801303488984",
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {contactDetails.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a
            key={index}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={
              item.href.startsWith("http") ? "noopener noreferrer" : undefined
            }
            className="group flex items-center gap-4 text-foreground/80 hover:text-foreground transition-all duration-200"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-background/60 shadow-2xs group-hover:border-main group-hover:bg-main/10 transition-all duration-200">
              <IconComponent className="h-5 w-5 text-main transition-transform duration-200 group-hover:scale-110" />
            </div>
            <div className="min-w-0">
              <span className="text-sm sm:text-base font-medium text-foreground tracking-tight group-hover:text-main transition-colors break-words">
                {item.value}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
}
