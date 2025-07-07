import { NextResponse } from 'next/server';

export interface Article {
    id: number;
    title: string;
    description?: string;
    body?: string;
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: 'Understanding Company Compliance',
        description: 'A deep dive into company compliance requirements in India.',
        body: 'Compliance is a critical aspect of running a business...',
        author: 'Legal Team',
        publishedAt: '2024-01-15T10:00:00Z',
        updatedAt: '2024-01-15T10:00:00Z',
    },
    {
        id: 2,
        title: 'Trademark Registration Process',
        description: 'Step-by-step process for trademark registration.',
        body: 'Registering a trademark protects your brand identity...',
        author: 'IP Specialist',
        publishedAt: '2024-01-18T14:30:00Z',
        updatedAt: '2024-01-18T14:30:00Z',
    },
];

export async function GET() {
    await new Promise((r) => setTimeout(r, 80));
    return NextResponse.json({ success: true, data: articles });
} 