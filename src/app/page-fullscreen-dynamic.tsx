'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SocialsPageFullscreenDynamic() {
  const [isClient, setIsClient] = useState(false)
  const [layout, setLayout] = useState({
    objectFit: 'cover' as 'cover' | 'contain',
    scale: 1,
    width: 1920,
    height: 1080,
    left: 0,
    top: 0,
  })

  // Ensure component only renders on client
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const calculateLayout = () => {
      // Ensure we're in the browser before accessing window
      if (typeof window === 'undefined') return
      
      const vw = window.innerWidth
      const vh = window.innerHeight
      const viewportRatio = vw / vh
      const imageRatio = 1920 / 1080

      // Define acceptable crop threshold (e.g., max 15% crop)
      const cropThreshold = 0.85
      
      // Define minimum dimensions to prevent unusably small elements
      const minWidth = 300  // Minimum viable width
      const minHeight = 200 // Minimum viable height
      
      let objectFit: 'cover' | 'contain' = 'cover'
      let scale = 1
      let width = 1920
      let height = 1080
      let left = 0
      let top = 0

      // Check conditions that force letterbox mode
      let forceLetterbox = false
      
      // Check if viewport is too small
      if (vw < minWidth || vh < minHeight) {
        forceLetterbox = true
      }
      
      // Check how much would be cropped with object-cover
      if (!forceLetterbox) {
        if (viewportRatio > imageRatio) {
          // Wider viewport - check vertical crop
          const visibleHeight = (1080 * vh) / (vw / imageRatio * 1080)
          if (visibleHeight < 1080 * cropThreshold) {
            objectFit = 'contain' // Too much vertical crop, switch to contain
          }
        } else {
          // Taller viewport - check horizontal crop
          const visibleWidth = (1920 * vw) / (vh * imageRatio / 1920)
          if (visibleWidth < 1920 * cropThreshold) {
            objectFit = 'contain' // Too much horizontal crop, switch to contain
          }
        }
      } else {
        objectFit = 'contain' // Force letterbox for small viewports
      }

      // Calculate scale and position based on fit mode
      if (objectFit === 'contain') {
        // Letterbox mode calculations
        if (viewportRatio > imageRatio) {
          scale = vh / 1080
          width = 1920 * scale
          height = vh
          left = (vw - width) / 2
          top = 0
        } else {
          scale = vw / 1920
          width = vw
          height = 1080 * scale
          left = 0
          top = (vh - height) / 2
        }
      } else {
        // Cover mode calculations
        if (viewportRatio > imageRatio) {
          scale = vw / 1920
          width = vw
          height = 1080 * scale
          left = 0
          top = (vh - height) / 2
        } else {
          scale = vh / 1080
          width = 1920 * scale
          height = vh
          left = (vw - width) / 2
          top = 0
        }
      }

      setLayout({ objectFit, scale, width, height, left, top })
    }

    calculateLayout()
    window.addEventListener('resize', calculateLayout)
    return () => window.removeEventListener('resize', calculateLayout)
  }, [])

  // Show loading state during SSR
  if (!isClient) {
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
        <Image
          src="/Background.gif"
          alt="Animated background"
          fill
          className="object-contain"
          priority
          unoptimized
          sizes="100vw"
        />
      </div>
    )
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background - Dynamic fit based on viewport */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className={layout.objectFit === 'cover' ? 'object-cover' : 'object-contain'}
        style={{
          objectPosition: '50% 35%'
        }}
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content Container */}
      <div 
        className="absolute"
        style={{
          width: `${layout.width}px`,
          height: `${layout.height}px`,
          left: `${layout.left}px`,
          top: `${layout.top}px`
        }}
      >
        {/* Inner container with original dimensions */}
        <div 
          className="relative"
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${layout.scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Social Buttons */}
          <div 
            className="absolute left-0 right-0 flex justify-center items-center"
            style={{ 
              top: '223px',
              gap: '32px'
            }}
          >
            <Link
              href="https://x.com/PlaySoulGate"
              className="relative transition-transform hover:scale-110"
              aria-label="Follow us on Twitter"
            >
              <Image
                src="/twitter-button.png"
                alt="Twitter"
                width={76}
                height={80}
                className="cursor-pointer"
                unoptimized
              />
            </Link>

            <Link
              href="https://discord.com/invite/soulgate"
              className="relative transition-transform hover:scale-110"
              aria-label="Join us on Discord"
            >
              <Image
                src="/discord-button.png"
                alt="Discord"
                width={76}
                height={80}
                className="cursor-pointer"
                unoptimized
              />
            </Link>
          </div>

          {/* Logo */}
          <div 
            className="absolute"
            style={{ 
              left: '696px',
              top: '367px'
            }}
          >
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={528}
              height={368}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>

    </div>
  )
}