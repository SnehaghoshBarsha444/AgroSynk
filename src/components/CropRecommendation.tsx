
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplets, Coins, TrendingUp } from "lucide-react";

interface CropProps {
  name: string;
  sustainability: number;
  waterEfficiency: number;
  profitPotential: number;
  marketDemand: number;
  tags: string[];
}

const recommendedCrops: CropProps[] = [
  {
    name: "Soybeans",
    sustainability: 85,
    waterEfficiency: 70,
    profitPotential: 75,
    marketDemand: 90,
    tags: ["nitrogen-fixing", "low-tillage"],
  },
  {
    name: "Winter Wheat",
    sustainability: 80,
    waterEfficiency: 85,
    profitPotential: 65,
    marketDemand: 75,
    tags: ["cover-crop", "erosion-control"],
  },
  {
    name: "Sweet Potatoes",
    sustainability: 90,
    waterEfficiency: 80,
    profitPotential: 70,
    marketDemand: 65,
    tags: ["pest-resistant", "nutrient-rich"],
  }
];

const CropRecommendation = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-agrogreen-500" />
          Recommended Crops
        </CardTitle>
        <CardDescription>
          Based on soil conditions, market trends, and sustainability metrics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendedCrops.map((crop) => (
            <div key={crop.name} className="border rounded-lg p-3 bg-card">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">{crop.name}</h3>
                <div className="flex gap-1">
                  {crop.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="space-y-2 mt-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-agrogreen-500" />
                    <span className="text-xs">Sustainability</span>
                  </div>
                  <Progress value={crop.sustainability} className="h-2 w-24" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Droplets className="h-4 w-4 mr-2 text-skyblue-500" />
                    <span className="text-xs">Water Efficiency</span>
                  </div>
                  <Progress value={crop.waterEfficiency} className="h-2 w-24" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Coins className="h-4 w-4 mr-2 text-earthbrown-500" />
                    <span className="text-xs">Profit Potential</span>
                  </div>
                  <Progress value={crop.profitPotential} className="h-2 w-24" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span className="text-xs">Market Demand</span>
                  </div>
                  <Progress value={crop.marketDemand} className="h-2 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CropRecommendation;
