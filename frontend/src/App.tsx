import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Outlet />
    </div>
  );
}

export default App;
