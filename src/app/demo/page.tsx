'use client'

import { useState } from 'react'
import SocialsPageFullscreenDynamic from '../page-fullscreen-dynamic'
import TitlePage from '../page-title'

export default function DemoPage() {
  const [mode, setMode] = useState<'socials' | 'title'>('socials')

  return (
    <div className="relative">
      {/* Mode Switcher */}
      <div className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur rounded-lg p-2 flex gap-2">
        <button
          onClick={() => setMode('socials')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            mode === 'socials' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Socials
        </button>
        <button
          onClick={() => setMode('title')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            mode === 'title' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Title
        </button>
      </div>

      {/* Version Info */}
      <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur rounded-lg p-3 text-white text-sm max-w-[250px]">
        <div className="font-medium mb-1">
          {mode === 'socials' ? 'Socials Page' : 'Title Page'}
        </div>
        <div className="text-gray-300 text-xs">
          {mode === 'socials' 
            ? 'Dynamic page with social buttons and logo. Smart fullscreen/letterbox switching.' 
            : 'Simple static page with centered logo. Same responsive behavior.'
          }
        </div>
      </div>

      {/* Render selected page */}
      {mode === 'socials' ? <SocialsPageFullscreenDynamic /> : <TitlePage />}
    </div>
  )
}