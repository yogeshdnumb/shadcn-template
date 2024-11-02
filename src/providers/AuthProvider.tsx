import { useEffect, useState } from "react";
import { authContext } from "@/contexts/authContext";
import { api } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <authContext.Provider value={{ user: data }}>
      {children}
    </authContext.Provider>
  );
}
