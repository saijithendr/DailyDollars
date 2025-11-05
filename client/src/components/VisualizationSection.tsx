import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import CompoundChart from "./CompoundChart";
import { Badge } from "@/components/ui/badge";

interface VisualizationSectionProps {
  data: {
    year: number;
    spent: number;
    invested: number;
  }[];
  maxYears: number;
}

export default function VisualizationSection({ data, maxYears }: VisualizationSectionProps) {
  const [selectedYear, setSelectedYear] = useState(maxYears);
  
  const filteredData = data.filter(d => d.year <= selectedYear);
  const currentData = data[selectedYear] || data[data.length - 1];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-display font-bold mb-3">
          The Power of Compound Growth
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Watch how your money could grow over time through the magic of compound interest
        </p>
      </div>

      <Card className="p-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Timeline Projection</h3>
            <Badge variant="secondary" className="text-base px-4 py-1">
              Year {selectedYear}
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-destructive/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">Total Spent</p>
              <p className="text-3xl font-bold text-destructive" data-testid="text-chart-spent">
                ${currentData.spent.toLocaleString()}
              </p>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">If Invested</p>
              <p className="text-3xl font-bold text-primary" data-testid="text-chart-invested">
                ${currentData.invested.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <CompoundChart data={filteredData} />

        <div className="mt-8 space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Adjust Timeline</label>
            <span className="text-sm text-muted-foreground">{selectedYear} {selectedYear === 1 ? 'year' : 'years'}</span>
          </div>
          <Slider
            data-testid="slider-timeline"
            value={[selectedYear]}
            onValueChange={([value]) => setSelectedYear(value)}
            min={1}
            max={maxYears}
            step={1}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 year</span>
            <span>{maxYears} years</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
