"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = { label: string; href: string };

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Statistic Management", href: "/statistic" },
      { label: "Management Jadwal", href: "/manage-schedule" },
      { label: "Data Absensi", href: "/data-absensi" },
    ],
    []
  );

  // Tutup drawer saat pindah halaman (mobile)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Tutup drawer pakai ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Topbar (mobile only) */}
      <header className="sticky top-0 z-40 flex items-center gap-3 border-b bg-white px-4 py-3 md:hidden">
        <button
          type="button"
          aria-label="Open sidebar"
          className="rounded-lg border px-3 py-2 hover:bg-slate-50 active:scale-[0.99]"
          onClick={() => setOpen(true)}
        >
          {/* Hamburger icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="font-semibold text-slate-800">Hi [Admin]</div>
      </header>

      {/* Overlay (mobile only) */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={[
          "fixed left-0 top-0 z-50 h-full w-64 border-r bg-white",
          "transition-transform duration-200",
          // mobile: slide
          open ? "translate-x-0" : "-translate-x-full",
          // desktop: always visible
          "md:translate-x-0",
        ].join(" ")}
        aria-label="Sidebar"
      >
        <div className="flex h-14 items-center justify-between border-b px-4">

          {/* Close button (mobile only) */}
          <button
            type="button"
            aria-label="Close sidebar"
            className="rounded-lg border px-3 py-2 hover:bg-slate-50 md:hidden"
            onClick={() => setOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav className="p-3">
          <div className="mb-2 px-2 text-xs font-semibold uppercase text-slate-400">
            Menu
          </div>

          <ul className="space-y-1">
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block rounded-xl px-3 py-2 text-sm transition",
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-700 hover:bg-slate-100",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Optional footer */}
        <div className="absolute bottom-0 w-full border-t p-4 text-xs text-black cursor-pointer">
          {/* <ButtonLogout /> */}
        </div>
      </aside>

      {/* Main content: kasih padding kiri di desktop */}
      <main className="px-4 py-6 md:ml-64">{children}</main>
    </div>
  );
}
