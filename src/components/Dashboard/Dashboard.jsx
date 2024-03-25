import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Topbar from "../Dashboard/Topbar/Topbar";
import Main from "../Dashboard/Main/Main";

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
