import './App.css';
import { Sidebar } from './Components/Sidebar';
import { MainDashboard } from './Components/MainDashboard/MainDashboard';
function App() {
  return (
    <>
      <div className="dashBoardApp">
        <div className="dashBoardGlass">
          <Sidebar/>
          <MainDashboard/>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
