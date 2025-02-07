'use client';

interface ShowAllButtonProps {
  onShowAll: () => void;
}

export function ShowAllButton({ onShowAll }: ShowAllButtonProps) {
  return (
    <div className="flex justify-center mt-12">
      <button
        onClick={onShowAll}
        className="rounded-2xl px-8 py-3 bg-[#ef2c00] text-white font-medium
                 transition-colors hover:bg-[#ff3c0a] focus:ring-2 
                 focus:ring-[#ef2c00] focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        Show All
      </button>
    </div>
  );
}