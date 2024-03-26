import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default Dashboard;
