import { trpc } from "@/trpc/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default async function Home() {
  const data= await trpc.hello({text:"mohsenserver"})
  return (
   <div className="bg-violet-100 flex items-center justify-center min-h-9 ">
    <UserButton/>
    Hi {data.greeting}
   </div>
  );
}