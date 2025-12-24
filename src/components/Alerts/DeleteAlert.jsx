import Button from "../Buttons/Button";

export default function DeleteAlert({
  isVisible,
  name,
  onClickCancel,
  onClickDelete,
}) {
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex justify-center items-center px-3 bg-black/60 z-20 ${
        isVisible ? " scale-100" : " scale-0"
      }`}
    >
      <div
        className={`bg-surface-white border border-border-primary w-[500px] rounded-lg overflow-hidden p-6 `}
      >
        <h2 className="text-lg font-semibold">Delete Project</h2>
        <p className="text-sm mt-2 text-text-primary font-semibold">
          Are you sure you want to delete "{name}"? This action cannot be undone
          and will remove all associated tasks.
        </p>
        <div className="flex justify-end gap-2 mt-4">
          <Button
            label="Cancel"
            className="w-fit! px-5! py-2 bg-surface-gray-300 border border-border-primary text-text-black-400! hover:text-text-white!"
            onClick={onClickCancel}
          />
          <Button
            label="Delete"
            className="w-fit! px-5! py-2 bg-red-500 text-text-white! hover:bg-red-400"
            onClick={onClickDelete}
          />
        </div>
      </div>
    </div>
  );
}
