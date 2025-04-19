
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    content: "Since installing solar through LRIP, my electricity bills have dropped by 70%. The ROI calculator was spot on with the predictions!",
    author: {
      name: "Grace Kimani",
      role: "Langata Resident",
      avatar: "GK"
    }
  },
  {
    id: 2,
    content: "As a solar installation business, the platform has connected us with dozens of new clients who trust us because of the community verification.",
    author: {
      name: "David Ochieng",
      role: "Green Tech Provider",
      avatar: "DO"
    }
  },
  {
    id: 3,
    content: "Our community garden project grew from 5 to 50 members in just three months thanks to the visibility on the LRIP map.",
    author: {
      name: "Aisha Omar",
      role: "Community Leader",
      avatar: "AO"
    }
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-muted-foreground text-lg">
            Real stories from residents, businesses, and community leaders in Langata.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="eco-card p-8 flex flex-col">
              <div className="mb-6">
                <svg className="h-8 w-8 text-eco-green opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-lg mb-6 flex-grow">{testimonial.content}</p>
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt={testimonial.author.name} />
                  <AvatarFallback className="bg-eco-green/20 text-eco-green">{testimonial.author.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{testimonial.author.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
