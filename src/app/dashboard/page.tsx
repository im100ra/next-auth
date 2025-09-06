"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, type StoredUser } from "@/lib/auth";
import { UserCard } from "@/components/ui/user-card";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.replace("/login");
      return;
    }
    setUser(u);
    setChecking(false);
  }, [router]);

  if (checking) {
    return (
      <div className="grid place-items-center text-foreground">
        در حال بارگذاری…
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      {user ? (
        <UserCard {...user} />
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold">خطا</h1>
          <p className="text-lg">کاربری یافت نشد.</p>
        </div>
      )}
    </div>
  );
}
