
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import StatSection from '@/components/StatSection';
import FeatureSection from '@/components/FeatureSection';
import TestimonialSection from '@/components/TestimonialSection';
import CTASection from '@/components/CTASection';
import MapComponent from '@/components/MapComponent';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <StatSection />
      
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Interactive Impact Map</h2>
            <p className="text-muted-foreground text-lg">
              Explore regenerative installations across Langata and see the community's progress.
            </p>
          </div>
          <MapComponent />
        </div>
      </section>
      
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </Layout>
  );
};

export default Home;
