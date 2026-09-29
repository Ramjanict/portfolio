"use client";

import { Send } from "lucide-react";
import { useState, useTransition } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [, startTransition] = useTransition();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    startTransition(() => {
      setSubscribed(true);
      setEmail("");
    });
  };

  if (subscribed) {
    return (
      <p className="text-xs font-semibold text-emerald-500 py-2">
        ✓ Thank you for subscribing!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubscribe}
      className="bg-white dark:bg-white/5 border border-border/80 rounded-xl p-1.5 flex items-center shadow-2xs"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="w-full bg-transparent px-3 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="h-8 w-8 rounded-lg bg-main hover:bg-[#e05a3c] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
