import { ChevronDown } from "lucide-react";

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  firstOption,
  options,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm text-text-black-100 font-medium tracking-wider"
      >
        {label}
      </label>
      <div className={`relative ${label && "mt-2"}`}>
        <select
          className="w-full min-w-[130px] text-sm text-text-black-400 outline-none border border-[#E5E7EB] py-2 px-3 rounded-lg appearance-none bg-surface-primary cursor-pointer"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required
        >
          <option value="">{firstOption}</option>
          {options &&
            options.length > 0 &&
            options.map((option) => (
              <option key={option._id} value={option._id}>
                {option.name || option.teamName}
              </option>
            ))}
        </select>
        <ChevronDown className="absolute top-1/2 right-3 -translate-y-1/2 w-5 pointer-events-none" />
      </div>
    </div>
  );
}
