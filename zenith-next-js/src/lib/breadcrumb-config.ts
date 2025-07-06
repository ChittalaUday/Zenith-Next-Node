// Configuration for dynamic breadcrumbs
export interface BreadcrumbConfig {
    label: string;
    href?: string;
    isCurrentPage?: boolean;
    hidden?: boolean;
}

// Route label mappings
export const routeLabels: Record<string, string> = {
    dashboard: "Dashboard",
    about: "About",
    missions: "Missions",
    login: "Login",
    // Add more route mappings as needed
};

// Custom breadcrumb configurations for specific routes
export const customBreadcrumbs: Record<string, BreadcrumbConfig[]> = {
    // Example: Custom breadcrumb for a specific page
    "/dashboard": [
        { label: "Home", href: "/" },
        { label: "Dashboard", isCurrentPage: true },
    ],
    "/about/missions": [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Missions", isCurrentPage: true },
    ],
};

// Function to get custom breadcrumb configuration for a path
export function getCustomBreadcrumb(pathname: string): BreadcrumbConfig[] | null {
    return customBreadcrumbs[pathname] || null;
}

// Function to generate default breadcrumbs from pathname
export function generateDefaultBreadcrumbs(pathname: string): BreadcrumbConfig[] {
    const segments = pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
        return [{ label: "Home", href: "/", isCurrentPage: true }];
    }

    const breadcrumbs: BreadcrumbConfig[] = [];

    // Add home breadcrumb
    breadcrumbs.push({ label: "Home", href: "/" });

    // Build breadcrumbs for each segment
    let currentPath = "";
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === segments.length - 1;

        breadcrumbs.push({
            label: routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
            href: isLast ? undefined : currentPath,
            isCurrentPage: isLast,
        });
    });

    return breadcrumbs;
} 