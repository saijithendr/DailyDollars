import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp, Home, Plane, Car, PiggyBank } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ComparisonSectionProps {
  totalSpent: number;
  potentialValue: number;
  years: number;
}

interface Milestone {
  icon: typeof Home;
  label: string;
  amount: number;
  achieved: boolean;
}

export default function ComparisonSection({ totalSpent, potentialValue, years }: ComparisonSectionProps) {
  const milestones: Milestone[] = [
    { icon: PiggyBank, label: "Emergency Fund", amount: 10000, achieved: potentialValue >= 10000 },
    { icon: Plane, label: "Dream Vacation", amount: 15000, achieved: potentialValue >= 15000 },
    { icon: Car, label: "Car Down Payment", amount: 30000, achieved: potentialValue >= 30000 },
    { icon: Home, label: "Home Down Payment", amount: 50000, achieved: potentialValue >= 50000 },
  ];

  const achievedMilestones = milestones.filter(m => m.achieved);

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-8 bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-destructive/20 rounded-lg">
            <TrendingDown className="w-6 h-6 text-destructive" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">Money Spent</h3>
            <p className="text-sm text-muted-foreground">Total cash outflow over {years} years</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-6xl font-display font-bold text-destructive mb-4" data-testid="text-comparison-spent">
            ${totalSpent.toLocaleString()}
          </div>
          <p className="text-muted-foreground">
            This money is gone forever, providing only temporary satisfaction.
          </p>
        </div>

        <div className="space-y-3 pt-6 border-t border-destructive/20">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Daily average</span>
            <span className="font-semibold">${(totalSpent / (years * 365)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Monthly average</span>
            <span className="font-semibold">${(totalSpent / (years * 12)).toFixed(0)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Annual average</span>
            <span className="font-semibold">${(totalSpent / years).toFixed(0)}</span>
          </div>
        </div>
      </Card>

      <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-primary/20 rounded-lg">
            <TrendingUp className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">What It Could Have Been</h3>
            <p className="text-sm text-muted-foreground">If invested with compound growth</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="text-6xl font-display font-bold text-primary mb-4" data-testid="text-comparison-invested">
            ${potentialValue.toLocaleString()}
          </div>
          <p className="text-muted-foreground">
            Your money working for you, growing exponentially over time.
          </p>
        </div>

        {achievedMilestones.length > 0 && (
          <div className="space-y-3 pt-6 border-t border-primary/20">
            <p className="text-sm font-medium text-foreground mb-3">Milestones Achieved:</p>
            <div className="flex flex-wrap gap-2">
              {achievedMilestones.map((milestone) => {
                const Icon = milestone.icon;
                return (
                  <Badge 
                    key={milestone.label} 
                    variant="secondary" 
                    className="px-3 py-2 bg-primary/10 text-primary border-primary/20"
                  >
                    <Icon className="w-3 h-3 mr-1" />
                    {milestone.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}
