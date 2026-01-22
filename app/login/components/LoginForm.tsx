"use client";

// Login System
import { useRouter } from "next/navigation";
import { useState } from "react";

// Modal Login
import FailedLogin from "@/app/components/failedLogin";
import ForgotPassword from "@/app/components/forgotPassword";

export default function LoginForm() {
  // Variable System
    const router = useRouter();

    // Variable Modal
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [failedOpen, setFailedOpen] = useState(false);
  const [failedMsg, setFailedMsg] = useState("");



  // Login Functiob
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit() {
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const data = await res.json();
        // tampilkan modal
        setFailedMsg(data?.error ?? "Login gagal");
        setFailedOpen(true);
        return;
    }

    router.push("/dashboard");
  }



  return (
    <>
      <div className="w-80 rounded-lg shadow h-auto p-6 bg-white relative overflow-hidden">
        <div className="flex flex-col justify-center items-center space-y-2">
          <h2 className="text-2xl font-semibold text-[#39568E] font-poppins">
            Login Here
          </h2>
          <p className="text-[#4C72BD99] text-center font-poppins font-medium">
            Buatlah waktumu lebih disiplin! Login untuk mengakses aplikasi
            <span className="font-bold"> Skanifo Attendance.</span>
          </p>
        </div>
        <form className="w-full mt-4 space-y-3">
          <div>
            <input
              className="outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Masukkan NIP anda"
              id="identifier"
              name="identifier"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="outline-none border border-2 border-[#4C72BD] rounded-md px-2 py-1 text-slate-500 w-full focus:border-blue-300"
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end">
            <a
              className="text-blue-500 font-medium hover:underline"
              onClick={() => setOpen(true)}
              href="#"
            >
              Lupa Password
            </a>
            <ForgotPassword open={open} onClose={() => setOpen(false)} />
          </div>
          <button
            className="w-full justify-center py-1 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-md text-white ring-2 cursor-pointer"
            id="login"  
            name="login"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "loading..." : "login"}
          </button>
        </form>
      </div>
      <FailedLogin
        open={failedOpen}
        message={failedMsg}
        onClose={() => setFailedOpen(false)}
      />
    </>
  );
}
