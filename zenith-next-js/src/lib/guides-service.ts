import { Guide } from '@/app/dashboard/content/guides/editor-canvas';

const API_BASE = '/api/guides';

export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
}

export class GuidesService {
    static async getAllGuides(): Promise<Guide[]> {
        try {
            const response = await fetch(API_BASE);
            const result: ApiResponse<Guide[]> = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to fetch guides');
            }

            return result.data || [];
        } catch (error) {
            console.error('Error fetching guides:', error);
            throw error;
        }
    }

    static async getGuideById(id: number): Promise<Guide | null> {
        try {
            const response = await fetch(`${API_BASE}/${id}`);
            const result: ApiResponse<Guide> = await response.json();

            if (!result.success) {
                if (response.status === 404) {
                    return null;
                }
                throw new Error(result.error || 'Failed to fetch guide');
            }

            return result.data || null;
        } catch (error) {
            console.error('Error fetching guide:', error);
            throw error;
        }
    }

    static async createGuide(guide: Omit<Guide, 'id'>): Promise<Guide> {
        try {
            const response = await fetch(API_BASE, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guide),
            });

            const result: ApiResponse<Guide> = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to create guide');
            }

            return result.data!;
        } catch (error) {
            console.error('Error creating guide:', error);
            throw error;
        }
    }

    static async updateGuide(guide: Guide): Promise<Guide> {
        try {
            const response = await fetch(API_BASE, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guide),
            });

            const result: ApiResponse<Guide> = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to update guide');
            }

            return result.data!;
        } catch (error) {
            console.error('Error updating guide:', error);
            throw error;
        }
    }

    static async deleteGuide(id: number): Promise<void> {
        try {
            const response = await fetch(`${API_BASE}?id=${id}`, {
                method: 'DELETE',
            });

            const result: ApiResponse<void> = await response.json();

            if (!result.success) {
                throw new Error(result.error || 'Failed to delete guide');
            }
        } catch (error) {
            console.error('Error deleting guide:', error);
            throw error;
        }
    }

    static async publishGuide(id: number): Promise<Guide> {
        try {
            const guide = await this.getGuideById(id);
            if (!guide) {
                throw new Error('Guide not found');
            }

            const updatedGuide = {
                ...guide,
                publishedAt: new Date().toISOString(),
            };

            return await this.updateGuide(updatedGuide);
        } catch (error) {
            console.error('Error publishing guide:', error);
            throw error;
        }
    }

    static async unpublishGuide(id: number): Promise<Guide> {
        try {
            const guide = await this.getGuideById(id);
            if (!guide) {
                throw new Error('Guide not found');
            }

            const updatedGuide = {
                ...guide,
                publishedAt: undefined,
            };

            return await this.updateGuide(updatedGuide);
        } catch (error) {
            console.error('Error unpublishing guide:', error);
            throw error;
        }
    }
} 