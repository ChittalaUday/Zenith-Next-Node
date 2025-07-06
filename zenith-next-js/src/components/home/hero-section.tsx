"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState, useRef } from "react";

interface HeroStat {
  tag: string;
  title: string;
  value: string;
  change: string;
}

interface HeroContent {
  title: string;
  highlight: string;
  description: string;
  ctaPlaceholder: string;
  ctaButton: string;
  stats: HeroStat[];
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [wavePhase, setWavePhase] = useState(0);
  const [gradientT, setGradientT] = useState(0); // 0 to 1 for gradient animation
  const [barProgress, setBarProgress] = useState(0); // For Card 3 bar
  const [barWavePhase, setBarWavePhase] = useState(0); // For Card 3 wave
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setIsVisible(true);
    let lastTime = performance.now();
    let animationFrame: number;
    let barStart: number | null = null;
    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;
      setWavePhase((prev) => prev + delta * 0.0012); // much slower wave
      setGradientT((prev) => (prev + delta / 6000) % 1); // 6s cycle
      // Animate Card 3 bar
      if (barStart === null) barStart = time;
      const barElapsed = time - barStart;
      if (barElapsed < 2000) {
        setBarProgress(barElapsed / 2000);
      } else {
        setBarProgress(1);
      }
      // Animate Card 3 wave phase
      setBarWavePhase((prev) => prev + delta * 0.002);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Helper to interpolate between two hex colors
  function lerpColor(a: string, b: string, t: number) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16), ag = parseInt(ah.substring(2, 4), 16), ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16), bg = parseInt(bh.substring(2, 4), 16), bb = parseInt(bh.substring(4, 6), 16);
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
  }

  // Animate between two color pairs
  const colorA1 = '#38bdf8', colorA2 = '#60a5fa';
  const colorB1 = '#1e40af', colorB2 = '#2563eb';
  const stop1 = lerpColor(colorA1, colorA2, Math.abs(Math.sin(Math.PI * gradientT)));
  const stop2 = lerpColor(colorB1, colorB2, Math.abs(Math.sin(Math.PI * gradientT + Math.PI / 2)));

  // Use static CA/tax-filing themed content
  const content: HeroContent = {
    title: "Simplify Your Tax Filing",
    highlight: "With Expert CA Guidance",
    description:
      "File your taxes online with confidence. Our certified Chartered Accountants ensure maximum refunds, compliance, and peace of mind.",
    ctaPlaceholder: "Enter your email to get started",
    ctaButton: "Start Filing",
    stats: [
      {
        tag: "Returns Filed",
        title: "Tax Returns Filed",
        value: "120K+",
        change: "+8% YoY",
      },
      {
        tag: "Clients",
        title: "Happy Clients",
        value: "45K+",
        change: "+5% YoY",
      },
      {
        tag: "Avg. Refund",
        title: "Avg. Refund Processed",
        value: "₹18,500",
        change: "+12%",
      },
    ],
  };

  // Andhra Telangana cities data
  const cities = [
    { name: "Hyderabad", percentage: 35, color: "#3B82F6" },
    { name: "Vijayawada", percentage: 25, color: "#10B981" },
    { name: "Visakhapatnam", percentage: 20, color: "#F59E0B" },
    { name: "Warangal", percentage: 15, color: "#EF4444" },
    { name: "Guntur", percentage: 5, color: "#8B5CF6" },
  ];

  // Helper to generate a moving half sine wave path
  function getHalfWavePath({ amplitude, height, width, phase }: { amplitude: number, height: number, width: number, phase: number }) {
    const points = [];
    for (let x = 0; x <= width; x += 4) {
      // Only one crest (half sine wave), phase shifts horizontally
      const y = height / 2 - amplitude * Math.sin((Math.PI * x) / width + phase);
      points.push(`${x},${y}`);
    }
    return `M0,${height} L${points.join(" ")} L${width},${height} Z`;
  }

  // Card 3 bar gradient colors
  const barColor1 = '#34d399'; // green
  const barColor2 = '#38bdf8'; // blue

  // Helper to generate a wave path for the bar
  function getBarWavePath({ amplitude, height, width, phase }: { amplitude: number, height: number, width: number, phase: number }) {
    const points = [];
    for (let x = 0; x <= width; x += 4) {
      const y = height / 2 + amplitude * Math.sin((2 * Math.PI * (x / width)) + phase);
      points.push(`${x},${y}`);
    }
    return `M0,${height} L${points.join(" ")} L${width},${height} Z`;
  }

  // Display the hero section with static content
  return (
    <section className="relative w-full flex justify-center overflow-hidden pt-6 pb-12 sm:pb-20 lg:pb-24">
      {/* Container with max-width for larger screens */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center pt-6 pb-12">
          {/* Left Side - Content */}
          <div className="flex flex-col space-y-10 max-w-2xl">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                {content.title}{" "}
                <span className="block text-primary ">{content.highlight}</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                {content.description}
              </p>
            </div>

            {/* Email Signup Form */}
            <div className="space-y-4">
              <form className="flex flex-col sm:flex-row gap-3 max-w-lg" onSubmit={(e)=>e.preventDefault()}>
                <Input
                  type="email"
                  placeholder={content.ctaPlaceholder}
                  className="h-12 text-base bg-background border-border focus:ring-2 focus:ring-ring focus:border-ring"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 px-8 text-base font-semibold shrink-0"
                >
                  {content.ctaButton}
                </Button>
              </form>
            </div>

            
          </div>

          {/* Right Side - Statistics Cards */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px] flex items-center justify-center">
              {/* Card 1 */}
              <Card className={`absolute top-0 left-1/4 -translate-x-3/5 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-64 sm:w-72 lg:w-80 z-30 transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        {content.stats[0]?.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{content.stats[0]?.title}</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">{content.stats[0]?.value}</span>
                        {content.stats[0]?.change && (
                          <span className="text-sm font-medium text-green-600">{content.stats[0].change}</span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-12 sm:h-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg flex items-end p-2 relative overflow-hidden">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 60"
                        fill="none"
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: 1 }}
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="halfWaveGradient" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor={stop1} />
                            <stop offset="100%" stopColor={stop2} />
                          </linearGradient>
                        </defs>
                        <path
                          d={getHalfWavePath({ amplitude: 10, height: 60, width: 200, phase: wavePhase })}
                          fill="url(#halfWaveGradient)"
                          opacity="0.85"
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className={`absolute top-20 left-1/2 right-0 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-64 sm:w-72 lg:w-80 z-20 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        {content.stats[1]?.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{content.stats[1]?.title}</h3>
                      <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                          <svg
                            width="64"
                            height="64"
                            viewBox="0 0 36 36"
                            className="w-full h-full"
                          >
                            <circle cx="18" cy="18" r="16" fill="hsl(var(--muted))" />
                            {cities.map((city, index) => {
                              const startAngle = cities.slice(0, index).reduce((acc, c) => acc + (c.percentage / 100) * 360, 0);
                              const endAngle = startAngle + (city.percentage / 100) * 360;
                              const x1 = 18 + 16 * Math.cos((startAngle - 90) * Math.PI / 180);
                              const y1 = 18 + 16 * Math.sin((startAngle - 90) * Math.PI / 180);
                              const x2 = 18 + 16 * Math.cos((endAngle - 90) * Math.PI / 180);
                              const y2 = 18 + 16 * Math.sin((endAngle - 90) * Math.PI / 180);
                              const largeArcFlag = city.percentage > 50 ? 1 : 0;
                              
                              return (
                                <path
                                  key={city.name}
                                  d={`M 18 18 L ${x1} ${y1} A 16 16 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                                  fill={city.color}
                                  className={`transition-all duration-1000 ease-out delay-${index * 200}`}
                                  style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'scale(1)' : 'scale(0)',
                                  }}
                                />
                              );
                            })}
                          </svg>
                        </div>
                        <div className="flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm">
                          {cities.map((city, index) => (
                            <div key={city.name} className={`flex items-center gap-2 transition-all duration-500 ease-out delay-${index * 100}`} style={{
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                            }}>
                              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: city.color }}></div>
                              <span>{city.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className={`absolute bottom-0 left-0 bg-card/95 backdrop-blur-sm border-border/50 shadow-xl w-72 sm:w-80 lg:w-96 z-10 transition-all duration-1000 ease-out delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">Statistics</span>
                      <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold text-foreground">
                        {content.stats[2]?.tag}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold">{content.stats[2]?.title}</h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold">{content.stats[2]?.value}</span>
                        {content.stats[2]?.change && (
                          <span className="text-sm font-medium text-green-600">{content.stats[2].change}</span>
                        )}
                      </div>
                    </div>
                    <div className="w-full h-12 sm:h-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg flex items-end p-2 relative overflow-hidden">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 60"
                        fill="none"
                        className="absolute inset-0 w-full h-full"
                        style={{ zIndex: 1 }}
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="refundBarGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor={barColor1} />
                            <stop offset="100%" stopColor={barColor2} />
                          </linearGradient>
                          <linearGradient id="barWaveGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#fff" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#fff" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                        {/* Full bar background */}
                        <rect
                          x="0"
                          y="22"
                          width={200}
                          height="16"
                          rx="8"
                          fill="url(#refundBarGradient)"
                          opacity="0.9"
                        />
                        {/* Animated wave overlay */}
                        <path
                          d={getBarWavePath({ amplitude: 4, height: 16, width: 200, phase: barWavePhase })}
                          fill="url(#barWaveGradient)"
                          style={{ transform: 'translateY(22px)' }}
                        />
                      </svg>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}