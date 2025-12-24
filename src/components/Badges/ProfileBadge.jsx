export default function ProfileBadge({ user, extraUsers, className, index }) {
  return (
    <div
      className={`size-8 border bg-surface-blue-300 border-border-blue-400 rounded-full flex justify-center items-center text-text-blue-400 text-sm ${className}`}
    >
      {user && user?.name?.slice(0, 1).toUpperCase()}
      {extraUsers && <span>+{extraUsers}</span>}
    </div>
  );
}
