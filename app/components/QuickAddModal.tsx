'use client';

import { Sparkles } from 'lucide-react';
import { useState } from 'react';

const presets = [
  'Add a lead from Instagram',
  'Log a call recap',
  'Create a new content idea',
  'Schedule a follow-up'
];

export function QuickAddModal() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="theme-gold-gradient inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
      >
        <Sparkles size={16} />
        Quick Add
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="theme-glass w-full max-w-md rounded-2xl border border-white/10 p-6 shadow-luxe">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gold">Quick Add</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-sm text-white/70">
              Capture ideas fast. Choose a template or type your own.
            </p>
            <div className="mt-4 space-y-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm text-white/80 transition hover:border-gold/40 hover:text-gold-light"
                >
                  {preset}
                </button>
              ))}
            </div>
            <textarea
              placeholder="Type a custom entry..."
              className="mt-4 w-full rounded-xl border border-white/10 bg-black/50 p-3 text-sm text-ivory placeholder:text-white/50"
              rows={3}
            />
            <button
              type="button"
              className="theme-gold-gradient mt-4 w-full rounded-xl border border-gold/40 px-4 py-2 text-sm font-semibold text-black shadow-glow"
            >
              Save to Inbox
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
