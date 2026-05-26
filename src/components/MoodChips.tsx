import { CheckIcon } from '@heroicons/react/20/solid'

const MOODS = [
  { value: 'happy', label: 'Happy', emoji: '😊' },
  { value: 'fussy', label: 'Fussy', emoji: '😣' },
  { value: 'sleepy', label: 'Sleepy', emoji: '😴' },
  { value: 'curious', label: 'Curious', emoji: '🤔' },
  { value: 'calm', label: 'Calm', emoji: '😌' },
]

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function MoodChips({ value, onChange }: Props) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#3D3D3D] mb-1.5">
        Baby's mood
      </label>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Baby's mood">
        {MOODS.map(mood => {
          const isSelected = value === mood.value
          return (
            <button
              key={mood.value}
              type="button"
              onClick={() => onChange(mood.value)}
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
              <span aria-hidden="true">{mood.emoji}</span>
              <span>{mood.label}</span>
              {isSelected && <CheckIcon className="h-3.5 w-3.5 text-[#A8D8EA] ml-0.5" aria-hidden="true" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
