"use client";

import { useAuthStore } from "@/store/store";
import { redirect } from "next/navigation";
import React from "react";

function SignUp() {
  const user = useAuthStore((state) => state.user);
  if (user.isLoggedIn) redirect("/dashboard");
  return <div>SignUp</div>;
}

export default SignUp;
