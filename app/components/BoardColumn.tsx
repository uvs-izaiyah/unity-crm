interface BoardColumnProps {
  title: string;
  items: { id: string; label: string; meta?: string }[];
  accent?: string;
}

export function BoardColumn({ title, items, accent = 'border-gold/40' }: BoardColumnProps) {
  return (
    <div className={`flex min-w-[240px] flex-1 flex-col gap-4 rounded-2xl border ${accent} bg-royal/10 p-4 shadow-luxe`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gold">{title}</h3>
        <span className="rounded-full border border-gold/30 bg-black/50 px-2 py-1 text-xs text-gold">
          {items.length}
        </span>
      </div>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-black/60 p-3 transition hover:-translate-y-0.5 hover:border-gold/40"
          >
            <p className="text-sm font-medium text-ivory">{item.label}</p>
            {item.meta ? <p className="mt-1 text-xs text-white/60">{item.meta}</p> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
