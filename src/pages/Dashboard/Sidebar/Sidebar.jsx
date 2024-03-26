import { useEffect, useState } from "react";
import SidebarButton from "./parts/SidebarButton";
import Main from "../Main/Main";
import Checklist from "./Topics/Checklist";
import SleepTracking from "./Topics/SleepTracking";
import HeartRate from "./Topics/HeartRate";
import SpO2Monitoring from "./Topics/SpO2Monitoring";
import AccountSettings from "./Topics/AccountSettings";

import "./sidebar.css";

const Sidebar = () => {
  const [view, setView] = useState(null);

  const views = {
    Main: <Main />,
    Checklist: <Checklist />,
    SleepTracking: <SleepTracking />,
    HeartRate: <HeartRate />,
    SpO2Monitoring: <SpO2Monitoring />,
    AccountSettings: <AccountSettings />,
  };

  const handleClick = () => {
    console.log("is this thing on?");
  };

  return (
    <>
      <div className="sidebar">
        <SidebarButton
          position="one"
          icon_name="list_alt"
          tooltip={"Checklist"}
          name="Checklist"
          onClick={handleClick}
        />
        <SidebarButton
          position="two"
          icon_name="sleep_score"
          tooltip={"Sleep Tracking"}
          name="SleepTracking"
          onClick={() => handleClick("SleepTracking")}
        />
        <SidebarButton
          position="three"
          icon_name="monitor_heart"
          tooltip={"Heart Rate"}
          name="HeartRate"
          onClick={handleClick}
        />
        <SidebarButton
          position="four"
          icon_name="spo2"
          tooltip={"SpO2 Monitoring"}
          name="SpO2Monitoring"
          onClick={handleClick}
        />
        <SidebarButton
          position="account"
          icon_name="settings_applications"
          tooltip={"Account Settings"}
          name="AccountSettings"
          onClick={handleClick}
        />
      </div>
      <Main view={view} />
    </>
  );
};

export default Sidebar;
