import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getColorByString } from "@/lib/color";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";
import { 
  Users, 
  Award, 
  Target, 
  Shield, 
  TrendingUp, 
  Globe, 
  CheckCircle, 
  FileText,
  Zap,
  Heart
} from "lucide-react";

export default function AboutPage() {
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
          particleCount={10} 
          floatingElementsCount={4}
        />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  About ZenithFilings
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Empowering Businesses{" "}
                  <span className="block text-primary">Through Compliance</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  We are India's leading business compliance platform, helping entrepreneurs and businesses 
                  navigate the complex world of registrations, licenses, and regulatory requirements with ease.
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
                {[
                  { icon: Users, value: "50K+", label: "Happy Clients" },
                  { icon: FileText, value: "100K+", label: "Documents Filed" },
                  { icon: Award, value: "15+", label: "Years Experience" },
                  { icon: CheckCircle, value: "99.9%", label: "Success Rate" }
                ].map((stat, index) => (
                  <Card key={index} className="text-center border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${getColorByString(stat.label)} group-hover:scale-110 transition-transform duration-300`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                      <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-sm">
                    Our Mission
                  </Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    Simplifying Business Compliance
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our mission is to democratize business compliance by making it accessible, 
                    affordable, and hassle-free for every entrepreneur. We believe that regulatory 
                    compliance should never be a barrier to business growth.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <Badge variant="outline" className="text-sm">
                    Our Vision
                  </Badge>
                  <h3 className="text-2xl font-semibold">
                    Building India's Most Trusted Compliance Partner
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We envision a future where every business owner can focus on growth while 
                    we handle all their compliance needs seamlessly in the background.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {[
                        { icon: Target, title: "Customer First", desc: "Every decision we make is centered around our customers' success" },
                        { icon: Shield, title: "Trust & Security", desc: "Your data and documents are protected with enterprise-grade security" },
                        { icon: Zap, title: "Speed & Efficiency", desc: "We process applications faster than traditional methods" },
                        { icon: Heart, title: "Dedicated Support", desc: "Our expert team is always ready to help you succeed" }
                      ].map((value, index) => (
                        <div key={index} className="flex items-start gap-4 group/item hover:bg-muted/50 p-3 rounded-lg transition-all duration-300">
                          <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString(value.title)} group-hover/item:scale-110 transition-transform duration-300`}>
                            <value.icon className="w-6 h-6" />
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-semibold group-hover/item:text-primary transition-colors duration-300">{value.title}</h4>
                            <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Our Leadership
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Meet the Team Behind ZenithFilings
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our experienced team of legal experts, compliance specialists, and technology 
                  professionals work together to deliver exceptional service.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  description: "15+ years in business compliance and legal services",
                  expertise: ["Business Strategy", "Legal Compliance", "Team Leadership"]
                },
                {
                  name: "Priya Sharma",
                  role: "Head of Operations",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  description: "Expert in streamlining business processes and operations",
                  expertise: ["Process Optimization", "Quality Assurance", "Client Relations"]
                },
                {
                  name: "Amit Patel",
                  role: "Chief Technology Officer",
                  image: "https://randomuser.me/api/portraits/men/67.jpg",
                  description: "Leading our digital transformation and platform development",
                  expertise: ["Technology Strategy", "Platform Development", "Digital Innovation"]
                }
              ].map((member, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <Avatar className={`w-20 h-20 mx-auto ${getColorByString(member.name)} group-hover:scale-110 transition-transform duration-300`}>
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                        <p className="text-primary font-medium">{member.role}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">{member.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.expertise.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className={`text-xs ${getColorByString(skill)} group-hover:scale-105 transition-transform duration-300`}>
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Our Values
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  What Drives Us Forward
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  These core values guide everything we do and help us deliver exceptional 
                  service to our clients.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Integrity",
                  description: "We maintain the highest standards of ethical conduct and transparency in all our dealings."
                },
                {
                  icon: Target,
                  title: "Excellence",
                  description: "We strive for excellence in every service we provide, ensuring the best outcomes for our clients."
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We work closely with our clients, understanding their needs and providing personalized solutions."
                },
                {
                  icon: TrendingUp,
                  title: "Innovation",
                  description: "We continuously innovate our processes and technology to deliver better, faster services."
                },
                {
                  icon: Globe,
                  title: "Accessibility",
                  description: "We make compliance services accessible to businesses of all sizes across India."
                },
                {
                  icon: Heart,
                  title: "Care",
                  description: "We genuinely care about our clients' success and go the extra mile to ensure their satisfaction."
                }
              ].map((value, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${getColorByString(value.title)} group-hover:scale-110 group-hover:rotate-3`}>
                      <value.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{value.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Ready to Start Your Compliance Journey?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Join thousands of businesses that trust ZenithFilings for their compliance needs. 
                  Let us help you focus on what you do best - growing your business.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-base font-semibold hover:scale-105 transition-transform duration-300">
                  Get Started Today
                </Button>
                <Button variant="outline" size="lg" className="text-base font-semibold hover:scale-105 transition-transform duration-300">
                  Schedule a Consultation
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No Hidden Fees</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Expert Support</span>
                </div>
                <div className="flex items-center gap-2 hover:text-foreground transition-colors duration-300 cursor-pointer">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>100% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
} 