import { NextResponse } from 'next/server';

export interface Step {
    id: number;
    icon: string;
    title: string;
    desc: string;
    bg: string;
    iconColor: string;
}

const steps: Step[] = [
    {
        id: 1,
        icon: "FileEdit",
        title: "Step 1",
        desc: "Choose your service",
        bg: "bg-blue-500/90 dark:bg-blue-600 shadow-lg",
        iconColor: "text-white",
    },
    {
        id: 2,
        icon: "UploadCloud",
        title: "Step 2",
        desc: "Upload documents",
        bg: "bg-orange-400/90 dark:bg-orange-500 shadow-lg",
        iconColor: "text-white",
    },
    {
        id: 3,
        icon: "CheckCircle",
        title: "Step 3",
        desc: "Get your service delivered",
        bg: "bg-green-600 dark:bg-green-500 shadow-lg",
        iconColor: "text-white",
    },
];

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 80));

    return NextResponse.json({
        success: true,
        data: steps
    });
} 