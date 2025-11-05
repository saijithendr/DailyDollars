import { Card } from "@/components/ui/card";
import { TrendingDown, TrendingUp } from "lucide-react";

interface ResultsPreviewProps {
  totalSpent: number;
  potentialValue: number;
  years: number;
}

export default function ResultsPreview({ totalSpent, potentialValue, years }: ResultsPreviewProps) {
  const difference = potentialValue - totalSpent;
  const percentageGain = totalSpent > 0 ? ((difference / totalSpent) * 100) : 0;

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-card/50">
      <div className="text-center mb-8">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">
          Your {years}-Year Projection
        </h3>
        <div className="text-6xl font-display font-bold text-primary mb-2" data-testid="text-potential-value">
          ${potentialValue.toLocaleString()}
        </div>
        <p className="text-sm text-muted-foreground">
          vs ${totalSpent.toLocaleString()} spent
        </p>
      </div>

      <div className="grid gap-4">
        <div className="flex items-center justify-between p-4 bg-destructive/10 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-destructive/20 rounded-lg">
              <TrendingDown className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Money Spent</p>
              <p className="text-xs text-muted-foreground">Total cash outflow</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-destructive" data-testid="text-total-spent">
            ${totalSpent.toLocaleString()}
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/20 rounded-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">If Invested</p>
              <p className="text-xs text-muted-foreground">With compound growth</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-primary">
            ${potentialValue.toLocaleString()}
          </div>
        </div>

        <div className="pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Opportunity Cost</span>
            <span className="text-xl font-bold text-foreground" data-testid="text-opportunity-cost">
              ${difference.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-muted-foreground">Potential Gain</span>
            <span className="text-lg font-semibold text-primary">
              +{percentageGain.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
