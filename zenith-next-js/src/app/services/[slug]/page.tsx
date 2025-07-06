"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";
import { serviceFaqs, serviceGuides } from "@/lib/faq-data";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NavBar } from "@/components/home/nav-bar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";
import { 
  Star, 
  Clock, 
  CheckCircle, 
  Shield, 
  Users, 
  Award, 
  FileText, 
  ArrowRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Heart,
  Share2,
  Eye,
  ShoppingCart,
  Truck,
  CreditCard,
  RefreshCw,
  ThumbsUp,
  MessageCircle,
  BookOpen,
  HelpCircle,
  Link2,
  ChevronRight,
  Star as StarIcon
} from "lucide-react";

export default function SubServicePage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const [parent, setParent] = useState<any>(null);
  const [sub, setSub] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);
  const [selectedTier, setSelectedTier] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [relatedServices, setRelatedServices] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        let found = false;
        const allRelated: any[] = [];
        
        for (let i = 0; i < data.data.length; i++) {
          const cat = data.data[i];
          if (cat.subServices) {
            for (let j = 0; j < cat.subServices.length; j++) {
              const s = cat.subServices[j];
              const sSlug = s.title.toLowerCase().replace(/\s+/g, "-");
              if (sSlug === slug) {
                setParent({ ...cat, colorIdx: i });
                setSub({ ...s, colorIdx: j });
                found = true;
              } else {
                // Add to related services (limit to 6)
                if (allRelated.length < 6) {
                  allRelated.push({ ...s, parent: cat });
                }
              }
            }
          }
        }
        setRelatedServices(allRelated);
        if (!found) setNotFound(true);
      });
  }, [slug]);

  if (notFound) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-6">The service you are looking for does not exist.</p>
        <Button onClick={() => router.push("/services")}>Back to Services</Button>
      </div>
    );
  }

  if (!parent || !sub) {
    return <div className="flex items-center justify-center min-h-[60vh]">Loading...</div>;
  }

  const Icon = getIcon(parent.icon);
  const subSlug = sub.title.toLowerCase().replace(/\s+/g, "-");
  const faqs = serviceFaqs[subSlug] || [];
  const guides = serviceGuides[subSlug] || [];

  // Mock pricing tiers for ecommerce feel
  const pricingTiers = [
    {
      name: "Basic",
      price: sub.price,
      features: ["Document preparation", "Basic consultation", "Email support", "Standard processing time"],
      popular: false
    },
    {
      name: "Professional",
      price: sub.price ? `₹${parseInt(sub.price.replace(/[^\d]/g, '')) + 2000}` : "₹5000",
      features: ["Everything in Basic", "Priority processing", "Phone support", "Document verification", "Follow-up assistance"],
      popular: true
    },
    {
      name: "Premium",
      price: sub.price ? `₹${parseInt(sub.price.replace(/[^\d]/g, '')) + 5000}` : "₹8000",
      features: ["Everything in Professional", "Dedicated manager", "24/7 support", "Express processing", "Compliance guarantee"],
      popular: false
    }
  ];

  // Mock reviews
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent service! The team was very professional and helped me complete my business registration quickly.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      date: "1 week ago",
      comment: "Highly recommended! They made the entire process so smooth and transparent. Will definitely use their services again.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 4,
      date: "2 weeks ago",
      comment: "Good service overall. The process was faster than expected and the team was helpful throughout.",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="relative min-h-screen bg-background">
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <ParticleBackground particleCount={8} floatingElementsCount={3} />
        <NavBar />

        <main className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <button onClick={() => router.push("/")} className="hover:text-foreground transition-colors">Home</button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={() => router.push("/services")} className="hover:text-foreground transition-colors">Services</button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{parent.title}</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{sub.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image/Icon Section */}
            <div className="space-y-6">
              <div className="relative">
                <div className={`w-full h-80 rounded-2xl flex items-center justify-center ${getColorByString(sub.title)} bg-gradient-to-br from-primary/10 to-primary/5`}>
                  {Icon && <Icon className="w-32 h-32 text-white" />}
                </div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-full w-10 h-10 p-0"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                  <Button variant="secondary" size="sm" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Service Stats */}
              <div >
                {/* Documents Required */}
              {sub.documents && sub.documents.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Documents Required
                  </h3>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <ul className="space-y-2">
                      {sub.documents.map((doc: string, index: number) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">{parent.title}</Badge>
                  <Badge variant="secondary" className="text-xs">Verified Service</Badge>
                </div>
                
                <h1 className="text-4xl font-bold">{sub.title}</h1>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className={`w-5 h-5 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({reviews.length} reviews)</span>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">{sub.desc}</p>

                {sub.details && (
                  <div className="prose prose-sm max-w-none text-foreground bg-muted/30 rounded-lg p-4">
                    {sub.details}
                  </div>
                )}
              </div>

              

              {/* Key Features */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Expert Consultation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4 text-blue-600" />
                    <span>Secure Processing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-600" />
                    <span>Fast Turnaround</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-purple-600" />
                    <span>Dedicated Support</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button size="lg" className="w-full group hover:scale-105 transition-transform">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Get Started Now
                </Button>
                <div className="flex gap-3">
                  <Button variant="outline" size="lg" className="flex-1">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Expert
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Call
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Truck className="w-4 h-4" />
                  <span>Fast Processing</span>
                </div>
                <div className="flex items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>Secure Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Customer Reviews</h2>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Write Review
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <Card key={review.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{review.comment}</p>
                    <div className="text-xs text-muted-foreground">{review.date}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Related Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <Card 
                    key={index}
                    className="hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
                    onClick={() => router.push(`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString(service.title)}`}>
                          {(() => {
                            const ServiceIcon = getIcon(service.parent.icon);
                            return ServiceIcon && <ServiceIcon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">{service.title}</h3>
                          <p className="text-sm text-muted-foreground">{service.parent.title}</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.desc}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">{service.price}</Badge>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="text-left mb-8 flex items-center gap-2">
              <Badge variant="secondary" className="text-sm">FAQ</Badge>
              <span className="text-2xl font-bold">Frequently Asked Questions</span>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.length > 0 ? faqs.map((faq, idx) => (
                <AccordionItem value={`faq-${idx}`} key={idx} className="border-border/50">
                  <AccordionTrigger className="text-base font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    {faq.question}
                    {faq.label && <Badge variant="secondary" className="ml-2 text-xs px-2 py-0.5">{faq.label}</Badge>}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              )) : (
                <div className="text-center text-muted-foreground py-8">No FAQs available for this service yet.</div>
              )}
            </Accordion>
          </section>

          {/* Guides Section */}
          <section className="mb-16">
            <Card className="p-8 shadow-lg border-border/60 bg-card/90">
              <div className="font-semibold text-xl mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-primary" />
                Related Guides & Resources
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {guides.length > 0 ? guides.map((guide, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                    <Link2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    <div className="flex-1">
                      <a href={guide.url} className="text-primary underline text-sm hover:text-primary/80 transition-colors font-medium">{guide.title}</a>
                      {guide.label && <Badge variant="outline" className="ml-2 text-xs px-2 py-0.5">{guide.label}</Badge>}
                    </div>
                  </div>
                )) : (
                  <div className="text-muted-foreground text-sm col-span-2">No guides available for this service yet.</div>
                )}
              </div>
            </Card>
          </section>

          {/* Pricing Tiers - Horizontal Layout at Bottom */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-lg text-muted-foreground">Select the perfect plan that fits your needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingTiers.map((tier, index) => (
                <Card 
                  key={index}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                    selectedTier === index ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/50'
                  } ${tier.popular ? 'border-primary/50' : ''}`}
                  onClick={() => setSelectedTier(index)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      {tier.popular && (
                        <Badge variant="secondary" className="mb-3">Most Popular</Badge>
                      )}
                      <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">{tier.price}</div>
                      <p className="text-sm text-muted-foreground">One-time payment</p>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${selectedTier === index ? 'bg-primary' : 'bg-muted hover:bg-primary'}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Handle plan selection
                      }}
                    >
                      {selectedTier === index ? 'Selected' : 'Choose Plan'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </main>

        <FooterSection />
      </div>
    </div>
  );
} 