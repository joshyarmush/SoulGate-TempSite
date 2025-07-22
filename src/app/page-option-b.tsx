'use client'

import Image from 'next/image'
import Link from 'next/link'

// Option B: Intelligent crop - background fills viewport, smart positioning
export default function SocialsPageOptionB() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background - Fills viewport, positioned to keep important parts visible */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className="object-cover object-[50%_40%]" // Keeps center-upper area visible
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content with minimum and maximum sizes */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Social Buttons - Responsive but proportional */}
        <div className="mt-[calc(20.65vh-2rem)] flex items-center gap-[clamp(1rem,3vw,2rem)]">
          <Link
            href="https://x.com/PlaySoulGate"
            className="relative transition-transform hover:scale-110"
            aria-label="Follow us on Twitter"
          >
            <Image
              src="/Twitter Button.png"
              alt="Twitter"
              width={84}
              height={80}
              className="w-[clamp(3rem,4.375vw,5.25rem)] h-auto"
              unoptimized
            />
          </Link>

          <Link
            href="https://discord.com/invite/soulgate"
            className="relative transition-transform hover:scale-110"
            aria-label="Join us on Discord"
          >
            <Image
              src="/Discord Button.png"
              alt="Discord"
              width={76}
              height={80}
              className="w-[clamp(2.75rem,3.958vw,4.75rem)] h-auto"
              unoptimized
            />
          </Link>
        </div>

        {/* Logo - Centered with responsive sizing */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="relative w-[clamp(16rem,27.5vw,33rem)] h-auto">
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={528}
              height={368}
              className="w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  )
}