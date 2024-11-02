import { userType } from "@/types";
import { createContext } from "react";

export const authContext = createContext<userType>({});
