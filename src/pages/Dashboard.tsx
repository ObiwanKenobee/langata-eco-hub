
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sun, Cloud, Leaf, Recycle, Trophy, Users, BarChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Eco Dashboard</h1>
            <p className="text-muted-foreground">
              Track your household and community impact with real-time metrics.
            </p>
          </div>
          <Tabs defaultValue="personal">
            <TabsList>
              <TabsTrigger value="personal">Personal</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Solar Energy</CardTitle>
                <Sun className="h-4 w-4 text-eco-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">328 kWh</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-eco-green">↑ 18%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Water Harvested</CardTitle>
                <Cloud className="h-4 w-4 text-eco-blue" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,283 L</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-eco-blue">↑ 24%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Waste Composted</CardTitle>
                <Recycle className="h-4 w-4 text-eco-earth" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42 kg</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-eco-earth">↑ 8%</span> from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Garden Yield</CardTitle>
                <Leaf className="h-4 w-4 text-eco-green" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 kg</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-eco-green">↑ 12%</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="dashboard">
              <BarChart className="h-4 w-4 mr-2" />
              Charts
            </TabsTrigger>
            <TabsTrigger value="achievements">
              <Trophy className="h-4 w-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="community">
              <Users className="h-4 w-4 mr-2" />
              Network
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Energy & Water Performance</CardTitle>
                <CardDescription>
                  Your household's performance over the past 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="h-[300px] flex items-center justify-center bg-muted">
                <p>Chart visualization will be implemented here</p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Savings Breakdown</CardTitle>
                  <CardDescription>
                    Financial impact of your eco investments
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center bg-muted">
                  <p>Savings chart will be implemented here</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Carbon Footprint</CardTitle>
                  <CardDescription>
                    Your reduced carbon emissions
                  </CardDescription>
                </CardHeader>
                <CardContent className="h-[200px] flex items-center justify-center bg-muted">
                  <p>Carbon chart will be implemented here</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="achievements">
            <Card>
              <CardHeader>
                <CardTitle>Your Eco Achievements</CardTitle>
                <CardDescription>
                  Badges and milestones you've earned through sustainable actions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {Array.from({length: 8}).map((_, index) => (
                    <div key={index} className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-2">
                        <Trophy className="h-8 w-8 text-eco-earth opacity-50" />
                      </div>
                      <span className="text-sm font-medium">Coming Soon</span>
                      <span className="text-xs text-muted-foreground">Eco Badge</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Your Sustainability Network</CardTitle>
                <CardDescription>
                  Connect with neighbors and track community progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Community Features Coming Soon</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Soon you'll be able to connect with neighbors, join community challenges, 
                    and track collective progress toward sustainability goals.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Dashboard;
