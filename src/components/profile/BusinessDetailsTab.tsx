
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const BusinessDetailsTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Business Details</CardTitle>
        <CardDescription>Add your business information for invoicing and documentation</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name</Label>
          <Input id="companyName" placeholder="Enter your company name" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="taxId">Tax ID / NTN</Label>
          <Input id="taxId" placeholder="Enter your tax identification number" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="businessAddress">Business Address</Label>
          <Input id="businessAddress" placeholder="Enter business address" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="businessCity">City</Label>
            <Input id="businessCity" placeholder="City" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessState">State/Province</Label>
            <Input id="businessState" placeholder="State/Province" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="businessZip">Postal Code</Label>
            <Input id="businessZip" placeholder="Postal code" />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="website">Website (Optional)</Label>
          <Input id="website" placeholder="https://yourcompany.com" />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  );
};

export default BusinessDetailsTab;
