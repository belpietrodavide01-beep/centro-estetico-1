import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import SplitText from './react-bits/SplitText'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Chi Siamo', href: '#chi-siamo' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Contatti', href: '#contatti' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLinkClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full bg-transparent"
      >
        <nav className="w-full px-4 md:px-6 lg:px-16 h-20 flex items-center justify-between md:grid md:grid-cols-3">

          {/* ── Logo Container ── */}
          <div className="flex justify-start">
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleLinkClick('#home') }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-shrink-0 h-10 md:h-12"
            >
              <img
                src="/logo estics definitivo.svg"
                alt="Estics — Centro Estetico"
                className="h-full w-auto object-contain"
                style={{ filter: 'brightness(0)' }}
              />
            </motion.a>
          </div>

          {/* ── Links Desktop ── */}
          <ul className="hidden md:flex items-center justify-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="text-[12px] font-bold tracking-[0.1em] uppercase text-stone-600 hover:text-stone-950 transition-colors duration-200 py-1"
                >
                  <SplitText text={link.label} />
                </button>
              </li>
            ))}
          </ul>

          {/* ── Right Section (CTA & Hamburger) ── */}
          <div className="flex justify-end items-center gap-3">
            <motion.button
              onClick={() => handleLinkClick('#contatti')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex group items-center gap-3.5 pl-2 pr-6 py-2 rounded-full bg-white border border-stone-200 hover:bg-[#1a1a1a] transition-all duration-500 shadow-sm"
            >
              <span className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-stone-50 group-hover:bg-white/10 transition-colors duration-500">
                <ArrowUpRight size={16} strokeWidth={2} className="text-[#a67c52] group-hover:text-white" />
              </span>
              <span className="text-[13px] font-bold tracking-wide text-[#1a1a1a] group-hover:text-white transition-colors duration-500">
                Prenota Ora
              </span>
            </motion.button>

            <button
              className="md:hidden flex items-center justify-center w-[38px] h-[38px] rounded-full bg-[#6b4226] text-white hover:bg-[#4f301b] transition-colors flex-shrink-0 shadow-sm"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Apri menu"
            >
              {menuOpen ? <X size={18} strokeWidth={2.5} /> : <Menu size={18} strokeWidth={2.5} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="fixed top-20 left-0 right-0 z-40 border-b border-stone-100/80 shadow-sm md:hidden"
            style={{ background: 'rgba(250, 249, 246, 0.98)', backdropFilter: 'blur(16px)' }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-[13px] font-medium text-stone-700 hover:bg-stone-100/70 transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}

            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
