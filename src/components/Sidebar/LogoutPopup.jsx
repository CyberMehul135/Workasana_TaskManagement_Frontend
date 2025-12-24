import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSidebarContext } from "../../contexts/SidebarContext";
import Logout from "../../assets/logout.svg?react";
import Button from "../Buttons/Button";

export default function LogoutPopup() {
  const { logoutPopup, setLogoutPopup } = useSidebarContext();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("adminToken");
    navigate("/login");
    setLogoutPopup(false);
  };

  return (
    <div
      className={`absolute  bg-surface-white border border-border-primary p-1 rounded-lg min-w-56 shadow-lg transition-all ${
        logoutPopup ? "scale-100 -top-[88%]" : "scale-0 -top-[30%]"
      }`}
    >
      <div
        className="flex items-center gap-3 py-1.5 px-2 cursor-pointer hover:bg-surface-blue-300 rounded-lg"
        onClick={() => {
          navigate("/settings");
          setLogoutPopup(false);
        }}
      >
        <Settings size={16} />
        <p className="text-[15px]">Account Setting</p>
      </div>
      <div className="my-1 border-b border-border-primary"></div>
      <div>
        <Button
          className="bg-surface-white! text-sm text-text-primary! hover:text-text-red-400! hover:bg-surface-red-400! text-start! px-2 py-2 rounded-md!"
          label="Logout"
          icon={Logout}
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}
