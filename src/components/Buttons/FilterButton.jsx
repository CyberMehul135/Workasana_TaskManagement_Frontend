export default function FilterButton({ label, icon: Icon, onClick }) {
  return (
    <button
      className={`hidden max-sm:fixed bottom-8 right-6 font-medium w-fit rounded-full bg-surface-blue-400 text-text-primary border border-border-primary box-content max-sm:flex items-center gap-2 cursor-pointer active:scale-90 transition-all ${
        label ? "py-2 px-8 rounded-xl" : "py-4 px-4 rounded-full"
      }`}
      onClick={onClick}
    >
      {Icon && (
        <Icon
          className="size-5 text-text-white bg-inherit box-content"
          strokeWidth={1.5}
        />
      )}
      {label && (
        <span className="text-lg text-text-white font-semibold">{label}</span>
      )}
    </button>
  );
}
