import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CallToActionSection } from "@/components/home/call-to-action-section";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";

export default function Home() {



  return (
    <div className="relative min-h-screen bg-background">
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        {/* Bottom-up glow - increased height, very subtle */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-3/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
      </div>


        
      {/* Content */}
      <div className="relative z-10">
        <ParticleBackground 
          particleCount={30} 
          
          floatingElementsCount={25}
        />
        <NavBar />
      
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CallToActionSection />
        <FooterSection />
      </div>
    </div>
  );
}
