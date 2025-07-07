import { NextResponse } from 'next/server';

export interface Guide {
    id: number;
    title: string;
    steps: string[];
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
}

const guides: Guide[] = [
    {
        id: 1,
        title: 'Guide to Filing Annual Returns',
        steps: [
            'Collect all financial documents',
            'Prepare the annual return form',
            'Submit to the MCA portal',
            'Keep acknowledgment for records',
        ],
        author: 'Compliance Team',
        publishedAt: '2024-01-20T08:00:00Z',
        updatedAt: '2024-01-20T08:00:00Z',
    },
    {
        id: 2,
        title: 'How to Register a Partnership',
        steps: [
            'Draft a partnership deed',
            'Get the deed notarized',
            'Apply for PAN and TAN',
            'Register with the Registrar of Firms',
        ],
        author: 'Business Advisor',
        publishedAt: '2024-01-22T13:00:00Z',
        updatedAt: '2024-01-22T13:00:00Z',
    },
];

export async function GET() {
    await new Promise((r) => setTimeout(r, 80));
    return NextResponse.json({ success: true, data: guides });
} 