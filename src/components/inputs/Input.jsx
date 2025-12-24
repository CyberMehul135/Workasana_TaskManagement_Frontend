export default function Input({
  label,
  type,
  id,
  name,
  value,
  onChange,
  icon: Icon,
  placeholder,
}) {
  return (
    <div className="mt-2">
      <label
        htmlFor={id}
        className="text-sm text-text-black-100 font-medium tracking-wider"
      >
        {label && label}
      </label>
      <div className="w-full h-10 py-2 px-3 mt-2 flex items-center gap-2 bg-surface-primary border border-border-primary rounded-lg focus-within:outline-2 focus-within:outline-text-blue-400 focus-within:outline-offset-2">
        {Icon && <Icon />}
        <input
          className="w-full border-none outline-none text-[15px] text-text-black-400"
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}
