'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import socialsData from '@/../../socials.json'

export default function SocialsPageLetterbox() {
  const [scale, setScale] = useState(1)
  
  useEffect(() => {
    const calculateScale = () => {
      const screenRatio = window.innerWidth / window.innerHeight
      const imageRatio = 1920 / 1080 // 16:9
      
      if (screenRatio > imageRatio) {
        // Screen is wider than image - scale based on height
        setScale(window.innerHeight / 1080)
      } else {
        // Screen is taller than image - scale based on width
        setScale(window.innerWidth / 1920)
      }
    }
    
    calculateScale()
    window.addEventListener('resize', calculateScale)
    return () => window.removeEventListener('resize', calculateScale)
  }, [])

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
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
      </div>

      {/* Content Container - Scaled to match background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative"
          style={{
            width: `${1920 * scale}px`,
            height: `${1080 * scale}px`,
          }}
        >
          {/* Desktop Layout (768px and up) */}
          <div className="hidden md:block relative w-full h-full">
            {/* Social Buttons - Positioned based on original coordinates */}
            <div 
              className="absolute left-0 right-0 flex justify-center items-center"
              style={{ 
                top: `${223 * scale}px`,
                gap: `${32 * scale}px` 
              }}
            >
              <a
                href="https://x.com/PlaySoulGate"
                className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-twitter focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                aria-label="Follow us on Twitter"
              >
                <Image
                  src="/Twitter Button.png"
                  alt="Twitter"
                  width={84 * scale}
                  height={80 * scale}
                  className="cursor-pointer"
                  unoptimized
                />
              </a>

              <a
                href="https://discord.gg/soulgate"
                className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-discord focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                aria-label="Join us on Discord"
              >
                <Image
                  src="/Discord Button.png"
                  alt="Discord"
                  width={76 * scale}
                  height={80 * scale}
                  className="cursor-pointer"
                  unoptimized
                />
              </a>
            </div>

            {/* Logo - Exact positioning from socials.json */}
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

          {/* Mobile/Tablet Layout (below 768px) */}
          <div className="md:hidden flex flex-col items-center justify-center w-full h-full">
            {/* Social Buttons for Mobile */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
              <a
                href="https://x.com/PlaySoulGate"
                className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-twitter focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                aria-label="Follow us on Twitter"
              >
                <Image
                  src="/Twitter Button.png"
                  alt="Twitter"
                  width={60}
                  height={57}
                  className="cursor-pointer"
                />
              </a>

              <a
                href="https://discord.gg/soulgate"
                className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-discord focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
                aria-label="Join us on Discord"
              >
                <Image
                  src="/Discord Button.png"
                  alt="Discord"
                  width={60}
                  height={60}
                  className="cursor-pointer"
                />
              </a>
            </div>

            {/* Logo for Mobile */}
            <div className="relative px-4 w-full max-w-[400px]">
              <Image
                src="/Logo.png"
                alt="SoulGate Heroes Logo"
                width={400}
                height={280}
                className="w-full h-auto"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}