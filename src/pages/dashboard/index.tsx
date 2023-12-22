import { useRouter } from "next/router";
import { useEffect } from "react";

function Dashboard() {
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard/home");
  }, [router]);
}

export default Dashboard;
