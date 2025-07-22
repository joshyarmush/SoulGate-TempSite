'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SocialsPageLetterbox() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#1a0b3c]">
      {/* Background Image - Covers viewport, crops as needed */}
      <Image
        src="/Background.gif"
        alt="Animated background"
        fill
        className="object-cover object-center"
        priority
        unoptimized
        sizes="100vw"
      />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center">
        {/* Social Buttons */}
        <div className="mt-[10vh] sm:mt-[15vh] md:mt-[20vh] flex items-center gap-4 sm:gap-6 md:gap-8">
          <Link
            href="https://x.com/PlaySoulGate"
            className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-twitter focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
            aria-label="Follow us on Twitter"
          >
            <Image
              src="/Twitter Button.png"
              alt="Twitter"
              width={84}
              height={80}
              className="w-12 h-auto sm:w-16 md:w-20 lg:w-24"
              unoptimized
            />
          </Link>

          <Link
            href="https://discord.com/invite/soulgate"
            className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-discord focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
            aria-label="Join us on Discord"
          >
            <Image
              src="/Discord Button.png"
              alt="Discord"
              width={76}
              height={80}
              className="w-11 h-auto sm:w-14 md:w-[72px] lg:w-[88px]"
              unoptimized
            />
          </Link>
        </div>

        {/* Logo - Centered with reasonable sizing */}
        <div className="flex-1 flex items-center justify-center px-4">
          <Image
            src="/Logo.png"
            alt="SoulGate Heroes Logo"
            width={528}
            height={368}
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[528px] h-auto"
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  )
}