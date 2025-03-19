
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Truck } from "lucide-react";

const BookingForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleNextStep = () => {
    if (formStep < 2) {
      setFormStep(formStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto glass border-0 shadow-xl overflow-hidden transition-all duration-500" 
      style={{ height: isExpanded ? (formStep === 0 ? "320px" : "400px") : "80px" }}>
      <CardContent className="p-0">
        {!isExpanded ? (
          <div 
            className="p-5 flex items-center justify-between cursor-pointer" 
            onClick={handleExpand}
          >
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">Where are you shipping to?</span>
            </div>
            <Button variant="default" className="rounded-full" onClick={handleExpand}>
              Book Now
            </Button>
          </div>
        ) : (
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-1">
                <div className={`h-1 w-10 rounded-full ${formStep >= 0 ? "bg-primary" : "bg-muted"}`} />
                <div className={`h-1 w-10 rounded-full ${formStep >= 1 ? "bg-primary" : "bg-muted"}`} />
                <div className={`h-1 w-10 rounded-full ${formStep >= 2 ? "bg-primary" : "bg-muted"}`} />
              </div>
              <span className="text-sm text-muted-foreground">Step {formStep + 1} of 3</span>
            </div>

            {formStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-lg font-medium">Enter shipment locations</h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <MapPin className="h-5 w-5 text-muted-foreground absolute top-3 left-3" />
                    <Input 
                      className="pl-10" 
                      placeholder="Pickup location" 
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                    />
                  </div>
                  
                  <div className="relative">
                    <MapPin className="h-5 w-5 text-muted-foreground absolute top-3 left-3" />
                    <Input 
                      className="pl-10" 
                      placeholder="Destination" 
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={handleNextStep}
                    disabled={!pickup || !destination}
                    className="rounded-full"
                  >
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {formStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-lg font-medium">Choose vehicle type</h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Small Truck", capacity: "Up to 3 tons", icon: <Truck className="h-5 w-5" /> },
                    { name: "Medium Truck", capacity: "Up to 7 tons", icon: <Truck className="h-5 w-5" /> },
                    { name: "Large Truck", capacity: "Up to 15 tons", icon: <Truck className="h-5 w-5" /> },
                    { name: "Container", capacity: "Up to 25 tons", icon: <Truck className="h-5 w-5" /> },
                  ].map((vehicle, index) => (
                    <div 
                      key={index}
                      className="border border-border rounded-lg p-3 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {vehicle.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{vehicle.name}</div>
                          <div className="text-xs text-muted-foreground">{vehicle.capacity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep} className="rounded-full">
                    Back
                  </Button>
                  <Button onClick={handleNextStep} className="rounded-full">
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <h3 className="text-lg font-medium">Schedule pickup</h3>
                
                <div className="space-y-4">
                  <div className="relative">
                    <Calendar className="h-5 w-5 text-muted-foreground absolute top-3 left-3" />
                    <Input className="pl-10" type="date" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <Input type="time" placeholder="Time" />
                    </div>
                    <div>
                      <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Flexible (±2h)</option>
                        <option>Exact time</option>
                        <option>Morning (8-12)</option>
                        <option>Afternoon (12-17)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep} className="rounded-full">
                    Back
                  </Button>
                  <Button className="rounded-full">
                    Find Available Trucks
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookingForm;
