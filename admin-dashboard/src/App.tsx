import { Sidebar } from "./components/Sidebar/Sidebar";
import { DashboardView } from "./components/DashboardView/DashboardView";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div className="flex">
      <div className="basis-2/12 h-screen border">
        <Sidebar />
      </div>
      <div className="basis-10/12 h-screen border overflow-scroll">
        <DashboardView />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
