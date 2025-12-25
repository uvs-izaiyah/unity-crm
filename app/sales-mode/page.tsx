const dealStages = {
  NEW: [
    { id: 'deal-1', label: 'Atlas Growth', meta: '$2,400' },
    { id: 'deal-2', label: 'Kora Media', meta: '$1,200' }
  ],
  QUALIFIED: [{ id: 'deal-3', label: 'Drew Consulting', meta: '$850' }],
  BOOKED: [{ id: 'deal-4', label: 'Pulse Health', meta: '$3,600' }],
  PAID: [{ id: 'deal-5', label: 'Summit Finance', meta: '$5,200' }]
};

const leadProfile = {
  name: 'Maya Tran',
  title: 'Founder, Studio Elevate',
  status: 'Qualified',
  notes: 'Needs clarity on scope + timeline. Ready for proposal.'
};

export default function SalesModePage() {
  return (
    <main className="flex flex-col gap-8">
      <header className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-luxe">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Sales Mode</p>
        <h1 className="mt-3 text-3xl font-semibold text-ivory">Deal Pipeline Command</h1>
        <p className="mt-2 text-sm text-white/70">
          Move every lead with executive calm. Pipeline stages glow by momentum.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gold">Pipeline Board</h2>
            <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
              Weekly target: $12k
            </span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {Object.entries(dealStages).map(([stage, items]) => (
              <div
                key={stage}
                className="flex min-w-[240px] flex-1 flex-col gap-4 rounded-2xl border border-white/10 bg-royal/10 p-4 shadow-luxe"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gold">{stage}</h3>
                  <span className="rounded-full border border-gold/30 px-2 py-1 text-xs text-gold">
                    {items.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {items.map((deal) => (
                    <div
                      key={deal.id}
                      className="rounded-2xl border border-white/10 bg-black/60 p-3 transition hover:border-gold/40"
                    >
                      <p className="text-sm font-medium text-ivory">{deal.label}</p>
                      <p className="text-xs text-white/60">{deal.meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="luxe-panel p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gold">Lead Profile</h2>
            <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
              {leadProfile.status}
            </span>
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-sm font-semibold text-ivory">{leadProfile.name}</p>
              <p className="text-xs text-white/60">{leadProfile.title}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Notes</p>
              <p className="mt-2 text-sm text-white/70">{leadProfile.notes}</p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-black/70 p-4">
              <div className="flex gap-2">
                {['Summary', 'Activity', 'Tasks'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={`rounded-full px-3 py-1 text-xs ${
                      tab === 'Summary'
                        ? 'bg-gold/20 text-gold'
                        : 'border border-white/10 text-white/60'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <p className="mt-3 text-xs text-white/60">Next action: send proposal by Friday.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
