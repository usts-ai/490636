import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { revenueData } from '../data/mock';

export default function RevenueChart() {
  return (
    <div className="h-64 w-full sm:h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueData} margin={{ top: 10, right: 8, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#007BFF" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="payGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#40E0D0" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#40E0D0" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
          <XAxis
            dataKey="mois"
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#64748b', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${Math.round(v / 1000)}k`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: 'none',
              boxShadow: '0 12px 40px rgba(10,22,40,0.12)',
              fontSize: 13,
            }}
            formatter={(value) => [`${Number(value).toLocaleString('fr-FR')} €`]}
          />
          <Area
            type="monotone"
            dataKey="revenu"
            name="Revenu"
            stroke="#007BFF"
            strokeWidth={2.5}
            fill="url(#revGrad)"
            animationDuration={1400}
          />
          <Area
            type="monotone"
            dataKey="paiements"
            name="Paiements"
            stroke="#40E0D0"
            strokeWidth={2.5}
            fill="url(#payGrad)"
            animationDuration={1600}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
