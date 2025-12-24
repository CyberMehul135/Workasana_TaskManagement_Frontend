import { NavLink, useNavigate } from "react-router-dom";
import Brand from "../../assets/brandlogo.svg?react";
import Dashboard from "../../assets/dashboard.svg?react";
import File from "../../assets/file.svg?react";
import Task from "../../assets/task.svg?react";
import Team from "../../assets/users.svg?react";
import Report from "../../assets/report.svg?react";
import Setting from "../../assets/setting.svg?react";
import { useSidebarContext } from "../../contexts/SidebarContext";
import { ChevronUp, X } from "lucide-react";
import ProfileBadge from "../Badges/ProfileBadge";
import LogoutPopup from "./LogoutPopup";
import { useAuthContext } from "../../contexts/AuthContext.";

const NAV_ITEMS = [
  { id: 1, name: "Dashboard", path: "/", icon: Dashboard },
  { id: 2, name: "Projects", path: "/projects", icon: File },
  { id: 3, name: "Tasks", path: "/tasks", icon: Task },
  { id: 4, name: "Teams", path: "/teams", icon: Team },
  { id: 5, name: "Reports", path: "/reports", icon: Report },
  { id: 6, name: "Settings", path: "/settings", icon: Setting },
];

export default function Sidebar() {
  const { isSidebarVisible, setIsSidebarVisible, setLogoutPopup, logoutPopup } =
    useSidebarContext();
  const { user, userLoading, userError } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  return (
    <aside
      className={`w-64 max-lg:w-full h-screen flex flex-col max-lg:fixed bg-surface-white border border-border-primary transition-all z-20   
        ${
          isSidebarVisible ? "left-0 max-lg:left-0" : "left-0 max-lg:-left-full"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6  border-b border-border-primary">
        <div className="flex items-center gap-4 ">
          <Brand className="box-content size-5 p-2 rounded-xl bg-surface-blue-400" />
          <h2 className="text-[21px] font-semibold tracking-wider text-text-black">
            Workasana
          </h2>
        </div>
        <X
          className="hidden max-lg:block text-3xl text-text-primary hover:bg-surface-gray-400 box-content p-1 rounded-lg cursor-pointer"
          onClick={() => setIsSidebarVisible(false)}
        />
      </div>

      {/* Nav-Links */}
      <nav className="flex-1 p-4">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 py-2.5 px-4 rounded-md  cursor-pointer
                ${
                  isActive
                    ? "text-surface-blue-500 bg-surface-blue-300 "
                    : "text-text-primary bg-surface-white hover:bg-surface-gray-400 hover:text-text-black-400 hover:-translate-y-0.5 hover:transition-all duration-200"
                }`
                }
              >
                <item.icon />
                <p className=" text-[15px] font-semibold">{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-3 py-3 border-t border-border-primary flex justify-start relative">
        <LogoutPopup />
        <div
          className="flex items-center justify-center max-sm:justify-start gap-3 hover:bg-surface-blue-300 py-3 px-3 rounded-xl cursor-pointer"
          onClick={() => setLogoutPopup(!logoutPopup)}
        >
          <ProfileBadge
            user={{ name: user?.user?.name }}
            className="size-10 font-semibold"
          />
          <div className="">
            <p className="text-sm font-semibold">{user?.user?.name}</p>
            <p className="text-xs text-text-primary">{user?.user?.email}</p>
          </div>
          <ChevronUp className="text-text-primary" size={17} />
        </div>
      </div>
    </aside>
  );
}
