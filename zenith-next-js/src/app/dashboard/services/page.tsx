import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Briefcase, 
  FileText, 
  BadgeCheck, 
  Receipt,
  Banknote,
  Landmark,
  ShieldCheck,
  Users,
  Plus,
  Search,
  Filter,
  Edit,
  Eye,
  Trash2
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Services</h1>
          <p className="text-muted-foreground">
            Manage your business services and offerings
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      {/* Service Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Services</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Services</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <Banknote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2.4M</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+15.3%</span> this month
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
              <span className="text-green-600">+12.1%</span> this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Services Management */}
      <Card>
        <CardHeader>
          <CardTitle>Service Management</CardTitle>
          <CardDescription>
            Manage all your business services and offerings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: 1,
                title: "Startup",
                description: "All services for startups including registration, compliance, and advisory.",
                icon: "Briefcase",
                badge: "default",
                color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
                subServices: 6,
                status: "Active"
              },
              {
                id: 2,
                title: "Registrations",
                description: "Business, tax, and other statutory registrations for your company.",
                icon: "FileText",
                badge: "secondary",
                color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
                subServices: 4,
                status: "Active"
              },
              {
                id: 3,
                title: "Trademark",
                description: "Protect your brand identity with trademark registration and support.",
                icon: "BadgeCheck",
                badge: "outline",
                color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
                subServices: 2,
                status: "Active"
              },
              {
                id: 4,
                title: "Goods & Services Tax",
                description: "GST registration, filing, and compliance for your business.",
                icon: "Receipt",
                badge: "default",
                color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
                subServices: 2,
                status: "Active"
              },
              {
                id: 5,
                title: "Income Tax",
                description: "Income tax filing, planning, and compliance services.",
                icon: "Banknote",
                badge: "secondary",
                color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
                subServices: 2,
                status: "Active"
              },
              {
                id: 6,
                title: "MCA",
                description: "Ministry of Corporate Affairs filings and compliance.",
                icon: "Landmark",
                badge: "outline",
                color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
                subServices: 2,
                status: "Active"
              },
              {
                id: 7,
                title: "Compliance",
                description: "Ongoing compliance monitoring and management for your business.",
                icon: "ShieldCheck",
                badge: "default",
                color: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
                subServices: 2,
                status: "Active"
              },
              {
                id: 8,
                title: "Consultation",
                description: "Expert consultation for all your business and compliance needs.",
                icon: "Users",
                badge: "default",
                color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
                subServices: 0,
                status: "Active"
              }
            ].map((service) => (
              <Card key={service.id} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${service.color}`}>
                        <Briefcase className="h-4 w-4" />
                      </div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                    </div>
                    <Badge variant={service.badge as any}>
                      {service.status}
                    </Badge>
                  </div>
                  <CardDescription>
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Sub-services:</span>
                      <span className="font-medium">{service.subServices}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-1 h-3 w-3" />
                        View
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-3 w-3" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 