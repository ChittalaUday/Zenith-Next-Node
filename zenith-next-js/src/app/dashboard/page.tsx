import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  FileText, 
  CheckCircle,
  Clock,
  AlertCircle,
  MessageSquare,
  Briefcase,
  Calendar,
  ArrowRight
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        <Badge variant="secondary">Last 30 days</Badge>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,231</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+20.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Clients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.3%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+5.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Services</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.1%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Activity */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Latest updates and notifications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  type: "success",
                  title: "New client registration completed",
                  description: "TechStart Pvt Ltd registration approved",
                  time: "2 minutes ago",
                  icon: CheckCircle
                },
                {
                  id: 2,
                  type: "info",
                  title: "GST filing submitted successfully",
                  description: "March 2024 GST return filed for ABC Corp",
                  time: "15 minutes ago",
                  icon: FileText
                },
                {
                  id: 3,
                  type: "warning",
                  title: "Trademark application in progress",
                  description: "BrandX trademark application under review",
                  time: "1 hour ago",
                  icon: Clock
                },
                {
                  id: 4,
                  type: "error",
                  title: "Compliance deadline approaching",
                  description: "Annual filing due for XYZ Ltd in 3 days",
                  time: "2 hours ago",
                  icon: AlertCircle
                },
                {
                  id: 5,
                  type: "success",
                  title: "New testimonial received",
                  description: "5-star review from Priya Patel",
                  time: "3 hours ago",
                  icon: MessageSquare
                }
              ].map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.type === "success" ? "bg-green-500" :
                    activity.type === "info" ? "bg-blue-500" :
                    activity.type === "warning" ? "bg-yellow-500" : "bg-red-500"
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <activity.icon className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm font-medium">{activity.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Add New Client
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileText className="mr-2 h-4 w-4" />
                Create New Task
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Briefcase className="mr-2 h-4 w-4" />
                Add New Service
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <MessageSquare className="mr-2 h-4 w-4" />
                Add Testimonial
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Service Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Service Overview</CardTitle>
              <CardDescription>
                Most popular services this month
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Company Registration",
                count: 45,
                percentage: 45,
                color: "bg-blue-500"
              },
              {
                name: "GST Registration",
                count: 30,
                percentage: 30,
                color: "bg-green-500"
              },
              {
                name: "Trademark",
                count: 15,
                percentage: 15,
                color: "bg-yellow-500"
              },
              {
                name: "Compliance",
                count: 10,
                percentage: 10,
                color: "bg-purple-500"
              }
            ].map((service, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{service.name}</span>
                  <span className="text-sm text-muted-foreground">{service.count}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${service.color}`}
                    style={{ width: `${service.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Deadlines */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Deadlines</CardTitle>
          <CardDescription>
            Important dates and compliance deadlines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Annual Filing - ABC Corp",
                date: "2024-02-15",
                daysLeft: 3,
                priority: "High"
              },
              {
                id: 2,
                title: "GST Filing - March 2024",
                date: "2024-03-31",
                daysLeft: 45,
                priority: "Medium"
              },
              {
                id: 3,
                title: "Director KYC - XYZ Ltd",
                date: "2024-02-20",
                daysLeft: 8,
                priority: "High"
              },
              {
                id: 4,
                title: "Trademark Renewal - BrandX",
                date: "2024-04-15",
                daysLeft: 60,
                priority: "Low"
              }
            ].map((deadline) => (
              <div key={deadline.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{deadline.title}</p>
                  <p className="text-sm text-muted-foreground">{deadline.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={
                      deadline.priority === "High" ? "destructive" :
                      deadline.priority === "Medium" ? "default" : "secondary"
                    }
                  >
                    {deadline.priority}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {deadline.daysLeft} days left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
