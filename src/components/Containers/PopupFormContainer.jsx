import { X } from "lucide-react";
import Button from "../Buttons/Button";

export default function PopupFormContainer({
  isVisible,
  children,
  onSubmit,
  mainStyle,
  title,
  onCloseBtnClick,
  submitBtnLabel,
  loading,
}) {
  return (
    <form
      className={`fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full flex justify-center items-center px-3 bg-black/60 z-20 ${
        isVisible ? " scale-100" : " scale-0"
      }`}
      onSubmit={onSubmit}
    >
      <div
        className={`bg-surface-white border border-border-primary w-[500px] rounded-lg overflow-hidden `}
      >
        {/* Header */}
        <div className="sticky top-0 px-6 py-6 border-b border-border-primary flex items-center justify-between bg-surface-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <X
            className="w-5 hover:text-text-red-400 hover:bg-surface-red-400 p-1 box-content rounded-lg cursor-pointer"
            onClick={onCloseBtnClick}
          />
        </div>

        {/* Main */}
        <div
          className={`max-h-[350px] overflow-y-auto custom-scrollbar px-6 py-4 flex flex-col gap-3 ${mainStyle}`}
        >
          {children}
        </div>

        {/* Footer */}
        <div className="p-5 bg-surface-white border-t border-border-primary">
          <Button
            label={loading ? "Loading..." : submitBtnLabel}
            className="justify-center"
          />
        </div>
      </div>
    </form>
  );
}
