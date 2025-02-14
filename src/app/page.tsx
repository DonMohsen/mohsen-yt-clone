import { HydrateClient, trpc } from "@/trpc/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { ErrorBoundary } from "react-error-boundary"
import { Suspense } from "react";
import PageClient from "./client";

export default async function Home() {
  const data = await trpc.hello.prefetch({ text: "mohsenserver" });
  return (
    <HydrateClient>
      <UserButton />
      <Suspense fallback={<p>Loading............</p>}>
        <ErrorBoundary fallback={<p>Error</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}