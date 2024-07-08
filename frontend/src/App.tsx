import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </div>
  );
}

export default App;
