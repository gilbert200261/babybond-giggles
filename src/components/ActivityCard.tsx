import type { Activity } from '../data/mockActivities'
import {
  ShieldCheckIcon,
  LightBulbIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid'

interface Props {
  activity: Activity
  onReset: () => void
}

export default function ActivityCard({ activity, onReset }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {/* Title */}
      <div className="rounded-2xl bg-[#A8D8EA]/20 border border-[#A8D8EA] px-5 py-4 shadow-sm">
        <h2 className="text-xl font-extrabold text-[#3D3D3D]">{activity.name}</h2>
      </div>

      {/* Supplies */}
      <section className="rounded-2xl bg-white border border-gray-100 px-5 py-4 shadow-sm">
        <h3 className="text-sm font-bold text-[#8A8A8A] uppercase tracking-wide mb-2">
          What you'll need
        </h3>
        <ul className="flex flex-col gap-1">
          {activity.supplies.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#3D3D3D] text-sm">
              <span className="mt-0.5 text-[#A8D8EA]">•</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="rounded-2xl bg-white border border-gray-100 px-5 py-4 shadow-sm">
        <h3 className="text-sm font-bold text-[#8A8A8A] uppercase tracking-wide mb-3">
          How to do it
        </h3>
        <ol className="flex flex-col gap-3">
          {activity.instructions.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-[#3D3D3D] text-sm">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A8D8EA]/30 text-[#3D3D3D] text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Learning benefit */}
      <section className="rounded-2xl bg-[#FFF3B0] border border-[#FFF3B0] px-5 py-4 shadow-sm">
        <div className="flex items-start gap-2">
          <LightBulbIcon className="h-5 w-5 text-[#b8a000] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-sm font-bold text-[#3D3D3D] mb-1">Learning benefit</h3>
            <p className="text-sm text-[#3D3D3D]">{activity.learningBenefit}</p>
          </div>
        </div>
      </section>

      {/* Safety reminder */}
      <section className="rounded-2xl bg-[#A8D8A8]/30 border border-[#A8D8A8] px-5 py-4 shadow-sm">
        <div className="flex items-start gap-2">
          <ShieldCheckIcon className="h-5 w-5 text-[#3d8a3d] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="text-sm font-bold text-[#3D3D3D] mb-1">Safety reminder</h3>
            <p className="text-sm text-[#3D3D3D]">{activity.safetyReminder}</p>
          </div>
        </div>
      </section>

      {/* Try another button */}
      <button
        type="button"
        onClick={onReset}
        className="flex items-center justify-center gap-2 w-full rounded-2xl px-6 py-4 mt-2
          bg-white border-2 border-[#A8D8EA] text-[#3D3D3D] text-base font-bold
          hover:bg-[#A8D8EA]/10 transition-colors shadow-sm"
      >
        <ArrowPathIcon className="h-5 w-5 text-[#A8D8EA]" aria-hidden="true" />
        Try a different activity
      </button>
    </div>
  )
}
