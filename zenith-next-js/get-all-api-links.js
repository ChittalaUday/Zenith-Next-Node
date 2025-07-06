const fetch = require('node-fetch');

// Base URL for the API endpoints
const BASE_URL = 'http://localhost:3000/api';

// API endpoints to fetch
const endpoints = [
    '/menu',
    '/services',
    '/pricing/plans',
    '/pricing/services',
    '/testimonials',
    '/posts',
    '/dashboard',
    '/how-it-works'
];

// Function to extract links from menu data
function extractMenuLinks(menuData) {
    const links = [];

    function traverseMenu(items) {
        items.forEach(item => {
            if (item.href && item.href !== '#') {
                links.push({
                    label: item.label,
                    href: item.href,
                    type: 'menu'
                });
            }
            if (item.subItems) {
                traverseMenu(item.subItems);
            }
        });
    }

    traverseMenu(menuData);
    return links;
}

// Function to extract links from dashboard data
function extractDashboardLinks(dashboardData) {
    const links = [];

    // Extract from navMain
    dashboardData.navMain.forEach(navItem => {
        if (navItem.url && navItem.url !== '#') {
            links.push({
                label: navItem.title,
                href: navItem.url,
                type: 'dashboard-nav'
            });
        }
        if (navItem.items) {
            navItem.items.forEach(subItem => {
                if (subItem.url && subItem.url !== '#') {
                    links.push({
                        label: subItem.title,
                        href: subItem.url,
                        type: 'dashboard-sub-nav'
                    });
                }
            });
        }
    });

    // Extract from projects
    dashboardData.projects.forEach(project => {
        if (project.url && project.url !== '#') {
            links.push({
                label: project.name,
                href: project.url,
                type: 'dashboard-project'
            });
        }
    });

    return links;
}

// Function to extract service links
function extractServiceLinks(servicesData) {
    const links = [];

    servicesData.forEach(service => {
        // Create service category links
        const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '-');
        links.push({
            label: service.title,
            href: `/services?cat=${serviceSlug}`,
            type: 'service-category'
        });

        // Create individual service links
        if (service.subServices) {
            service.subServices.forEach(subService => {
                const subServiceSlug = subService.title.toLowerCase().replace(/\s+/g, '-');
                links.push({
                    label: subService.title,
                    href: `/services/${subServiceSlug}`,
                    type: 'service-item'
                });
            });
        }
    });

    return links;
}

// Function to extract pricing links
function extractPricingLinks(plansData, servicesData) {
    const links = [];

    // Add pricing page link
    links.push({
        label: 'Pricing Plans',
        href: '/pricing',
        type: 'pricing-page'
    });

    // Add individual plan links
    plansData.forEach(plan => {
        links.push({
            label: `${plan.name} Plan`,
            href: `/pricing#${plan.name.toLowerCase()}`,
            type: 'pricing-plan'
        });
    });

    // Add service pricing links
    servicesData.forEach(service => {
        links.push({
            label: `${service.title} Pricing`,
            href: `/pricing#${service.title.toLowerCase().replace(/\s+/g, '-')}`,
            type: 'service-pricing'
        });
    });

    return links;
}

// Function to extract blog/post links
function extractPostLinks(postsData) {
    const links = [];

    // Add blog page link
    links.push({
        label: 'Blog',
        href: '/blog',
        type: 'blog-page'
    });

    // Add individual post links
    postsData.forEach(post => {
        const postSlug = post.title.toLowerCase().replace(/\s+/g, '-');
        links.push({
            label: post.title,
            href: `/blog/${postSlug}`,
            type: 'blog-post'
        });
    });

    return links;
}

