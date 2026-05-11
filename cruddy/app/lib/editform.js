"use client"


import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function EditUserPage({ user }) {

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter(); 

 async function handleSubmit(e) {
    e.preventDefault(); // ✅ actually calls the method

    const formData = new FormData(e.target)

    setSaving(true);
    setError(null);

    try {
        const res = await fetch(`/api/Users/${user._id.toString()}`, { // ✅ awaited
            method: "PATCH",
            body: formData
        });

        if (res.ok) {
            router.refresh();
            router.push(`/users`);
        } else {
            setError("Failed to update user. Please try again.");
            console.log(res.statusText)
        }
    } catch (error) {
        console.error("Error updating user:", error);
        setError("Failed to update user. Please try again.");
    } finally {
        setSaving(false);
    }
}



    return (
         <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">

      {/* Banner + avatar */}
      <div className="h-20 bg-gray-100" />
      <div className="px-6 pb-6">
        <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-semibold -mt-8 border-4 border-white">
          {user.name.charAt(0).toUpperCase()}
        </div>
        <h1 className="text-lg font-semibold text-gray-900 mt-3 mb-0.5">{user.name}</h1>
        <p className="text-sm text-gray-400 mb-5">Editing profile</p>

        <hr className="border-gray-100 mb-5" />

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <p className="text-xs uppercase tracking-widest text-gray-400 font-medium -mb-1">
            Personal info
          </p>

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400">Full name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.name}
              required
              className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
            />
          </div>

          {/* Age + Profession */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Age</label>
              <input
                type="number"
                name="age"
                defaultValue={user.age}
                min="0"
                max="120"
                required
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Profession</label>
              <input
                type="text"
                name="profession"
                defaultValue={user.profession}
                required
                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Married toggle */}
          <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-gray-800">Married</span>
              <span className="text-xs text-gray-400">Marital status</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="isMarried"
                defaultChecked={user.isMarried}
                className="sr-only peer"
              />
              <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-emerald-500 transition-colors duration-200" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4" />
            </label>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-xs text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2 text-center">
              {error}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-2 mt-1">
            <Link
              href={`/users/${user._id}`}
              className="flex-1 text-center text-sm text-gray-500 border border-gray-200 rounded-lg py-2.5 hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 text-sm font-medium bg-gray-900 text-white rounded-lg px-5 py-2.5 hover:bg-gray-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {saving ? (
                <>
                  <svg className="animate-spin w-3.5 h-3.5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Saving...
                </>
              ) : "Save changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
    
