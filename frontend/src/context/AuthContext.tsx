import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

type AuthUserType = {
  id: string;
  fullName: string;
  email: string;
  profilePic: string;
  gender: string;
};

// Create Context
const AuthContext = createContext<{
  authUser: AuthUserType | null;
  setAuthUser: Dispatch<SetStateAction<AuthUserType | null>>;
  isLoading: boolean;
}>({
  authUser: null,
  setAuthUser: () => {},
  isLoading: true,
});

// Use context hook
export const useAuthContext = () => {
  return useContext(AuthContext);
};

// Provide Context
export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<AuthUserType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAuthUser = async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error);
        }
        setAuthUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isLoading,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
