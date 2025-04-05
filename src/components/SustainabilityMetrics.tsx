
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Recycle, Droplet, Cloud, Sprout } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";

const carbonData = [
  { month: "Jan", carbon: 28 },
  { month: "Feb", carbon: 26 },
  { month: "Mar", carbon: 24 },
  { month: "Apr", carbon: 20 },
  { month: "May", carbon: 18 },
  { month: "Jun", carbon: 17 },
  { month: "Jul", carbon: 18 },
  { month: "Aug", carbon: 19 },
  { month: "Sep", carbon: 17 },
];

const waterData = [
  { month: "Jan", usage: 45 },
  { month: "Feb", usage: 42 },
  { month: "Mar", usage: 40 },
  { month: "Apr", usage: 37 },
  { month: "May", usage: 35 },
  { month: "Jun", usage: 32 },
  { month: "Jul", usage: 35 },
  { month: "Aug", usage: 37 },
  { month: "Sep", usage: 34 },
];

const SustainabilityMetrics = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Recycle className="h-5 w-5 text-agrogreen-500" />
          Sustainability Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Cloud className="h-5 w-5 text-agrogreen-500" />
              <h3 className="font-medium">Carbon Footprint</h3>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={carbonData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <defs>
                  <linearGradient id="colorCarbon" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4a944a" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4a944a" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.375rem' }}
                  formatter={(value) => [`${value} tons`, 'Carbon']}
                />
                <Area type="monotone" dataKey="carbon" stroke="#4a944a" fillOpacity={1} fill="url(#colorCarbon)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-sm text-center text-muted-foreground">
              <span className="text-agrogreen-600 font-medium">36% reduction</span> in carbon emissions
            </div>
          </div>
          
          <div className="border rounded-lg p-3">
            <div className="flex items-center gap-2 mb-2">
              <Droplet className="h-5 w-5 text-skyblue-500" />
              <h3 className="font-medium">Water Usage</h3>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <AreaChart data={waterData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <defs>
                  <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4a6494" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4a6494" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" tick={{ fontSize: 10 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '0.375rem' }}
                  formatter={(value) => [`${value}k gallons`, 'Usage']}
                />
                <Area type="monotone" dataKey="usage" stroke="#4a6494" fillOpacity={1} fill="url(#colorWater)" />
              </AreaChart>
            </ResponsiveContainer>
            <div className="mt-2 text-sm text-center text-muted-foreground">
              <span className="text-skyblue-600 font-medium">24% reduction</span> in water consumption
            </div>
          </div>
        </div>
        
        <div className="border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <Sprout className="h-5 w-5 text-earthbrown-500" />
            <h3 className="font-medium">Overall Sustainability Score</h3>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="w-full bg-muted rounded-full h-4 dark:bg-muted/40">
              <div
                className="bg-gradient-to-r from-agrogreen-500 to-agrogreen-300 h-4 rounded-full"
                style={{ width: "82%" }}
              ></div>
            </div>
            <span className="ml-4 text-lg font-bold">82%</span>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            Your farm ranks in the <span className="font-medium text-agrogreen-600">top 15%</span> of sustainable operations in your region.
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityMetrics;
