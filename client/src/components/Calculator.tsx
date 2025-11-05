import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, TrendingUp, Repeat } from "lucide-react";

interface CalculatorProps {
  onCalculate: (params: CalculationParams) => void;
}

export interface CalculationParams {
  dailyAmount: number;
  frequency: number;
  returnRate: number;
  years: number;
}

export default function Calculator({ onCalculate }: CalculatorProps) {
  const [dailyAmount, setDailyAmount] = useState(5);
  const [frequency, setFrequency] = useState(5);
  const [returnRate, setReturnRate] = useState(7);
  const [years, setYears] = useState(30);

  const handleChange = (field: keyof CalculationParams, value: number) => {
    const updates = {
      dailyAmount,
      frequency,
      returnRate,
      years,
      [field]: value,
    };
    
    if (field === 'dailyAmount') setDailyAmount(value);
    if (field === 'frequency') setFrequency(value);
    if (field === 'returnRate') setReturnRate(value);
    if (field === 'years') setYears(value);
    
    onCalculate(updates);
  };

  return (
    <Card className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Scenario</h2>
      
      <div className="space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-muted-foreground" />
            <Label htmlFor="daily-amount" className="text-sm font-medium">Daily Expense</Label>
          </div>
          <div className="flex items-center gap-4">
            <Input
              id="daily-amount"
              data-testid="input-daily-amount"
              type="number"
              value={dailyAmount}
              onChange={(e) => handleChange('dailyAmount', parseFloat(e.target.value) || 0)}
              className="text-lg font-semibold"
              min={0}
              step={0.5}
            />
            <span className="text-2xl font-bold text-primary">${dailyAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Repeat className="w-4 h-4 text-muted-foreground" />
              <Label className="text-sm font-medium">Days per Week</Label>
            </div>
            <span className="text-lg font-semibold text-primary">{frequency}</span>
          </div>
          <Slider
            data-testid="slider-frequency"
            value={[frequency]}
            onValueChange={([value]) => handleChange('frequency', value)}
            min={1}
            max={7}
            step={1}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Once</span>
            <span>Daily</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-muted-foreground" />
              <Label className="text-sm font-medium">Expected Annual Return</Label>
            </div>
            <span className="text-lg font-semibold text-primary">{returnRate}%</span>
          </div>
          <Slider
            data-testid="slider-return-rate"
            value={[returnRate]}
            onValueChange={([value]) => handleChange('returnRate', value)}
            min={1}
            max={15}
            step={0.5}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Conservative (1%)</span>
            <span>Aggressive (15%)</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <Label className="text-sm font-medium">Time Horizon</Label>
            </div>
            <span className="text-lg font-semibold text-primary">{years} years</span>
          </div>
          <Slider
            data-testid="slider-years"
            value={[years]}
            onValueChange={([value]) => handleChange('years', value)}
            min={1}
            max={40}
            step={1}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>1 year</span>
            <span>40 years</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
