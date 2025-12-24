export default function Button({
  label,
  className,
  onClick,
  icon: Icon,
  labelStyle,
  iconStyle,
}) {
  return (
    <button
      className={`w-full p-3 px-3 flex items-center gap-2 text-[15px] text-text-white font-medium bg-btn-blue hover:bg-btn-blue-hover transition-all rounded-xl cursor-pointer ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className={`${iconStyle}`} />}
      <span className={`${labelStyle}`}>{label}</span>
    </button>
  );
}
