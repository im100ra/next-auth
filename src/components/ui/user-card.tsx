"use client";
import Image from "next/image";
import { Button } from "./button";
import { clearUser, StoredUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export function UserCard(user: StoredUser) {
  const router = useRouter();

  const logout = () => {
    clearUser();
    router.replace("/login");
  };

  const avatarSrc =
    user?.avatar ||
    "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='128' height='128'><rect width='100%' height='100%' fill='rgb(30,30,30)'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='42'>👤</text></svg>`
      );

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-xl">
      <div className="flex items-center gap-4">
        <Image
          src={avatarSrc}
          alt={user?.name ?? "کاربر"}
          width={64}
          height={64}
          className="rounded-full object-cover ring-2 ring-[color:var(--ring)]"
          unoptimized
        />
        <div className="text-right">
          <h1 className="text-2xl font-semibold">خوش آمدی، {user?.name} 👋</h1>
          <p className="text-sm text-muted-foreground">{user?.email}</p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          ورود با شماره:{" "}
          <span className="font-mono" dir="ltr">
            {user?.phone}
          </span>
        </div>
        <Button variant="default" onClick={logout} aria-label="خروج">
          خروج
        </Button>
      </div>
    </div>
  );
}
