'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// Option C: Hybrid - Letterbox for normal ratios, crop for extremes
export default function SocialsPageOptionC() {
  const [displayMode, setDisplayMode] = useState<'letterbox' | 'crop'>('letterbox')
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const calculateDisplay = () => {
      const screenRatio = window.innerWidth / window.innerHeight
      const imageRatio = 1920 / 1080

      // Switch to crop mode for extreme aspect ratios
      if (screenRatio > 2.5 || screenRatio < 0.5) {
        setDisplayMode('crop')
      } else {
        setDisplayMode('letterbox')
        
        // Calculate scale for letterbox mode
        if (screenRatio > imageRatio) {
          setScale(window.innerHeight / 1080)
        } else {
          setScale(window.innerWidth / 1920)
        }
      }
    }

    calculateDisplay()
    window.addEventListener('resize', calculateDisplay)
    return () => window.removeEventListener('resize', calculateDisplay)
  }, [])

  if (displayMode === 'crop') {
    // Crop mode for extreme viewports
    return (
      <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
        <Image
          src="/Background.gif"
          alt="Animated background"
          fill
          className="object-cover object-[50%_35%]"
          priority
          unoptimized
          sizes="100vw"
        />
        
        <div className="absolute inset-0 flex flex-col items-center">
          <div className="mt-[15vh] flex items-center gap-8">
            <Link href="https://x.com/PlaySoulGate" aria-label="Follow us on Twitter">
              <Image
                src="/Twitter Button.png"
                alt="Twitter"
                width={84}
                height={80}
                className="w-20 h-auto cursor-pointer hover:scale-110 transition-transform"
                unoptimized
              />
            </Link>
            <Link href="https://discord.com/invite/soulgate" aria-label="Join us on Discord">
              <Image
                src="/Discord Button.png"
                alt="Discord"
                width={76}
                height={80}
                className="w-[72px] h-auto cursor-pointer hover:scale-110 transition-transform"
                unoptimized
              />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center px-4">
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={528}
              height={368}
              className="w-full max-w-[420px] h-auto"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    )
  }

  // Letterbox mode for normal aspect ratios
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
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="relative"
          style={{
            width: `${1920 * scale}px`,
            height: `${1080 * scale}px`,
          }}
        >
          <div 
            className="absolute left-0 right-0 flex justify-center items-center"
            style={{ 
              top: `${223 * scale}px`,
              gap: `${32 * scale}px` 
            }}
          >
            <Link href="https://x.com/PlaySoulGate" aria-label="Follow us on Twitter">
              <Image
                src="/Twitter Button.png"
                alt="Twitter"
                width={84 * scale}
                height={80 * scale}
                className="cursor-pointer hover:scale-110 transition-transform"
                unoptimized
              />
            </Link>
            <Link href="https://discord.com/invite/soulgate" aria-label="Join us on Discord">
              <Image
                src="/Discord Button.png"
                alt="Discord"
                width={76 * scale}
                height={80 * scale}
                className="cursor-pointer hover:scale-110 transition-transform"
                unoptimized
              />
            </Link>
          </div>

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