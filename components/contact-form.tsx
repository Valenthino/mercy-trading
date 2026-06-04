"use client";

import { useState } from "react";
import { useI18n } from "@/components/language-provider";
import { SITE } from "@/lib/site";

type Intent = "buy" | "sell" | "other";

export function ContactForm() {
  const { t } = useI18n();
  const f = t.contact.form;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [intent, setIntent] = useState<Intent>("buy");
  const [message, setMessage] = useState("");

  const intentLabel: Record<Intent, string> = {
    buy: f.intentBuy,
    sell: f.intentSell,
    other: f.intentOther,
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = [
      `${f.name}: ${name}`,
      `${f.email}: ${email}`,
      `${f.company}: ${company || "—"}`,
      `${f.intent} ${intentLabel[intent]}`,
      "",
      message,
    ].join("\n");
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      f.subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  const fieldClass =
    "mt-1.5 w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/30";
  const labelClass = "block text-sm font-medium text-ink/80";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            {f.name}
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            {f.email}
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            {f.company}
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="intent" className={labelClass}>
            {f.intent}
          </label>
          <select
            id="intent"
            value={intent}
            onChange={(e) => setIntent(e.target.value as Intent)}
            className={fieldClass}
          >
            <option value="buy">{f.intentBuy}</option>
            <option value="sell">{f.intentSell}</option>
            <option value="other">{f.intentOther}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {f.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn btn-primary">
          {f.send}
        </button>
        <p className="text-xs text-ink/50">{f.note}</p>
      </div>
    </form>
  );
}
