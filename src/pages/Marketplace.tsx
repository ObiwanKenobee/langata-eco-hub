
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Cloud, Leaf, Recycle, StarIcon, ShoppingCart } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Solar Panel Installation',
    provider: 'EcoSun Energy',
    description: 'Complete solar panel installation service including design, installation, and maintenance.',
    rating: 4.8,
    reviews: 32,
    price: 'From KSH 120,000',
    icon: <Sun className="h-10 w-10 text-eco-green" />,
    badge: 'Popular',
    color: 'bg-eco-green/10',
  },
  {
    id: 2,
    title: 'Rainwater Harvesting System',
    provider: 'Maji Solutions',
    description: 'Complete rainwater harvesting systems with filters, storage tanks, and pumps.',
    rating: 4.7,
    reviews: 28,
    price: 'From KSH 35,000',
    icon: <Cloud className="h-10 w-10 text-eco-blue" />,
    color: 'bg-eco-blue/10',
  },
  {
    id: 3,
    title: 'Composting Solutions',
    provider: 'Green Cycle',
    description: 'Household and community composting systems with training and setup support.',
    rating: 4.5,
    reviews: 19,
    price: 'From KSH 8,000',
    icon: <Recycle className="h-10 w-10 text-eco-earth" />,
    color: 'bg-eco-earth/10',
  },
  {
    id: 4,
    title: 'Urban Gardening Kits',
    provider: 'Langata Greens',
    description: 'Complete urban gardening kits with soil, seeds, containers, and training.',
    rating: 4.9,
    reviews: 45,
    price: 'From KSH 5,500',
    icon: <Leaf className="h-10 w-10 text-eco-green" />,
    badge: 'Best Seller',
    color: 'bg-eco-green/10',
  },
  {
    id: 5,
    title: 'Solar Water Heating',
    provider: 'Sunny Waters',
    description: 'Energy-efficient solar water heating systems for residential and commercial use.',
    rating: 4.6,
    reviews: 22,
    price: 'From KSH 65,000',
    icon: <Sun className="h-10 w-10 text-eco-green" />,
    color: 'bg-eco-green/10',
  },
  {
    id: 6,
    title: 'Water-Efficient Irrigation',
    provider: 'Smart Drip',
    description: 'Automated drip irrigation systems that conserve water for gardens and farms.',
    rating: 4.8,
    reviews: 33,
    price: 'From KSH 12,000',
    icon: <Cloud className="h-10 w-10 text-eco-blue" />,
    color: 'bg-eco-blue/10',
  },
];

const Marketplace = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Green Technology Marketplace</h1>
            <p className="text-muted-foreground max-w-2xl">
              Connect with trusted local providers offering sustainable solutions for your home and community.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Solutions</TabsTrigger>
            <TabsTrigger value="solar">Solar</TabsTrigger>
            <TabsTrigger value="water">Water</TabsTrigger>
            <TabsTrigger value="waste">Composting</TabsTrigger>
            <TabsTrigger value="garden">Gardening</TabsTrigger>
          </TabsList>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="eco-card overflow-visible transition-all hover:border-eco-green/50">
              <CardHeader className="pb-2">
                <div className={`${service.color} p-3 rounded-lg mb-3 self-start inline-flex`}>
                  {service.icon}
                </div>
                {service.badge && (
                  <div className="absolute top-3 right-3 bg-eco-green text-white text-xs py-1 px-2 rounded-full">
                    {service.badge}
                  </div>
                )}
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription>By {service.provider}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-500' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium">{service.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">({service.reviews} reviews)</span>
                </div>
                <div className="font-semibold">{service.price}</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Learn More</Button>
                <Button className="bg-eco-green hover:bg-eco-green-dark">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Request
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Are you a green technology provider?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Join our marketplace to connect with eco-conscious residents in Langata.
          </p>
          <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark">
            Register as a Provider
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Marketplace;
