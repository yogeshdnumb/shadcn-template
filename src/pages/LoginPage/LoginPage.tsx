import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  FaEnvelope,
  FaFacebookF,
  FaGithubAlt,
  FaGoogle,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const buttonData = [
  {
    name: "Google",
    icon: FaGoogle,
    link: `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
  },
  {
    name: "Github",
    icon: FaGithubAlt,
    link: `${import.meta.env.VITE_BACKEND_URL}/auth/github`,
  },
  {
    name: "Facebook",
    icon: FaFacebookF,
    link: `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `${import.meta.env.VITE_BACKEND_URL}/auth/google`,
  },
];

export default function LoginPage() {
  return (
    <div>
      <p className="text-3xl text-center mb-5 font-medium ">Login to Website</p>
      <div className="max-w-80 flex flex-col gap-3 mx-auto">
        {buttonData.map((item) => {
          return (
            <Button className="text-md w-full" variant="outline" asChild>
              <Link to={item.link}>
                <item.icon />
                <span>Continue with {item.name}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
