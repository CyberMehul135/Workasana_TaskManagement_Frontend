export default function TagBadge({ tag, className }) {
  return (
    <div
      className={`text-sm py-1 px-4 text-text-blue-400 bg-surface-blue-300 font-semibold rounded-2xl border border-border-blue-400 ${className}`}
    >
      {tag}
    </div>
  );
}
