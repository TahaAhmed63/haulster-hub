
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingForm from "@/components/BookingForm";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Truck, Clock } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Booking Form */}
        <section className="relative z-10 -mt-16">
          <div className="container mx-auto px-4 md:px-6">
            <BookingForm />
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <Truck className="h-6 w-6 text-primary" />, 
                  number: "10,000+", 
                  label: "Registered Vehicles" 
                },
                { 
                  icon: <Shield className="h-6 w-6 text-primary" />, 
                  number: "99.8%", 
                  label: "Delivery Success Rate" 
                },
                { 
                  icon: <Clock className="h-6 w-6 text-primary" />, 
                  number: "24/7", 
                  label: "Customer Support" 
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <Features />
        
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Trusted by Businesses Nationwide
              </h2>
              <p className="text-lg text-muted-foreground">
                Here's what our customers have to say about their experience with FreightFlow.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ahmad Khan",
                  role: "Logistics Manager, ABC Exports",
                  content: "FreightFlow has transformed how we handle our logistics. The real-time tracking and transparent pricing have significantly improved our operations."
                },
                {
                  name: "Sarah Ahmed",
                  role: "Owner, Quick Deliveries",
                  content: "As a fleet owner, this platform has helped me maximize my vehicles' utilization. The negotiation system is fair and the payment process is seamless."
                },
                {
                  name: "Rashid Ali",
                  role: "CEO, Global Traders",
                  content: "We've reduced our logistics costs by 15% since switching to FreightFlow. The ability to compare options and negotiate directly has been game-changing."
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border border-border bg-card shadow-sm ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
                Ready to Transform Your Freight Experience?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of businesses who have simplified their logistics with FreightFlow.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/auth?register=true&role=shipper">
                  <Button size="lg" className="w-full sm:w-auto rounded-full">
                    Start Shipping <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/auth?register=true&role=owner">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full">
                    Register Your Fleet
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
