import { LucideIceCream } from "lucide-react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <LucideIceCream />
    </Link>
  );
}
