import { BoardColumn } from './components/BoardColumn';
import { QuickAddModal } from './components/QuickAddModal';
import { SearchBar } from './components/SearchBar';
import { StatCard } from './components/StatCard';

const todayMoves = [
  'Review hot leads for follow-up',
  'Post "Chaos to Clarity" reel',
  'Send invoice for booked consult',
  'Update delivery checklist',
  'Record 15-min automation tip'
];

const hotLeads = [
  { id: 'lead-1', label: 'Maya Tran', meta: 'DM → call booked' },
  { id: 'lead-2', label: 'Theo James', meta: 'Replied to offer' },
  { id: 'lead-3', label: 'Ari Benton', meta: 'Needs proposal' }
];

const contentToPost = [
  { id: 'content-1', label: 'AI bookkeeping mini-lesson', meta: 'CTA: Academy' },
  { id: 'content-2', label: 'Faith + leadership story', meta: 'CTA: Clarity Compass' }
];

const contentPipeline = {
  IDEA: [
    { id: 'content-3', label: 'Automation audit checklist' },
    { id: 'content-4', label: 'Weekend CEO reset' }
  ],
  RECORDED: [{ id: 'content-5', label: 'Tax planning mini-sprint' }],
  POSTED: [{ id: 'content-6', label: 'Client win carousel' }]
const contentPipeline = {
  IDEA: [
    { id: 'content-1', label: 'AI bookkeeping mini-lesson' },
    { id: 'content-2', label: 'Faith + leadership story' }
  ],
  RECORDED: [{ id: 'content-3', label: 'Automation audit checklist' }],
  POSTED: [{ id: 'content-4', label: 'Client win carousel' }]
};

const dealsPipeline = {
  NEW: [
    { id: 'deal-1', label: 'Creator OS Bundle', meta: '$1,500' },
    { id: 'deal-2', label: 'Tax Strategy Sprint', meta: '$800' }
  ],
  BOOKED: [{ id: 'deal-3', label: 'Revenue Clarity Session', meta: '$350' }],
  PAID: [{ id: 'deal-4', label: 'Systems Sprint', meta: '$2,400' }]
};

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      <header className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-black/40 p-6 shadow-luxe">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Command Center CRM</p>
            <h1 className="mt-3 text-3xl font-semibold text-ivory">
              Kingdom CEO Command Center
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Lead with clarity. Execute daily moves across content, sales, and delivery.
            </p>
          </div>
          <QuickAddModal />
        </div>
        <div className="gold-divider" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Weekly revenue" value="$12,450" helper="+18% vs last week" />
          <StatCard title="Calls today" value="3" helper="1 booked, 2 prep" />
          <StatCard title="Content to post" value="2" helper="Repurpose queue in 48h" />
          <StatCard title="Hot follow-ups" value="7" helper="4 due today" />
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="luxe-panel p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gold">Today&apos;s 5 Moves</h2>
            <span className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
              Auto-generated 6am
            </span>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {todayMoves.map((move, index) => (
              <div
                key={move}
                className="rounded-2xl border border-gold/40 bg-black/60 p-4 text-sm text-ivory shadow-glow transition hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 text-sm font-semibold text-gold">
                    {index + 1}
                  </span>
                  <span>{move}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="luxe-panel p-6">
            <h2 className="text-lg font-semibold text-gold">Hot Leads</h2>
            <div className="mt-4 space-y-3">
              {hotLeads.map((lead) => (
                <div key={lead.id} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-sm font-semibold text-ivory">{lead.label}</p>
                  <p className="text-xs text-white/60">{lead.meta}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="luxe-panel p-6">
            <h2 className="text-lg font-semibold text-gold">Content to Post</h2>
            <div className="mt-4 space-y-3">
              {contentToPost.map((item) => (
                <div key={item.id} className="rounded-2xl border border-white/10 bg-black/60 p-4">
                  <p className="text-sm font-semibold text-ivory">{item.label}</p>
                  <p className="text-xs text-white/60">{item.meta}</p>
                </div>
              ))}
            </div>
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-10">
      <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand">Command Center CRM</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">
            Brain-friendly operations for your multi-brand empire
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-500">
            Track today&apos;s five moves, hot follow-ups, content ready to ship, and weekly money
            metrics in one place.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <SearchBar />
          <QuickAddModal />
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Weekly revenue" value="$12,450" helper="+18% vs last week" />
        <StatCard title="Calls today" value="3" helper="1 booked, 2 prep" />
        <StatCard title="Content to post" value="2" helper="Repurpose queue in 48h" />
        <StatCard title="Hot follow-ups" value="7" helper="4 due today" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Today&apos;s 5 Moves</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            {todayMoves.map((move, index) => (
              <li key={move} className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand/10 text-sm font-semibold text-brand">
                  {index + 1}
                </span>
                {move}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Hot Leads</h2>
          <div className="mt-4 space-y-3">
            {hotLeads.map((lead) => (
              <div key={lead.id} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">{lead.label}</p>
                <p className="text-xs text-slate-500">{lead.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gold">Post Mode</h2>
            <p className="text-xs text-white/60">Content pipeline focus</p>
          </div>
          <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
            Brain mode: POST MODE
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <BoardColumn title="Idea" items={contentPipeline.IDEA} accent="border-gold/30" />
          <BoardColumn title="Recorded" items={contentPipeline.RECORDED} accent="border-gold/50" />
          <BoardColumn title="Posted" items={contentPipeline.POSTED} accent="border-gold/70" />
          <h2 className="text-lg font-semibold text-slate-900">Content pipeline</h2>
          <p className="text-xs text-slate-500">Brain mode: POST MODE</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <BoardColumn title="Idea" items={contentPipeline.IDEA} />
          <BoardColumn title="Recorded" items={contentPipeline.RECORDED} />
          <BoardColumn title="Posted" items={contentPipeline.POSTED} />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gold">Sales Mode</h2>
            <p className="text-xs text-white/60">Deal pipeline focus</p>
          </div>
          <span className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
            Brain mode: SALES MODE
          </span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <BoardColumn title="New" items={dealsPipeline.NEW} accent="border-gold/30" />
          <BoardColumn title="Booked" items={dealsPipeline.BOOKED} accent="border-gold/50" />
          <BoardColumn title="Paid" items={dealsPipeline.PAID} accent="border-gold/70" />
          <h2 className="text-lg font-semibold text-slate-900">Deals pipeline</h2>
          <p className="text-xs text-slate-500">Brain mode: SALES MODE</p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          <BoardColumn title="New" items={dealsPipeline.NEW} />
          <BoardColumn title="Booked" items={dealsPipeline.BOOKED} />
          <BoardColumn title="Paid" items={dealsPipeline.PAID} />
        </div>
      </section>
    </main>
  );
}
