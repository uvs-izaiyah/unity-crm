'use client';

interface ShortcutOverlayProps {
  open: boolean;
  onClose: () => void;
}

const shortcuts = [
  { keys: '⌘ + K', label: 'Command palette' },
  { keys: '/', label: 'Search anything' },
  { keys: 'N', label: 'Quick add task' },
  { keys: 'G', label: 'Go to dashboard' }
];

export function ShortcutOverlay({ open, onClose }: ShortcutOverlayProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/80 p-6 text-ivory shadow-luxe">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gold">Keyboard Shortcuts</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70"
          >
            Close
          </button>
        </div>
        <div className="mt-4 space-y-3">
          {shortcuts.map((shortcut) => (
            <div
              key={shortcut.label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="text-sm text-white/80">{shortcut.label}</span>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-xs text-gold">
                {shortcut.keys}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
