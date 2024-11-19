"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getToken, removeToken } from "../utils/auth";

const Dashboard = () => {
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      router.push("/");
    }
  }, [router]);

  const handleLogout = () => {
    removeToken();
    router.push("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
