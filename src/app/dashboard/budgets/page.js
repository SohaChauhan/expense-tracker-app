// ✅ src/app/dashboard/page.js (Server Component)
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import BudgetsPage from "@/components/BudgetsPage";
export default async function page() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  return <BudgetsPage user={session.user} />;
}
