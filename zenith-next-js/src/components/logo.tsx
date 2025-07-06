import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  showLink?: boolean;
  alt?: string;
}

export function Logo({ 
  className, 
  width = 120, 
  height = 40, 
  showLink = true,
  alt = "ZenithFilings Logo"
}: LogoProps) {
  const logoElement = (
    <h1 className="ml-4 text-3xl font-bold">ZenithFilings</h1>
  );

  if (showLink) {
    return (
      <Link href="/" className="flex items-center">
        {logoElement}
      </Link>
    );
  }

  return logoElement;
} 