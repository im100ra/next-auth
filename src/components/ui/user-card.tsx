"use client";
import Image from "next/image";
import { Button } from "./button";
import { clearUser, StoredUser } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
type Props = StoredUser & {
  className?: string;
};

export function UserCard(user: Props) {
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
    <div
      className={cn(
        "lg:max-w-2xl max-w-11/12 w-full rounded-2xl border border-border bg-card p-4 sm:p-6 shadow-xl",
        user.className
      )}
      dir="rtl"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-start">
        <Image
          src={avatarSrc}
          alt={user?.fullName ?? "کاربر"}
          width={80}
          height={80}
          sizes="(max-width: 640px) 64px, 80px"
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover ring-2 ring-[color:var(--ring)]"
          unoptimized
        />
        <div className="text-center sm:text-right">
          <h1 className="text-xl sm:text-2xl font-semibold">
            خوش آمدی، {user?.fullName} 👋
          </h1>
          <p className="mt-1 text-sm text-muted-foreground break-all sm:break-normal">
            {user?.email}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-muted-foreground text-center sm:text-right">
          ورود با شماره:{" "}
          <span className="font-mono" dir="ltr">
            {user?.phone}
          </span>
        </div>

        <Button
          variant="default"
          onClick={logout}
          aria-label="خروج"
          className="w-full sm:w-auto"
        >
          خروج
        </Button>
      </div>
    </div>
  );
}
