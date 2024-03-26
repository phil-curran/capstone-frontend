import { Flex, Spacer } from "@chakra-ui/react";
import { useLogout } from "../../../hooks/useLogout";
import SidebarButton from "../Sidebar/parts/SidebarButton";
import "./topbar.css";

const Topbar = () => {
  // destructure logout function from hook
  const { logout } = useLogout();

  // click handler for logout button
  const handleLogout = () => {
    logout();
  };

  return (
    <div className="topbar">
      <Flex>
        <Spacer />
        <SidebarButton
          onClick={handleLogout}
          position=""
          icon_name="logout"
          tooltip={"Log out"}
        />
      </Flex>
    </div>
  );
};

export default Topbar;
