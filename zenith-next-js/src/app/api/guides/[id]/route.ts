import { NextRequest, NextResponse } from 'next/server';

export interface Guide {
    id?: number;
    title: string;
    blocks: any[];
    author?: string;
    publishedAt?: string;
    updatedAt?: string;
}

// In-memory storage for demo purposes
// In production, this would be replaced with a database
let guides: Guide[] = [
    {
        id: 1,
        title: 'Guide to Filing Annual Returns',
        blocks: [
            { id: '1', type: 'heading1', content: 'Guide to Filing Annual Returns' },
            { id: '2', type: 'paragraph', content: 'This guide will walk you through the process of filing annual returns for your business.' },
            { id: '3', type: 'heading2', content: 'Step 1: Collect Documents' },
            { id: '4', type: 'list', items: ['Financial statements', 'Board resolutions', 'Shareholder details', 'Directors information'] },
            { id: '5', type: 'heading2', content: 'Step 2: Prepare Forms' },
            { id: '6', type: 'paragraph', content: 'Download the required forms from the MCA portal and fill them accurately.' },
            { id: '7', type: 'heading2', content: 'Step 3: Submit Online' },
            { id: '8', type: 'paragraph', content: 'Log in to the MCA portal and submit your forms along with the required documents.' },
        ],
        author: 'Compliance Team',
        publishedAt: '2024-01-20T08:00:00Z',
        updatedAt: '2024-01-20T08:00:00Z',
    },
    {
        id: 2,
        title: 'How to Register a Partnership',
        blocks: [
            { id: '1', type: 'heading1', content: 'How to Register a Partnership' },
            { id: '2', type: 'paragraph', content: 'Learn how to register a partnership firm in India.' },
            { id: '3', type: 'heading2', content: 'Step 1: Draft Partnership Deed' },
            { id: '4', type: 'paragraph', content: 'Create a partnership deed that outlines the terms and conditions of your partnership.' },
            { id: '5', type: 'heading2', content: 'Step 2: Get Notarized' },
            { id: '6', type: 'paragraph', content: 'Get the partnership deed notarized by a notary public.' },
            { id: '7', type: 'heading2', content: 'Step 3: Apply for PAN and TAN' },
            { id: '8', type: 'list', items: ['Apply for PAN', 'Apply for TAN', 'Submit required documents'] },
            { id: '9', type: 'heading2', content: 'Step 4: Register with Registrar' },
            { id: '10', type: 'paragraph', content: 'Register your partnership with the Registrar of Firms in your state.' },
        ],
        author: 'Business Advisor',
        publishedAt: '2024-01-22T13:00:00Z',
        updatedAt: '2024-01-22T13:00:00Z',
    },
];

export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const guide = guides.find(g => g.id === id);

        if (!guide) {
            return NextResponse.json(
                { success: false, error: 'Guide not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: guide });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to fetch guide' },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const body = await request.json();
        const { title, blocks, author, publishedAt } = body;

        const guideIndex = guides.findIndex(g => g.id === id);
        if (guideIndex === -1) {
            return NextResponse.json(
                { success: false, error: 'Guide not found' },
                { status: 404 }
            );
        }

        guides[guideIndex] = {
            ...guides[guideIndex],
            title: title || guides[guideIndex].title,
            blocks: blocks || guides[guideIndex].blocks,
            author: author || guides[guideIndex].author,
            publishedAt: publishedAt || guides[guideIndex].publishedAt,
            updatedAt: new Date().toISOString(),
        };

        return NextResponse.json({ success: true, data: guides[guideIndex] });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to update guide' },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const guideIndex = guides.findIndex(g => g.id === id);

        if (guideIndex === -1) {
            return NextResponse.json(
                { success: false, error: 'Guide not found' },
                { status: 404 }
            );
        }

        const deletedGuide = guides.splice(guideIndex, 1)[0];

        return NextResponse.json({ success: true, data: deletedGuide });
    } catch (error) {
        return NextResponse.json(
            { success: false, error: 'Failed to delete guide' },
            { status: 500 }
        );
    }
} 