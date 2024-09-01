import { currentUser } from "@/lib/auth";

import MainDashboard from "@/components/dashboard/MainDashboard";
import AuthScreen from "@/components/auth/AuthScreen";

export default async function Home() {
  const user = await currentUser();

  if (user) {
    return <MainDashboard />;
  }

  return <AuthScreen />;
}
