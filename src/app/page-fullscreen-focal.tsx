'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SocialsPageFullscreenFocal() {
  const [imageBox, setImageBox] = useState({
    width: 0,
    height: 0,
    left: 0,
    top: 0,
    scale: 1
  })

  useEffect(() => {
    const calculateImageBox = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const viewportRatio = vw / vh
      const imageRatio = 1920 / 1080

      let renderedWidth, renderedHeight, offsetX, offsetY

      if (viewportRatio > imageRatio) {
        // Viewport is wider - image fills width, crops top/bottom
        renderedWidth = vw
        renderedHeight = vw / imageRatio
        offsetX = 0
        offsetY = (vh - renderedHeight) / 2
      } else {
        // Viewport is taller - image fills height, crops left/right
        renderedHeight = vh
        renderedWidth = vh * imageRatio
        offsetX = (vw - renderedWidth) / 2
        offsetY = 0
      }

      // Calculate scale factor based on original image size
      const scale = renderedWidth / 1920

      setImageBox({
        width: renderedWidth,
        height: renderedHeight,
        left: offsetX,
        top: offsetY,
        scale: scale
      })
    }

    calculateImageBox()
    window.addEventListener('resize', calculateImageBox)
    return () => window.removeEventListener('resize', calculateImageBox)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background - Fills viewport with focal point consideration */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className="object-cover"
        style={{
          objectPosition: '50% 35%' // Focus on upper-middle area where content is
        }}
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content Container - Positioned relative to actual image render box */}
      <div 
        className="absolute"
        style={{
          width: `${imageBox.width}px`,
          height: `${imageBox.height}px`,
          left: `${imageBox.left}px`,
          top: `${imageBox.top}px`
        }}
      >
        {/* Inner container with original dimensions for positioning */}
        <div 
          className="relative"
          style={{
            width: '1920px',
            height: '1080px',
            transform: `scale(${imageBox.scale})`,
            transformOrigin: 'top left'
          }}
        >
          {/* Social Buttons - Original positions, scaled with background */}
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

          {/* Logo - Original position */}
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