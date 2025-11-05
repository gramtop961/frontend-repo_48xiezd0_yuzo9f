import React from 'react'
import { Mic, Bot, ShieldCheck, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: Mic,
    title: 'Speak your request',
    desc: 'Say “Check my balance” or “Send ₹500 to Ramesh.”'
  },
  {
    icon: Bot,
    title: 'AI understands intent',
    desc: 'LLM-powered NLU interprets your command in your language.'
  },
  {
    icon: ShieldCheck,
    title: 'Verify securely',
    desc: 'Voice biometrics confirm your identity before any action.'
  },
  {
    icon: CheckCircle2,
    title: 'Execute & confirm',
    desc: 'FinBridge performs the action via secure APIs and confirms.'
  }
]

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-20 bg-gradient-to-b from-white to-purple-50/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          How it works
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          A safe, conversational flow from request to confirmation.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li key={title} className="relative rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-md">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-sm text-purple-700 font-semibold">Step {i + 1}</div>
              <h3 className="mt-1 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
