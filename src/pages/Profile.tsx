
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, Upload, User, Truck, MapPin, Phone, Mail, Building, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center">
          <Link to="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end space-y-4 md:space-y-0 md:space-x-6 mb-8">
            <Avatar className="w-24 h-24 border-4 border-background">
              <AvatarImage src="" alt="User avatar" />
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">JD</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">John Doe</h1>
              <p className="text-muted-foreground">Shipper • Member since May 2023</p>
            </div>
            
            <Button className="md:self-end">
              <Upload className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="personal">Personal Info</TabsTrigger>
              <TabsTrigger value="business">Business Details</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your personal details and contact information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="email" type="email" value="john.doe@example.com" className="flex-1" />
                      <div className="bg-green-500/10 text-green-600 text-xs font-medium px-2.5 py-1 rounded">
                        Verified
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="flex items-center space-x-2">
                      <Input id="phone" type="tel" value="+1 (555) 000-0000" className="flex-1" />
                      <div className="bg-amber-500/10 text-amber-600 text-xs font-medium px-2.5 py-1 rounded">
                        Verify
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" value="123 Shipping Street" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" value="Karachi" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State/Province</Label>
                      <Input id="state" value="Sindh" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zip">Postal Code</Label>
                      <Input id="zip" value="75300" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end space-x-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="business" className="animate-fade-in">
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
            </TabsContent>
            
            <TabsContent value="preferences" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>Customize your account and notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notification Preferences</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Truck className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="notifyShipment">Shipment Updates</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notifyShipment" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">Email</span>
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">SMS</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="notifyMessages">New Messages</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notifyMessages" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">Email</span>
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">SMS</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <Label htmlFor="notifyDelivery">Delivery Confirmation</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="notifyDelivery" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">Email</span>
                          <input type="checkbox" className="h-4 w-4" defaultChecked />
                          <span className="text-sm text-muted-foreground">SMS</span>
                        </div>
                      </div>
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Profile;
