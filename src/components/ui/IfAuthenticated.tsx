import useAuth from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function IfAuthenticated({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const { user } = useAuth();
  // console.log("user: ", user);

  useEffect(() => {
    if (user == null) {
      toast.warning("Please login first", { position: "top-right" });
      navigate("/login");
    }
  }, [navigate, user]);

  return children;
}
