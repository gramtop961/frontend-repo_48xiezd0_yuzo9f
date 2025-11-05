import React from 'react'
import { Mic, Languages, Shield, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Hands-free banking',
    desc: 'Speak naturally to check balances, send money, and pay bills.'
  },
  {
    icon: Languages,
    title: 'Multilingual by design',
    desc: 'Supports Hindi, Marathi, Tamil, and English out of the box.'
  },
  {
    icon: Shield,
    title: 'Secure & private',
    desc: 'Voice biometrics and JWT-backed sessions protect every action.'
  },
  {
    icon: Smartphone,
    title: 'Built for accessibility',
    desc: 'Clean, high-contrast UI for elderly and visually impaired users.'
  }
]

const FeaturesGrid = () => {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Simple. Inclusive. Secure.
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          FinBridge brings the power of AI voice to everyday banking tasks while
          keeping you in full control.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 hover:border-purple-300 hover:shadow-lg transition">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
