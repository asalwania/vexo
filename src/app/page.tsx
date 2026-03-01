import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";

export default async function Page() {
  const users = await prisma.user.findMany();
  console.log(users);
  return (
    <div className="flex items-center justify-center h-screen">
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
