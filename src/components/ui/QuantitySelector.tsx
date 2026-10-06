import { Minus, Plus } from 'lucide-react'

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number
  onChange: (value: number) => void
  min?: number
  max?: number
}) {
  return (
    <div className="inline-flex h-11 items-center overflow-hidden rounded-md border border-line">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="grid h-11 w-11 place-items-center text-navy hover:bg-surface"
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="min-w-10 text-center text-sm font-semibold">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="grid h-11 w-11 place-items-center text-navy hover:bg-surface"
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
