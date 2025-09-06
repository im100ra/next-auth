"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getUser } from "@/lib/auth";
import { PATHS, PROTECTED_PATHS } from "@/lib/paths";

type Props = {
  children: React.ReactNode;
};

export default function AuthGate({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    const user = getUser();

    const isProtected = PROTECTED_PATHS.some((p) => pathname.startsWith(p));

    if (isProtected && !user) {
      router.replace(PATHS.LOGIN);
    } else {
      setAllowed(true);
    }
  }, [pathname, router]);

  if (!allowed) {
    return null;
  }

  return <>{children}</>;
}
