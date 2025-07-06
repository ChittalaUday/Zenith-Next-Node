"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [selected, setSelected] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  // If ?cat= is present, select that category
  useEffect(() => {
    if (!services.length) return;
    const cat = searchParams.get("cat");
    if (cat) {
      const idx = services.findIndex((s) => s.title.toLowerCase() === cat.toLowerCase());
      if (idx !== -1) setSelected(idx);
    }
  }, [searchParams, services]);

  const handleCategoryClick = (idx: number) => {
    setSelected(idx);
    // Update URL param for deep linking
    const catSlug = services[idx].title.toLowerCase().replace(/\s+/g, "-");
    router.replace(`/services?cat=${catSlug}`);
  };

  return (
    <div className="relative min-h-screen bg-background">
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-3/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10">
        <ParticleBackground particleCount={10} floatingElementsCount={4} />
        <NavBar />

        {/* Mobile category selector */}
        <div className="md:hidden px-4 mt-6">
          <select
            value={selected}
            onChange={(e) => handleCategoryClick(Number(e.target.value))}
            className="w-full py-3 px-4 bg-card/80 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {services.map((cat, idx) => (
              <option value={idx} key={cat.title}>
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        <div className="container mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl flex flex-col md:flex-row gap-8 pt-12 pb-24">
          {/* Sidebar */}
          <aside className="hidden md:block w-full md:w-64 flex-shrink-0 mb-8 md:mb-0">
            <div className="bg-card/80 rounded-2xl shadow p-4 flex flex-col gap-2">
              {services.map((cat, idx) => {
                const IconComponent = getIcon(cat.icon);
                return (
                  <button
                    key={cat.title}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left font-semibold text-base ${selected === idx ? "bg-primary/10 text-primary" : "hover:bg-accent/40"}`}
                    onClick={() => handleCategoryClick(idx)}
                  >
                    <span className={`rounded-lg p-2 ${getColorByString(cat.title)}`}>
                      <IconComponent className="w-6 h-6" />
                    </span>
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1">
            {services[selected] && (
              <>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    {(() => {
                      const IconComponent = getIcon(services[selected].icon);
                      return (
                        <span className={`rounded-lg p-2 ${getColorByString(services[selected].title)}`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </span>
                      );
                    })()}
                    {services[selected].title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-2">{services[selected].desc}</p>
                  {services[selected].price && (
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      {services[selected].price}
                    </Badge>
                  )}
                </div>
                {/* Sub-services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(services[selected].subServices || []).map((sub: any, subIdx: number) => (
                    <Card
                      key={sub.title}
                      className="hover:shadow-xl transition-all duration-200 border-border/60 bg-card/80 backdrop-blur-sm cursor-pointer group"
                      onClick={() => router.push(`/services/${sub.title.toLowerCase().replace(/\s+/g, "-")}`)}
                    >
                      <CardHeader className="flex flex-row items-center gap-3">
                        <Avatar className={`w-12 h-12 ${getColorByString(sub.title)}`}>
                          <AvatarFallback>{sub.title.split(" ").map((w: string) => w[0]).join("").slice(0,2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-lg font-semibold">{sub.title}</CardTitle>
                          <CardDescription className="text-muted-foreground text-sm">{sub.desc}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4 pt-2">
                        <Badge variant="outline" className={`w-fit px-3 py-1 ${getColorByString(sub.title + sub.price)}`}>
                          {sub.price}
                        </Badge>
                        <Button variant="secondary" className="w-full group-hover:scale-105 transition-transform">
                          Learn More
                          {(() => {
                            const ArrowRightIcon = getIcon("ArrowRight");
                            return <ArrowRightIcon className="w-4 h-4 ml-2" />;
                          })()}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                {/* If no sub-services, show a single card */}
                {(!services[selected].subServices || services[selected].subServices.length === 0) && (
                  <Card className="max-w-lg mx-auto">
                    <CardHeader>
                      <CardTitle>{services[selected].title}</CardTitle>
                      <CardDescription>{services[selected].desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      {services[selected].price && (
                        <Badge variant="secondary" className="text-base px-3 py-1 mb-4">
                          {services[selected].price}
                        </Badge>
                      )}
                      <Button variant="secondary" className="w-full">
                        Book Consultation
                        {(() => {
                          const CalendarIcon = getIcon("Calendar");
                          return <CalendarIcon className="w-4 h-4 ml-2" />;
                        })()}
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </main>
        </div>
        <FooterSection />
      </div>
    </div>
  );
} 