import { NextResponse } from 'next/server';

export interface Testimonial {
    id: number;
    quote: string;
    name: string;
    role: string;
    avatar?: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: '"ZenithFilings made company registration incredibly simple. Their team guided us from start to finish, and we had our company registered in no time."',
        name: "Rahul Sarma",
        role: "CEO, Initechware",
        avatar: "RS"
    },
    {
        id: 2,
        quote: '"The GST filing process is outstanding. The support team handles everything, and the documentation was a breeze. The customer support is highly responsive!"',
        name: "Priya Patel",
        role: "Founder, Spindle",
        avatar: "PP"
    },
    {
        id: 3,
        quote: '"We needed trademark registration urgently, and ZenithFilings delivered. Their support was fast, and the customer service was excellent!"',
        name: "Vivek Singh",
        role: "SME, FoodCraft",
        avatar: "VS"
    },
    {
        id: 4,
        quote: '"The compliance management system is top-notch. We never miss deadlines anymore, and the automated reminders are a lifesaver for our business."',
        name: "Anjali Mehta",
        role: "CFO, TechFlow Solutions",
        avatar: "AM"
    },
    {
        id: 5,
        quote: '"Professional, reliable, and cost-effective. ZenithFilings has been our trusted partner for all legal compliances. Highly recommended!"',
        name: "Rajesh Kumar",
        role: "Director, GreenEnergy Corp",
        avatar: "RK"
    },
    {
        id: 6,
        quote: '"Outstanding service quality! The team is knowledgeable, responsive, and always goes the extra mile to ensure our business stays compliant."',
        name: "Sneha Reddy",
        role: "Founder, CreativeHub",
        avatar: "SR"
    },
    {
        id: 7,
        quote: '"From startup to scale-up, ZenithFilings has been with us every step. Their expertise in business registration and compliance is unmatched."',
        name: "Arjun Desai",
        role: "CEO, InnovateTech",
        avatar: "AD"
    },
    {
        id: 8,
        quote: '"The digital transformation of our compliance processes through ZenithFilings has saved us countless hours and reduced errors significantly."',
        name: "Meera Iyer",
        role: "Operations Head, DataSync",
        avatar: "MI"
    },
    {
        id: 9,
        quote: '"Exceptional customer service and technical expertise. ZenithFilings makes complex legal procedures seem simple and straightforward."',
        name: "Karan Malhotra",
        role: "Managing Partner, Growth Ventures",
        avatar: "KM"
    },
    {
        id: 10,
        quote: '"Reliable, efficient, and professional. ZenithFilings has been instrumental in helping us maintain compliance while focusing on business growth."',
        name: "Divya Sharma",
        role: "Founder, EcoSolutions",
        avatar: "DS"
    },
    {
        id: 11,
        quote: '"The team at ZenithFilings is incredibly professional and knowledgeable. They made our company incorporation process smooth and hassle-free."',
        name: "Amit Verma",
        role: "CTO, CloudTech Solutions",
        avatar: "AV"
    },
    {
        id: 12,
        quote: '"Excellent support throughout the entire process. ZenithFilings helped us navigate complex regulatory requirements with ease and efficiency."',
        name: "Neha Gupta",
        role: "Legal Counsel, FinTech Innovations",
        avatar: "NG"
    },
    {
        id: 13,
        quote: '"Outstanding expertise in corporate compliance. ZenithFilings has been our go-to partner for all regulatory matters since day one."',
        name: "Prakash Joshi",
        role: "Managing Director, Logistics Plus",
        avatar: "PJ"
    },
    {
        id: 14,
        quote: '"The automated compliance tracking system is brilliant. We never worry about missing important deadlines anymore."',
        name: "Ritu Singh",
        role: "Head of Operations, HealthTech",
        avatar: "RS"
    },
    {
        id: 15,
        quote: '"ZenithFilings transformed our compliance management from a headache to a streamlined process. Highly recommend their services!"',
        name: "Vikram Malhotra",
        role: "CEO, EduTech Solutions",
        avatar: "VM"
    }
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 120));

    return NextResponse.json({
        success: true,
        data: testimonials
    });
} 