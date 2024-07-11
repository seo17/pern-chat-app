import { Outlet } from "react-router-dom";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { Toaster } from "react-hot-toast";
import SocketContextProvider from "./context/SocketContext";

function App() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <AuthContextProvider>
        <SocketContextProvider>
          <Outlet />
          <Toaster />
        </SocketContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
