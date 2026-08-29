'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

import Button from '@/components/ui/Button'
import Logo from '@/components/ui/Logo'

const navigation = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Legal Resources', href: '/legal-resources' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const closeMenu = () => setIsMenuOpen(false)

  const goToContact = () => {
    closeMenu()
    router.push('/contact')
  }

  return (
    <header className="border-b border-gray-200 bg-background">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-6 py-5 lg:px-10"
      >
        
          <Logo fn={closeMenu} />

        <button
          type="button"
          aria-controls="main-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-gray-800 transition hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
          <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
            <span className="h-0.5 w-full bg-current" />
          </span>
        </button>

        <div
          id="main-navigation"
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } basis-full flex-col items-stretch gap-2 pt-5 md:flex md:basis-auto md:flex-row md:items-center md:gap-8 md:pt-0`}
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`)

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? 'page' : undefined}
                className={`font-inter relative rounded-sm py-2 text-md font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-button after:content-[''] after:transition-transform after:duration-300 after:ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-800 ${
                  isActive
                    ? 'text-button after:scale-x-100'
                    : 'text-gray-700 after:scale-x-0 hover:text-button hover:after:scale-x-100'
                }`}
              >
                {item.label}
              </Link>
            )
          })}

          <Button className="mt-2 md:mt-0" onClick={goToContact}>
            Contact Us
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
