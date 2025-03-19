
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PersonalInfoTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Manage your personal details and contact information</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" defaultValue="John" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" defaultValue="Doe" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="flex items-center space-x-2">
            <Input id="email" type="email" defaultValue="john.doe@example.com" className="flex-1" />
            <div className="bg-green-500/10 text-green-600 text-xs font-medium px-2.5 py-1 rounded">
              Verified
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="flex items-center space-x-2">
            <Input id="phone" type="tel" defaultValue="+1 (555) 000-0000" className="flex-1" />
            <div className="bg-amber-500/10 text-amber-600 text-xs font-medium px-2.5 py-1 rounded">
              Verify
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" defaultValue="123 Shipping Street" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" defaultValue="Karachi" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State/Province</Label>
            <Input id="state" defaultValue="Sindh" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zip">Postal Code</Label>
            <Input id="zip" defaultValue="75300" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};

export default PersonalInfoTab;
