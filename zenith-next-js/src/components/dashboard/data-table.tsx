import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Eye, Edit, Trash2, MoreHorizontal } from "lucide-react";

interface DataTableProps {
  title: string;
  description: string;
  searchPlaceholder: string;
  data: Array<{
    id: number;
    [key: string]: any;
  }>;
  columns: Array<{
    key: string;
    label: string;
    render?: (value: any, row: any) => React.ReactNode;
  }>;
  actions?: Array<{
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    onClick?: (row: any) => void;
  }>;
}

export function DataTable({ 
  title, 
  description, 
  searchPlaceholder, 
  data, 
  columns,
  actions = [
    { label: "View", icon: Eye },
    { label: "Edit", icon: Edit },
    { label: "Delete", icon: Trash2 }
  ]
}: DataTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder={searchPlaceholder} className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        <div className="space-y-4">
          {data.map((row) => (
            <div key={row.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                {columns.map((column) => (
                  <div key={column.key} className="flex-1">
                    {column.render ? (
                      column.render(row[column.key], row)
                    ) : (
                      <span className="text-sm">{row[column.key]}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                {actions.map((action, index) => (
                  <Button key={index} variant="ghost" size="sm">
                    <action.icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 