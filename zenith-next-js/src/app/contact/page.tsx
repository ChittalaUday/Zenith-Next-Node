import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";

export default function ContactPage() {
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
          particleCount={12} 
          floatingElementsCount={3}
        />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Get in Touch
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Let's Start Your{" "}
                  <span className="block text-primary">Compliance Journey</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Ready to simplify your business compliance? Our expert team is here to help. 
                  Reach out to us and let's discuss how we can support your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>
                
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="Enter your first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Enter your last name" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter your phone number" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" placeholder="Enter your company name" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Required</Label>
                        <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm">
                          <option value="">Select a service</option>
                          <option value="startup">Startup Registration</option>
                          <option value="trademark">Trademark Registration</option>
                          <option value="gst">GST Registration</option>
                          <option value="compliance">Compliance Services</option>
                          <option value="consultation">Consultation</option>
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Tell us about your requirements..."
                          rows={4}
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full">
                        {(() => {
                          const SendIcon = getIcon("Send");
                          return <SendIcon className="w-4 h-4 mr-2" />;
                        })()}
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Contact Information</h2>
                  <p className="text-muted-foreground">
                    Get in touch with us through any of these channels. We're here to help!
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Office Address */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString("Main Office")}`}>
                          {(() => {
                            const MapPinIcon = getIcon("MapPin");
                            return <MapPinIcon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Main Office</h3>
                          <p className="text-sm text-muted-foreground">
                            123 Business Park, Tower A<br />
                            Sector 135, Noida<br />
                            Uttar Pradesh 201301, India
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Contact Numbers */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString("Phone Numbers")}`}>
                          {(() => {
                            const PhoneIcon = getIcon("Phone");
                            return <PhoneIcon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Phone Numbers</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Main: +91 98765 43210</p>
                            <p>Support: +91 98765 43211</p>
                            <p>Sales: +91 98765 43212</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Email */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString("Email Addresses")}`}>
                          {(() => {
                            const MailIcon = getIcon("Mail");
                            return <MailIcon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Email Addresses</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>General: info@zenithfilings.com</p>
                            <p>Support: support@zenithfilings.com</p>
                            <p>Sales: sales@zenithfilings.com</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Business Hours */}
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${getColorByString("Business Hours")}`}>
                          {(() => {
                            const ClockIcon = getIcon("Clock");
                            return <ClockIcon className="w-6 h-6" />;
                          })()}
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Business Hours</h3>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Why Choose Us
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Trusted by Thousands
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We've helped businesses of all sizes navigate complex compliance requirements.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "Building2", title: "Expert Team", desc: "Certified professionals with years of experience", color: "bg-blue-500/10 text-blue-600" },
                { icon: "Users", title: "10,000+ Clients", desc: "Successfully served businesses nationwide", color: "bg-green-500/10 text-green-600" },
                { icon: "CheckCircle", title: "99% Success Rate", desc: "High success rate in all our services", color: "bg-purple-500/10 text-purple-600" },
                { icon: "Star", title: "5-Star Rating", desc: "Consistently rated excellent by clients", color: "bg-orange-500/10 text-orange-600" }
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

        <FooterSection />
      </div>
    </div>
  );
} 