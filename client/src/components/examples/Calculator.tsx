import Calculator from '../Calculator'

export default function CalculatorExample() {
  return (
    <div className="p-8 bg-background">
      <Calculator onCalculate={(params) => console.log('Calculation params:', params)} />
    </div>
  )
}
