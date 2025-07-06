import { NextResponse } from 'next/server';

export interface Post {
    id: number;
    title: string;
    content?: string;
    createdAt?: string;
    updatedAt?: string;
}

const posts: Post[] = [
    {
        id: 1,
        title: "About Us",
        content: "Learn more about our company and mission.",
        createdAt: "2024-01-15T10:00:00Z",
        updatedAt: "2024-01-15T10:00:00Z"
    },
    {
        id: 2,
        title: "Our Mission",
        content: "Discover what drives us to help businesses succeed.",
        createdAt: "2024-01-16T14:30:00Z",
        updatedAt: "2024-01-16T14:30:00Z"
    },
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));

    return NextResponse.json({
        success: true,
        data: posts
    });
} 