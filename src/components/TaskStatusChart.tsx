import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { taskStatusData } from '../data/mock';

export default function TaskStatusChart() {
  return (
    <div className="relative mx-auto h-56 w-full max-w-xs sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={taskStatusData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={58}
            outerRadius={84}
            paddingAngle={4}
            animationDuration={1200}
          >
            {taskStatusData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} stroke="none" />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              border: 'none',
              boxShadow: '0 12px 40px rgba(10,22,40,0.12)',
              fontSize: 13,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-[Syne] text-2xl font-bold text-[#0A1628]">127</span>
        <span className="text-xs text-slate-500">tâches</span>
      </div>
    </div>
  );
}
