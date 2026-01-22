"use client";

import { useRouter } from "next/navigation";

export default function ButtonLogout() {
    const router = useRouter();

    // Import Handle Logout
    async function handleLogout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    router.push("/login");
  }

    return (
        <>
            <button className="p-2 bg-red-500 text-white" onClick={handleLogout}>Logout</button>
        </>
    )
}