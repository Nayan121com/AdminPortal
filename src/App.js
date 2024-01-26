import './App.css';
import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <>
      <div className="dashBoardApp">
        <div className="dashBoardGlass">
          <Sidebar/>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
