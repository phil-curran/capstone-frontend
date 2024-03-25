import Sidebar from "./Sidebar/Sidebar";
import Topbar from "./Topbar/Topbar";
import Main from "./Main/Main";

import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Topbar />
      <Main />
    </div>
  );
};

export default Dashboard;
