
import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, ChevronLeft } from "lucide-react";

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState<"shipper" | "owner" | null>(null);

  useEffect(() => {
    // Get query parameters from URL
    const params = new URLSearchParams(location.search);
    if (params.get("register") === "true") {
      setActiveTab("register");
    }
    
    const urlRole = params.get("role");
    if (urlRole === "shipper" || urlRole === "owner") {
      setRole(urlRole);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Button 
              variant="ghost" 
              size="sm" 
              className="px-0" 
              onClick={() => navigate("/")}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
          
          <div className="flex items-center justify-center mb-8">
            <Link to="/" className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-primary" />
              <span className="font-display text-xl font-bold">FreightFlow</span>
            </Link>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login" className="rounded-full">Log In</TabsTrigger>
              <TabsTrigger value="register" className="rounded-full">Register</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="animate-fade-in">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>Welcome back</CardTitle>
                  <CardDescription>
                    Enter your credentials to access your account
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="name@example.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full">Log In</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="register" className="animate-fade-in">
              <Card className="border-0 shadow-lg rounded-xl">
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>
                    Join FreightFlow and start shipping or offering your services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {!role ? (
                    <div className="space-y-4">
                      <p className="text-center text-sm text-muted-foreground mb-2">
                        I want to register as:
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className="border border-border hover:border-primary hover:bg-primary/5 rounded-lg p-4 text-center cursor-pointer transition-colors"
                          onClick={() => setRole("shipper")}
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20 12V8H17V4H3C1.9 4 1 4.9 1 6V17H3C3 18.66 4.34 20 6 20C7.66 20 9 18.66 9 17H15C15 18.66 16.34 20 18 20C19.66 20 21 18.66 21 17H23V12H20ZM6 18.5C5.17 18.5 4.5 17.83 4.5 17C4.5 16.17 5.17 15.5 6 15.5C6.83 15.5 7.5 16.17 7.5 17C7.5 17.83 6.83 18.5 6 18.5ZM8.5 11.5H3V6H8.5V11.5ZM18 18.5C17.17 18.5 16.5 17.83 16.5 17C16.5 16.17 17.17 15.5 18 15.5C18.83 15.5 19.5 16.17 19.5 17C19.5 17.83 18.83 18.5 18 18.5ZM17 11.5V8H19.5V11.5H17Z" fill="currentColor" />
                            </svg>
                          </div>
                          <h3 className="font-medium">Shipper</h3>
                          <p className="text-xs text-muted-foreground mt-1">I want to book freight services</p>
                        </div>
                        <div
                          className="border border-border hover:border-primary hover:bg-primary/5 rounded-lg p-4 text-center cursor-pointer transition-colors"
                          onClick={() => setRole("owner")}
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                            <Truck className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="font-medium">Vehicle Owner</h3>
                          <p className="text-xs text-muted-foreground mt-1">I offer vehicles for freight</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Registering as: {role === "shipper" ? "Shipper" : "Vehicle Owner"}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setRole(null)}
                          className="text-xs h-7 px-2"
                        >
                          Change
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="name@example.com" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  {role && (
                    <Button className="w-full rounded-full">
                      Create Account
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {activeTab === "login" ? (
              <>
                Don't have an account?{" "}
                <button 
                  className="text-primary hover:underline" 
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button 
                  className="text-primary hover:underline" 
                  onClick={() => setActiveTab("login")}
                >
                  Log in
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
