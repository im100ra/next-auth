import { Button } from "@/components/ui/button";
import { PATHS } from "@/lib/paths";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-dvh flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">صفحه اصلی</h1>
      <div className="flex gap-4 mt-4">
        <Link href={PATHS.LOGIN}>
          <Button className="px-6 py-2">ورود</Button>
        </Link>
        <Link href={PATHS.DASHBOARD}>
          <Button variant="secondary" className="px-6 py-2">
            داشبورد
          </Button>
        </Link>
      </div>
    </div>
  );
}
