
import { Truck, MapPin, MessageCircle, Navigation, CreditCard, Star } from "lucide-react";

const features = [
  {
    icon: <Truck />,
    title: "Extensive Fleet Options",
    description: "From small pickup trucks to large container transports, find the perfect vehicle for your cargo needs."
  },
  {
    icon: <MapPin />,
    title: "Simplified Booking",
    description: "Enter pickup and destination locations, select your vehicle, and get instant quotes in seconds."
  },
  {
    icon: <MessageCircle />,
    title: "Real-time Negotiation",
    description: "Negotiate directly with vehicle owners through our in-app chat system to get the best possible rates."
  },
  {
    icon: <Navigation />,
    title: "Live GPS Tracking",
    description: "Track your shipment in real-time from pickup to delivery, with accurate ETA updates."
  },
  {
    icon: <CreditCard />,
    title: "Secure Payments",
    description: "Multiple payment options with secure processing and detailed electronic receipts."
  },
  {
    icon: <Star />,
    title: "Verified Reviews",
    description: "Choose carriers based on authentic ratings and reviews from other shippers like you."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">
            Reimagining Freight Transport
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines cutting-edge technology with the traditional freight industry to create a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
