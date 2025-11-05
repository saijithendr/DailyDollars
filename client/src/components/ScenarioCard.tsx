import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ScenarioCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dailyAmount: number;
  frequency: number;
  projectedValue: number;
  onTry: () => void;
}

export default function ScenarioCard({
  icon: Icon,
  title,
  description,
  dailyAmount,
  frequency,
  projectedValue,
  onTry,
}: ScenarioCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all cursor-pointer" onClick={onTry}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Daily cost:</span>
          <span className="font-semibold">${dailyAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Frequency:</span>
          <span className="font-semibold">{frequency}x per week</span>
        </div>
      </div>

      <div className="pt-4 border-t border-border mb-4">
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-1">30-year potential</p>
          <p className="text-3xl font-display font-bold text-primary" data-testid={`text-scenario-value-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            ${projectedValue.toLocaleString()}
          </p>
        </div>
      </div>

      <Button 
        variant="outline" 
        className="w-full" 
        data-testid={`button-try-${title.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={(e) => {
          e.stopPropagation();
          onTry();
        }}
      >
        Try This Scenario
      </Button>
    </Card>
  );
}
