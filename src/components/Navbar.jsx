import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = ['Work', 'About', 'Services', 'Contact']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-stone-50/80 backdrop-blur-xl">
      <nav className="section-shell relative flex items-center justify-between gap-3 py-3 sm:py-4">
        <a href="#home" className="flex min-w-0 flex-1 items-center gap-2.5 text-sm font-semibold text-slate-900 sm:gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-base shadow-sm">
            FK
          </span>
          <span className="truncate">Fahad Khan</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              {item}
            </a>
          ))}
        </div>

        <motion.a
          href="https://wa.me/918689868953?text=Hi%20Fahad%2C%20I%27d%20like%20to%20book%20a%20project."
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="hidden items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition-transform sm:inline-flex"
        >
          Let&apos;s Talk
        </motion.a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-slate-700 shadow-sm md:hidden"
        >
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="section-shell pb-3 md:hidden">
          <div className="rounded-[1.5rem] border border-stone-200 bg-white p-3 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={handleNavClick}
                  className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-stone-100 hover:text-slate-900"
                >
                  {item}
                </a>
              ))}
              <motion.a
                href="https://wa.me/918689868953?text=Hi%20Fahad%2C%20I%27d%20like%20to%20book%20a%20project."
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                whileTap={{ scale: 0.98 }}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white"
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
