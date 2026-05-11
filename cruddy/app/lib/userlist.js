// app/(Users)/users/UserList.jsx — client only, NO mongoose imports
"use client";
import Loading from "@/app/lib/load";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UserList({ user }) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false)

  async function handleDelete(id) {
    setDeleting(true)
    try {
      const res = await fetch(`/api/Users/${id}`, { method: "DELETE"});
      if (res.ok) {
        router.refresh();
        console.log("User deleted successfully");
        res.json()
        setDeleting(false);
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
      setDeleting(false);
  }

  return (
    <div className="flex flex-col bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold flex-shrink-0">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <div>
          <Link href={`users/${user._id.toString()}`} className="text-sm font-semibold text-gray-900">
            {user.name}
          </Link>
          <p className="text-xs text-gray-400">{user.profession}</p>
        </div>
      </div>
      <hr className="border-gray-100 mb-4" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-gray-400">Age</span>
          <span className="text-sm text-gray-700 font-medium">{user.age}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wide text-gray-400">Married</span>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            user.isMarried ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"
          }`}>
            {user.isMarried ? "Yes" : "No"}
          </span>
        </div>
      </div>
      <hr className="border-gray-100 my-4" />
      <button
        onClick={() => handleDelete(user._id)}
        className="w-full text-xs font-medium text-red-400 border border-red-100 rounded-lg py-1.5 hover:bg-red-50 hover:text-red-600 transition-colors"
      >
        Delete
      </button>
      {
        deleting ? <Loading /> : null
      }
    </div>
  );
}