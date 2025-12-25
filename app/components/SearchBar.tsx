'use client';

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
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
      <span className="text-xs font-semibold text-slate-400">/</span>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search contacts, deals, tasks"
        className="w-48 bg-transparent text-sm text-slate-700 outline-none"
      />
    </div>
  );
}
