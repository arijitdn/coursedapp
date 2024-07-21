"use client";

import { useAuthStore } from "@/store/store";
import { redirect } from "next/navigation";
import React from "react";

function Login() {
  const user = useAuthStore((state) => state.user);
  if (user.isLoggedIn) redirect("/dashboard");

  return <div>Login</div>;
}

export default Login;
