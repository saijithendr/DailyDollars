import ScenarioCard from '../ScenarioCard'
import { Coffee } from 'lucide-react'

export default function ScenarioCardExample() {
  return (
    <div className="p-8 bg-background max-w-sm">
      <ScenarioCard
        icon={Coffee}
        title="Daily Coffee"
        description="Morning latte from your favorite cafe"
        dailyAmount={5}
        frequency={5}
        projectedValue={47000}
        onTry={() => console.log('Daily Coffee scenario clicked')}
      />
    </div>
  )
}
