import Router from "./Router";
import ColorSchemeProvider from "./providers/ColorSchemeProvider";
import AuthProvider from "./providers/AuthProvider";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { authContext } from "./contexts/authContext";
import { api } from "./utils/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState<null | unknown>();
  // const navigate = useNavigate();
  useEffect(() => {
    async function get() {
      try {
        const response = await api.get("/auth/user");
        console.log(response);

        setUser({ ...response.data });

        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        if (error.response.status === 401) {
          setUser(null);
        } else setError(error);

        // navigate("/login");
      } finally {
        setIsLoading(false);
      }
    }
    get();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="">
      <authContext.Provider value={{ user, setUser }}>
        <ReactQueryDevtools />

        <ColorSchemeProvider>
          <Toaster richColors />
          <Router />
        </ColorSchemeProvider>
      </authContext.Provider>
    </div>
  );
}
