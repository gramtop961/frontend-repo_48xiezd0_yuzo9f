import React from 'react'
import { ShieldLock, LockKeyhole, Sparkles } from 'lucide-react'

const SecurityCTA = () => {
  return (
    <section id="demo" className="relative py-20">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 md:p-14">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <ShieldLock className="h-4 w-4" /> Secure by design
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold leading-snug">
                Voice biometrics, JWT sessions, and audit trails
              </h3>
              <p className="mt-3 text-white/90">
                Every interaction is authenticated and encrypted. Your data never
                leaves secure boundaries, and all actions are transparently logged.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-white/90">
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1"><LockKeyhole className="h-4 w-4" /> End-to-end encryption</div>
                <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1"><Sparkles className="h-4 w-4" /> AI assist, human control</div>
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center justify-center rounded-lg bg-white text-purple-700 px-6 py-3 font-semibold shadow-md hover:shadow-lg transition">
                  Preview Voice Flow
                </button>
              </div>
            </div>

            <div className="relative min-h-[280px] lg:min-h-full">
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.35),transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecurityCTA
