import { CheckIcon } from '@heroicons/react/20/solid'

const ACTIVITIES = [
  { value: 'tummy-time', label: 'Tummy Time', emoji: '🍼' },
  { value: 'sensory', label: 'Sensory', emoji: '🌈' },
  { value: 'music', label: 'Music', emoji: '🎵' },
  { value: 'reading', label: 'Reading', emoji: '📖' },
  { value: 'bonding', label: 'Bonding', emoji: '🤗' },
]

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function ActivityChips({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#3D3D3D] mb-1.5">
        Activity type
      </label>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Activity type">
        {ACTIVITIES.map(activity => {
          const isSelected = value === activity.value
          return (
            <button
              key={activity.value}
              type="button"
              onClick={() => onChange(activity.value)}
              aria-pressed={isSelected}
              className={`
                flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-sm font-semibold
                transition-colors focus:outline-none focus:ring-2 focus:ring-[#A8D8EA] focus:ring-offset-1
                ${isSelected
                  ? 'bg-[#A8D8EA]/20 border-2 border-[#A8D8EA] text-[#3D3D3D]'
                  : 'bg-white border-2 border-gray-200 text-[#3D3D3D] hover:border-[#A8D8EA]/50'
                }
              `}
            >
              <span aria-hidden="true">{activity.emoji}</span>
              <span>{activity.label}</span>
              {isSelected && <CheckIcon className="h-3.5 w-3.5 text-[#A8D8EA] ml-0.5" aria-hidden="true" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
