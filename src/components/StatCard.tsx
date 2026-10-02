import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
  accent: string;
  index: number;
}

export default function StatCard({
  label,
  value,
  delta,
  positive,
  accent,
  index,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.08 * index, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-5 shadow-[0_12px_40px_rgba(10,22,40,0.06)] backdrop-blur-md"
    >
      <div
        className="absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
        style={{ background: accent }}
      />
      <div
        className="mb-3 h-1 w-10 rounded-full"
        style={{ background: `linear-gradient(90deg, ${accent}, #92FE9D)` }}
      />
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-[Syne] text-2xl font-bold tracking-tight text-[#0A1628] sm:text-3xl">
        {value}
      </p>
      <p
        className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          positive
            ? 'bg-emerald-50 text-emerald-600'
            : 'bg-amber-50 text-amber-600'
        }`}
      >
        {delta}
      </p>
    </motion.div>
  );
}
