import ComparisonSection from '../ComparisonSection'

export default function ComparisonSectionExample() {
  return (
    <div className="p-8 bg-background">
      <ComparisonSection 
        totalSpent={38700}
        potentialValue={102500}
        years={30}
      />
    </div>
  )
}
