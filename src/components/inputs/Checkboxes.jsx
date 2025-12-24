export default function Checkboxes({
  label,
  value,
  name,
  onChange,
  formValuelist,
}) {
  return (
    <div>
      <label
        className={`w-fit text-sm px-2.5 py-1 cursor-pointer rounded-xl ${
          formValuelist.includes(value + "")
            ? "bg-surface-blue-400 text-text-white border-none"
            : "bg-surface-white text-text-black-400 hover:bg-surface-gray-400 border border-border-primary"
        }`}
      >
        <input
          className="appearance-none"
          type="checkbox"
          value={value}
          name={name}
          onChange={onChange}
        />{" "}
        {label}
      </label>
    </div>
  );
}
