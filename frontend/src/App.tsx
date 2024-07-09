import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <AuthContextProvider>
        <Outlet />
        <Toaster />
      </AuthContextProvider>
    </div>
  );
}

export default App;
