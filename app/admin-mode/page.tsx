const offers = [
  { id: 'offer-1', name: 'Clarity Compass', price: '$1,500' },
  { id: 'offer-2', name: 'Automation Authority Sprint', price: '$2,750' }
];

const tags = ['VIP', 'Automation', 'Tax Strategy', 'Podcast Lead'];

const automations = [
  'Deal → PAID: Create fulfillment checklist',
  'Content → POSTED: Create repurpose task',
  'Task → DONE: Schedule follow-up',
  'Daily 6am: Generate Today’s 5 Moves'
];

export default function AdminModePage() {
  return (
    <main className="flex flex-col gap-8">
      <header className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-luxe">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Admin Mode</p>
        <h1 className="mt-3 text-3xl font-semibold text-ivory">Command Configuration</h1>
        <p className="mt-2 text-sm text-white/70">
          Tune offers, tags, and automations with executive-grade clarity.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="luxe-panel p-6">
          <h2 className="text-lg font-semibold text-gold">Offer Editor</h2>
          <div className="mt-4 space-y-4">
            {offers.map((offer) => (
              <div key={offer.id} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ivory">{offer.name}</p>
                    <p className="text-xs text-white/60">Signature transformation offer</p>
                  </div>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                    {offer.price}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <input
                    className="rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-ivory"
                    defaultValue={offer.name}
                  />
                  <input
                    className="rounded-xl border border-white/10 bg-black/50 px-3 py-2 text-sm text-ivory"
                    defaultValue={offer.price}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="luxe-panel p-6">
            <h2 className="text-lg font-semibold text-gold">Tag Manager</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="mt-4 w-full rounded-xl border border-gold/40 bg-white/5 px-3 py-2 text-sm text-gold"
            >
              Add new tag
            </button>
          </div>
          <div className="luxe-panel p-6">
            <h2 className="text-lg font-semibold text-gold">Automation Settings</h2>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {automations.map((rule) => (
                <li key={rule} className="rounded-xl border border-white/10 bg-black/60 px-4 py-3">
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
