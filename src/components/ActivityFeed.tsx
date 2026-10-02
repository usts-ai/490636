import { motion } from 'framer-motion';
import { activities } from '../data/mock';

const dots: Record<string, string> = {
  payment: '#40E0D0',
  task: '#007BFF',
  invoice: '#7B1FA2',
};

export default function ActivityFeed() {
  return (
    <ul className="space-y-4">
      {activities.map((a, i) => (
        <motion.li
          key={a.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.08 * i }}
          className="flex gap-3"
        >
          <span className="relative mt-1.5 flex flex-col items-center">
            <span
              className="h-2.5 w-2.5 rounded-full ring-4 ring-white"
              style={{ backgroundColor: dots[a.type] }}
            />
            {i < activities.length - 1 && (
              <span className="mt-1 w-px flex-1 bg-slate-200" />
            )}
          </span>
          <div className="pb-2">
            <p className="text-sm leading-snug text-[#0A1628]">{a.text}</p>
            <p className="mt-1 text-xs text-slate-400">{a.time}</p>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
