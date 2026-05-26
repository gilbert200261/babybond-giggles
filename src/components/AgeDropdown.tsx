import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { ChevronDownIcon, CheckIcon } from '@heroicons/react/20/solid'

const AGE_OPTIONS = [
  { value: '0-3', label: '0–3 months' },
  { value: '3-6', label: '3–6 months' },
  { value: '6-9', label: '6–9 months' },
  { value: '9-12', label: '9–12 months' },
]

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function AgeDropdown({ value, onChange }: Props) {
  const selected = AGE_OPTIONS.find(a => a.value === value)

  return (
    <div>
      <label className="block text-sm font-semibold text-[#3D3D3D] mb-1.5">
        Baby's age
      </label>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className="w-full flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A8D8EA]">
            <span className={selected ? 'text-[#3D3D3D]' : 'text-[#8A8A8A]'}>
              {selected ? selected.label : 'Select age range'}
            </span>
            <ChevronDownIcon className="h-5 w-5 text-[#8A8A8A]" aria-hidden="true" />
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 w-full rounded-2xl bg-white shadow-lg border border-gray-100 py-1 focus:outline-none overflow-hidden">
            {AGE_OPTIONS.map(age => (
              <ListboxOption key={age.value} value={age.value}>
                {({ active, selected: isSelected }) => (
                  <div className={`flex items-center justify-between px-4 py-3 cursor-pointer text-[#3D3D3D] ${active ? 'bg-[#A8D8EA]/20' : ''}`}>
                    <span className={isSelected ? 'font-semibold' : ''}>{age.label}</span>
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
