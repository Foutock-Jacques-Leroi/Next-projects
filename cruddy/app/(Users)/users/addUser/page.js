// app/users/new/page.jsx
"use client";

import { useRouter } from "next/navigation";

export const metadata = {
  title: "Add Users – Cruddy",
  description: "Add users in the fyjl user management system.",
};

export default function AddUserPage() {
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const res = await fetch("/api/Users", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
       console.log(await res.json());
      router.push("/users");
      router.refresh(); // re-fetch the users list
      console.log("hello")
    } else {
      console.error("Failed to create user");
      console.log(await res.json())
      console.log(res.status)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">

        <div className="mb-6">
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-1">
            User management
          </p>
          <h1 className="text-3xl italic text-gray-900">
            Add a new user
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-gray-200 rounded-xl p-7 flex flex-col gap-5 shadow-sm"
        >
          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-gray-500">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g. Jane Doe"
              required
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
            />
          </div>

          {/* Age + Profession */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="age" className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="28"
                min="0"
                max="120"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="profession" className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Profession
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                placeholder="e.g. Designer"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-100 transition"
              />
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Married toggle */}
          <div className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-medium text-gray-800">Married</span>
              <span className="text-xs text-gray-400">Marital status of this user</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" name="isMarried" className="sr-only peer" />
              <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-emerald-500 transition-colors duration-200" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 peer-checked:translate-x-4" />
            </label>
          </div>

          <hr className="border-gray-100" />

          {/* Actions */}
          <div className="flex gap-2.5 mt-1">
            <button
              type="button"
              onClick={() => router.push("/users")}
              className="flex items-center gap-1.5 text-sm text-gray-500 border border-gray-200 rounded-lg px-4 py-2.5 hover:bg-gray-50 hover:text-gray-800 transition"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white text-sm font-medium rounded-lg px-5 py-2.5 hover:bg-gray-700 active:scale-95 transition"
            >
              + Add user
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}