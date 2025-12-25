const checklists = [
  {
    id: 'checklist-1',
    title: 'Systems Sprint Fulfillment',
    progress: 0.6,
    tasks: ['Kickoff call', 'Asset collection', 'Workflow map', 'Delivery review']
  },
  {
    id: 'checklist-2',
    title: 'Tax Strategy Intensive',
    progress: 0.3,
    tasks: ['Intake questionnaire', 'Financial review', 'Draft plan']
  }
];

export default function DeliveryModePage() {
  return (
    <main className="flex flex-col gap-8">
      <header className="rounded-2xl border border-white/10 bg-black/40 p-6 shadow-luxe">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Delivery Mode</p>
        <h1 className="mt-3 text-3xl font-semibold text-ivory">Fulfillment Control Room</h1>
        <p className="mt-2 text-sm text-white/70">
          Keep every promise on schedule with golden progress visibility.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        {checklists.map((checklist) => (
          <div key={checklist.id} className="luxe-panel p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gold">{checklist.title}</h2>
              <div className="relative h-14 w-14">
                <svg className="h-14 w-14 -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="rgba(212,175,55,0.9)"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray={`${264 * checklist.progress} 264`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xs text-gold">
                  {Math.round(checklist.progress * 100)}%
                </span>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {checklist.tasks.map((task) => (
                <div
                  key={task}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3"
                >
                  <p className="text-sm text-ivory">{task}</p>
                  <span className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                    In progress
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
