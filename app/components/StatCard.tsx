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
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-slate-500">{title}</p>
        {icon}
      </div>
      <div className="mt-3 text-2xl font-semibold text-slate-900">{value}</div>
      {helper ? <p className="mt-2 text-xs text-slate-500">{helper}</p> : null}
    </div>
  );
}
