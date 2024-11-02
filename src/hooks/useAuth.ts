import { authContext } from "@/contexts/authContext";
import { useContext } from "react";

export default function useAuth() {
  return useContext(authContext);
}
