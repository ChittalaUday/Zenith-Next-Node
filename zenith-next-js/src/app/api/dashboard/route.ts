import { NextResponse } from 'next/server';

export interface User {
    name: string;
    email: string;
    avatar: string;
}

export interface Team {
    name: string;
    logo: string;
    plan: string;
}

export interface NavItem {
    title: string;
    url: string;
    icon: string;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }[];
}

export interface Project {
    name: string;
    url: string;
    icon: string;
}

export interface DashboardData {
    user: User;
    teams: Team[];
    navMain: NavItem[];
    projects: Project[];
}

const dashboardData: DashboardData = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    teams: [
        {
            name: "Acme Inc",
            logo: "GalleryVerticalEnd",
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: "AudioWaveform",
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: "Command",
            plan: "Free",
        },
    ],
    navMain: [
        {
            title: "Analytics",
            url: "/dashboard/analytics",
            icon: "ChartNoAxesGantt",
            isActive: false,
        },
        {
            title: "Users Managment",
            url: "/dashboard/users",
            icon: "Users",
            items: [
                {
                    title: "Users",
                    url: "/dashboard/users",
                },
                {
                    title: "Staff",
                    url: "#",
                },
                {
                    title: "Clients",
                    url: "#",
                },
            ],
        },
        {
            title: "Tasks",
            url: "/dashboard/tasks",
            icon: "Library",
            items: [
                {
                    title: "Clients Request",
                    url: "#",
                },
                {
                    title: "Get Started",
                    url: "#",
                },
                {
                    title: "Tutorials",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Content Management",
            url: "/dashboard/content-management",
            icon: "ChartNoAxesGantt",
            items: [
                {
                    title: "Content",
                    url: "/dashboard/content",
                },
                {
                    title: "Testimonials",
                    url: "/dashboard/content/testimonials",
                },
                {
                    title: "FAQs",
                    url: "#",
                },
                {
                    title: "Changelog",
                    url: "#",
                },
            ],
        },
        {
            title: "Settings",
            url: "/dashboard/settings",
            icon: "Settings2",
            isActive: false,
        },
    ],
    projects: [
        {
            name: "Design Engineering",
            url: "/about",
            icon: "Frame",
        },
        {
            name: "Sales & Marketing",
            url: "#",
            icon: "PieChart",
        },
        {
            name: "Travel",
            url: "#",
            icon: "Map",
        },
    ],
};

export async function GET() {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));

    return NextResponse.json({
        success: true,
        data: dashboardData
    });
} 