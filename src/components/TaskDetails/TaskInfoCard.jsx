export default function TaskInfoCard({ title, value, icon: Icon }) {
  return (
    <div className="p-4 flex gap-4 rounded-xl border border-border-primary">
      {Icon && (
        <Icon className="text-text-blue-400 box-content p-3 bg-surface-blue-300 rounded-xl" />
      )}
      <div>
        <p className="text-sm text-text-primary">{title}</p>
        <p className="text-base font-medium">{value}</p>
      </div>
    </div>
  );
}
