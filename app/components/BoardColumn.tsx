interface BoardColumnProps {
  title: string;
  items: { id: string; label: string; meta?: string }[];
}

export function BoardColumn({ title, items }: BoardColumnProps) {
  return (
    <div className="flex min-w-[220px] flex-1 flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-700">{title}</h3>
        <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">
          {items.length}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
            <p className="text-sm font-medium text-slate-800">{item.label}</p>
            {item.meta ? <p className="mt-1 text-xs text-slate-500">{item.meta}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
