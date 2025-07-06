"use client";

import React from "react";
import { AnimatedCard, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

// Function to generate consistent colors based on name
function getAvatarColor(name: string) {
  const colors = [
    { bg: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", border: "border-blue-200" },
    { bg: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", border: "border-green-200" },
    { bg: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", border: "border-purple-200" },
    { bg: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200", border: "border-orange-200" },
    { bg: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200", border: "border-pink-200" },
    { bg: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200", border: "border-indigo-200" },
    { bg: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200", border: "border-teal-200" },
    { bg: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200", border: "border-red-200" },
    { bg: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", border: "border-yellow-200" },
    { bg: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200", border: "border-cyan-200" },
  ];
  
  // Generate a hash from the name to get consistent color
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Use absolute value and modulo to get index
  const index = Math.abs(hash) % colors.length;
  return colors[index];
}

// Function to fetch testimonials data from API
async function getTestimonialsData(): Promise<Testimonial[]> {
  try {
    const response = await fetch('/api/testimonials');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching testimonials data:', error);
    // Fallback data
    return [
      { id: 1, quote: '"ZenithFilings made company registration incredibly simple. Their team guided us from start to finish, and we had our company registered in no time."', name: "Rahul Sarma", role: "CEO, Initechware", avatar: "RS" },
      { id: 2, quote: '"The GST filing process is outstanding. The support team handles everything, and the documentation was a breeze. The customer support is highly responsive!"', name: "Priya Patel", role: "Founder, Spindle", avatar: "PP" },
      { id: 3, quote: '"We needed trademark registration urgently, and ZenithFilings delivered. Their support was fast, and the customer service was excellent!"', name: "Vivek Singh", role: "SME, FoodCraft", avatar: "VS" },
    ];
  }
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [api, setApi] = React.useState<any>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const data = await getTestimonialsData();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialsData();
  }, []);

  // Auto-rotate carousel every 4 seconds, but stop when hovered
  React.useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  if (loading) {
    return (
      <section className="w-full py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground text-lg">Trusted by thousands of businesses across India</p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="h-48 bg-muted rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg">Trusted by thousands of businesses across India</p>
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="m-2 md:-ml-4">
              {testimonials.map((testimonial) => {
                const avatarColor = getAvatarColor(testimonial.name);
                return (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <AnimatedCard className="h-full group">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="secondary" className={`p-2 flex items-center justify-center size-10 ${avatarColor.bg} transition-all duration-300 group-hover:shadow-lg group-hover:ring-2 group-hover:ring-primary/40`}>
                            <Quote className="size-5 drop-shadow transition-all duration-300 group-hover:scale-125" />
                          </Badge>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {testimonial.quote}
                        </p>
                        
                        <div className="flex items-center gap-3 mt-auto">
                          <Avatar className="h-8 w-8 border">
                            <AvatarFallback className="text-xs font-semibold">
                              {testimonial.avatar || testimonial.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <Badge variant="outline" className={`text-xs font-semibold ${avatarColor.bg} mb-1`}>
                              {testimonial.name}
                            </Badge>
                            <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </AnimatedCard>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
            <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background" />
          </Carousel>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.slice(0, 8).map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-muted-foreground/30 hover:bg-primary transition-colors"
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 