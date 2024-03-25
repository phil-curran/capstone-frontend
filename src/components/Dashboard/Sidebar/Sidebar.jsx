import "./sidebar.css";

import SidebarButton from "./parts/SidebarButton";

const Shell = () => {
  return (
    <div className="sidebar">
      <SidebarButton position="one" icon_name="list_alt" />
      <SidebarButton position="two" icon_name="sleep_score" />
      <SidebarButton position="three" icon_name="monitor_heart" />
    </div>
  );
};

export default Shell;
