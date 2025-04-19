
import React from 'react';
import { Sun, Cloud, Recycle, Leaf } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Solar Energy Generated',
    value: '58,293',
    unit: 'kWh',
    icon: <Sun className="h-8 w-8 text-eco-green" />,
    color: 'bg-eco-green/10',
  },
  {
    id: 2,
    title: 'Water Harvested',
    value: '342,182',
    unit: 'Liters',
    icon: <Cloud className="h-8 w-8 text-eco-blue" />,
    color: 'bg-eco-blue/10',
  },
  {
    id: 3,
    title: 'Waste Composted',
    value: '28,493',
    unit: 'kg',
    icon: <Recycle className="h-8 w-8 text-eco-earth" />,
    color: 'bg-eco-earth/10',
  },
  {
    id: 4,
    title: 'Gardens Created',
    value: '124',
    unit: 'plots',
    icon: <Leaf className="h-8 w-8 text-eco-green" />,
    color: 'bg-eco-green/10',
  },
];

const StatSection = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Community Impact</h2>
          <p className="text-muted-foreground text-lg">
            Together, we're making a measurable difference in Langata's sustainability journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="eco-card p-6 flex flex-col items-center text-center">
              <div className={`${stat.color} p-4 rounded-full mb-4`}>{stat.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <div className="flex items-baseline space-x-1">
                <span className="text-3xl font-bold text-foreground">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;
