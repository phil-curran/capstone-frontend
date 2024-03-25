import { Flex, Spacer } from "@chakra-ui/react";
import SidebarButton from "../Sidebar/parts/SidebarButton";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <Flex>
        <Spacer />
        <SidebarButton position="" icon_name="logout" tooltip={"Log out"} />
      </Flex>
    </div>
  );
};

export default Topbar;
