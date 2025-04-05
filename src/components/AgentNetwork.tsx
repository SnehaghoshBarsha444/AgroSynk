
import { useState } from "react";
import AgentCard from "./AgentCard";
import AgentConnection from "./AgentConnection";
import { User, Cloud, BadgePlus, BarChart3, Recycle } from "lucide-react";

interface AgentStatus {
  farmer: "idle" | "processing" | "completed";
  weather: "idle" | "processing" | "completed";
  expert: "idle" | "processing" | "completed";
  market: "idle" | "processing" | "completed";
  sustainability: "idle" | "processing" | "completed";
}

const AgentNetwork = () => {
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [agentStatus, setAgentStatus] = useState<AgentStatus>({
    farmer: "processing",
    weather: "idle",
    expert: "idle",
    market: "idle",
    sustainability: "idle",
  });

  // Simulate agent communication
  const simulateAgentFlow = () => {
    // Farmer -> Weather
    setTimeout(() => {
      setActiveConnections(prev => [...prev, "farmer-weather"]);
      setAgentStatus(prev => ({ ...prev, weather: "processing" }));
    }, 2000);

    // Weather -> Expert
    setTimeout(() => {
      setAgentStatus(prev => ({ ...prev, weather: "completed" }));
      setActiveConnections(prev => [...prev, "weather-expert"]);
      setAgentStatus(prev => ({ ...prev, expert: "processing" }));
    }, 5000);

    // Expert -> Market
    setTimeout(() => {
      setAgentStatus(prev => ({ ...prev, expert: "completed" }));
      setActiveConnections(prev => [...prev, "expert-market"]);
      setAgentStatus(prev => ({ ...prev, market: "processing" }));
    }, 8000);

    // Market -> Sustainability
    setTimeout(() => {
      setAgentStatus(prev => ({ ...prev, market: "completed" }));
      setActiveConnections(prev => [...prev, "market-sustainability"]);
      setAgentStatus(prev => ({ ...prev, sustainability: "processing" }));
    }, 11000);

    // Sustainability -> Farmer
    setTimeout(() => {
      setAgentStatus(prev => ({ ...prev, sustainability: "completed" }));
      setActiveConnections(prev => [...prev, "sustainability-farmer"]);
      setAgentStatus(prev => ({ ...prev, farmer: "completed" }));
    }, 14000);
  };

  // Start the simulation when component mounts
  useState(() => {
    simulateAgentFlow();
  });

  return (
    <div className="relative">
      {/* Agent Cards */}
      <div className="grid grid-cols-3 gap-4">
        <AgentCard
          title="Farmer Agent"
          description="Collects data and interfaces with the system"
          icon={User}
          color="bg-agrogreen-50"
          status={agentStatus.farmer}
          className="col-start-2"
        >
          <div className="text-sm">
            <p>Land size: <span className="font-medium">120 acres</span></p>
            <p>Soil type: <span className="font-medium">Sandy loam</span></p>
            <p>Current crop: <span className="font-medium">Corn</span></p>
          </div>
        </AgentCard>

        <AgentCard
          title="Weather Agent"
          description="Analyses local climate patterns"
          icon={Cloud}
          color="bg-skyblue-50"
          status={agentStatus.weather}
          className="col-start-1 row-start-2"
        >
          <div className="text-sm">
            <p>Average temperature: <span className="font-medium">24°C</span></p>
            <p>Precipitation outlook: <span className="font-medium">Moderate</span></p>
            <p>Risk of extreme events: <span className="font-medium">Low</span></p>
          </div>
        </AgentCard>

        <AgentCard
          title="Expert Advisor"
          description="Agricultural best practices"
          icon={BadgePlus}
          color="bg-agrogreen-50"
          status={agentStatus.expert}
          className="col-start-2 row-start-3"
        >
          <div className="text-sm">
            <p>Sustainable methods: <span className="font-medium">Crop rotation</span></p>
            <p>Pest management: <span className="font-medium">Integrated approach</span></p>
            <p>Soil health: <span className="font-medium">Cover crops recommended</span></p>
          </div>
        </AgentCard>

        <AgentCard
          title="Market Researcher"
          description="Price trends and demand forecasts"
          icon={BarChart3}
          color="bg-earthbrown-50"
          status={agentStatus.market}
          className="col-start-3 row-start-2"
        >
          <div className="text-sm">
            <p>Highest demand: <span className="font-medium">Soybeans</span></p>
            <p>Price stability: <span className="font-medium">High</span></p>
            <p>Local market growth: <span className="font-medium">12%</span></p>
          </div>
        </AgentCard>

        <AgentCard
          title="Sustainability Auditor"
          description="Environmental impact assessment"
          icon={Recycle}
          color="bg-agrogreen-50"
          status={agentStatus.sustainability}
          className="col-start-2 row-start-4"
        >
          <div className="text-sm">
            <p>Carbon footprint: <span className="font-medium">Reduced by 36%</span></p>
            <p>Water conservation: <span className="font-medium">Efficient</span></p>
            <p>Biodiversity impact: <span className="font-medium">Positive</span></p>
          </div>
        </AgentCard>
      </div>

      {/* Agent Connections */}
      <AgentConnection 
        from="farmer" 
        to="weather" 
        active={activeConnections.includes("farmer-weather")} 
        className="absolute top-[85px] left-[160px] w-[90px] h-[2px] transform -rotate-45"
      />
      
      <AgentConnection 
        from="weather" 
        to="expert" 
        active={activeConnections.includes("weather-expert")} 
        className="absolute top-[225px] left-[160px] w-[90px] h-[2px] transform rotate-45"
      />
      
      <AgentConnection 
        from="expert" 
        to="market" 
        active={activeConnections.includes("expert-market")} 
        className="absolute top-[225px] right-[160px] w-[90px] h-[2px] transform -rotate-45"
      />
      
      <AgentConnection 
        from="market" 
        to="sustainability" 
        active={activeConnections.includes("market-sustainability")} 
        className="absolute bottom-[225px] right-[160px] w-[90px] h-[2px] transform rotate-45"
      />
      
      <AgentConnection 
        from="sustainability" 
        to="farmer" 
        active={activeConnections.includes("sustainability-farmer")} 
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[85px] w-[2px] h-[90px]"
      />
    </div>
  );
};

export default AgentNetwork;
