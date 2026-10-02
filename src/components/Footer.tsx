import { motion } from 'framer-motion';

const links = [
  {
    title: 'Produit',
    items: ['Tableau de bord', 'Tâches', 'Factures PDF', 'Paiements Stripe'],
  },
  {
    title: 'Entreprise',
    items: ['À propos', 'Partenaires', 'Carrières', 'Contact'],
  },
  {
    title: 'Ressources',
    items: ['Documentation', 'Guide MVP', 'Sécurité', 'Statut'],
  },
];

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'X', href: '#' },
  { label: 'GitHub', href: '#' },
  { label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-slate-200/80 bg-[#0A1628] text-white">
      <div className="pointer-events-none absolute -top-24 left-1/4 h-48 w-48 rounded-full bg-[#007BFF]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 right-1/4 h-40 w-40 rounded-full bg-[#40E0D0]/25 blur-3xl" />
      <div className="pointer-events-none absolute top-10 right-10 h-32 w-32 rounded-full bg-[#7B1FA2]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-2.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#007BFF] via-[#40E0D0] to-[#7B1FA2] font-[Syne] text-sm font-black text-white">
                NX
              </span>
              <span className="font-[Syne] text-xl font-bold">
                Nexora<span className="text-[#40E0D0]">.</span>
              </span>
            </motion.div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              SaaS B2B pour piloter vos projets, tâches et factures en un seul
              espace. Simple, rapide, prêt pour vos partenaires.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-[#40E0D0]/50 hover:bg-[#40E0D0]/10 hover:text-white"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          {links.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <h4 className="mb-4 font-[Syne] text-sm font-bold tracking-wide text-[#40E0D0]">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#/"
                      className="group inline-flex items-center text-sm text-slate-300 transition hover:text-white"
                    >
                      <span className="mr-0 max-w-0 overflow-hidden transition-all group-hover:mr-2 group-hover:max-w-[8px]">
                        <span className="inline-block h-1 w-1 rounded-full bg-[#00C9FF]" />
                      </span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-slate-400">
            © 2026 Nexora — Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-400">
            <a href="#/" className="transition hover:text-[#40E0D0]">
              Mentions légales
            </a>
            <a href="#/" className="transition hover:text-[#40E0D0]">
              Confidentialité
            </a>
            <a href="#/" className="transition hover:text-[#40E0D0]">
              CGU
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
