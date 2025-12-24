export default function StatusBadge({ status, className }) {
  return (
    <div
      className={`text-xs py-1 px-3 font-medium rounded-2xl ${className} ${
        status === "In Progress"
          ? "bg-surface-yellow-400 text-text-yellow-400"
          : status === "Completed"
          ? "bg-surface-green-400 text-text-green-400"
          : status === "To Do"
          ? "bg-surface-gray-400 text-text-black-400"
          : status === "Blocked" && "bg-surface-red-400 text-text-red-400"
      }`}
    >
      {status}
    </div>
  );
}
