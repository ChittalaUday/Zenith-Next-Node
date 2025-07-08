import { NextResponse } from 'next/server';

export interface SubService {
    title: string;
    desc: string;
    price: string;
    documents?: string[];
    rating?: number;
    estimation?: string;
    details?: string;
}

export interface Service {
    title: string;
    desc: string;
    icon: string; // Lucide icon name
    badge: "default" | "secondary" | "outline";
    color: string;
    price?: string;
    subServices?: SubService[];
}

const services: Service[] = [
    {
        title: "Startup",
        desc: "All services for startups including registration, compliance, and advisory.",
        icon: "Briefcase",
        badge: "default",
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
        subServices: [
            { title: "OPC Registration", desc: "Instant Name Application for Company.", price: "₹4,999", documents: ["PAN Card", "Aadhaar Card", "Address Proof"], rating: 4.8, estimation: "5-7 days", details: "OPC Registration is ideal for solo entrepreneurs. It provides limited liability and easy compliance. Our experts guide you through every step, ensuring a smooth process." },
            { title: "LLP Registration", desc: "Instant Name Application for LLP.", price: "₹6,999", documents: ["PAN Card", "Address Proof", "Utility Bill"], rating: 4.7, estimation: "7-10 days", details: "LLP Registration offers flexibility of partnership with benefits of a company. We handle all paperwork and filings for you." },
            { title: "Partnership Registration", desc: "Get your partnership firm in 5-7 days.", price: "₹3,999", documents: ["Partnership Deed", "PAN Card", "Address Proof"], rating: 4.6, estimation: "5-7 days", details: "Register your partnership firm quickly and legally. We provide end-to-end support including drafting the deed." },
            { title: "Producer Company Registration", desc: "Streamlined & hassle-free process.", price: "₹14,999", documents: ["Identity Proof", "Address Proof", "Business Plan"], rating: 4.9, estimation: "15-20 days", details: "Producer Company Registration is for farmers and producers. We ensure compliance with all legal requirements." },
            { title: "Section 8 Company Registration", desc: "Quick & efficient online service.", price: "₹9,999", documents: ["PAN Card", "Address Proof", "Charity Objectives"], rating: 4.8, estimation: "10-15 days", details: "Section 8 Company is for non-profits. We help you get all approvals and registrations." },
            { title: "India Business Setup", desc: "Setup and operate a business in India with bank account from DBS.", price: "₹19,999", documents: ["Incorporation Certificate", "Bank KYC", "Business Address Proof"], rating: 4.9, estimation: "20-30 days", details: "We help foreign companies set up business in India, including bank account opening and compliance." }
        ]
    },
    {
        title: "Registrations",
        desc: "Business, tax, and other statutory registrations for your company.",
        icon: "FileText",
        badge: "secondary",
        color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        subServices: [
            { title: "Trade License", desc: "Get your trade license quickly.", price: "₹2,499", documents: ["PAN Card", "Address Proof", "Business Proof"], rating: 4.5, estimation: "3-5 days", details: "Trade License is mandatory for businesses. We make the process fast and easy." },
            { title: "FSSAI Registration", desc: "Food safety registration for your business.", price: "₹1,999", documents: ["PAN Card", "Address Proof", "Food Safety Plan"], rating: 4.7, estimation: "4-6 days", details: "FSSAI Registration is required for food businesses. We help you get certified quickly." },
            { title: "Drug License", desc: "Get drug license with expert help.", price: "₹7,999", documents: ["PAN Card", "Address Proof", "Pharmacy Degree"], rating: 4.6, estimation: "10-15 days", details: "Drug License is required for pharmacies. Our team ensures all compliance is met." },
            { title: "Name Change - Company", desc: "Support to start and scale your business.", price: "₹3,499", documents: ["Board Resolution", "Old COI", "New Name Approval"], rating: 4.4, estimation: "7-10 days", details: "Change your company name legally and efficiently with our expert support." }
        ]
    },
    {
        title: "Trademark",
        desc: "Protect your brand identity with trademark registration and support.",
        icon: "BadgeCheck",
        badge: "outline",
        color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
        subServices: [
            { title: "Trademark Registration", desc: "Register your trademark easily.", price: "₹6,999", documents: ["Logo/Brand Name", "PAN Card", "Address Proof"], rating: 4.8, estimation: "10-15 days", details: "Trademark Registration protects your brand. We handle the search, application, and follow-up." },
            { title: "Copyright Registration", desc: "Protect your creative works.", price: "₹5,499", documents: ["Work Copy", "PAN Card", "Address Proof"], rating: 4.7, estimation: "7-10 days", details: "Copyright Registration is for creative works. We ensure your rights are protected." }
        ]
    },
    {
        title: "Goods & Services Tax",
        desc: "GST registration, filing, and compliance for your business.",
        icon: "Receipt",
        badge: "default",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
        subServices: [
            { title: "GST Registration", desc: "Quick GST registration.", price: "₹999", documents: ["PAN Card", "Address Proof", "Business Proof"], rating: 4.7, estimation: "3-5 days", details: "GST Registration is mandatory for businesses above threshold. We make it simple and fast." },
            { title: "GST Return Filing", desc: "File your GST returns on time.", price: "₹499/mo", documents: ["GSTIN", "Sales Data", "Purchase Data"], rating: 4.6, estimation: "1-2 days", details: "We help you file GST returns accurately and on time, avoiding penalties." }
        ]
    },
    {
        title: "Income Tax",
        desc: "Income tax filing, planning, and compliance services.",
        icon: "Banknote",
        badge: "secondary",
        color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
        subServices: [
            { title: "ITR Filing", desc: "File your income tax returns.", price: "₹1,499", documents: ["PAN Card", "Form 16", "Bank Statement"], rating: 4.8, estimation: "2-3 days", details: "We help you file your ITR accurately and maximize your refund." },
            { title: "TDS Compliance", desc: "TDS return filing and compliance.", price: "₹1,999", documents: ["TAN", "Challan Copy", "Deductee Details"], rating: 4.5, estimation: "2-4 days", details: "TDS compliance is crucial for businesses. We ensure timely and accurate filings." }
        ]
    },
    {
        title: "MCA",
        desc: "Ministry of Corporate Affairs filings and compliance.",
        icon: "Landmark",
        badge: "outline",
        color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
        subServices: [
            { title: "Annual Filing", desc: "MCA annual compliance for companies.", price: "₹4,999", documents: ["Financials", "Board Report", "AGM Minutes"], rating: 4.7, estimation: "7-10 days", details: "Annual filing is mandatory for companies. We handle all forms and submissions." },
            { title: "Director KYC", desc: "KYC for company directors.", price: "₹999", documents: ["PAN Card", "Aadhaar Card", "Mobile/Email"], rating: 4.6, estimation: "1-2 days", details: "Director KYC is a yearly compliance. We make it quick and easy." }
        ]
    },
    {
        title: "Compliance",
        desc: "Ongoing compliance monitoring and management for your business.",
        icon: "ShieldCheck",
        badge: "default",
        color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
        subServices: [
            { title: "Compliance Monitoring", desc: "Stay compliant with regular monitoring.", price: "₹2,999/mo", documents: ["Business Details", "Compliance Calendar"], rating: 4.9, estimation: "Ongoing", details: "We monitor your compliance status and send timely alerts for all due dates." },
            { title: "Legal Consultation", desc: "Get expert legal advice.", price: "₹1,999", documents: ["Query Details"], rating: 4.8, estimation: "1 day", details: "Our legal experts provide advice on all business and compliance matters." }
        ]
    },
    {
        title: "Consultation",
        desc: "Expert consultation for all your business and compliance needs.",
        icon: "Users",
        badge: "default",
        color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
        price: "₹999/hr"
    },
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 150));

    return NextResponse.json({
        success: true,
        data: services
    });
}

export async function POST(request: Request) {
    const body = await request.json();
    // Basic validation: require title, desc, icon, badge, color
    if (!body.title || !body.desc || !body.icon || !body.badge || !body.color) {
        return NextResponse.json({ success: false, error: 'Missing required fields.' }, { status: 400 });
    }
    services.push(body);
    return NextResponse.json({ success: true, data: services });
}

export async function PUT(request: Request) {
    const body = await request.json();
    const { index, ...update } = body;
    if (typeof index !== 'number' || index < 0 || index >= services.length) {
        return NextResponse.json({ success: false, error: 'Invalid index.' }, { status: 400 });
    }
    services[index] = { ...services[index], ...update };
    return NextResponse.json({ success: true, data: services[index] });
}

export async function DELETE(request: Request) {
    const body = await request.json();
    const { index } = body;
    if (typeof index !== 'number' || index < 0 || index >= services.length) {
        return NextResponse.json({ success: false, error: 'Invalid index.' }, { status: 400 });
    }
    const removed = services.splice(index, 1);
    return NextResponse.json({ success: true, data: removed[0] });
} 