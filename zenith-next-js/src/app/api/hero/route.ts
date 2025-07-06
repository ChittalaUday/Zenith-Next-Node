import { NextResponse } from 'next/server';

export interface HeroStat {
    tag: string;
    title: string;
    value: string;
    change: string; // e.g. +18.34%
}

export interface HeroContent {
    title: string; // First part of heading, e.g. "Your Financial Future"
    highlight: string; // Highlighted word(s) on new line, e.g. "Starts Here"
    description: string; // Subtitle paragraph
    ctaPlaceholder: string; // Placeholder for email input in hero form
    ctaButton: string; // Button text
    stats: HeroStat[];
}

const heroContent: HeroContent = {
    title: "Your Financial Future",
    highlight: "Starts Here",
    description:
        "Experience financial mastery with FinTechPro's innovative B2B SaaS solutions. Streamline your financial operations, gain real-time insights, and boost profitability effortlessly.",
    ctaPlaceholder: "Enter your email",
    ctaButton: "Get started for free",
    stats: [
        {
            tag: "Live",
            title: "Total visits",
            value: "325k",
            change: "+18.34%",
        },
        {
            tag: "Global",
            title: "Views by country",
            value: "",
            change: "",
        },
        {
            tag: "Real-time",
            title: "Active customers",
            value: "1,027",
            change: "+12.75%",
        },
    ],
};

export async function GET() {
    // Simulate API latency
    await new Promise((r) => setTimeout(r, 80));

    return NextResponse.json({ success: true, data: heroContent });
} 