import { Navigate } from "react-router-dom";
import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";
import { useAuthContext } from "../context/AuthContext";

const Home = () => {
  const { authUser, setAuthUser, isLoading } = useAuthContext();

  if (!authUser) return <Navigate to={"/login"} />;
  return (
    <div className="flex h-[80vh] w-full md:max-w-screen-md md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
