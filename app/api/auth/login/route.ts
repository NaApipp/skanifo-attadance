import { NextResponse } from "next/server";
import { MOCK_USERS } from "@/app/lib/mockUsers";
import { signToken } from "@/app/lib/auth";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const username = body?.username ?? "";
  const password = body?.password ?? "";

  const user = MOCK_USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return NextResponse.json(
      { message: "username atau password salah" },
      { status: 401 }
    );
  }

  const token = signToken({
    userId: user.id,
    username: user.username,
    role: user.role,
  });

  const res = NextResponse.json({
    message: "Login berhasil",
    user: {
      username: user.username,
      role: user.role,
    },
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });

  return res;
}
