import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import ActivityFeed from '../components/ActivityFeed';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InvoiceTable from '../components/InvoiceTable';
import ProjectCards from '../components/ProjectCards';
import RevenueChart from '../components/RevenueChart';
import StatCard from '../components/StatCard';
import TaskList from '../components/TaskList';
import TaskStatusChart from '../components/TaskStatusChart';
import { stats, taskStatusData, team } from '../data/mock';

export default function Dashboard() {
  const [section, setSection] = useState('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const navigate = (id: string) => {
    setSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F4F7FB] text-[#0A1628]">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#00C9FF]/15 blur-3xl" />
        <div className="absolute right-0 top-40 h-[380px] w-[380px] rounded-full bg-[#92FE9D]/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-[300px] w-[300px] rounded-full bg-[#7B1FA2]/10 blur-3xl" />
      </div>

      <Header active={section} onNavigate={navigate} />

      <main className="mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 lg:px-8">
        <section ref={heroRef} className="relative mb-8 overflow-hidden rounded-3xl">
          <motion.div style={{ y: parallaxY, opacity: parallaxOpacity }} className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80"
              alt="Espace de travail analytique"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/92 via-[#007BFF]/55 to-[#40E0D0]/40" />
          </motion.div>
          <div className="relative z-10 px-5 py-10 sm:px-10 sm:py-14 lg:py-16">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92FE9D] backdrop-blur"
            >
              MVP SaaS B2B
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="max-w-2xl font-[Syne] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              Pilotez tâches et factures
              <span className="block bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] bg-clip-text text-transparent">
                en un seul flux.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base"
            >
              Tableau de bord Nexora : suivez vos projets, générez des PDF et
              encaissez via Stripe — prêt à présenter à vos partenaires.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <button
                type="button"
                onClick={() => navigate('invoices')}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#007BFF] shadow-lg transition hover:scale-[1.03]"
              >
                Voir les factures
              </button>
              <button
                type="button"
                onClick={() => navigate('tasks')}
                className="rounded-full border border-white/40 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Gérer les tâches
              </button>
            </motion.div>
          </div>
        </section>

        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.id} {...s} index={i} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {section === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 lg:grid-cols-3"
            >
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur lg:col-span-2">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                  <div>
                    <h2 className="font-[Syne] text-lg font-bold">
                      Revenus et paiements
                    </h2>
                    <p className="text-xs text-slate-500">
                      Évolution sur 8 mois
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#007BFF]" />
                      Revenu
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#40E0D0]" />
                      Stripe
                    </span>
                  </div>
                </div>
                <RevenueChart />
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur">
                <h2 className="mb-1 font-[Syne] text-lg font-bold">
                  Répartition des tâches
                </h2>
                <p className="mb-2 text-xs text-slate-500">
                  État du backlog
                </p>
                <TaskStatusChart />
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {taskStatusData.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2 text-xs"
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: d.color }}
                      />
                      <span className="text-slate-600">{d.name}</span>
                      <span className="ml-auto font-bold text-[#0A1628]">
                        {d.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur lg:col-span-2">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-[Syne] text-lg font-bold">
                    Projets en cours
                  </h2>
                  <button
                    type="button"
                    onClick={() => navigate('projects')}
                    className="text-xs font-semibold text-[#007BFF] hover:underline"
                  >
                    Tout voir
                  </button>
                </div>
                <ProjectCards />
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur">
                <h2 className="mb-4 font-[Syne] text-lg font-bold">
                  Activité récente
                </h2>
                <ActivityFeed />
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h3 className="mb-3 text-sm font-semibold text-slate-600">
                    Équipe
                  </h3>
                  <div className="flex -space-x-3">
                    {team.map((m) => (
                      <div
                        key={m.name}
                        className="h-10 w-10 overflow-hidden rounded-full border-2 border-white shadow"
                        title={`${m.name} — ${m.role}`}
                      >
                        <img
                          src={m.avatar}
                          alt={m.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#007BFF] to-[#7B1FA2] text-xs font-bold text-white shadow">
                      +5
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {section === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur sm:p-6"
            >
              <h2 className="mb-1 font-[Syne] text-xl font-bold">
                Suivi des projets
              </h2>
              <p className="mb-6 text-sm text-slate-500">
                Listes simples pour piloter chaque mission client.
              </p>
              <ProjectCards />
            </motion.div>
          )}

          {section === 'tasks' && (
            <motion.div
              key="tasks"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-6 lg:grid-cols-5"
            >
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur lg:col-span-3">
                <h2 className="mb-4 font-[Syne] text-xl font-bold">
                  Gestion des tâches
                </h2>
                <TaskList />
              </div>
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur lg:col-span-2">
                <h2 className="mb-2 font-[Syne] text-lg font-bold">
                  Vue statut
                </h2>
                <TaskStatusChart />
                <div className="mt-4 space-y-2">
                  {taskStatusData.map((d) => (
                    <div
                      key={d.name}
                      className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5 text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="h-2.5 w-2.5 rounded-full"
                          style={{ backgroundColor: d.color }}
                        />
                        {d.name}
                      </span>
                      <span className="font-[Syne] font-bold">{d.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {section === 'invoices' && (
            <motion.div
              key="invoices"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="font-[Syne] text-xl font-bold">
                    Factures PDF
                  </h2>
                  <p className="text-sm text-slate-500">
                    Génération et suivi des factures clients
                  </p>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-gradient-to-r from-[#7B1FA2] to-[#007BFF] px-5 py-2.5 text-sm font-semibold text-white shadow-lg"
                >
                  Générer un PDF
                </motion.button>
              </div>
              <InvoiceTable />
            </motion.div>
          )}

          {section === 'payments' && (
            <motion.div
              key="payments"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="grid gap-6 lg:grid-cols-3"
            >
              <div className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.05)] backdrop-blur lg:col-span-2">
                <h2 className="mb-1 font-[Syne] text-xl font-bold">
                  Paiements Stripe
                </h2>
                <p className="mb-4 text-sm text-slate-500">
                  Encaissements synchronisés en temps réel
                </p>
                <RevenueChart />
              </div>
              <div className="space-y-4">
                {[
                  {
                    title: 'Taux de succes',
                    value: '91 %',
                    hint: 'Transactions abouties',
                    grad: 'from-[#00C9FF] to-[#92FE9D]',
                  },
                  {
                    title: 'En attente',
                    value: '6 740 €',
                    hint: '3 paiements ouverts',
                    grad: 'from-[#007BFF] to-[#7B1FA2]',
                  },
                  {
                    title: 'Ce mois',
                    value: '44 600 €',
                    hint: 'Encaissé via Stripe',
                    grad: 'from-[#40E0D0] to-[#007BFF]',
                  },
                ].map((card, i) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ scale: 1.02 }}
                    className={`rounded-2xl bg-gradient-to-br ${card.grad} p-5 text-white shadow-lg`}
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-white/80">
                      {card.title}
                    </p>
                    <p className="mt-2 font-[Syne] text-3xl font-bold">
                      {card.value}
                    </p>
                    <p className="mt-1 text-sm text-white/85">{card.hint}</p>
                  </motion.div>
                ))}
              </div>
              <div className="lg:col-span-3">
                <InvoiceTable />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
