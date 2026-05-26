import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'

const TIME_OPTIONS = [
  { value: '5', label: '5 minutes' },
  { value: '10', label: '10 minutes' },
  { value: '15', label: '15 minutes' },
  { value: '20', label: '20 minutes' },
  { value: '30', label: '30 minutes' },
]

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function TimeDropdown({ value, onChange }: Props) {
  const selected = TIME_OPTIONS.find(t => t.value === value)

  return (
    <div>
      <label className="block text-sm font-semibold text-[#3D3D3D] mb-1.5">
        Available time
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A8D8EA]">
            <span className={selected ? 'text-[#3D3D3D]' : 'text-[#8A8A8A]'}>
              {selected ? selected.label : 'How much time do you have?'}
            </span>
            <ChevronDownIcon className="h-5 w-5 text-[#8A8A8A]" aria-hidden="true" />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 w-full rounded-2xl bg-white shadow-lg border border-gray-100 py-1 focus:outline-none overflow-hidden">
            {TIME_OPTIONS.map(time => (
              <ListboxOption key={time.value} value={time.value}>
                {({ active, selected: isSelected }) => (
                  <div className={`flex items-center justify-between px-4 py-3 cursor-pointer text-[#3D3D3D] ${active ? 'bg-[#A8D8EA]/20' : ''}`}>
                    <span className={isSelected ? 'font-semibold' : ''}>{time.label}</span>
                    {isSelected && <CheckIcon className="h-4 w-4 text-[#A8D8EA]" />}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  )
}
