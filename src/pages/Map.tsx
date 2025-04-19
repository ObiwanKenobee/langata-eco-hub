
import React from 'react';
import Layout from '@/components/Layout';
import MapComponent from '@/components/MapComponent';
import { Button } from '@/components/ui/button';
import { Globe, Filter, MapPin } from 'lucide-react';

const Map = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Impact Map</h1>
            <p className="text-muted-foreground max-w-2xl">
              Visualize and explore regenerative installations across Langata neighborhood.
              Filter by type, zoom in to see details, and find initiatives near you.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              My Location
            </Button>
            <Button className="bg-eco-green hover:bg-eco-green-dark flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Add Installation
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="eco-card p-6 lg:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Filter Installations</h3>
            <div className="space-y-6">
              <div>
                <label className="font-medium block mb-2">Installation Type</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="solar" className="mr-2" defaultChecked />
                    <label htmlFor="solar">Solar Panels</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="water" className="mr-2" defaultChecked />
                    <label htmlFor="water">Water Harvesting</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="compost" className="mr-2" defaultChecked />
                    <label htmlFor="compost">Composting</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="garden" className="mr-2" defaultChecked />
                    <label htmlFor="garden">Urban Gardens</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="font-medium block mb-2">Status</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="active" className="mr-2" defaultChecked />
                    <label htmlFor="active">Active</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="planned" className="mr-2" defaultChecked />
                    <label htmlFor="planned">Planned</label>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="font-medium block mb-2">Distance</label>
                <select className="w-full p-2 border rounded">
                  <option>All distances</option>
                  <option>Within 1 km</option>
                  <option>Within 2 km</option>
                  <option>Within 5 km</option>
                </select>
              </div>
              
              <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                Apply Filters
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <MapComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Map;
