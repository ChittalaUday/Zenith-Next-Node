import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  FileText, 
  Plus, 
  Search, 
  Filter,
  Edit,
  Eye,
  Trash2,
  Calendar,
  User,
  Globe
} from "lucide-react";

export default function ContentPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Content Management</h1>
          <p className="text-muted-foreground">
            Manage website content, pages, and blog posts
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>

      {/* Content Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
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
            <Globe className="h-4 w-4 text-muted-foreground" />
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
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+4</span> this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Content Management */}
      <Card>
        <CardHeader>
          <CardTitle>Content Library</CardTitle>
          <CardDescription>
            Manage all your website content and pages
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search content..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Content List */}
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "About Us",
                type: "Page",
                status: "Published",
                author: "Admin",
                lastModified: "2024-01-15",
                url: "/about"
              },
              {
                id: 2,
                title: "Our Services - Complete Guide",
                type: "Blog Post",
                status: "Published",
                author: "Content Team",
                lastModified: "2024-01-20",
                url: "/blog/services-guide"
              },
              {
                id: 3,
                title: "GST Registration Process",
                type: "Blog Post",
                status: "Draft",
                author: "Legal Team",
                lastModified: "2024-01-25",
                url: "/blog/gst-registration"
              },
              {
                id: 4,
                title: "Contact Us",
                type: "Page",
                status: "Published",
                author: "Admin",
                lastModified: "2024-01-10",
                url: "/contact"
              },
              {
                id: 5,
                title: "Company Registration Guide",
                type: "Blog Post",
                status: "Published",
                author: "Content Team",
                lastModified: "2024-01-18",
                url: "/blog/company-registration"
              },
              {
                id: 6,
                title: "Pricing Plans",
                type: "Page",
                status: "Published",
                author: "Admin",
                lastModified: "2024-01-12",
                url: "/pricing"
              }
            ].map((content) => (
              <div key={content.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{content.title}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{content.type}</span>
                      <span>•</span>
                      <User className="h-3 w-3" />
                      <span>{content.author}</span>
                      <span>•</span>
                      <Calendar className="h-3 w-3" />
                      <span>{content.lastModified}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={content.status === "Published" ? "default" : "secondary"}
                  >
                    {content.status}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{content.url}</span>
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