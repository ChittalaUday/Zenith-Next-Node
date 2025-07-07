import { NextResponse } from 'next/server';

export interface Blog {
    id: number;
    title: string;
    summary?: string;
    content?: string;
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
}

const blogs: Blog[] = [
    {
        id: 1,
        title: 'How to Start a Business in India',
        summary: 'A step-by-step guide for entrepreneurs.',
        content: 'This blog covers the basics of starting a business in India...',
        author: 'Admin',
        publishedAt: '2024-01-10T09:00:00Z',
        updatedAt: '2024-01-10T09:00:00Z',
    },
    {
        id: 2,
        title: 'GST Registration Explained',
        summary: 'Everything you need to know about GST registration.',
        content: 'GST registration is mandatory for businesses above a certain threshold...',
        author: 'Expert',
        publishedAt: '2024-01-12T11:30:00Z',
        updatedAt: '2024-01-12T11:30:00Z',
    },
];

export async function GET() {
    await new Promise((r) => setTimeout(r, 80));
    return NextResponse.json({ success: true, data: blogs });
} 