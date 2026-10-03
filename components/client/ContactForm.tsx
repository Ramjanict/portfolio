"use client";

import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitted(true);
        reset();
      } else {
        setServerError(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (err) {
      setServerError(
        "Network error. Please check your connection and try again."
      );
    }
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
              Your message has been sent directly to my email. I will review it
              and get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setServerError(null);
              }}
              className="mt-4 px-6 py-2 rounded-full text-xs font-semibold bg-muted hover:bg-muted/80 text-foreground transition-all cursor-pointer"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {serverError && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2"
              >
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{serverError}</span>
              </motion.div>
            )}

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
                {...register("name")}
                placeholder="ex- John Dev"
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition-all ${
                  errors.name
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-main"
                }`}
              />
              {errors.name && (
                <p className="text-xs text-destructive mt-1.5 font-medium flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.name.message}</span>
                </p>
              )}
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
                {...register("email")}
                placeholder="mail@example.com"
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition-all ${
                  errors.email
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-main"
                }`}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1.5 font-medium flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.email.message}</span>
                </p>
              )}
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
                rows={5}
                {...register("message")}
                placeholder="ex- hi , i wanna build something..."
                className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-main/50 transition-all resize-y ${
                  errors.message
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-main"
                }`}
              />
              {errors.message && (
                <p className="text-xs text-destructive mt-1.5 font-medium flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5" />
                  <span>{errors.message.message}</span>
                </p>
              )}
            </div>

            <div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                className="group inline-flex items-center justify-center gap-2 bg-main hover:bg-[#e05a3c] text-white font-semibold py-3 px-8 rounded-full text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Lets Talk</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </AnimatePresence>
    </div>
  );
}