// Main function to fetch all API data and extract links
async function getAllApiLinks() {
    const allLinks = [];

    try {
        console.log('Fetching all API endpoints...\n');

        // Fetch menu data
        console.log('1. Fetching menu data...');
        const menuResponse = await fetch(`${BASE_URL}/menu`);
        const menuData = await menuResponse.json();
        const menuLinks = extractMenuLinks(menuData.data);
        allLinks.push(...menuLinks);
        console.log(`   Found ${menuLinks.length} menu links`);

        // Fetch services data
        console.log('2. Fetching services data...');
        const servicesResponse = await fetch(`${BASE_URL}/services`);
        const servicesData = await servicesResponse.json();
        const serviceLinks = extractServiceLinks(servicesData.data);
        allLinks.push(...serviceLinks);
        console.log(`   Found ${serviceLinks.length} service links`);

        // Fetch pricing plans data
        console.log('3. Fetching pricing plans data...');
        const plansResponse = await fetch(`${BASE_URL}/pricing/plans`);
        const plansData = await plansResponse.json();

        // Fetch pricing services data
        console.log('4. Fetching pricing services data...');
        const pricingServicesResponse = await fetch(`${BASE_URL}/pricing/services`);
        const pricingServicesData = await pricingServicesResponse.json();

        const pricingLinks = extractPricingLinks(plansData.data, pricingServicesData.data);
        allLinks.push(...pricingLinks);
        console.log(`   Found ${pricingLinks.length} pricing links`);

        // Fetch posts data
        console.log('5. Fetching posts data...');
        const postsResponse = await fetch(`${BASE_URL}/posts`);
        const postsData = await postsResponse.json();
        const postLinks = extractPostLinks(postsData.data);
        allLinks.push(...postLinks);
        console.log(`   Found ${postLinks.length} post links`);

        // Fetch dashboard data
        console.log('6. Fetching dashboard data...');
        const dashboardResponse = await fetch(`${BASE_URL}/dashboard`);
        const dashboardData = await dashboardResponse.json();
        const dashboardLinks = extractDashboardLinks(dashboardData.data);
        allLinks.push(...dashboardLinks);
        console.log(`   Found ${dashboardLinks.length} dashboard links`);

        // Add static page links
        console.log('7. Adding static page links...');
        const staticLinks = [
            { label: 'Home', href: '/', type: 'static' },
            { label: 'About', href: '/about', type: 'static' },
            { label: 'Services', href: '/services', type: 'static' },
            { label: 'Pricing', href: '/pricing', type: 'static' },
            { label: 'Contact', href: '/contact', type: 'static' },
            { label: 'FAQ', href: '/faq', type: 'static' },
            { label: 'Blog', href: '/blog', type: 'static' },
            { label: 'Login', href: '/login', type: 'static' },
            { label: 'Dashboard', href: '/dashboard', type: 'static' }
        ];
        allLinks.push(...staticLinks);
        console.log(`   Added ${staticLinks.length} static page links`);

        // Remove duplicates based on href
        const uniqueLinks = [];
        const seenHrefs = new Set();

        allLinks.forEach(link => {
            if (!seenHrefs.has(link.href)) {
                seenHrefs.add(link.href);
                uniqueLinks.push(link);
            }
        });

        console.log('\n=== ALL API LINKS ===');
        console.log(`Total unique links found: ${uniqueLinks.length}\n`);

        // Group links by type
        const linksByType = {};
        uniqueLinks.forEach(link => {
            if (!linksByType[link.type]) {
                linksByType[link.type] = [];
            }
            linksByType[link.type].push(link);
        });

        // Display links grouped by type
        Object.keys(linksByType).forEach(type => {
            console.log(`${type.toUpperCase()} (${linksByType[type].length}):`);
            linksByType[type].forEach(link => {
                console.log(`  - ${link.label}: ${link.href}`);
            });
            console.log('');
        });

        // Display all links in a simple format
        console.log('=== ALL LINKS (SIMPLE FORMAT) ===');
        uniqueLinks.forEach(link => {
            console.log(`${link.href} - ${link.label}`);
        });

        return uniqueLinks;

    } catch (error) {
        console.error('Error fetching API data:', error.message);
        return [];
    }
}

// Run the function
getAllApiLinks().catch(console.error); 