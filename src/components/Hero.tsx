import React from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, Sun, Cloud, Recycle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-eco-green-light/10 to-transparent pb-16">
      <div className="container mx-auto px-4 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center px-4 py-2 bg-eco-green/10 text-eco-green rounded-full text-sm font-medium">
              <Leaf className="mr-2 h-4 w-4" />
              Langata Regenerative Innovation Platform
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Building a <span className="text-gradient">Sustainable</span> Future Together
            </h1>
            <p className="text-xl text-muted-foreground">
              Empowering the Langata community to collaborate on regenerative technologies 
              for a greener, more resilient neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-eco-green hover:bg-eco-green-dark"
                onClick={() => navigate('/auth')}
              >
                Join the Community
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/map')}
              >
                Explore the Map
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green mb-2">
                  <Sun className="h-6 w-6" />
                </div>
                <span className="text-sm text-center font-medium">Solar Energy</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-eco-blue/10 rounded-full flex items-center justify-center text-eco-blue mb-2">
                  <Cloud className="h-6 w-6" />
                </div>
                <span className="text-sm text-center font-medium">Water Harvesting</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-eco-earth/10 rounded-full flex items-center justify-center text-eco-earth mb-2">
                  <Recycle className="h-6 w-6" />
                </div>
                <span className="text-sm text-center font-medium">Composting</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-eco-green/10 rounded-full flex items-center justify-center text-eco-green mb-2">
                  <Leaf className="h-6 w-6" />
                </div>
                <span className="text-sm text-center font-medium">Urban Farming</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-eco-green/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-eco-blue/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-eco-earth/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Langata landscape" 
                  className="rounded-lg shadow-xl" 
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 w-32 animate-float">
                  <div className="text-xs text-muted-foreground">Solar Installations</div>
                  <div className="text-xl font-bold text-eco-green">143+</div>
                </div>
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 w-32 animate-float animation-delay-1000">
                  <div className="text-xs text-muted-foreground">Water Harvested</div>
                  <div className="text-xl font-bold text-eco-blue">28K L</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="currentColor" 
            fillOpacity="0.05" 
            d="M0,192L48,176C96,160,192,128,288,128C384,128,480,160,576,186.7C672,213,768,235,864,224C960,213,1056,171,1152,165.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
