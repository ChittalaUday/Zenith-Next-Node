"use client";

import React from "react";
import { AnimatedCard, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { Briefcase, FileText, Landmark, BadgeCheck, Receipt, Banknote, Users, ShieldCheck } from "lucide-react";

interface Service {
  title: string;
  desc: string;
  icon: string;
  badge: BadgeProps["variant"];
  color: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  FileText,
  Landmark,
  BadgeCheck,
  Receipt,
  Banknote,
  Users,
  ShieldCheck
};

// Function to fetch services data from API
async function getServicesData(): Promise<Service[]> {
  try {
    const response = await fetch('/api/services');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching services data:', error);
    // Fallback data
    return [
      { title: "Startup", desc: "All services for startups including registration, compliance, and advisory.", icon: "Briefcase", badge: "default", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
      { title: "Registrations", desc: "Business, tax, and other statutory registrations for your company.", icon: "FileText", badge: "secondary", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" },
      { title: "Consultation", desc: "Expert consultation for all your business and compliance needs.", icon: "Users", badge: "default", color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200" },
    ];
  }
}

export function ServicesSection() {
  const [services, setServices] = React.useState<Service[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const data = await getServicesData();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-12 flex flex-col items-center">
        <h2 className="text-5xl font-semibold mb-2">Our Services</h2>
        <p className="text-muted-foreground mb-8 text-center">Comprehensive business solutions to help you start and grow your business with ease.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-48 bg-muted rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-5xl font-semibold mb-2">Our Services</h2>
      <p className="text-muted-foreground mb-8 text-center">Comprehensive business solutions to help you start and grow your business with ease.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-5xl mb-8">
        {services.map((service, i) => {
          const IconComponent = iconMap[service.icon];
          return (
            <AnimatedCard key={i} className="flex flex-col items-start group">
              <CardHeader>
                <Badge variant={service.badge} className={`mb-2 p-2 flex items-center justify-center size-12 ${service.color} transition-all duration-300 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary/40`}>
                  <IconComponent className="size-8 drop-shadow transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                </Badge>
                <CardTitle className="mt-2 text-lg md:text-md font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-2 text-md">{service.desc}</p>
                <a
                  href="#"
                  className="relative text-md font-medium group mt-2 inline-block focus:outline-none"
                >
                  Learn More
                  <span className="block h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              </CardContent>
            </AnimatedCard>
          );
        })}
      </div>
      <Button variant="outline">View All Services</Button>
    </section>
  );
} 