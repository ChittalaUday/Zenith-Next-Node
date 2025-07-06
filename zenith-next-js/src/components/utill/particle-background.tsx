"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  number: string;
}

interface FloatingElement {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: "rupee";
}

interface ParticleBackgroundProps {
  className?: string;
  particleCount?: number;
  floatingElementsCount?: number;
}

export function ParticleBackground({
  className,
  particleCount = 50,
  floatingElementsCount = 8,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const floatingElementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Get computed styles for theme colors
    const getThemeColor = (colorVar: string) => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue(colorVar).trim();
    };

    // Initialize particles (numbers)
    const initParticles = () => {
      particlesRef.current = [];
      const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 12 + 8, // Font size for numbers
          opacity: Math.random() * 0.3 + 0.1,
          number: numbers[Math.floor(Math.random() * numbers.length)],
        });
      }
    };

    // Initialize floating elements (rupees)
    const initFloatingElements = () => {
      floatingElementsRef.current = [];
      for (let i = 0; i < floatingElementsCount; i++) {
        floatingElementsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 30, // Font size for rupee symbol
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.2 + 0.1,
          type: "rupee",
        });
      }
    };

    initParticles();
    initFloatingElements();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Get current theme colors
      const foregroundColor = getThemeColor('--foreground');
      const primaryColor = getThemeColor('--primary');
      const secondaryColor = getThemeColor('--secondary');
      const accentColor = getThemeColor('--accent');
      const mutedColor = getThemeColor('--muted');

      // Draw particles (numbers)
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = foregroundColor;
        ctx.font = `${particle.size}px Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(particle.number, particle.x, particle.y);
        ctx.restore();
      });

      // Draw floating elements (rupees)
      floatingElementsRef.current.forEach((element, index) => {
        element.rotation += element.rotationSpeed;

        ctx.save();
        ctx.globalAlpha = element.opacity;
        ctx.translate(element.x, element.y);
        ctx.rotate((element.rotation * Math.PI) / 180);
        
        // Use different theme colors for variety
        const colors = [primaryColor, secondaryColor, accentColor, mutedColor];
        const currentColor = colors[index % colors.length];
        
        ctx.fillStyle = currentColor;
        ctx.font = `${element.size}px Arial, sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("₹", 0, 0);
        ctx.restore();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, floatingElementsCount]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("fixed inset-0 pointer-events-none z-[-1]", className)}
    />
  );
}
