
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, MapPin, Clock, MessageCircle, User, Settings, LogOut } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("active");
  
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-card border-r border-border">
        <div className="p-6">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold">FreightFlow</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/dashboard" className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
            <Truck className="h-5 w-5" />
            <span>Shipments</span>
          </Link>
          <Link to="/messages" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span>Messages</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link to="/settings" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors">
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
        </nav>
        
        <div className="p-4 border-t border-border">
          <Button variant="outline" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-2" />
            Log Out
          </Button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden border-b border-border p-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold">FreightFlow</span>
          </Link>
          <Button variant="outline" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </header>
        
        <main className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Your Shipments</h1>
                <p className="text-muted-foreground">Manage all your active and past shipments</p>
              </div>
              <Button className="mt-4 sm:mt-0">New Shipment</Button>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="mb-6">
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="active" className="space-y-6 animate-fade-in">
                <Card className="overflow-hidden">
                  <CardHeader className="px-6">
                    <CardTitle>Active Shipments</CardTitle>
                    <CardDescription>Currently in transit shipments with live tracking</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {/* Shipment Item */}
                      <div className="p-6 hover:bg-muted/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-green-500/10 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded">
                                In Transit
                              </span>
                              <span className="text-sm text-muted-foreground">ID: #FLS-29845</span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 mb-2">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Karachi to Lahore</span>
                              </div>
                              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Arrives in 6 hours</span>
                              </div>
                            </div>
                            
                            <div className="mt-2">
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                              </div>
                              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                <span>Departed 10:00 AM</span>
                                <span>Arriving 08:30 PM</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Message</Button>
                            <Button size="sm">Track</Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Another Shipment Item */}
                      <div className="p-6 hover:bg-muted/30 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="bg-amber-500/10 text-amber-600 text-xs font-medium px-2.5 py-0.5 rounded">
                                Loading
                              </span>
                              <span className="text-sm text-muted-foreground">ID: #FLS-29840</span>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-10 mb-2">
                              <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <span>Islamabad to Peshawar</span>
                              </div>
                              <div className="flex items-center space-x-2 mt-2 sm:mt-0">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">Departs in 1 hour</span>
                              </div>
                            </div>
                            
                            <div className="mt-2">
                              <div className="w-full bg-muted rounded-full h-2.5">
                                <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: "15%" }}></div>
                              </div>
                              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                                <span>Loading 01:30 PM</span>
                                <span>Arriving 11:00 PM</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Message</Button>
                            <Button size="sm">Track</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Button variant="outline">Load More</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="upcoming" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Shipments</CardTitle>
                    <CardDescription>Shipments scheduled for future dates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">No upcoming shipments found</p>
                      <Button className="mt-4">Schedule a Shipment</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="completed" className="animate-fade-in">
                <Card>
                  <CardHeader>
                    <CardTitle>Completed Shipments</CardTitle>
                    <CardDescription>Your shipment history and completed deliveries</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="divide-y divide-border">
                      {/* Completed Shipment Item */}
                      <div className="py-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="bg-green-500/10 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded">
                                Delivered
                              </span>
                              <span className="text-sm text-muted-foreground">ID: #FLS-29820</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Karachi to Hyderabad</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            Completed on May 12, 2023
                          </div>
                          
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                      
                      {/* Another Completed Shipment */}
                      <div className="py-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="bg-green-500/10 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded">
                                Delivered
                              </span>
                              <span className="text-sm text-muted-foreground">ID: #FLS-29815</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm">Lahore to Faisalabad</span>
                            </div>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            Completed on May 8, 2023
                          </div>
                          
                          <Button size="sm" variant="outline">View Details</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
