'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SocialsPageFullscreenImproved() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background - Fills viewport, crops as needed */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className="object-cover object-center"
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content Overlay - Uses viewport units for scaling */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Social Buttons - Scale with viewport */}
        <div className="flex items-center gap-[1.67vw] mt-[20.65vh]">
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
              className="w-[3.958vw] h-auto min-w-[48px]"
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
              className="w-[3.958vw] h-auto min-w-[48px]"
              unoptimized
            />
          </Link>
        </div>

        {/* Logo - Positioned and scaled with viewport */}
        <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '33.98vh' }}>
          <Image
            src="/Logo.png"
            alt="SoulGate Heroes Logo"
            width={528}
            height={368}
            className="w-[27.5vw] h-auto min-w-[280px]"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}