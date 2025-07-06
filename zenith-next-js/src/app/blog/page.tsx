import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getIcon } from "@/lib/icons";
import { NavBar } from "@/components/home/nav-bar";
import { FooterSection } from "@/components/footer-section";
import { ParticleBackground } from "@/components/utill/particle-background";

export default function BlogPage() {
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
          floatingElementsCount={2}
        />
        <NavBar />
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[50vh] flex justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative z-10 text-center space-y-8 py-20">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  Knowledge Center
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                  Stay Updated with{" "}
                  <span className="block text-primary">Business Insights</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  Expert insights, compliance updates, and business tips to help you navigate 
                  the complex world of business regulations and growth.
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
                    placeholder="Search articles, topics, or keywords..." 
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="space-y-8 mb-16">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Featured Article</h2>
                <Badge variant="outline" className="text-sm">
                  Latest
                </Badge>
              </div>
            </div>
            
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="space-y-4">
                    <Badge variant="secondary" className="text-sm">
                      Compliance Guide
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold leading-tight">
                      Complete Guide to GST Registration for New Businesses in 2024
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Everything you need to know about GST registration, including eligibility criteria, 
                      required documents, step-by-step process, and common mistakes to avoid.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      {(() => {
                        const UserIcon = getIcon("User");
                        return <UserIcon className="w-4 h-4" />;
                      })()}
                      <span>By Rajesh Kumar</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {(() => {
                        const CalendarIcon = getIcon("Calendar");
                        return <CalendarIcon className="w-4 h-4" />;
                      })()}
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {(() => {
                        const ClockIcon = getIcon("Clock");
                        return <ClockIcon className="w-4 h-4" />;
                      })()}
                      <span>8 min read</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Button>
                      Read Full Article
                      {(() => {
                        const ArrowRightIcon = getIcon("ArrowRight");
                        return <ArrowRightIcon className="w-4 h-4 ml-2" />;
                      })()}
                    </Button>
                    <Badge variant="outline">GST</Badge>
                    <Badge variant="outline">Registration</Badge>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    {(() => {
                      const FileTextIcon = getIcon("FileText");
                      return <FileTextIcon className="w-16 h-16 mx-auto text-primary" />;
                    })()}
                    <h4 className="text-lg font-semibold">Featured Content</h4>
                    <p className="text-sm text-muted-foreground">
                      In-depth analysis and expert insights
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center space-y-8 mb-16">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Categories
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Explore by Topic
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Find articles and guides organized by your area of interest.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "Building2", title: "Business Registration", count: "24 articles", color: "bg-blue-500/10 text-blue-600" },
                { icon: "Shield", title: "Compliance", count: "18 articles", color: "bg-green-500/10 text-green-600" },
                { icon: "Zap", title: "Tax Updates", count: "32 articles", color: "bg-purple-500/10 text-purple-600" },
                { icon: "TrendingUp", title: "Business Growth", count: "15 articles", color: "bg-orange-500/10 text-orange-600" }
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
          </div>
        </section>

        {/* Latest Articles */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center justify-between mb-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Latest Articles</h2>
                <p className="text-muted-foreground">
                  Stay updated with the latest insights and regulatory changes.
                </p>
              </div>
              <Button variant="outline">
                View All Articles
                {(() => {
                  const ArrowRightIcon = getIcon("ArrowRight");
                  return <ArrowRightIcon className="w-4 h-4 ml-2" />;
                })()}
              </Button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "New GST Rate Changes Effective from January 2024",
                  excerpt: "Important updates to GST rates and compliance requirements that all businesses need to know.",
                  author: "Priya Sharma",
                  date: "Dec 12, 2024",
                  readTime: "5 min read",
                  category: "Tax Updates",
                  color: "bg-purple-500/10 text-purple-600"
                },
                {
                  title: "Complete Guide to MSME Registration Benefits",
                  excerpt: "Discover all the benefits and advantages of MSME registration for your business growth.",
                  author: "Amit Patel",
                  date: "Dec 10, 2024",
                  readTime: "7 min read",
                  category: "Registration",
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Annual Compliance Checklist for Private Limited Companies",
                  excerpt: "A comprehensive checklist to ensure your company meets all annual compliance requirements.",
                  author: "Neha Gupta",
                  date: "Dec 8, 2024",
                  readTime: "10 min read",
                  category: "Compliance",
                  color: "bg-green-500/10 text-green-600"
                },
                {
                  title: "Digital Signature Certificate: Everything You Need to Know",
                  excerpt: "Complete guide to DSC application, benefits, and usage in business transactions.",
                  author: "Rahul Verma",
                  date: "Dec 6, 2024",
                  readTime: "6 min read",
                  category: "Registration",
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Trademark Registration Process: Step-by-Step Guide",
                  excerpt: "Detailed walkthrough of the trademark registration process and important considerations.",
                  author: "Sneha Reddy",
                  date: "Dec 4, 2024",
                  readTime: "8 min read",
                  category: "Registration",
                  color: "bg-blue-500/10 text-blue-600"
                },
                {
                  title: "Business Growth Strategies for Small Enterprises",
                  excerpt: "Proven strategies to scale your business while maintaining compliance standards.",
                  author: "Vikram Singh",
                  date: "Dec 2, 2024",
                  readTime: "12 min read",
                  category: "Growth",
                  color: "bg-orange-500/10 text-orange-600"
                }
              ].map((article, index) => (
                <Card key={index} className="border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={`text-xs ${article.color}`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {(() => {
                          const ClockIcon = getIcon("Clock");
                          return <ClockIcon className="w-3 h-3" />;
                        })()}
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs">
                          {article.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{article.author}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          {(() => {
                            const CalendarIcon = getIcon("Calendar");
                            return <CalendarIcon className="w-3 h-3" />;
                          })()}
                          {article.date}
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Read More
                      {(() => {
                        const ArrowRightIcon = getIcon("ArrowRight");
                        return <ArrowRightIcon className="w-3 h-3 ml-2" />;
                      })()}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Stay Updated
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Get the latest compliance updates, business insights, and regulatory changes delivered to your inbox.
                </p>
              </div>
              
              <div className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input 
                    placeholder="Enter your email address" 
                    className="flex-1"
                  />
                  <Button>
                    Subscribe
                    {(() => {
                      const SendIcon = getIcon("Send");
                      return <SendIcon className="w-4 h-4 ml-2" />;
                    })()}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FooterSection />
      </div>
    </div>
  );
} 