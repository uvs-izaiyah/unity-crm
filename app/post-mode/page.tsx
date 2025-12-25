import { BoardColumn } from '../components/BoardColumn';
import { QuickAddModal } from '../components/QuickAddModal';

const postColumns = {
  IDEA: [
    { id: 'post-1', label: 'Authority hook: 3 tax myths' },
    { id: 'post-2', label: 'Chaos to clarity client story' }
  ],
  SCRIPTED: [{ id: 'post-3', label: 'Revenue dashboard walkthrough' }],
  RECORDED: [{ id: 'post-4', label: 'Systems sprint teaser' }],
  POSTED: [{ id: 'post-5', label: 'Automation audit reel' }]
};

export default function PostModePage() {
  return (
    <main className="flex flex-col gap-8">
      <header className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-luxe">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Post Mode</p>
            <h1 className="mt-3 text-3xl font-semibold text-ivory">Content Command Bay</h1>
            <p className="mt-2 text-sm text-white/70">
              Execute a clean idea → published → repurposed cadence with precision.
            </p>
          </div>
          <QuickAddModal />
        </div>
        <div className="gold-divider" />
        <div className="flex flex-wrap gap-3 text-xs text-white/60">
          <span className="rounded-full border border-gold/30 px-3 py-1 text-gold">Focus: Authority</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Batching window: Today</span>
          <span className="rounded-full border border-white/10 px-3 py-1">Repurpose queue: 4</span>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gold">Content Pipeline</h2>
          <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
            Kanban: Royal Blue
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <BoardColumn title="Idea" items={postColumns.IDEA} accent="border-royal/60" />
          <BoardColumn title="Scripted" items={postColumns.SCRIPTED} accent="border-royal/70" />
          <BoardColumn title="Recorded" items={postColumns.RECORDED} accent="border-gold/40" />
          <BoardColumn title="Posted" items={postColumns.POSTED} accent="border-gold/60" />
        </div>
      </section>
    </main>
  );
}
