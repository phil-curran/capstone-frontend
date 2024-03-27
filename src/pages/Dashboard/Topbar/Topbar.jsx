import { Flex, Spacer } from "@chakra-ui/react";
import { useLogout } from "../../../hooks/useLogout.js";
import SidebarButton from "../Sidebar/parts/SidebarButton";
import "./topbar.css";

const Topbar = () => {
  // destructure logout function from hook
  const { logout } = useLogout();

  // click handler for logout button
  const handleLogout = () => {
    console.log("logging out");
    logout();
  };

  return (
    <div className="topbar">
      <Flex>
        <Spacer />
        <div onClick={handleLogout}>
          <SidebarButton position="" icon_name="logout" tooltip={"Log out"} />
        </div>
      </Flex>
    </div>
  );
};

export default Topbar;
