import { motion } from 'framer-motion';
import { projects } from '../data/mock';

export default function ProjectCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 * i, duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_36px_rgba(10,22,40,0.06)]"
        >
          <div className="relative h-32 overflow-hidden sm:h-36">
            <img
              src={p.image}
              alt={p.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent" />
            <span
              className="absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-semibold text-white"
              style={{ backgroundColor: p.color }}
            >
              {p.status}
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-[Syne] text-base font-bold text-[#0A1628]">
              {p.name}
            </h3>
            <p className="mt-1 text-xs text-slate-500">{p.client}</p>
            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600">{p.progress}%</span>
                <span className="text-slate-400">Échéance {p.due}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${p.progress}%` }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.9, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${p.color}, #92FE9D)`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
