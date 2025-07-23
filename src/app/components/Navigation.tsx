'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Title' },
    { href: '/socials', label: 'Socials' }
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-[#1a0b3c]/90 backdrop-blur-md border border-[#2d1b69]/50 rounded-full px-6 py-3">
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                pathname === item.href
                  ? 'bg-[#2d1b69] text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-[#2d1b69]/50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}