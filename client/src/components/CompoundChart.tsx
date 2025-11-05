import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface CompoundChartProps {
  data: {
    year: number;
    spent: number;
    invested: number;
  }[];
}

export default function CompoundChart({ data }: CompoundChartProps) {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="year" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--popover))',
              border: '1px solid hsl(var(--popover-border))',
              borderRadius: '8px',
              fontSize: '14px'
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
            labelFormatter={(label) => `Year ${label}`}
          />
          <Legend 
            wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }}
            iconType="circle"
          />
          <Area
            type="monotone"
            dataKey="spent"
            name="Money Spent"
            stroke="hsl(var(--destructive))"
            strokeWidth={2}
            fill="url(#colorSpent)"
          />
          <Area
            type="monotone"
            dataKey="invested"
            name="If Invested"
            stroke="hsl(var(--primary))"
            strokeWidth={3}
            fill="url(#colorInvested)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
