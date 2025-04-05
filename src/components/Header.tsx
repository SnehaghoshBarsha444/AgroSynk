
import { cn } from "@/lib/utils";
import { Sprout } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("w-full py-4 px-6 flex justify-between items-center bg-background/90 backdrop-blur-sm border-b", className)}>
      <div className="flex items-center gap-2">
        <Sprout className="h-8 w-8 text-agrogreen-500" />
        <h1 className="text-2xl font-bold text-agrogreen-800">AgroSynk</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">Multi-Agent AI for Sustainable Farming</span>
      </div>
    </header>
  );
};

export default Header;
