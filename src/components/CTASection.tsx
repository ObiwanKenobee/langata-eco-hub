
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-eco-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to join Langata's regenerative movement?
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Be part of the community that's creating a more sustainable, resilient, and connected Langata.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-eco-green hover:bg-gray-100">
              Join as a Resident
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-eco-green-dark">
              Register as a Business
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
