import { NextResponse } from 'next/server';

export interface PlanFeature {
    included: boolean;
    text: string;
}

export interface PlanPricing {
    name: string;
    price: string;
    period: string;
    description: string;
    popular?: boolean;
    features: PlanFeature[];
}

const planPricing: PlanPricing[] = [
    {
        name: "Basic",
        price: "₹2,999",
        period: "per month",
        description: "Perfect for startups and small businesses",
        features: [
            { included: true, text: "Business Registration" },
            { included: true, text: "GST Registration" },
            { included: true, text: "Basic Compliance Support" },
            { included: true, text: "Email Support" },
            { included: true, text: "Document Templates" },
            { included: false, text: "Priority Support" },
            { included: false, text: "Compliance Monitoring" }
        ]
    },
    {
        name: "Professional",
        price: "₹5,999",
        period: "per month",
        description: "Ideal for growing businesses",
        popular: true,
        features: [
            { included: true, text: "Everything in Basic" },
            { included: true, text: "Trademark Registration" },
            { included: true, text: "ISO Certification" },
            { included: true, text: "Priority Support" },
            { included: true, text: "Compliance Monitoring" },
            { included: true, text: "Quarterly Reviews" },
            { included: true, text: "Legal Consultation" }
        ]
    },
    {
        name: "Enterprise",
        price: "₹12,999",
        period: "per month",
        description: "For large corporations and enterprises",
        features: [
            { included: true, text: "Everything in Professional" },
            { included: true, text: "Dedicated Account Manager" },
            { included: true, text: "24/7 Phone Support" },
            { included: true, text: "Custom Compliance Solutions" },
            { included: true, text: "Monthly Reports" },
            { included: true, text: "Risk Assessment" },
            { included: true, text: "Audit Support" }
        ]
    }
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));

    return NextResponse.json({
        success: true,
        data: planPricing
    });
} 