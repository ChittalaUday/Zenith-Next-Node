import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";

// Types for API data
interface ServicePricing {
  icon: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

interface PlanFeature {
  included: boolean;
  text: string;
}

interface PlanPricing {
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: PlanFeature[];
}

// Fetch data from APIs
async function getServicePricing(): Promise<ServicePricing[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/pricing/services`, {
    cache: 'no-store'
  });
  const data = await response.json();
  return data.data;
}

async function getPlanPricing(): Promise<PlanPricing[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/pricing/plans`, {
    cache: 'no-store'
  });
  const data = await response.json();
  return data.data;
}

export default async function PricingPage() {
  const servicePricing = await getServicePricing();
  const planPricing = await getPlanPricing();

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

      {/* Content */}
      <div className="relative z-10">
        <ParticleBackground 
          particleCount={8} 
          floatingElementsCount={3}
        />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Pricing Plans
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Choose Your{" "}
                  <span className="block text-primary">Compliance Plan</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Transparent pricing for all your business compliance needs. 
                  No hidden fees, no surprises. Choose the plan that fits your business.
                </p>
              </div>
              
              {/* Pricing Toggle */}
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-muted-foreground">Monthly</span>
                <div className="relative">
                  <input type="checkbox" id="billing-toggle" className="sr-only" />
                  <label htmlFor="billing-toggle" className="flex items-center cursor-pointer">
                    <div className="relative">
                      <div className="w-14 h-7 bg-muted rounded-full shadow-inner"></div>
                      <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-transform"></div>
                    </div>
                  </label>
                </div>
                <span className="text-sm font-medium">Yearly</span>
                <Badge variant="outline" className="text-xs">
                  Save 20%
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {planPricing.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border-border/50 bg-card/50 backdrop-blur-sm relative ${
                    plan.popular ? 'border-primary/50 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <Badge variant="outline" className="w-fit mx-auto mb-4">
                      {plan.name}
                    </Badge>
                    <CardTitle className="text-3xl font-bold">{plan.price}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {plan.period}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-600" />
                          ) : (
                            <X className="w-5 h-5 text-red-500" />
                          )}
                          <span className={`text-sm ${!feature.included ? 'text-muted-foreground' : ''}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                      {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Packages */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Service Packages
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Individual Service Pricing
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Need specific services? Choose from our à la carte options.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicePricing.map((service, index) => {
                const IconComponent = getIcon(service.icon);
                return (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader className="text-center">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${getColorByString(service.title)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold">{service.price}</div>
                        <p className="text-sm text-muted-foreground">One-time fee</p>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm">What's included:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full">
                        Get Started
                        {(() => {
                          const ArrowRightIcon = getIcon("ArrowRight");
                          return <ArrowRightIcon className="w-4 h-4 ml-2" />;
                        })()}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Compare Plans
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Feature Comparison
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how our different plans stack up against each other.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "Shield", title: "Security & Compliance", desc: "Enterprise-grade security measures", color: "bg-blue-500/10 text-blue-600" },
                { icon: "Users", title: "Dedicated Support", desc: "24/7 expert assistance available", color: "bg-green-500/10 text-green-600" },
                { icon: "Zap", title: "Fast Processing", desc: "Quick turnaround times guaranteed", color: "bg-purple-500/10 text-purple-600" },
                { icon: "Star", title: "Premium Features", desc: "Advanced tools and analytics", color: "bg-orange-500/10 text-orange-600" }
              ].map((feature, index) => {
                const IconComponent = getIcon(feature.icon);
                return (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto ${feature.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Ready to Start?
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Get Started Today
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose the perfect plan for your business and start your compliance journey with confidence.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  View All Plans
                  {(() => {
                    const ArrowRightIcon = getIcon("ArrowRight");
                    return <ArrowRightIcon className="w-4 h-4 ml-2" />;
                  })()}
                </Button>
                <Button variant="outline" size="lg">
                  Contact Sales
                  {(() => {
                    const MessageSquareIcon = getIcon("MessageSquare");
                    return <MessageSquareIcon className="w-4 h-4 ml-2" />;
                  })()}
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
} 