import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifyToken } from "@/app/lib/auth";
export async function GET() {
  const cookieStore = await cookies(); // ⬅️ INI KUNCI
  const token = cookieStore.get("token")?.value;    
  
  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  try {
    const user = verifyToken(token);
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
