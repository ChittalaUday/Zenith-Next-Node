import { NextResponse } from 'next/server';

export interface CTAContent {
    heading: string;
    subheading: string;
    primaryButton: string;
    secondaryButton: string;
}

const ctaContent: CTAContent = {
    heading: 'Ready to Start Your Business Journey?',
    subheading: 'Get expert assistance for all your business compliance needs in one place.',
    primaryButton: 'Start Your Business',
    secondaryButton: 'Schedule a Consultation',
};

export async function GET() {
    await new Promise((r) => setTimeout(r, 80));
    return NextResponse.json({ success: true, data: ctaContent });
} 