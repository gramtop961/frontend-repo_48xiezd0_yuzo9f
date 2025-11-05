import React from 'react'
import HeroSection from './components/HeroSection'
import FeaturesGrid from './components/FeaturesGrid'
import HowItWorks from './components/HowItWorks'
import SecurityCTA from './components/SecurityCTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-600 to-blue-600" />
            <span className="font-semibold">FinBridge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a className="hover:text-gray-900" href="#how">How it works</a>
            <a className="hover:text-gray-900" href="#demo">Security</a>
            <a className="hover:text-gray-900" href="#">Contact</a>
          </nav>
          <a href="#demo" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white text-sm px-4 py-2 font-medium hover:bg-black">
            Try Demo
          </a>
        </div>
      </header>

      <main>
        <HeroSection />
        <FeaturesGrid />
        <HowItWorks />
        <SecurityCTA />
      </main>

      <footer className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} FinBridge. Building inclusive, voice-first banking for Bharat.
          </p>
          <div className="text-sm text-gray-600">
            Tagline: “FinBridge — Banking with your Voice, in your Language.”
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
