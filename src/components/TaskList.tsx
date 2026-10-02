import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { tasks as initialTasks } from '../data/mock';

const priorityStyle: Record<string, string> = {
  Haute: 'bg-rose-50 text-rose-600',
  Moyenne: 'bg-amber-50 text-amber-600',
  Basse: 'bg-slate-100 text-slate-600',
};

export default function TaskList() {
  const [items, setItems] = useState(initialTasks);
  const [filter, setFilter] = useState<'all' | 'open' | 'done'>('all');

  const filtered = items.filter((t) => {
    if (filter === 'open') return !t.done;
    if (filter === 'done') return t.done;
    return true;
  });

  const toggle = (id: string) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {(
          [
            { id: 'all', label: 'Toutes' },
            { id: 'open', label: 'Ouvertes' },
            { id: 'done', label: 'Terminées' },
          ] as const
        ).map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
              filter === f.id
                ? 'bg-[#0A1628] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <ul className="space-y-2.5">
        <AnimatePresence mode="popLayout">
          {filtered.map((task) => (
            <motion.li
              key={task.id}
              layout
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ x: 4 }}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition hover:shadow-md sm:items-center"
              onClick={() => toggle(task.id)}
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition sm:mt-0 ${
                  task.done
                    ? 'border-[#40E0D0] bg-[#40E0D0]'
                    : 'border-slate-300'
                }`}
              >
                {task.done && (
                  <span className="block h-2 w-2 rounded-sm bg-white" />
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono text-slate-400">
                    {task.id}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      priorityStyle[task.priority]
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
                <p
                  className={`mt-0.5 text-sm font-medium ${
                    task.done
                      ? 'text-slate-400 line-through'
                      : 'text-[#0A1628]'
                  }`}
                >
                  {task.title}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {task.project} · {task.assignee} · {task.due}
                </p>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}
