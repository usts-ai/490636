import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { navItems } from '../data/mock';

interface HeaderProps {
  active: string;
  onNavigate: (id: string) => void;
}

export default function Header({ active, onNavigate }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,123,255,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('overview')}
          className="group flex items-center gap-2.5"
        >
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#007BFF] via-[#40E0D0] to-[#7B1FA2] shadow-lg shadow-blue-500/30">
            <span className="absolute inset-0 animate-pulse bg-white/20" />
            <span className="relative text-sm font-black tracking-tighter text-white">
              NX
            </span>
          </span>
          <span className="font-[Syne] text-lg font-bold tracking-tight text-[#0A1628] sm:text-xl">
            Nexora
            <span className="text-[#007BFF]">.</span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className="relative px-3.5 py-2 text-sm font-medium text-[#334155] transition-colors hover:text-[#007BFF]"
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#00C9FF]/15 to-[#92FE9D]/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <motion.button
            type="button"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 sm:inline-flex"
          >
            Nouvelle facture
          </motion.button>
          <div className="hidden h-9 w-9 overflow-hidden rounded-full ring-2 ring-[#40E0D0]/40 sm:block">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80"
              alt="Profil"
              className="h-full w-full object-cover"
            />
          </div>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl bg-[#0A1628]/5 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 rounded bg-[#0A1628] transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-[#0A1628] transition-opacity ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded bg-[#0A1628] transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="border-t border-slate-100 bg-white/95 px-4 py-3 backdrop-blur-xl lg:hidden"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                onNavigate(item.id);
                setOpen(false);
              }}
              className={`mb-1 block w-full rounded-xl px-4 py-3 text-left text-sm font-medium ${
                active === item.id
                  ? 'bg-gradient-to-r from-[#00C9FF]/15 to-[#92FE9D]/20 text-[#007BFF]'
                  : 'text-[#334155]'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="mt-2 w-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#40E0D0] px-4 py-3 text-sm font-semibold text-white"
          >
            Nouvelle facture
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
