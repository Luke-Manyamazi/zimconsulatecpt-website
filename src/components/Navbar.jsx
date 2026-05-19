import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Discover Zimbabwe', href: '#zimbabwe' },
  { label: 'Services', href: '#services' },
  { label: 'Diaspora', href: '#diaspora' },
  { label: 'Notices', href: '#notices' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/ZimCOA.png"
            alt="Zimbabwe Coat of Arms"
            className={`transition-all duration-300 object-contain ${scrolled ? 'h-12 w-12' : 'h-14 w-14'}`}
          />
          <div className="leading-tight">
            <p className={`font-heading font-bold text-sm transition-colors ${scrolled ? 'text-zim-black' : 'text-white'}`}>
              Zimbabwe Consulate
            </p>
            <p className={`text-xs transition-colors ${scrolled ? 'text-gray-500' : 'text-white/70'}`}>
              Cape Town · Republic of South Africa
            </p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-zim-green ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#appointments"
            className="bg-zim-green text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-zim-green-dark transition-colors"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-zim-black' : 'text-white'}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 hover:text-zim-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointments"
                onClick={() => setOpen(false)}
                className="mt-2 bg-zim-green text-white font-semibold py-3 px-3 rounded-lg text-center hover:bg-zim-green-dark transition-colors"
              >
                Book Appointment
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
