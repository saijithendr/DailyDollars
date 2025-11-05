import ResultsPreview from '../ResultsPreview'

export default function ResultsPreviewExample() {
  return (
    <div className="p-8 bg-background">
      <ResultsPreview 
        totalSpent={38700} 
        potentialValue={102500} 
        years={30}
      />
    </div>
  )
}
