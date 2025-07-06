import { LucideIcon } from "lucide-react";

interface ActivityItemProps {
  id: number;
  type: "success" | "info" | "warning" | "error";
  title: string;
  description: string;
  time: string;
  icon: LucideIcon;
}

export function ActivityItem({ 
  type, 
  title, 
  description, 
  time, 
  icon: Icon 
}: ActivityItemProps) {
  const getTypeColor = () => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "info":
        return "bg-blue-500";
      case "warning":
        return "bg-yellow-500";
      case "error":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="flex items-start space-x-4">
      <div className={`w-2 h-2 rounded-full mt-2 ${getTypeColor()}`} />
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <Icon className="h-4 w-4 text-muted-foreground" />
          <p className="text-sm font-medium">{title}</p>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
} 