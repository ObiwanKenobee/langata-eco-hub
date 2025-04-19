
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Calendar, BookOpen, Trophy } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Community Garden Workday',
    date: 'May 15, 2023',
    time: '9:00 AM - 12:00 PM',
    location: 'Langata Community Garden',
    attendees: 18,
    description: 'Join us for a community workday at the Langata garden. We\'ll be planting new vegetables and maintaining the existing beds.',
  },
  {
    id: 2,
    title: 'Solar Energy Workshop',
    date: 'May 22, 2023',
    time: '2:00 PM - 4:00 PM',
    location: 'Langata Community Center',
    attendees: 32,
    description: 'Learn about solar energy options for your home, including costs, installation process, and financing options.',
  },
  {
    id: 3,
    title: 'Rainwater Harvesting Demo',
    date: 'June 5, 2023',
    time: '10:00 AM - 12:00 PM',
    location: 'Langata Model Home',
    attendees: 24,
    description: 'See a real rainwater harvesting system in action and learn how to install one at your own home.',
  },
];

const challenges = [
  {
    id: 1,
    title: 'Zero Waste Week',
    participants: 86,
    status: 'Active',
    period: 'May 10 - May 17',
    description: 'Challenge yourself to produce zero landfill waste for an entire week.',
  },
  {
    id: 2,
    title: 'Grow Your Food',
    participants: 112,
    status: 'Upcoming',
    period: 'June 1 - July 31',
    description: 'Grow at least three vegetables or herbs at home during the challenge period.',
  },
  {
    id: 3,
    title: 'Water Conservation',
    participants: 95,
    status: 'Completed',
    period: 'April 1 - April 30',
    description: 'Reduce your household water consumption by 20% for the month of April.',
  },
];

const resources = [
  {
    id: 1,
    title: 'Guide to Solar Panel Installation',
    type: 'PDF Guide',
    views: 245,
    description: 'A comprehensive guide to planning and installing solar panels in Langata.',
  },
  {
    id: 2,
    title: 'Rainwater Harvesting DIY',
    type: 'Video Tutorial',
    views: 312,
    description: 'Step-by-step video tutorial on building a simple rainwater harvesting system.',
  },
  {
    id: 3,
    title: 'Urban Gardening Basics',
    type: 'Article Series',
    views: 178,
    description: 'A series of articles covering soil preparation, plant selection, and maintenance for urban gardens.',
  },
];

const Community = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Community Hub</h1>
            <p className="text-muted-foreground max-w-2xl">
              Connect with your neighbors, join local events, and participate in community challenges.
            </p>
          </div>
          <Button className="bg-eco-green hover:bg-eco-green-dark">
            <Users className="mr-2 h-4 w-4" />
            Join Community
          </Button>
        </div>
        
        <Tabs defaultValue="events" className="space-y-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="events">
              <Calendar className="mr-2 h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="challenges">
              <Trophy className="mr-2 h-4 w-4" />
              Challenges
            </TabsTrigger>
            <TabsTrigger value="resources">
              <BookOpen className="mr-2 h-4 w-4" />
              Resources
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="events">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardHeader>
                    <CardTitle>{event.title}</CardTitle>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {event.date} | {event.time}
                      </div>
                      <div>{event.location}</div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{event.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-eco-green hover:bg-eco-green-dark">
                      RSVP to Event
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="challenges">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {challenges.map((challenge) => (
                <Card key={challenge.id}>
                  <CardHeader>
                    <div className={`inline-block px-2 py-1 text-xs rounded-full mb-2 ${
                      challenge.status === 'Active' ? 'bg-green-100 text-green-800' : 
                      challenge.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {challenge.status}
                    </div>
                    <CardTitle>{challenge.title}</CardTitle>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        {challenge.period}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        {challenge.participants} participants
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{challenge.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        challenge.status === 'Active' ? 'bg-eco-green hover:bg-eco-green-dark' : 
                        challenge.status === 'Upcoming' ? 'bg-eco-blue hover:bg-eco-blue-dark' : 
                        'bg-gray-400 hover:bg-gray-500'
                      }`}
                      disabled={challenge.status === 'Completed'}
                    >
                      {challenge.status === 'Active' ? 'Join Challenge' : 
                       challenge.status === 'Upcoming' ? 'Set Reminder' : 
                       'Completed'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="resources">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{resource.title}</CardTitle>
                      <div className="bg-muted text-xs px-2 py-1 rounded">
                        {resource.type}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      {resource.views} views
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="mr-2">
                      Preview
                    </Button>
                    <Button className="bg-eco-green hover:bg-eco-green-dark flex-1">
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="mt-16 bg-muted rounded-lg p-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Share Your Story</h2>
            <p className="text-muted-foreground mb-6">
              Have you implemented a sustainable solution at your home or business?
              Share your experience with the community to inspire others.
            </p>
            <Button size="lg" className="bg-eco-green hover:bg-eco-green-dark">
              Submit Your Story
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Community;
