import { NextResponse } from 'next/server';

export interface MenuItem {
    label: string;
    href?: string;
    icon?: string;
    subItems?: MenuItem[];
}

const menuData: MenuItem[] = [
    { label: "Home", href: "/", icon: "Home" },
    { label: "About", href: "/about", icon: "Info" },
    {
        label: "Services",
        href: "/services",
        icon: "HandCoins",
        subItems: [
            {
                label: "Startup",
                icon: "Rocket",
                href: "/services?cat=startup",
                subItems: [
                    { label: "Startup India", href: "#" },
                    { label: "Trade License", href: "#" },
                    { label: "FSSAI Registration", href: "#" },
                    { label: "FSSAI License", href: "#" },
                    { label: "Halal License & Certification", href: "#" },
                    { label: "ICEGATE Registration", href: "#" },
                    { label: "Import Export Code", href: "#" },
                    { label: "Legal Entity Identifier Code", href: "#" },
                    { label: "ISO Registration", href: "#" },
                    { label: "PF Registration", href: "#" },
                    { label: "ESI Registration", href: "#" },
                    { label: "Professional Tax Registration", href: "#" },
                    { label: "RCMC Registration", href: "#" },
                    { label: "TN RERA Registration for Agents", href: "#" },
                    { label: "12A and 80G Registration", href: "#" },
                    { label: "12A Registration", href: "#" },
                    { label: "80G Registration", href: "#" },
                    { label: "APEDA Registration", href: "#" },
                    { label: "Barcode Registration", href: "#" },
                    { label: "BIS Registration", href: "#" },
                    { label: "Certificate of Incumbency", href: "#" },
                    { label: "Darpan Registration", href: "#" },
                    { label: "Digital Signature", href: "#" },
                    { label: "Shop Act Registration", href: "#" },
                    { label: "Drug License", href: "#" },
                    { label: "Udyam Registration", href: "#" },
                    { label: "FCRA Registration", href: "#" },
                    { label: "Fire License", href: "#" }
                ]
            },
            {
                label: "Registrations",
                icon: "FileCheck",
                href: "/services?cat=registrations",
                subItems: [
                    { label: "Trade License", href: "#" },
                    { label: "ISO Registration", href: "#" },
                    { label: "PF Registration", href: "#" },
                    { label: "ESI Registration", href: "#" },
                    { label: "Professional Tax Registration", href: "#" },
                    { label: "RCMC Registration", href: "#" },
                    { label: "TN RERA Registration for Agents", href: "#" }
                ]
            },
            {
                label: "Trademark",
                icon: "Shield",
                href: "/services?cat=trademark",
                subItems: [
                    { label: "12A Registration", href: "#" },
                    { label: "80G Registration", href: "#" },
                    { label: "APEDA Registration", href: "#" },
                    { label: "Barcode Registration", href: "#" },
                    { label: "BIS Registration", href: "#" },
                    { label: "Certificate of Incumbency", href: "#" }
                ]
            },
            {
                label: "Goods & Services Tax",
                icon: "Receipt",
                href: "/services?cat=gst",
                subItems: [
                    { label: "Digital Signature", href: "#" },
                    { label: "Shop Act Registration", href: "#" },
                    { label: "Drug License", href: "#" },
                    { label: "Udyam Registration", href: "#" },
                    { label: "FCRA Registration", href: "#" },
                    { label: "Fire License", href: "#" }
                ]
            },
            {
                label: "Income Tax",
                icon: "Calculator",
                href: "/services?cat=income-tax",
            },
            {
                label: "MCA",
                icon: "Building2",
                href: "/services?cat=mca",
            },
            {
                label: "Consultation",
                icon: "Users",
            },
        ]
    },
    {
        label: "Knowledge Center",
        icon: "BookOpen",
        href: "/blog",
        subItems: [
            { label: "Blog", href: "/blog" },
            { label: "Guides", href: "/blog#guides" },
            { label: "FAQs", href: "/contact#faq" },

            {
                label: "Video Tutorials",
                icon: "Video",
                // No href - will show "Coming Soon"
            },
            {
                label: "Webinars",
                icon: "Monitor",
                // No href - will show "Coming Soon"
            },
        ],
    },
    { label: "Pricing", href: "/pricing", icon: "IndianRupee" },
    { label: "Contact", href: "/contact", icon: "Mail" },
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
        success: true,
        data: menuData
    });
} 