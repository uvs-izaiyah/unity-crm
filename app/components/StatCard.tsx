import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string;
  helper?: string;
  icon?: ReactNode;
}

export function StatCard({ title, value, helper, icon }: StatCardProps) {
  return (
    <div className="luxe-panel flex flex-col gap-3 p-5">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
        <span>{title}</span>
        {icon}
      </div>
      <div className="text-2xl font-semibold text-ivory">{value}</div>
      {helper ? <p className="text-xs text-white/60">{helper}</p> : null}
    </div>
  );
}
