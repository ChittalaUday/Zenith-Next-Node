"use client";

import React from "react";
import { FileEdit, UploadCloud, CheckCircle, ArrowRight } from "lucide-react";

interface Step {
  id: number;
  icon: string;
  title: string;
  desc: string;
  bg: string;
  iconColor: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  FileEdit,
  UploadCloud,
  CheckCircle,
};

// Function to fetch how-it-works data from API
async function getHowItWorksData(): Promise<Step[]> {
  try {
    const response = await fetch('/api/how-it-works');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching how-it-works data:', error);
    // Fallback data
    return [
      {
        id: 1,
        icon: "FileEdit",
        title: "Step 1",
        desc: "Choose your service",
        bg: "bg-blue-500/90 dark:bg-blue-600 shadow-lg",
        iconColor: "text-white",
      },
      {
        id: 2,
        icon: "UploadCloud",
        title: "Step 2",
        desc: "Upload documents",
        bg: "bg-orange-400/90 dark:bg-orange-500 shadow-lg",
        iconColor: "text-white",
      },
      {
        id: 3,
        icon: "CheckCircle",
        title: "Step 3",
        desc: "Get your service delivered",
        bg: "bg-green-600 dark:bg-green-500 shadow-lg",
        iconColor: "text-white",
      },
    ];
  }
}

export function HowItWorksSection() {
  const [steps, setSteps] = React.useState<Step[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchHowItWorksData = async () => {
      try {
        const data = await getHowItWorksData();
        setSteps(data);
      } catch (error) {
        console.error('Error fetching how-it-works:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHowItWorksData();
  }, []);

  if (loading) {
    return (
      <section className="w-full py-12 flex flex-col items-center">
        <h2 className="text-5xl font-semibold mb-2">How It Works</h2>
        <p className="text-muted-foreground mb-8 text-center">Simple steps to get your business compliant in no time.</p>
        <div className="flex flex-row items-center justify-center gap-0 md:gap-8 w-full max-w-3xl relative">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center flex-1 min-w-[120px] relative">
              <div className="animate-pulse">
                <div className="h-16 w-16 bg-muted rounded-full mx-auto mb-4"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 flex flex-col items-center">
      <h2 className="text-5xl font-semibold mb-2">How It Works</h2>
      <p className="text-muted-foreground mb-8 text-center">Simple steps to get your business compliant in no time.</p>
      <div className="flex flex-row items-center justify-center gap-0 md:gap-8 w-full max-w-3xl relative">
        {steps.map((step, i) => {
          const IconComponent = iconMap[step.icon];
          return (
            <div key={step.id} className="flex flex-col items-center flex-1 min-w-[120px] relative group animate-fadeIn">
              <div className="flex items-center justify-center mb-4">
                <div className={`rounded-full flex items-center justify-center size-22 md:size-22 transition-transform duration-300 group-hover:scale-110 ${step.bg}`}>
                  {IconComponent && <IconComponent className={`size-10 md:size-10 transition-transform duration-300 group-hover:scale-125 ${step.iconColor}`} />}
                </div>
              </div>
              <div className="text-2xl md:text-xl font-bold mb-2 text-foreground">{step.title}</div>
              <div className="text-lg md:text-md text-muted-foreground text-center font-medium">{step.desc}</div>
              {/* Arrow: only show if not last step */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute right-[-30px] top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight className="size-9 text-muted-foreground" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
} 