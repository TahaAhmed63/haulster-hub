
import React from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, MessageCircle, MapPin } from "lucide-react";
import NotificationItem from "./NotificationItem";

const PreferencesTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Preferences</CardTitle>
        <CardDescription>Customize your account and notification preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Notification Preferences</h3>
          <div className="space-y-2">
            <NotificationItem 
              id="notifyShipment" 
              label="Shipment Updates" 
              icon={<Truck className="h-4 w-4 text-muted-foreground" />}
            />
            
            <NotificationItem 
              id="notifyMessages" 
              label="New Messages" 
              icon={<MessageCircle className="h-4 w-4 text-muted-foreground" />}
            />
            
            <NotificationItem 
              id="notifyDelivery" 
              label="Delivery Confirmation" 
              icon={<MapPin className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Language & Regional Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <select id="language" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>English</option>
                <option>Urdu</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency">Currency</Label>
              <select id="currency" className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option>Pakistani Rupee (PKR)</option>
                <option>US Dollar (USD)</option>
              </select>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Preferences</Button>
      </CardFooter>
    </Card>
  );
};

export default PreferencesTab;
