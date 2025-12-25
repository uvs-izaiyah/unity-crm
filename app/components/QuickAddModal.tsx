'use client';

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
        className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white shadow"
      >
        Quick Add
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Quick Add</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
              >
                Close
              </button>
            </div>
            <p className="mt-2 text-sm text-slate-500">
              Capture ideas fast. Choose a template or type your own.
            </p>
            <div className="mt-4 space-y-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-left text-sm text-slate-700"
                >
                  {preset}
                </button>
              ))}
            </div>
            <textarea
              placeholder="Type a custom entry..."
              className="mt-4 w-full rounded-xl border border-slate-200 p-3 text-sm"
              rows={3}
            />
            <button
              type="button"
              className="mt-4 w-full rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white"
            >
              Save to Inbox
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
