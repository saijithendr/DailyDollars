import { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  const [count, setCount] = useState(0);
  const target = 47000;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <TrendingUp className="w-4 h-4 text-white" />
          <span className="text-sm font-medium text-white">Free Financial Calculator</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
          What's Your $5 Coffee<br />Really Costing You?
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Discover the hidden opportunity cost of daily expenses through the power of compound interest
        </p>
        
        <div className="inline-block">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl px-8 py-6">
            <div className="text-6xl md:text-8xl font-display font-bold text-white mb-2">
              ${count.toLocaleString()}
            </div>
            <p className="text-white/80 text-sm md:text-base">
              Over 30 years at 7% annual return
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
