import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

type LoginInputs = {
  username: string;
  password: string;
};

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (inputs: LoginInputs) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setAuthUser(data);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}

export default useLogin;
