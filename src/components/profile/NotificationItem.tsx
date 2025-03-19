
import React from "react";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface NotificationItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  defaultChecked?: boolean;
}

const NotificationItem = ({ id, label, icon, defaultChecked = true }: NotificationItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        {icon}
        <Label htmlFor={id}>{label}</Label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id={id} className="h-4 w-4" defaultChecked={defaultChecked} />
        <span className="text-sm text-muted-foreground">Email</span>
        <input type="checkbox" className="h-4 w-4" defaultChecked={defaultChecked} />
        <span className="text-sm text-muted-foreground">SMS</span>
      </div>
    </div>
  );
};

export default NotificationItem;
