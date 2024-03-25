import "./sidebar.css";

import SidebarButton from "./parts/SidebarButton";

const Shell = () => {
  return (
    <div className="sidebar">
      <SidebarButton
        position="one"
        icon_name="list_alt"
        tooltip={"Checklist"}
      />
      <SidebarButton
        position="two"
        icon_name="sleep_score"
        tooltip={"Sleep Tracking"}
      />
      <SidebarButton
        position="three"
        icon_name="monitor_heart"
        tooltip={"Heart Rate"}
      />
      <SidebarButton
        position="four"
        icon_name="spo2"
        tooltip={"SpO2 Monitoring"}
      />
      <SidebarButton
        position="account"
        icon_name="settings_applications"
        tooltip={"Account Settings"}
      />
    </div>
  );
};

export default Shell;
