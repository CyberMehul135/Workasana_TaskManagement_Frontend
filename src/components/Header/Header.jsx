import { Menu } from "lucide-react";
import Brand from "../../assets/brandlogo.svg?react";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { setIsSidebarVisible } = useSidebarContext();
  const pathName = window.location.pathname;
  const [pageName, setPageName] = useState("");

  const handlePageName = () => {
    setPageName(
      pathName == "/"
        ? "Dashboard"
        : pathName == "/projects"
        ? "Projects"
        : pathName == "/tasks"
        ? "Tasks"
        : pathName == "/teams"
        ? "Teams"
        : pathName == "/reports"
        ? "Reports"
        : pathName == "/settings" && "Settings"
    );
  };

  useEffect(() => {
    handlePageName();
  }, [pathName]);

  return (
    <header className="hidden z-10 px-8 py-3 max-sm:fixed top-0 w-full bg-surface-white max-lg:flex max-sm:text-xl max-sm:px-4 max-sm:h-20 items-center justify-between gap-5 h-16 font-semibold border border-border-primary">
      <div className="flex items-center gap-3">
        <Brand className="box-content px-3 py-2 w-5 bg-surface-blue-400 rounded-xl" />
        <h1 className="tracking-wider text-text-black-400">Workasana</h1>
      </div>
      <Menu
        className="w-5 max-sm:w-7 cursor-pointer"
        onClick={() => setIsSidebarVisible(true)}
      />
    </header>
  );
}
