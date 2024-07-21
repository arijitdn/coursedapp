"use client";

import { useAuthStore } from "@/store/store";
import { redirect } from "next/navigation";
import React from "react";

function Dashboard() {
  const user = useAuthStore((state) => state.user);
  if (!user.isLoggedIn) redirect("/login");
  return <div>Dashboard</div>;
}

export default Dashboard;
