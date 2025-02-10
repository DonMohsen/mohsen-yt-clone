import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
   <div className="bg-violet-100 flex items-center justify-center ">
    <UserButton/>
    Hi
   </div>
  );
}