import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  Plus,
  Search,
  Filter,
  Calendar,
  User,
  FileText
} from "lucide-react";

export default function TasksPage() {
  return (
    <div className="flex flex-col gap-6 p-6 pt-4 w-full">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage and track all your tasks and client requests
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Task
        </Button>
      </div>

      {/* Task Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.3%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.1%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-yellow-600">+5.2%</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">-2.1%</span> from last week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Task Management */}
      <Card>
        <CardHeader>
          <CardTitle>Task Management</CardTitle>
          <CardDescription>
            Track and manage all your tasks and client requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search tasks..." className="pl-8" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
          </div>

          {/* Tasks List */}
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Company Registration - TechStart Pvt Ltd",
                client: "Rahul Sharma",
                status: "In Progress",
                priority: "High",
                dueDate: "2024-02-15",
                assignedTo: "Priya Patel",
                type: "Registration"
              },
              {
                id: 2,
                title: "GST Filing - March 2024",
                client: "Vivek Singh",
                status: "Completed",
                priority: "Medium",
                dueDate: "2024-03-31",
                assignedTo: "Rajesh Kumar",
                type: "Compliance"
              },
              {
                id: 3,
                title: "Trademark Application - BrandX",
                client: "Anjali Mehta",
                status: "Pending",
                priority: "High",
                dueDate: "2024-02-20",
                assignedTo: "Priya Patel",
                type: "Trademark"
              },
              {
                id: 4,
                title: "Annual Filing - ABC Corp",
                client: "Rajesh Kumar",
                status: "Overdue",
                priority: "Critical",
                dueDate: "2024-01-31",
                assignedTo: "Rahul Sharma",
                type: "Compliance"
              },
              {
                id: 5,
                title: "LLP Registration - StartupXYZ",
                client: "Divya Sharma",
                status: "In Progress",
                priority: "Medium",
                dueDate: "2024-02-25",
                assignedTo: "Priya Patel",
                type: "Registration"
              }
            ].map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                    <FileText className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{task.title}</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{task.client}</span>
                      <span>•</span>
                      <span>{task.assignedTo}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge 
                    variant={
                      task.status === "Completed" ? "default" :
                      task.status === "In Progress" ? "secondary" :
                      task.status === "Overdue" ? "destructive" : "outline"
                    }
                  >
                    {task.status}
                  </Badge>
                  <Badge 
                    variant={
                      task.priority === "Critical" ? "destructive" :
                      task.priority === "High" ? "default" : "secondary"
                    }
                  >
                    {task.priority}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{task.type}</span>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{task.dueDate}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 