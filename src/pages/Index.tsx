
import { useState } from "react";
import Header from "@/components/Header";
import AgentNetwork from "@/components/AgentNetwork";
import WeatherForecast from "@/components/WeatherForecast";
import CropRecommendation from "@/components/CropRecommendation";
import SustainabilityMetrics from "@/components/SustainabilityMetrics";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Network, BarChart3, Leaf, Cloud } from "lucide-react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("network");
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-muted/50">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">AgroSynk Dashboard</h1>
          <p className="text-muted-foreground max-w-2xl">
            A multi-agent AI system for sustainable farming that integrates multiple data sources
            to provide optimal agricultural recommendations.
          </p>
        </div>
        
        <Tabs defaultValue="network" value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full md:w-[600px] grid-cols-4">
            <TabsTrigger value="network" className="flex items-center gap-2">
              <Network className="h-4 w-4" />
              <span className="hidden sm:inline">Agent Network</span>
            </TabsTrigger>
            <TabsTrigger value="weather" className="flex items-center gap-2">
              <Cloud className="h-4 w-4" />
              <span className="hidden sm:inline">Weather</span>
            </TabsTrigger>
            <TabsTrigger value="crops" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden sm:inline">Crop Planning</span>
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Metrics</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="network" className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Multi-Agent System Visualization</h2>
              <AgentNetwork />
            </div>
          </TabsContent>
          
          <TabsContent value="weather" className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Weather Analysis</h2>
              <WeatherForecast />
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Weather Agent Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Based on current patterns and historical data, our Weather Agent predicts:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Moderate rainfall expected in the next 10 days (ideal for newly planted crops)</li>
                  <li>Temperature trends indicate an early spring - consider early planting for certain crops</li>
                  <li>Soil moisture levels optimal for planting in the next 3-5 days</li>
                  <li>Low probability of extreme weather events in the next 30-day period</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="crops" className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Crop Planning</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CropRecommendation />
                <div className="space-y-6">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Expert Advisor Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      Recommended planting schedule based on soil conditions and weather predictions:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Begin soil preparation within 7 days</li>
                      <li>Plant soybeans in the north field by April 15th</li>
                      <li>Implement no-till techniques for the winter wheat plots</li>
                      <li>Consider crop rotation with sweet potatoes for pest management</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">Market Researcher Insights</h3>
                    <p className="text-muted-foreground mb-4">
                      Current market trends affecting recommended crops:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Soybean futures showing strong upward trend (+12% YoY)</li>
                      <li>Local demand for organic sweet potatoes increased by 23%</li>
                      <li>Government subsidies available for sustainable wheat farming</li>
                      <li>Consider futures contracts to lock in favorable prices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sustainability" className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-sm border">
              <h2 className="text-2xl font-semibold mb-6">Sustainability Metrics</h2>
              <SustainabilityMetrics />
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Sustainability Auditor Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Environmental impact assessment of current and proposed farming practices:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Carbon sequestration increased by 28% through cover cropping</li>
                  <li>Water usage optimization saves approximately 1.2 million gallons annually</li>
                  <li>Biodiversity markers indicate healthy ecosystem development</li>
                  <li>Eligible for environmental stewardship certification with current practices</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="w-full py-6 border-t bg-background/80 backdrop-blur-sm">
        <div className="container">
          <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-center text-base text-gray-400">
              © {currentYear} LakshyNiti. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
