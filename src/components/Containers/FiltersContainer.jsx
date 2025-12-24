import { Funnel, X } from "lucide-react";
import { useFiltersContext } from "../../contexts/FiltersContext";

export default function FiltersContainer({ children }) {
  const {
    isFiltersVisible,
    setIsFiltersVisible,
    filters,
    handleFilterOnChange,
  } = useFiltersContext();
  return (
    <div
      className={`p-4 bg-surface-white mt-8 mb-6 border border-border-primary rounded-lg flex gap-5 max-sm:gap-7 max-sm:flex-col max-sm:fixed max-sm:w-[95%] max-sm:left-1/2 max-sm:-translate-x-1/2 transition-all duration-700 max-sm:h-full ${
        isFiltersVisible
          ? "max-sm:top-20"
          : "max-sm:z-10 max-sm:top-20 max-sm:translate-y-200"
      }`}
    >
      <div className="flex items-center gap-3 relative">
        <Funnel className="w-4 max-sm:w-5 text-text-primary" />
        <span className="text-sm max-sm:text-lg text-text-primary font-medium">
          Filter :
        </span>
        <X
          className="hidden max-sm:block absolute right-2.5 w-5 cursor-pointer text-text-primary"
          onClick={() => setIsFiltersVisible(false)}
        />
      </div>
      <div className="flex gap-5 max-sm:flex-col">{children}</div>
    </div>
  );
}
