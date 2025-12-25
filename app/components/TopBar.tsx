'use client';

import { Bell, ChevronDown, Command } from 'lucide-react';
import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { ShortcutOverlay } from './ShortcutOverlay';

export function TopBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 bg-black/40 px-8 py-4">
      <SearchBar />
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-full border border-gold/30 bg-white/5 px-4 py-2 text-xs text-gold transition hover:bg-gold/10"
        >
          <Command size={14} />
          Shortcuts
        </button>
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gold"
        >
          <Bell size={16} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-gold" />
        </button>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-ivory"
        >
          <span className="h-8 w-8 rounded-full bg-gold/20 text-center text-xs leading-8 text-gold">AC</span>
          Ava Carter
          <ChevronDown size={14} />
        </button>
      </div>
      <ShortcutOverlay open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
