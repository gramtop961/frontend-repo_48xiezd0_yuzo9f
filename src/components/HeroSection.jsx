import React from 'react'
import Spline from '@splinetool/react-spline'
import { Mic, Languages, Shield } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-3 py-1">
            <Mic className="h-4 w-4" /> Voice-first Banking
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
            FinBridge — Banking with your Voice, in your Language
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-600">
            A multilingual AI voice assistant that makes digital banking simple,
            secure, and accessible for everyone in India.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition"
            >
              Try a Voice Demo
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-800 hover:bg-gray-50 transition"
            >
              Learn how it works
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2"><Languages className="h-4 w-4" /> Hindi • Marathi • Tamil • English</div>
            <div className="hidden sm:flex items-center gap-2"><Shield className="h-4 w-4" /> Voice biometrics & JWT security</div>
          </div>
        </div>

        <div className="hidden lg:flex" />
      </div>
    </section>
  )
}

export default HeroSection
