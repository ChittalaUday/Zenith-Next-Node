"use client";

import { Button } from "@/components/ui/button";
import React from "react";

interface CTAContent {
  heading: string;
  subheading: string;
  primaryButton: string;
  secondaryButton: string;
}

async function getCTAContent(): Promise<CTAContent> {
  const res = await fetch("/api/call-to-action");
  const json = await res.json();
  return json.data as CTAContent;
}

export function CallToActionSection() {
  const [content, setContent] = React.useState<CTAContent | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const data = await getCTAContent();
        setContent(data);
      } catch (e) {
        console.error("Error fetching CTA content", e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading || !content) return null;

  return (
    <section className="w-full py-12 flex flex-col items-center bg-muted">
      <h2 className="text-2xl font-semibold mb-2 text-center">
        {content.heading}
      </h2>
      <p className="text-muted-foreground mb-6 text-center">
        {content.subheading}
      </p>
      <div className="flex gap-4">
        <Button>{content.primaryButton}</Button>
        <Button variant="outline">{content.secondaryButton}</Button>
      </div>
    </section>
  );
} 