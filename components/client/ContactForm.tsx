"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useTransition } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    startTransition(() => {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      }, 300);
    });
  };

  return (
    <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 space-y-3"
          >
            <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
            <h3 className="text-xl font-bold text-foreground">
              Thank You for Reaching Out!
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Your message has been received. I will review it and get back to
              you as soon as possible.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground transition-all"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
              >
                Your Name <span className="text-main">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="ex- John Dev"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 focus:border-main transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
              >
                Email <span className="text-main">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="mail@example.com"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 focus:border-main transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2"
              >
                Message <span className="text-main">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="ex- hi , i wana to build something...."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 focus:border-main transition-all resize-y"
              />
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={isPending}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center justify-center gap-2 bg-main hover:bg-[#e05a3c] text-white font-semibold py-3 px-8 rounded-full text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
              >
                <span>{isPending ? "Sending..." : "Lets Talk"}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
