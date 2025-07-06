"use client";

import { Logo } from "./logo";
import Link from "next/link";
import { useEffect, useState } from "react";

interface MenuItem {
  label: string;
  href?: string;
  icon?: string;
  subItems?: MenuItem[];
}

interface Service {
  title: string;
  desc: string;
  icon: string;
  badge: "default" | "secondary" | "outline";
  color: string;
  price?: string;
  subServices?: any[];
}

export function FooterSection() {
  const [menuLinks, setMenuLinks] = useState<MenuItem[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        // Fetch menu data
        const menuResponse = await fetch('/api/menu');
        const menuData = await menuResponse.json();
        setMenuLinks(menuData.data);

        // Fetch services data
        const servicesResponse = await fetch('/api/services');
        const servicesData = await servicesResponse.json();
        setServices(servicesData.data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterData();
  }, []);

  // Extract main navigation links from menu
  const getMainLinks = () => {
    return menuLinks.filter(item => item.href && item.href !== '#').slice(0, 6);
  };

  // Extract service links
  const getServiceLinks = () => {
    return services.slice(0, 4).map(service => ({
      label: service.title,
      href: `/services?cat=${service.title.toLowerCase().replace(/\s+/g, '-')}`
    }));
  };

  // Extract additional links from menu subitems
  const getAdditionalLinks = () => {
    const additionalLinks: { label: string; href: string }[] = [];
    menuLinks.forEach(item => {
      if (item.subItems) {
        item.subItems.forEach(subItem => {
          if (subItem.href && subItem.href !== '#') {
            additionalLinks.push({
              label: subItem.label,
              href: subItem.href
            });
          }
        });
      }
    });
    return additionalLinks.slice(0, 4);
  };

  if (loading) {
    return (
      <footer className="w-full py-10 px-4 md:px-12 bg-background border-t mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div>
            <Logo className="h-9 mb-4" width={140} height={45} />
            <p className="text-sm text-muted-foreground mb-4">Compliant partner for business growth. Get expert guidance for business compliance and registration services.</p>
          </div>
          <div>
            <div className="font-semibold mb-2 text-foreground">Quick Links</div>
            <ul className="text-sm flex flex-col gap-1">
              <li className="text-muted-foreground">Loading...</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-foreground">Our Services</div>
            <ul className="text-sm flex flex-col gap-1">
              <li className="text-muted-foreground">Loading...</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2 text-foreground">Contact us</div>
            <ul className="text-sm flex flex-col gap-1">
              <li className="text-muted-foreground">support@zenithfilings.com</li>
              <li className="text-muted-foreground">+91-99999-43210</li>
              <li className="text-muted-foreground">123 Business Avenue, Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-8">© 2024 ZenithFilings. All rights reserved.</div>
      </footer>
    );
  }

  const mainLinks = getMainLinks();
  const serviceLinks = getServiceLinks();
  const additionalLinks = getAdditionalLinks();

  return (
    <footer className="w-full py-10 px-4 md:px-12 bg-background border-t mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        <div>
          <Logo className="h-9 mb-4" width={140} height={45} />
          <p className="text-sm text-muted-foreground mb-4">Compliant partner for business growth. Get expert guidance for business compliance and registration services.</p>
        </div>
        <div>
          <div className="font-semibold mb-2 text-foreground">Quick Links</div>
          <ul className="text-sm flex flex-col gap-1">
            {mainLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href!} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-foreground">Our Services</div>
          <ul className="text-sm flex flex-col gap-1">
            {serviceLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2 text-foreground">Additional Links</div>
          <ul className="text-sm flex flex-col gap-1">
            {additionalLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="font-semibold mb-2 text-foreground mt-6">Contact us</div>
          <ul className="text-sm flex flex-col gap-1">
            <li className="text-muted-foreground">support@zenithfilings.com</li>
            <li className="text-muted-foreground">+91-99999-43210</li>
            <li className="text-muted-foreground">123 Business Avenue, Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-muted-foreground mt-8">© 2024 ZenithFilings. All rights reserved.</div>
    </footer>
  );
} 