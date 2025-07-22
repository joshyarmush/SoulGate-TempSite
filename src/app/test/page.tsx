'use client'

import { useState } from 'react'

export default function TestPage() {
  const [viewport, setViewport] = useState('desktop')
  
  const viewports = {
    mobile: { width: 375, height: 667, name: 'Mobile (iPhone SE)' },
    tablet: { width: 768, height: 1024, name: 'Tablet (iPad)' },
    desktop: { width: 1920, height: 1080, name: 'Desktop (1080p)' },
    laptop: { width: 1366, height: 768, name: 'Laptop' }
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        {Object.keys(viewports).map((key) => (
          <button
            key={key}
            onClick={() => setViewport(key)}
            className={`px-4 py-2 rounded ${
              viewport === key ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {viewports[key as keyof typeof viewports].name}
          </button>
        ))}
      </div>
      
      <div className="border-2 border-gray-300 relative mx-auto" 
           style={{ 
             width: viewports[viewport as keyof typeof viewports].width + 'px',
             height: viewports[viewport as keyof typeof viewports].height + 'px'
           }}>
        <iframe 
          src="/"
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
      
      <div className="mt-4 text-center text-gray-600">
        Current viewport: {viewports[viewport as keyof typeof viewports].width} x {viewports[viewport as keyof typeof viewports].height}
      </div>
    </div>
  )
}