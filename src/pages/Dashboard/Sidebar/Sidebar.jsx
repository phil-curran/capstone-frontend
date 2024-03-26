import { Link } from "react-router-dom";
import SidebarButton from "./parts/SidebarButton";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Link className="zero" to="/dashboard">
          <SidebarButton
            position="zero"
            icon_name="dashboard"
            tooltip={"Home"}
          />
        </Link>
        <Link className="one" to="/dashboard/checklist">
          <SidebarButton
            position="one"
            icon_name="list_alt"
            tooltip={"Checklist"}
          />
        </Link>
        <Link className="two" to="/dashboard/sleep-tracking">
          <SidebarButton
            position="two"
            icon_name="sleep_score"
            tooltip={"Sleep Tracking"}
          />
        </Link>
        <Link className="three" to="/dashboard/heart-rate">
          <SidebarButton
            position="three"
            icon_name="monitor_heart"
            tooltip={"Heart Rate"}
          />
        </Link>
        <Link className="four" to="/dashboard/spo2-monitoring">
          <SidebarButton
            position="four"
            icon_name="spo2"
            tooltip={"SpO2 Monitoring"}
          />
        </Link>
        <SidebarButton
          position="account"
          icon_name="settings_applications"
          tooltip={"Account Settings"}
        />
      </div>
    </>
  );
};

export default Sidebar;
