import { motion } from 'framer-motion';
import { invoices } from '../data/mock';

const statusStyle: Record<string, string> = {
  Payée: 'bg-emerald-50 text-emerald-600',
  'En attente': 'bg-amber-50 text-amber-600',
  'En retard': 'bg-rose-50 text-rose-600',
  Brouillon: 'bg-slate-100 text-slate-600',
};

export default function InvoiceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_36px_rgba(10,22,40,0.05)]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/80 text-xs uppercase tracking-wider text-slate-500">
              <th className="px-4 py-3 font-semibold">Facture</th>
              <th className="px-4 py-3 font-semibold">Client</th>
              <th className="px-4 py-3 font-semibold">Montant</th>
              <th className="px-4 py-3 font-semibold">Statut</th>
              <th className="px-4 py-3 font-semibold">Date</th>
              <th className="px-4 py-3 font-semibold">Paiement</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <motion.tr
                key={inv.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="border-b border-slate-50 transition hover:bg-gradient-to-r hover:from-[#00C9FF]/5 hover:to-[#92FE9D]/5"
              >
                <td className="px-4 py-3.5 font-mono text-xs font-semibold text-[#007BFF]">
                  {inv.id}
                </td>
                <td className="px-4 py-3.5 font-medium text-[#0A1628]">
                  {inv.client}
                </td>
                <td className="px-4 py-3.5 font-[Syne] font-bold text-[#0A1628]">
                  {inv.amount}
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      statusStyle[inv.status]
                    }`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-slate-500">{inv.date}</td>
                <td className="px-4 py-3.5 text-slate-500">{inv.method}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
