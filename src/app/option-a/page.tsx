'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Option A: Full letterbox - always show complete background
export default function SocialsPageOptionA() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const calculateScale = () => {
      const screenRatio = window.innerWidth / window.innerHeight
      const imageRatio = 1920 / 1080

      if (screenRatio > imageRatio) {
        setScale(window.innerHeight / 1080)
      } else {
        setScale(window.innerWidth / 1920)
      }
    }

    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background Image - Always fully visible */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className="object-contain"
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content scaled with background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative"
          style={{
            width: `${1920 * scale}px`,
            height: `${1080 * scale}px`,
          }}
        >
          {/* Social Buttons - Exact Figma position */}
          <div 
            className="absolute left-0 right-0 flex justify-center items-center"
            style={{ 
              top: `${223 * scale}px`,
              gap: `${32 * scale}px` 
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
                width={84 * scale}
                height={80 * scale}
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
                width={76 * scale}
                height={80 * scale}
                className="cursor-pointer"
                unoptimized
              />
            </Link>
          </div>

          {/* Logo - Exact Figma position */}
          <div 
            className="absolute"
            style={{ 
              left: `${696 * scale}px`,
              top: `${367 * scale}px`
            }}
          >
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={528 * scale}
              height={368 * scale}
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}