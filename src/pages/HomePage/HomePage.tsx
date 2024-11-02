import useAuth from "@/hooks/useAuth";

export default function HomePage() {
  //   const { colorScheme } = useColorScheme();
  const { user } = useAuth();
  return (
    <div>
      <p className="text-center text-3xl">
        {user ? `${user.username} is logged in` : "You are not logged in"}
      </p>
      <p>{JSON.stringify(user) || "no user"}</p>
    </div>
  );
}
