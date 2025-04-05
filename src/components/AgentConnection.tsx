
import { cn } from "@/lib/utils";

interface AgentConnectionProps {
  from: string;
  to: string;
  active?: boolean;
  direction?: "right" | "left" | "down" | "up";
  className?: string;
}

const AgentConnection = ({
  from,
  to,
  active = false,
  direction = "right",
  className,
}: AgentConnectionProps) => {
  return (
    <div
      className={cn(
        "data-flow-line border-2 border-dashed transition-all duration-300",
        {
          "border-muted": !active,
          "border-agrogreen-400": active,
        },
        className
      )}
      data-from={from}
      data-to={to}
    >
      {/* Content will be animated through CSS */}
    </div>
  );
};

export default AgentConnection;
