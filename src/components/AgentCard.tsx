
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface AgentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  status?: "idle" | "processing" | "completed";
  children?: ReactNode;
  className?: string;
}

const AgentCard = ({
  title,
  description,
  icon: Icon,
  color,
  status = "idle",
  children,
  className,
}: AgentCardProps) => {
  return (
    <Card className={cn("overflow-hidden transition-all duration-300 agent-glow", {
      "border-agrogreen-300": status === "processing",
      "border-skyblue-300": status === "completed"
    }, className)}>
      <CardHeader className={cn("pb-2", color)}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5" />
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
          {status && (
            <Badge variant="outline" className={cn("capitalize", {
              "bg-muted text-muted-foreground": status === "idle",
              "bg-agrogreen-100 text-agrogreen-700 border-agrogreen-200": status === "processing",
              "bg-skyblue-100 text-skyblue-700 border-skyblue-200": status === "completed"
            })}>
              {status}
            </Badge>
          )}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default AgentCard;
