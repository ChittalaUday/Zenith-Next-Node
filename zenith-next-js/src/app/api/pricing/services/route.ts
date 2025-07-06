import { NextResponse } from 'next/server';

export interface ServicePricing {
    icon: string;
    title: string;
    price: string;
    description: string;
    features: string[];
}

const servicePricing: ServicePricing[] = [
    {
        icon: "Shield",
        title: "Business Registration",
        price: "₹1,999",
        description: "Complete business registration including PAN, TAN, and bank account setup",
        features: ["PAN Application", "TAN Registration", "Bank Account Setup", "Digital Signature"]
    },
    {
        icon: "Zap",
        title: "GST Registration",
        price: "₹999",
        description: "Quick and hassle-free GST registration for your business",
        features: ["GST Application", "Document Verification", "Registration Certificate", "GST Training"]
    },
    {
        icon: "Star",
        title: "Trademark Registration",
        price: "₹6,999",
        description: "Protect your brand with comprehensive trademark registration",
        features: ["Trademark Search", "Application Filing", "Response Handling", "Registration Certificate"]
    },
    {
        icon: "Users",
        title: "ISO Certification",
        price: "₹15,999",
        description: "Achieve international quality standards with ISO certification",
        features: ["Gap Analysis", "Documentation", "Audit Support", "Certification"]
    },
    {
        icon: "Shield",
        title: "Compliance Monitoring",
        price: "₹2,999",
        description: "Stay compliant with regular monitoring and updates",
        features: ["Monthly Reports", "Deadline Alerts", "Compliance Updates", "Expert Consultation"]
    },
    {
        icon: "Star",
        title: "Legal Consultation",
        price: "₹1,999",
        description: "Get expert legal advice for your business needs",
        features: ["1-on-1 Consultation", "Legal Document Review", "Compliance Advice", "Follow-up Support"]
    }
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));

    return NextResponse.json({
        success: true,
        data: servicePricing
    });
} 