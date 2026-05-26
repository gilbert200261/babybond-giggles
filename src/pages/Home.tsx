import { useState } from 'react'
import AgeDropdown from '../components/AgeDropdown'
import TimeDropdown from '../components/TimeDropdown'
import MoodChips from '../components/MoodChips'
import ActivityChips from '../components/ActivityChips'
import ActivityCard from '../components/ActivityCard'
import { SparklesIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { pickActivity, type Activity } from '../data/mockActivities'

interface FormState {
  age: string
  mood: string
  time: string
  activityType: string
}

const LABELS: Record<keyof FormState, string> = {
  age: 'baby\'s age',
  mood: 'baby\'s mood',
  time: 'available time',
  activityType: 'activity type',
}

export default function Home() {
  const [form, setForm] = useState<FormState>({
    age: '',
    mood: '',
    time: '',
    activityType: '',
  })
  const [validationError, setValidationError] = useState('')
  const [activity, setActivity] = useState<Activity | null>(null)

  function getMissingFields(): string[] {
    return (Object.keys(form) as (keyof FormState)[])
      .filter(key => !form[key])
      .map(key => LABELS[key])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const missing = getMissingFields()
    if (missing.length > 0) {
      setValidationError(`Please select your ${missing.join(', ')} before generating an idea.`)
      return
    }
    setValidationError('')
    setActivity(pickActivity(form.age, form.activityType))
  }

  function handleReset() {
    setActivity(null)
    setValidationError('')
  }

  if (activity) {
    return (
      <main className="mx-auto max-w-lg px-4 py-8">
        <ActivityCard activity={activity} onReset={handleReset} />
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-lg px-4 py-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
        <AgeDropdown
          value={form.age}
          onChange={age => { setValidationError(''); setForm(f => ({ ...f, age })) }}
        />

        <MoodChips
          value={form.mood}
          onChange={mood => { setValidationError(''); setForm(f => ({ ...f, mood })) }}
        />

        <TimeDropdown
          value={form.time}
          onChange={time => { setValidationError(''); setForm(f => ({ ...f, time })) }}
        />

        <ActivityChips
          value={form.activityType}
          onChange={activityType => { setValidationError(''); setForm(f => ({ ...f, activityType })) }}
        />

        {validationError && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-2xl bg-[#F9C0CB]/30 border border-[#F9C0CB] px-4 py-3 text-sm text-[#3D3D3D]"
          >
            <ExclamationCircleIcon className="h-5 w-5 text-[#c0607a] flex-shrink-0 mt-0.5" aria-hidden="true" />
            {validationError}
          </div>
        )}

        <button
          type="submit"
          className="mt-2 flex items-center justify-center gap-2 w-full rounded-2xl px-6 py-4
            bg-[#A8D8EA] text-white text-base font-bold tracking-wide shadow-sm
            hover:opacity-90 transition-opacity cursor-pointer"
        >
          <SparklesIcon className="h-5 w-5" aria-hidden="true" />
          Get Activity Idea
        </button>
      </form>
    </main>
  )
}
