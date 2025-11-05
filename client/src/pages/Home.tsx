import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Calculator, { CalculationParams } from "@/components/Calculator";
import ResultsPreview from "@/components/ResultsPreview";
import VisualizationSection from "@/components/VisualizationSection";
import ScenarioCard from "@/components/ScenarioCard";
import ComparisonSection from "@/components/ComparisonSection";
import { Coffee, Utensils, Tv, Car } from "lucide-react";

export default function Home() {
  const [params, setParams] = useState<CalculationParams>({
    dailyAmount: 5,
    frequency: 5,
    returnRate: 7,
    years: 30,
  });

  const calculateResults = (p: CalculationParams) => {
    const annualExpense = p.dailyAmount * p.frequency * 52;
    const totalSpent = annualExpense * p.years;
    
    const monthlyRate = p.returnRate / 100 / 12;
    const months = p.years * 12;
    const monthlyContribution = annualExpense / 12;
    
    const futureValue = monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    
    return {
      totalSpent: Math.round(totalSpent),
      potentialValue: Math.round(futureValue),
    };
  };

  const generateChartData = (p: CalculationParams) => {
    const annualExpense = p.dailyAmount * p.frequency * 52;
    const data = [];
    
    for (let year = 0; year <= p.years; year++) {
      const spent = annualExpense * year;
      
      let invested = 0;
      if (year > 0) {
        const monthlyRate = p.returnRate / 100 / 12;
        const months = year * 12;
        const monthlyContribution = annualExpense / 12;
        invested = monthlyContribution * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
      }
      
      data.push({
        year,
        spent: Math.round(spent),
        invested: Math.round(invested),
      });
    }
    
    return data;
  };

  const results = calculateResults(params);
  const chartData = generateChartData(params);

  const scenarios = [
    {
      icon: Coffee,
      title: "Daily Coffee",
      description: "Morning latte from your favorite cafe",
      dailyAmount: 5,
      frequency: 5,
      params: { dailyAmount: 5, frequency: 5, returnRate: 7, years: 30 },
    },
    {
      icon: Utensils,
      title: "Lunch Out",
      description: "Eating out instead of meal prepping",
      dailyAmount: 12,
      frequency: 5,
      params: { dailyAmount: 12, frequency: 5, returnRate: 7, years: 30 },
    },
    {
      icon: Tv,
      title: "Streaming Services",
      description: "Multiple subscription services",
      dailyAmount: 1.5,
      frequency: 7,
      params: { dailyAmount: 1.5, frequency: 7, returnRate: 7, years: 30 },
    },
    {
      icon: Car,
      title: "Daily Rideshare",
      description: "Instead of public transportation",
      dailyAmount: 15,
      frequency: 5,
      params: { dailyAmount: 15, frequency: 5, returnRate: 7, years: 30 },
    },
  ];

  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToCalculator();
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="calculator" className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Calculator onCalculate={setParams} />
            <ResultsPreview 
              totalSpent={results.totalSpent}
              potentialValue={results.potentialValue}
              years={params.years}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <VisualizationSection data={chartData} maxYears={params.years} />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-3">
              Try Popular Scenarios
            </h2>
            <p className="text-lg text-muted-foreground">
              See how common daily expenses add up over time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((scenario) => {
              const scenarioResults = calculateResults(scenario.params);
              return (
                <ScenarioCard
                  key={scenario.title}
                  icon={scenario.icon}
                  title={scenario.title}
                  description={scenario.description}
                  dailyAmount={scenario.dailyAmount}
                  frequency={scenario.frequency}
                  projectedValue={scenarioResults.potentialValue}
                  onTry={() => setParams(scenario.params)}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-3">
              The Shocking Truth
            </h2>
            <p className="text-lg text-muted-foreground">
              See the dramatic difference between spending and investing
            </p>
          </div>

          <ComparisonSection
            totalSpent={results.totalSpent}
            potentialValue={results.potentialValue}
            years={params.years}
          />
        </div>
      </section>

      <footer className="py-8 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          <p>What-If Financial Modeler - Visualize Your Financial Future</p>
          <p className="mt-2">Educational purposes only. Past performance doesn't guarantee future results.</p>
        </div>
      </footer>
    </div>
  );
}
