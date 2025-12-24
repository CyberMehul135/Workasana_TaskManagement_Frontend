export default function DashboardStatCard({
  title,
  value,
  icon: Icon,
  iconStyle,
}) {
  return (
    <div className="p-5 flex items-center gap-4 max-sm:gap-2 bg-surface-white rounded-xl border border-border-primary">
      <Icon className={`box-content p-3 rounded-xl ${iconStyle}`} />
      <div>
        <h3 className="text-sm text-text-primary">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
