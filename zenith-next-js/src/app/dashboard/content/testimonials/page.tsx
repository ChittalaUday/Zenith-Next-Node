import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Star, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Eye,
  Trash2,
  User,
  Calendar,
  ThumbsUp
} from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Testimonials</h1>
          <p className="text-muted-foreground">
            Manage client testimonials and reviews
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Testimonial
        </Button>
      </div>

      {/* Testimonial Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Testimonials</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <ThumbsUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+0.2</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+4</span> this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials Management */}
      <Card>
        <CardHeader>
          <CardTitle>Testimonial Management</CardTitle>
          <CardDescription>
            Manage all client testimonials and reviews
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search testimonials..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Testimonials List */}
          <div className="space-y-4">
            {[
              {
                id: 1,
                quote: '"ZenithFilings made company registration incredibly simple. Their team guided us from start to finish, and we had our company registered in no time."',
                name: "Rahul Sarma",
                role: "CEO, Initechware",
                avatar: "RS",
                rating: 5,
                status: "Published",
                date: "2024-01-15"
              },
              {
                id: 2,
                quote: '"The GST filing process is outstanding. The support team handles everything, and the documentation was a breeze. The customer support is highly responsive!"',
                name: "Priya Patel",
                role: "Founder, Spindle",
                avatar: "PP",
                rating: 5,
                status: "Published",
                date: "2024-01-20"
              },
              {
                id: 3,
                quote: '"We needed trademark registration urgently, and ZenithFilings delivered. Their support was fast, and the customer service was excellent!"',
                name: "Vivek Singh",
                role: "SME, FoodCraft",
                avatar: "VS",
                rating: 4,
                status: "Published",
                date: "2024-01-25"
              },
              {
                id: 4,
                quote: '"The compliance management system is top-notch. We never miss deadlines anymore, and the automated reminders are a lifesaver for our business."',
                name: "Anjali Mehta",
                role: "CFO, TechFlow Solutions",
                avatar: "AM",
                rating: 5,
                status: "Pending",
                date: "2024-01-30"
              },
              {
                id: 5,
                quote: '"Professional, reliable, and cost-effective. ZenithFilings has been our trusted partner for all legal compliances. Highly recommended!"',
                name: "Rajesh Kumar",
                role: "Director, GreenEnergy Corp",
                avatar: "RK",
                rating: 5,
                status: "Published",
                date: "2024-02-01"
              }
            ].map((testimonial) => (
              <div key={testimonial.id} className="flex items-start justify-between p-4 border rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <p className="font-medium">{testimonial.name}</p>
                      <span className="text-sm text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span>•</span>
                      <Calendar className="h-3 w-3" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={testimonial.status === "Published" ? "default" : "secondary"}
                  >
                    {testimonial.status}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 