'use client'

import Image from 'next/image'

export default function SocialsPageFullscreen() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background - Simple fullscreen coverage */}
      <div className="absolute inset-0">
        <Image
          src="/Background.gif"
          alt="Animated background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full">
        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full h-full">
          {/* Social Buttons - Centered at top portion */}
          <div className="absolute left-0 right-0 flex justify-center items-center gap-8 top-[20%]">
            <a
              href="https://x.com/PlaySoulGate"
              className="relative transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-social-twitter focus:ring-offset-2 focus:ring-offset-transparent rounded-lg"
              aria-label="Follow us on Twitter"
            >
              <Image
                src="/Twitter Button.png"
                alt="Twitter"
                width={84}
                height={80}
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
                width={76}
                height={80}
                className="cursor-pointer"
              />
            </a>
          </div>

          {/* Logo - Centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={528}
              height={368}
              priority
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center justify-center w-full h-full px-4">
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

          <div className="relative w-full max-w-[400px]">
            <Image
              src="/Logo.png"
              alt="SoulGate Heroes Logo"
              width={400}
              height={280}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}