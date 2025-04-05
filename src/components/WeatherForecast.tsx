
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react";
import { ReactElement } from "react";

interface WeatherDay {
  day: string;
  temp: number;
  condition: "sunny" | "cloudy" | "rainy";
  precipitation: number;
  humidity: number;
}

const weatherIcons: Record<string, ReactElement> = {
  sunny: <Sun className="h-8 w-8 text-orange-400" />,
  cloudy: <Cloud className="h-8 w-8 text-gray-400" />,
  rainy: <CloudRain className="h-8 w-8 text-blue-400" />
};

const forecast: WeatherDay[] = [
  { day: "Today", temp: 24, condition: "sunny", precipitation: 0, humidity: 45 },
  { day: "Tomorrow", temp: 22, condition: "cloudy", precipitation: 20, humidity: 65 },
  { day: "Wed", temp: 19, condition: "rainy", precipitation: 80, humidity: 85 },
  { day: "Thu", temp: 20, condition: "cloudy", precipitation: 30, humidity: 70 },
  { day: "Fri", temp: 23, condition: "sunny", precipitation: 0, humidity: 50 },
];

const WeatherForecast = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2">
          <Cloud className="h-5 w-5 text-skyblue-500" />
          Weather Forecast
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2">
          {forecast.map((day) => (
            <div key={day.day} className="flex flex-col items-center p-2 rounded-md bg-muted/50">
              <span className="text-sm font-medium">{day.day}</span>
              <div className="my-2">{weatherIcons[day.condition]}</div>
              <div className="flex items-center">
                <Thermometer className="h-4 w-4 mr-1 text-orange-500" />
                <span className="font-medium">{day.temp}°C</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {day.precipitation}% rain
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherForecast;
