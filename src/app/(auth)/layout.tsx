"use client";
import { getUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LeftSide } from "./left-side";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    const u = getUser();
    if (u) router.replace("/dashboard");
  }, [router]);

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="flex-1 px-5 flex justify-center">
        <div className="w-full max-w-md p-6">{children}</div>
      </div>
      <LeftSide />
    </div>
  );
}
