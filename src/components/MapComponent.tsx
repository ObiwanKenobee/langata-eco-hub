
import React from 'react';
import { MapPin, Sun, Cloud, Leaf } from 'lucide-react';

// This would be replaced with actual map implementation using Mapbox or similar
const MapComponent = () => {
  return (
    <div className="relative w-full h-[500px] bg-eco-blue-light/30 rounded-lg overflow-hidden flex items-center justify-center">
      <div className="text-center p-6 bg-white/90 rounded-lg max-w-md z-10">
        <h3 className="text-xl font-semibold mb-2">Interactive Map Coming Soon</h3>
        <p className="text-muted-foreground">
          This will be replaced with a fully interactive map showing solar installations, 
          water harvesting systems, and community gardens across Langata.
        </p>
      </div>
      
      {/* Decorative map markers */}
      <div className="map-marker absolute" style={{ top: '30%', left: '25%' }}>
        <Sun className="h-4 w-4" />
      </div>
      <div className="map-marker absolute" style={{ top: '50%', left: '40%' }}>
        <Sun className="h-4 w-4" />
      </div>
      <div className="map-marker absolute bg-eco-blue" style={{ top: '45%', left: '60%' }}>
        <Cloud className="h-4 w-4" />
      </div>
      <div className="map-marker absolute bg-eco-blue" style={{ top: '70%', left: '35%' }}>
        <Cloud className="h-4 w-4" />
      </div>
      <div className="map-marker absolute bg-eco-earth" style={{ top: '65%', left: '70%' }}>
        <Leaf className="h-4 w-4" />
      </div>
      <div className="map-marker absolute bg-eco-earth" style={{ top: '25%', left: '75%' }}>
        <Leaf className="h-4 w-4" />
      </div>
    </div>
  );
};

export default MapComponent;
