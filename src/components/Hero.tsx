
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Navigation, MessageCircle, Clock, Truck } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/40 pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/5 blur-xl" />
        <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-primary/5 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className={`space-y-6 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center rounded-full border border-border bg-background/50 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2" />
              Now available in major cities across the country
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl">
              Freight Booking <br className="hidden md:block" />
              <span className="text-primary">Reimagined</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Book trucks and heavy transport with the ease of ordering a cab. Real-time tracking, instant quotes, and secure payments.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
              <Link to="/auth?register=true&role=shipper">
                <Button size="lg" className="rounded-full w-full sm:w-auto">
                  Book a Truck
                </Button>
              </Link>
              <Link to="/auth?register=true&role=owner">
                <Button variant="outline" size="lg" className="rounded-full w-full sm:w-auto">
                  Register Your Fleet
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center text-xs font-semibold">
                    {['A', 'B', 'C', 'D'][i]}
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Trusted by <span className="font-semibold text-foreground">2,000+</span> businesses
              </div>
            </div>
          </div>
          
          {/* Hero Image/Animation */}
          <div className={`relative ${isLoaded ? 'animate-fade-in delay-300' : 'opacity-0'}`}>
            <div className="relative h-[480px] w-full flex items-center justify-center">
              {/* Map-like background */}
              <div className="absolute inset-0 rounded-3xl bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
                <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full border border-primary/20" />
                <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full border border-primary/20" />
                <div className="absolute top-1/2 right-1/4 w-20 h-20 rounded-full border border-primary/20" />
              </div>
              
              {/* Floating UI elements */}
              <div className="absolute top-10 left-10 glass rounded-xl p-4 w-48 shadow-xl animate-float">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Truck Details</span>
                </div>
                <div className="mt-2 space-y-1">
                  <div className="text-xs text-muted-foreground">10-Wheeler Truck</div>
                  <div className="text-xs text-muted-foreground">Max Load: 15 tons</div>
                </div>
              </div>
              
              <div className="absolute bottom-20 right-10 glass rounded-xl p-4 w-48 shadow-xl animate-float delay-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Route</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Karachi to Lahore
                </div>
                <div className="mt-2 text-xs font-medium">
                  Distance: 1,211 km
                </div>
              </div>
              
              <div className="absolute bottom-40 left-20 glass rounded-xl p-4 w-48 shadow-xl animate-float delay-700">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Negotiation</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Initial Offer: $1,200
                </div>
                <div className="mt-1 text-xs text-green-500 font-medium">
                  Final Price: $1,050
                </div>
              </div>
              
              <div className="absolute top-1/3 right-1/4 glass rounded-xl p-4 w-48 shadow-xl animate-float delay-300">
                <div className="flex items-center space-x-2">
                  <Navigation className="h-5 w-5 text-primary" />
                  <span className="font-medium">Live Tracking</span>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  Current Location
                </div>
                <div className="mt-1 text-xs text-primary-foreground bg-primary/90 rounded px-2 py-0.5 inline-block">
                  On Schedule
                </div>
              </div>
              
              {/* Truck Icon */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary animate-pulse-subtle" />
                </div>
              </div>
              
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M120 120 L240 240"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="text-primary/30"
                />
                <path
                  d="M240 240 L360 180"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="text-primary/30"
                />
                <path
                  d="M240 240 L280 360"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="text-primary/30"
                />
                <path
                  d="M240 240 L120 300"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  className="text-primary/30"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
