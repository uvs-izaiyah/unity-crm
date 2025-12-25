import Link from 'next/link';
import {
  LayoutGrid,
  PenTool,
  BriefcaseBusiness,
  ClipboardList,
  ShieldCheck
} from 'lucide-react';

const navigation = [
  { label: 'Dashboard', href: '/', icon: LayoutGrid },
  { label: 'Post Mode', href: '/post-mode', icon: PenTool },
  { label: 'Sales Mode', href: '/sales-mode', icon: BriefcaseBusiness },
  { label: 'Delivery Mode', href: '/delivery-mode', icon: ClipboardList },
  { label: 'Admin Mode', href: '/admin-mode', icon: ShieldCheck }
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col gap-8 border-r border-white/10 bg-black/40 px-6 py-8">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Kingdom CEO</p>
        <h1 className="mt-2 text-2xl font-semibold text-ivory">Command Center</h1>
        <div className="mt-4 h-px bg-white/10" />
      </div>
      <nav className="flex flex-1 flex-col gap-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-3 rounded-2xl border border-transparent px-4 py-3 text-sm text-white/80 transition hover:border-gold/40 hover:bg-white/5 hover:text-ivory"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-gold transition group-hover:bg-gold/10">
                <Icon size={18} />
              </span>
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="rounded-2xl border border-gold/30 bg-gold/10 p-4 text-xs text-gold-light">
        <p className="font-semibold text-gold">Today&apos;s Focus</p>
        <p className="mt-2">Protect your attention. Lead with clarity.</p>
      </div>
    </aside>
  );
}
