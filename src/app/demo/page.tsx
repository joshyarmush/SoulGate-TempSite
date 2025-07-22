'use client'

import { useState } from 'react'
import SocialsPageLetterbox from '../page-letterbox'
import SocialsPageFullscreen from '../page-fullscreen'

export default function DemoPage() {
  const [mode, setMode] = useState<'letterbox' | 'fullscreen'>('letterbox')

  return (
    <div className="relative">
      {/* Mode Switcher */}
      <div className="fixed top-4 left-4 z-50 bg-black/80 backdrop-blur rounded-lg p-2 flex gap-2">
        <button
          onClick={() => setMode('letterbox')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            mode === 'letterbox' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Letterbox
        </button>
        <button
          onClick={() => setMode('fullscreen')}
          className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
            mode === 'fullscreen' 
              ? 'bg-blue-500 text-white' 
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          Fullscreen
        </button>
      </div>

      {/* Version Info */}
      <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur rounded-lg p-3 text-white text-sm max-w-[250px]">
        <div className="font-medium mb-1">
          {mode === 'letterbox' ? 'Letterbox Mode' : 'Fullscreen Mode'}
        </div>
        <div className="text-gray-300 text-xs">
          {mode === 'letterbox' 
            ? 'Shows complete image with dark borders when needed. Maintains aspect ratio.' 
            : 'Fills entire screen. May crop parts of the image on different screen ratios.'
          }
        </div>
      </div>

      {/* Render selected mode */}
      {mode === 'letterbox' ? <SocialsPageLetterbox /> : <SocialsPageFullscreen />}
    </div>
  )
}