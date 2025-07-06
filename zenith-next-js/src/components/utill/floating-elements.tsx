"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { 
  Building2, 
  FileText, 
  Receipt, 
  Banknote, 
  Calculator, 
  Shield, 
  BadgeCheck, 
  Landmark, 
  Briefcase, 
  Users, 
  CreditCard, 
  TrendingUp,
  PieChart,
  Target,
  Award,
  Zap,
  Star,
  CheckCircle,
  AlertCircle,
  Info
} from "lucide-react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  scale: number;
  scaleSpeed: number;
  icon: any;
  color: string;
}

interface FloatingElementsProps {
  className?: string;
  count?: number;
}

// Business and tax related icons
const businessIcons = [
  Building2,    // Business building
  FileText,     // Documents
  Receipt,      // Receipts/invoices
  Banknote,     // Money
  Calculator,   // Calculations
  Shield,       // Protection/security
  BadgeCheck,   // Verification/certification
  Landmark,     // Government/legal
  Briefcase,    // Business
  Users,        // Team/people
  CreditCard,   // Payment
  TrendingUp,   // Growth
  PieChart,     // Analytics
  Target,       // Goals
  Award,        // Achievement
  Zap,          // Speed/efficiency
  Star,         // Quality
  CheckCircle,  // Success/completion
  AlertCircle,  // Alerts/notifications
  Info          // Information
];

export function FloatingElements({ className, count = 12 }: FloatingElementsProps) {
  const elementsRef = useRef<FloatingElement[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Initialize floating elements
    elementsRef.current = [];
    for (let i = 0; i < count; i++) {
      elementsRef.current.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 30, // Slightly smaller for icons
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 0.2, // Slower rotation for icons
        opacity: Math.random() * 0.25 + 0.1, // More visible
        scale: 1,
        scaleSpeed: (Math.random() - 0.5) * 0.01, // Subtle scale animation
        icon: businessIcons[Math.floor(Math.random() * businessIcons.length)],
        color: ["primary", "secondary", "accent", "muted"][Math.floor(Math.random() * 4)],
      });
    }

    // Animation loop
    const animate = () => {
      elementsRef.current.forEach((element) => {
        element.rotation += element.rotationSpeed;
        element.scale += element.scaleSpeed;
        
        // Bounce scale between 0.8 and 1.2
        if (element.scale < 0.8 || element.scale > 1.2) {
          element.scaleSpeed *= -1;
        }
        
        // Enhanced drift movement with varying speeds
        const driftSpeed = 0.1 + Math.sin(element.rotation * 0.005) * 0.05;
        element.x += Math.sin(element.rotation * 0.01) * driftSpeed;
        element.y += Math.cos(element.rotation * 0.01) * driftSpeed;

        // Keep elements within screen boundaries
        if (element.x < element.size) {
          element.x = element.size;
          element.rotationSpeed *= -1; // Reverse direction when hitting edge
        }
        if (element.x > window.innerWidth - element.size) {
          element.x = window.innerWidth - element.size;
          element.rotationSpeed *= -1; // Reverse direction when hitting edge
        }
        if (element.y < element.size) {
          element.y = element.size;
          element.rotationSpeed *= -1; // Reverse direction when hitting edge
        }
        if (element.y > window.innerHeight - element.size) {
          element.y = window.innerHeight - element.size;
          element.rotationSpeed *= -1; // Reverse direction when hitting edge
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [count]);

  const renderIcon = (element: FloatingElement) => {
    const IconComponent = element.icon;
      const colorClasses = {
    primary: "text-primary/50",
    secondary: "text-secondary/50",
    accent: "text-accent/50",
    muted: "text-muted-foreground/40",
  };
    
    const style = {
      left: `${element.x}px`,
      top: `${element.y}px`,
      transform: `rotate(${element.rotation}deg) scale(${element.scale})`,
      opacity: element.opacity,
    };

    return (
      <div
        key={element.id}
        className={cn(
          "absolute pointer-events-none transition-all duration-1000",
          colorClasses[element.color as keyof typeof colorClasses]
        )}
        style={style}
      >
        <IconComponent size={element.size} strokeWidth={1} />
      </div>
    );
  };

  return (
    <div className={cn("fixed inset-0 pointer-events-none z-[5]", className)}>
      {elementsRef.current.map(renderIcon)}
    </div>
  );
} 