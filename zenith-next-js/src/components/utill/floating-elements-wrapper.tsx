"use client";

import { usePathname } from "next/navigation";
import { FloatingElements } from "./floating-elements";

export function FloatingElementsWrapper() {
  const pathname = usePathname();
  
  // Don't show floating elements on dashboard pages
  const isDashboard = pathname?.startsWith('/dashboard');
  
  if (isDashboard) {
    return null;
  }

  return <FloatingElements count={8} />;
} 