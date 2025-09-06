"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isValidIranPhone } from "@/lib/validation";
import { setUser } from "@/lib/auth";
import type { IRandomUserResponse } from "@/types/randomuser";
import { PATHS } from "@/lib/paths";
import { normalizeDigits } from "@/lib/normalize";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidIranPhone(phone)) {
      setError(
        "شماره موبایل معتبر نیست. مثال: 09xxxxxxxxx یا +989xxxxxxxxx یا 00989xxxxxxxxx"
      );
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      if (!res.ok) throw new Error("API request failed");
      const data = (await res.json()) as IRandomUserResponse;

      const r = data.results?.[0];
      if (!r) throw new Error("No user in response");

      const fullName = `${r.name.first} ${r.name.last}`;
      setUser({
        fullName,
        email: r.email,
        avatar: r.picture.large,
        phone,
        loggedAt: new Date().toISOString(),
      });

      router.push(PATHS.DASHBOARD);
    } catch (err) {
      console.error(err);
      setError("خطا در دریافت اطلاعات کاربر. دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  const handleNumberConversion = (e: React.ChangeEvent<HTMLInputElement>) => {
    const convertedValue = normalizeDigits(e.target.value);
    e.target.value = convertedValue;
    setPhone(convertedValue);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border  p-6 shadow-xl backdrop-blur-sm">
      <h1 className="mb-1 text-2xl font-bold ">ورود</h1>
      <p className="mb-6 text-sm leading-6">
        برای ادامه، شماره موبایل خود را وارد کنید.
      </p>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="grid gap-2">
          <Label htmlFor="phone">شماره موبایل</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="مثال: 989123456789"
            inputMode="tel"
            autoComplete="tel"
            value={phone}
            onChange={handleNumberConversion}
            aria-invalid={!!error}
            aria-describedby={error ? "phone-error" : undefined}
            className="placeholder:text-slate-500  focus-visible:ring-2 focus-visible:ring-cyan-400"
          />
          {error && (
            <p id="phone-error" className="text-sm text-rose-400">
              {error}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          aria-busy={loading}
          aria-live="polite"
        >
          {loading ? "در حال ورود…" : "ورود"}
        </Button>
      </form>
    </div>
  );
}
