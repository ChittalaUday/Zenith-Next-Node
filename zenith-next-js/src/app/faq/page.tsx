import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getIcon } from "@/lib/icons";
import { getColorByString } from "@/lib/color";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";


export default function FAQPage() {
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
                  FAQ
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Frequently Asked{" "}
                  <span className="block text-primary">Questions</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Find answers to common questions about our services, processes, and business compliance.
                </p>
              </div>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  {(() => {
                    const SearchIcon = getIcon("Search");
                    return <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />;
                  })()}
                  <Input 
                    placeholder="Search for questions..." 
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Categories
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Browse by Topic
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find answers organized by service categories and topics.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { icon: "FileText", title: "Registration", count: "15 questions", color: "bg-blue-500/10 text-blue-600" },
                { icon: "Shield", title: "Compliance", count: "12 questions", color: "bg-green-500/10 text-green-600" },
                { icon: "Users", title: "Support", count: "8 questions", color: "bg-purple-500/10 text-purple-600" },
                { icon: "Star", title: "General", count: "10 questions", color: "bg-orange-500/10 text-orange-600" }
              ].map((category, index) => {
                const IconComponent = getIcon(category.icon);
                return (
                  <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto ${category.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold">{category.title}</h3>
                        <p className="text-sm text-muted-foreground">{category.count}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* FAQ Sections */}
            <div className="space-y-16">
              {/* Registration FAQs */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Registration Questions</h3>
                  <p className="text-muted-foreground">Common questions about business registration services</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      question: "How long does the registration process take?",
                      answer: "Most registrations are completed within 7-15 business days, depending on the type of service and government processing times. We provide regular updates throughout the process."
                    },
                    {
                      question: "What documents do I need to provide?",
                      answer: "Required documents vary by service type. Our team will provide a customized checklist based on your specific requirements. Generally, you'll need identity proof, address proof, and business-related documents."
                    },
                    {
                      question: "Can I register multiple businesses?",
                      answer: "Yes, you can register multiple businesses. Each business will need separate registration and documentation. We offer special packages for multiple business registrations."
                    },
                    {
                      question: "What is the difference between proprietorship and company registration?",
                      answer: "Proprietorship is the simplest form with single ownership, while company registration creates a separate legal entity. Companies offer limited liability protection and are better for raising funds."
                    },
                    {
                      question: "Do you provide post-registration support?",
                      answer: "Yes, we provide comprehensive post-registration support including compliance reminders, annual filing assistance, and ongoing consultation for your business needs."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`registration-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColorByString("Registration")}`}>
                            {(() => {
                              const HelpCircleIcon = getIcon("HelpCircle");
                              return <HelpCircleIcon className="w-4 h-4" />;
                            })()}
                          </div>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-11">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Compliance FAQs */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Compliance Questions</h3>
                  <p className="text-muted-foreground">Questions about ongoing compliance and regulatory requirements</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      question: "What are the annual compliance requirements?",
                      answer: "Annual compliance requirements include filing annual returns, maintaining statutory registers, conducting board meetings, and ensuring timely tax filings. We provide a comprehensive compliance calendar."
                    },
                    {
                      question: "How do you ensure compliance deadlines are met?",
                      answer: "We use advanced tracking systems and provide timely reminders for all compliance deadlines. Our team proactively monitors your compliance status and takes necessary actions."
                    },
                    {
                      question: "What happens if I miss a compliance deadline?",
                      answer: "Missing deadlines can result in penalties. We help minimize these by filing late returns and negotiating with authorities. However, it's best to maintain timely compliance."
                    },
                    {
                      question: "Do you provide compliance training?",
                      answer: "Yes, we offer compliance training sessions for your team to ensure everyone understands the requirements and processes involved in maintaining compliance."
                    },
                    {
                      question: "How do you stay updated with regulatory changes?",
                      answer: "Our team continuously monitors regulatory updates and government notifications. We immediately inform clients about any changes that affect their business."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`compliance-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColorByString("Compliance")}`}>
                            {(() => {
                              const ShieldIcon = getIcon("Shield");
                              return <ShieldIcon className="w-4 h-4" />;
                            })()}
                          </div>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-11">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Support FAQs */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Support Questions</h3>
                  <p className="text-muted-foreground">Questions about our support services and customer care</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      question: "What are your support hours?",
                      answer: "Our support team is available Monday to Friday from 9:00 AM to 6:00 PM IST. For urgent matters, we also provide emergency support during business hours."
                    },
                    {
                      question: "How can I contact your support team?",
                      answer: "You can reach our support team through multiple channels: phone, email, live chat on our website, or through our client portal. We typically respond within 2-4 hours during business hours."
                    },
                    {
                      question: "Do you provide remote assistance?",
                      answer: "Yes, we provide remote assistance for document preparation, form filling, and other services that can be handled digitally. We use secure platforms for all remote interactions."
                    },
                    {
                      question: "What is your response time for support queries?",
                      answer: "We aim to respond to all support queries within 2-4 hours during business hours. For urgent matters, we provide priority support with faster response times."
                    },
                    {
                      question: "Do you offer training for new clients?",
                      answer: "Yes, we provide comprehensive onboarding and training sessions for new clients to help them understand our processes, tools, and how to work effectively with our team."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`support-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColorByString("Support")}`}>
                            {(() => {
                              const UsersIcon = getIcon("Users");
                              return <UsersIcon className="w-4 h-4" />;
                            })()}
                          </div>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-11">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* General FAQs */}
              <div className="space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">General Questions</h3>
                  <p className="text-muted-foreground">General questions about our company and services</p>
                </div>
                
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      question: "How long has your company been in business?",
                      answer: "We have been serving businesses for over 8 years, helping thousands of companies with their compliance and registration needs. Our experience spans across various industries and business types."
                    },
                    {
                      question: "What makes your services different from competitors?",
                      answer: "Our services stand out due to our personalized approach, advanced technology platform, comprehensive support, and deep expertise in Indian business regulations. We also provide ongoing compliance management."
                    },
                    {
                      question: "Do you work with international clients?",
                      answer: "Yes, we work with international clients who want to establish or maintain business operations in India. We provide specialized services for foreign companies and NRIs."
                    },
                    {
                      question: "What is your success rate?",
                      answer: "We maintain a 99% success rate across all our services. Our high success rate is due to our thorough understanding of regulations, attention to detail, and proactive approach to compliance."
                    },
                    {
                      question: "Do you provide references from past clients?",
                      answer: "Yes, we can provide references from satisfied clients upon request. We also have numerous testimonials and case studies available on our website."
                    }
                  ].map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border-border/50 bg-card/50 backdrop-blur-sm rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline">
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${getColorByString("General")}`}>
                            {(() => {
                              const StarIcon = getIcon("Star");
                              return <StarIcon className="w-4 h-4" />;
                            })()}
                          </div>
                          {faq.question}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pl-11">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Still Have Questions?
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our expert team is here to help. Contact us for personalized assistance with your specific questions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Contact Support
                  {(() => {
                    const MessageSquareIcon = getIcon("MessageSquare");
                    return <MessageSquareIcon className="w-4 h-4 ml-2" />;
                  })()}
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Consultation
                  {(() => {
                    const CalendarIcon = getIcon("Calendar");
                    return <CalendarIcon className="w-4 h-4 ml-2" />;
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