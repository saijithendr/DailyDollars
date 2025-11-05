import VisualizationSection from '../VisualizationSection'

export default function VisualizationSectionExample() {
  const mockData = Array.from({ length: 31 }, (_, i) => ({
    year: i,
    spent: i * 2590,
    invested: i === 0 ? 0 : Math.round(2590 * (((1 + 0.07) ** i - 1) / 0.07)),
  }));

  return (
    <div className="p-8 bg-background">
      <VisualizationSection data={mockData} maxYears={30} />
    </div>
  )
}
