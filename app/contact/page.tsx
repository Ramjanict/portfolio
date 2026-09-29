import type { Metadata } from "next";
import ContactSection from "@/components/sections/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact - Md Ramjan Ali",
  description:
    "Connect with Md Ramjan Ali to discuss projects, collaborations, and engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <ContactSection />
    </main>
  );
}
