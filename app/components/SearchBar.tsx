'use client';

import { Search } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === '/') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-luxe">
      <Search size={16} className="text-gold" />
      <input
        ref={inputRef}
        type="text"
        placeholder="Search contacts, deals, tasks"
        className="w-56 bg-transparent text-sm text-ivory outline-none placeholder:text-white/50"
      />
      <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/60">/</span>
    </div>
  );
}
