'use client'

import { useState } from 'react'

export default function ComparePage() {
  const [selectedOption, setSelectedOption] = useState<'a' | 'b' | 'c'>('a')

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Control Panel */}
      <div className="flex-shrink-0 bg-gray-800 p-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Display Mode Comparison</h1>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => setSelectedOption('a')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedOption === 'a' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Option A: Full Letterbox
              <span className="block text-sm mt-1 opacity-75">
                Always shows complete background
              </span>
            </button>
            
            <button
              onClick={() => setSelectedOption('b')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedOption === 'b' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Option B: Intelligent Crop
              <span className="block text-sm mt-1 opacity-75">
                Fills viewport, crops edges
              </span>
            </button>
            
            <button
              onClick={() => setSelectedOption('c')}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedOption === 'c' 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Option C: Hybrid
              <span className="block text-sm mt-1 opacity-75">
                Letterbox normally, crop at extremes
              </span>
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-400">
            <p>Try resizing your browser window to see how each option behaves at different viewport sizes.</p>
          </div>
        </div>
      </div>

      {/* iframe Container */}
      <div className="flex-1 relative">
        <iframe
          src={`/option-${selectedOption}`}
          className="absolute inset-0 w-full h-full border-0"
          title={`Option ${selectedOption.toUpperCase()}`}
        />
      </div>
    </div>
  )
}