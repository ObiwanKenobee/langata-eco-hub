
import React from 'react';
import { MapPin, BarChart, ShoppingCart, Users, Calculator, Droplet } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 1,
    title: 'Interactive Impact Map',
    description: 'Visualize solar installations, rainwater harvesting systems, and community gardens across Langata.',
    icon: <MapPin className="h-10 w-10 text-eco-green" />,
    color: 'bg-eco-green/10',
    link: '/map',
  },
  {
    id: 2,
    title: 'Eco Dashboard',
    description: 'Track your household and community impact with real-time metrics on energy, water, and waste.',
    icon: <BarChart className="h-10 w-10 text-eco-blue" />,
    color: 'bg-eco-blue/10',
    link: '/dashboard',
  },
  {
    id: 3,
    title: 'Green Technology Marketplace',
    description: 'Connect with trusted local providers for solar, water harvesting, and composting solutions.',
    icon: <ShoppingCart className="h-10 w-10 text-eco-earth" />,
    color: 'bg-eco-earth/10',
    link: '/marketplace',
  },
  {
    id: 4,
    title: 'Community Hub',
    description: 'Join workshops, challenges, and knowledge-sharing events with your neighbors.',
    icon: <Users className="h-10 w-10 text-eco-green" />,
    color: 'bg-eco-green/10',
    link: '/community',
  },
  {
    id: 5,
    title: 'ROI Calculators',
    description: 'Estimate the cost savings and environmental impact of sustainable installations.',
    icon: <Calculator className="h-10 w-10 text-eco-blue" />,
    color: 'bg-eco-blue/10',
    link: '/calculator',
  },
  {
    id: 6,
    title: 'Rain Catch Forecasting',
    description: 'Use real-time weather data to optimize your water harvesting systems.',
    icon: <Droplet className="h-10 w-10 text-eco-earth" />,
    color: 'bg-eco-earth/10',
    link: '/forecast',
  },
];

const FeatureSection = () => {
  return (
    <section className="py-24 section-pattern">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Platform Features</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to participate in Langata's regenerative transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="eco-card p-6 flex flex-col animate-fade-in">
              <div className={`${feature.color} p-3 rounded-lg mb-5 self-start`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-5 flex-grow">{feature.description}</p>
              <Button 
                variant="outline" 
                className="self-start mt-auto"
                asChild
              >
                <a href={feature.link}>Explore</a>
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button className="bg-eco-green hover:bg-eco-green-dark" size="lg">
            Join the Platform
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
